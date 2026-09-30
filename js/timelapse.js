/* Buy Land In Peru: "machete to home" hero + scroll time-lapse on the build progress page.
   Photos, dates and captions are read from the timeline further down the page. */
(function () {
  var box = document.querySelector(".mth");
  if (!box) return;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = document.documentElement.lang || "en";
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function smooth(x) { return x * x * (3 - 2 * x); }

  /* ---- leaves that part as you scroll ---- */
  var svg = box.querySelector(".mth-leaves"), LEAF = [], s = 11;
  function r() { s = (s * 16807) % 2147483647; return s / 2147483647; }
  var html = "", cols = ["#1d5a34", "#2e6b45", "#3f8453", "#245c3a", "#4f9a5f"];
  for (var i = 0; i < 46; i++) {
    var side = i % 4, x, y;
    if (side === 0) { x = r() * 260 - 40; y = r() * 900; } else if (side === 1) { x = 940 + r() * 300; y = r() * 900; }
    else if (side === 2) { x = r() * 1200; y = r() * 170 - 40; } else { x = r() * 1200; y = 740 + r() * 200; }
    var sc = 0.7 + r() * 1.1, rot = r() * 360, dx = x - 600, dy = y - 450, len = Math.hypot(dx, dy) || 1;
    LEAF.push({ x: x, y: y, sc: sc, rot: rot, vx: dx / len, vy: dy / len, spin: (r() - 0.5) * 120 });
    var veins = "";
    [30, 60, 90, 120].forEach(function (k) { veins += '<path d="M' + k + " 0 L" + (k + 22) + " -26 M" + k + " 0 L" + (k + 22) + ' 26" stroke="rgba(255,255,255,.18)" stroke-width="2"/>'; });
    html += '<g transform="translate(' + x + " " + y + ") rotate(" + rot + ") scale(" + sc + ')"><path d="M0 0 C 40 -60 120 -60 170 0 C 120 60 40 60 0 0 Z" fill="' + cols[i % 5] + '"/><path d="M4 0 L165 0" stroke="rgba(255,255,255,.25)" stroke-width="3"/>' + veins + "</g>";
  }
  svg.innerHTML = html;
  var leafEls = Array.prototype.slice.call(svg.children);
  var hThen = box.querySelector(".mth-then"), hNow = box.querySelector(".mth-now");
  var clear = box.querySelector(".mth-clear"), after = box.querySelector(".mth-after"), hint = box.querySelector(".mth-hint");

  /* ---- time-lapse frames from the timeline below ---- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".timeline .tl-item"));
  var frames = items.map(function (li) {
    var img = li.querySelector("img"), a = li.querySelector("a.zoom"), t = li.querySelector("time"), cap = li.querySelector("figcaption");
    var phase = li.closest(".tl-phase"); phase = phase ? phase.querySelector("h2").textContent : "";
    return { thumb: img.getAttribute("src"), full: a ? a.getAttribute("href") : img.getAttribute("src"), date: t.getAttribute("datetime"), cap: cap ? cap.textContent : img.alt, phase: phase };
  });
  var tl = box.querySelector(".mth-tl");
  if (!frames.length) { box.classList.add("live"); tl.hidden = true; return; }
  tl.style.setProperty("--n", frames.length);
  var scrub = box.querySelector(".mth-scrub");
  scrub.style.setProperty("--n", frames.length);
  scrub.innerHTML = frames.map(function () { return "<i></i>"; }).join("");
  var ticks = Array.prototype.slice.call(scrub.children);
  frames.forEach(function (f) { var im = new Image(); im.src = f.thumb; });
  var elImg = box.querySelector(".mth-sharp"), elBlur = box.querySelector(".mth-blur"), elDate = box.querySelector(".mth-date"),
      elDay = box.querySelector(".mth-day"), elPhase = box.querySelector(".mth-phase"), elCap = box.querySelector(".mth-cap");
  var dayWord = box.getAttribute("data-day") || "Day", photoWord = box.getAttribute("data-photo") || "Photo", ofWord = box.getAttribute("data-of") || "of";
  var first = new Date(frames[0].date + "T12:00:00");
  var fmt; try { fmt = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric" }); } catch (e) { fmt = null; }
  box.querySelector(".mth-from").textContent = fmt ? fmt.format(first) : frames[0].date;
  box.querySelector(".mth-to").textContent = fmt ? fmt.format(new Date(frames[frames.length - 1].date + "T12:00:00")) : frames[frames.length - 1].date;
  var last = -1;
  function show(i) {
    if (i === last) return; last = i;
    var f = frames[i], d = new Date(f.date + "T12:00:00");
    elImg.src = f.thumb; elBlur.src = f.thumb; elImg.alt = f.cap;
    var want = f.full;
    if (want && want !== f.thumb) { var big = new Image(); big.onload = function () { if (last === i) elImg.src = want; }; big.src = want; }
    var label = fmt ? fmt.format(d) : f.date;
    elDate.textContent = label.charAt(0).toUpperCase() + label.slice(1);
    elDay.textContent = (dayWord + " " + (Math.round((d - first) / 864e5) + 1) + " · " + photoWord + " " + (i + 1) + " " + ofWord + " " + frames.length).toUpperCase();
    elPhase.textContent = f.phase;
    elCap.textContent = f.cap;
    ticks.forEach(function (t, k) { t.className = k === i ? "now" : k < i ? "past" : ""; });
  }

  var ticking = false;
  function frame() {
    ticking = false;
    var rc = clear.getBoundingClientRect(), pc = clamp(-rc.top / Math.max(1, clear.offsetHeight - innerHeight * 0.6), 0, 1);
    leafEls.forEach(function (el, k) {
      var L = LEAF[k], d = pc * 900 * (0.7 + (k % 3) * 0.2);
      el.setAttribute("transform", "translate(" + (L.x + L.vx * d).toFixed(1) + " " + (L.y + L.vy * d).toFixed(1) + ") rotate(" + (L.rot + L.spin * pc).toFixed(1) + ") scale(" + L.sc + ")");
    });
    after.style.opacity = smooth(clamp((pc - 0.35) / 0.5, 0, 1));
    hint.style.opacity = 1 - clamp(pc * 3, 0, 1);
    var sw = smooth(clamp((pc - 0.5) / 0.35, 0, 1));
    if (hThen && hNow) { hThen.style.opacity = 1 - sw; hNow.style.opacity = sw; }
    var rt = tl.getBoundingClientRect(), pt = clamp(-rt.top / Math.max(1, tl.offsetHeight - innerHeight), 0, 0.9999);
    show(Math.floor(pt * frames.length));
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  addEventListener("scroll", req, { passive: true });
  addEventListener("resize", req);
  box.classList.add("live");
  frame();
})();
