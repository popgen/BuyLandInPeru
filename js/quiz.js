/* Buy Land In Peru: region quiz (adapted from the Peruvian Dreamland quiz) */
(function () {
  var form = document.getElementById("quiz");
  if (!form) return;
  var out = document.getElementById("quiz-out");
  var steps = Array.prototype.slice.call(form.querySelectorAll(".qstep"));
  var back = document.getElementById("q-back");
  var next = document.getElementById("q-next");
  var bar = form.querySelector(".quiz-bar");
  var i = 0;

  var REGIONS = [
    { id: "selva-alta", name: "Selva alta: Tarapoto, Lamas, Moyobamba", home: true,
      heat: 2, humidity: 2, alt: 0, rain: 2, noise: 1, isol: 1, health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: true, land: true,
      caution: "Heat, humidity, termites and rainy-season roads. Forest and farmland here are a different project from a city apartment, and water and power need checking on site." },
    { id: "oxapampa", name: "Oxapampa",
      heat: 1, humidity: 2, alt: 1, rain: 2, noise: 0, isol: 1, health: 1, airport: 0, internet: 1, expat: false, pricey: false, entry: true, land: true,
      caution: "Cooler cloud forest, heavy rain, and a long road from Lima. Confirm internet and hospital access for the exact valley." },
    { id: "iquitos", name: "Iquitos",
      heat: 2, humidity: 2, alt: 0, rain: 2, noise: 1, isol: 2, health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: false, land: false,
      caution: "A river city with no road to the rest of Peru. Parts of Loreto fall inside the 50 km border zone." },
    { id: "lima", name: "Lima",
      heat: 1, humidity: 1, alt: 0, rain: 0, noise: 2, isol: 0, health: 2, airport: 2, internet: 2, expat: true, pricey: true, entry: false, land: false,
      caution: "Sea level and the best hospitals, with a gray winter and heavy traffic. Central districts are far from small-lot prices." },
    { id: "north-coast", name: "Northern beaches: Máncora, Punta Sal, Huanchaco",
      heat: 2, humidity: 1, alt: 0, rain: 1, noise: 1, isol: 1, health: 1, airport: 1, internet: 1, expat: true, pricey: false, entry: true, land: false,
      caution: "Heat, tourist noise in season and El Niño floods. Punta Sal is in Tumbes, so the border rule has to be measured for the exact lot." },
    { id: "arequipa", name: "Arequipa",
      heat: 1, humidity: 0, alt: 2, rain: 0, noise: 1, isol: 0, health: 2, airport: 1, internet: 2, expat: false, pricey: false, entry: false, land: false,
      caution: "About 2,300 meters. Drier than Lima and still high enough to matter for hearts and lungs." },
    { id: "cusco", name: "Cusco",
      heat: 0, humidity: 0, alt: 3, rain: 1, noise: 2, isol: 0, health: 1, airport: 1, internet: 2, expat: true, pricey: true, entry: false, land: false,
      caution: "The center is about 3,400 meters. A weekend visit is a poor test of whether you can live there." },
    { id: "sacred-valley", name: "The Sacred Valley",
      heat: 1, humidity: 0, alt: 2, rain: 1, noise: 1, isol: 1, health: 1, airport: 1, internet: 1, expat: true, pricey: true, entry: true, land: true,
      caution: "Lower than Cusco and still high, often around 2,800 meters. Ask about flood paths and who actually holds title." },
    { id: "cajamarca", name: "Cajamarca",
      heat: 0, humidity: 1, alt: 2, rain: 1, noise: 0, isol: 1, health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: true, land: true,
      caution: "A highland city around 2,700 meters, with rain and a quieter pace. Specialty medicine means Trujillo or Lima." },
    { id: "huancayo", name: "Huancayo",
      heat: 0, humidity: 0, alt: 3, rain: 1, noise: 1, isol: 0, health: 1, airport: 0, internet: 1, expat: false, pricey: false, entry: true, land: false,
      caution: "About 3,200 meters, and the road to Lima can close with huaicos in the rains." },
    { id: "puno", name: "Puno",
      heat: 0, humidity: 0, alt: 3, rain: 1, noise: 0, isol: 1, health: 1, airport: 1, internet: 1, expat: false, pricey: false, entry: false, land: true,
      caution: "Near 3,800 meters, and close enough to Bolivia that the border rule has to be measured." }
  ];

  function val(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : "";
  }
  function labelFor(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.parentNode.textContent.trim() : "";
  }
  function answered(step) { return !!step.querySelector("input:checked"); }

  // ---------- stepper ----------
  function show(n) {
    i = Math.max(0, Math.min(steps.length - 1, n));
    steps.forEach(function (s, k) { s.hidden = k !== i; });
    back.hidden = i === 0;
    next.textContent = i === steps.length - 1 ? "Show my regions" : "Next";
    next.disabled = !answered(steps[i]);
    bar.style.width = Math.round((i / steps.length) * 100) + "%";
  }
  form.classList.add("stepped");
  show(0);
  back.addEventListener("click", function () { show(i - 1); });
  form.addEventListener("change", function (e) {
    if (e.target.type !== "radio") return;
    next.disabled = false;
    if (i < steps.length - 1) setTimeout(function () { show(i + 1); steps[i].querySelector("input").focus({ preventScroll: true }); }, 220);
  });

  // ---------- scoring ----------
  function score(r) {
    var s = 20, alt = val("altitude"), isol = val("isolation"), health = val("health"), airport = val("airport"),
        internet = val("internet"), purpose = val("purpose"), budget = val("budget"), ptype = val("ptype");
    s -= Math.abs(r.heat - Number(val("heat"))) * 3;
    s -= Math.abs(r.humidity - Number(val("humidity"))) * 3;
    s -= Math.abs(r.rain - Number(val("rain"))) * 2;
    s -= Math.abs(r.noise - Number(val("noise"))) * 2;
    if (alt === "sea" && r.alt === 2) s -= 6;
    if (alt === "sea" && r.alt >= 3) s -= 12;
    if (alt === "mid" && r.alt >= 3) s -= 8;
    if (alt === "high" && r.alt >= 3) s += 3;
    if (isol === "city" && r.isol > 0) s -= r.isol * 3;
    if (isol === "town" && r.isol === 0) s -= 1;
    if (isol === "town" && r.isol > 1) s -= 3;
    if (isol === "remote" && r.isol > 0) s += 2;
    if (health === "major" && r.health < 2) s -= 5;
    if (airport === "intl" && r.airport < 2) s -= 5;
    if (airport === "road" && r.airport === 2) s -= 1;
    if (internet === "fiber" && r.internet < 2) s -= 4;
    if (purpose === "hold" && r.land) s += 4;
    if (purpose === "live" && r.isol < 2 && r.health > 0) s += 2;
    if (purpose === "visit" && r.expat) s += 1;
    if (budget === "entry" && r.entry) s += 3;
    if (budget === "entry" && r.pricey) s -= 3;
    if (budget === "land" && r.land) s += 4;
    if (budget === "house" && !r.land) s += 1;
    if (budget === "over" && r.pricey) s += 1;
    if ((ptype === "farm" || ptype === "forest") && r.land) s += 3;
    if ((ptype === "farm" || ptype === "forest") && !r.land) s -= 2;
    if (ptype === "house" && !r.land) s += 1;
    if (ptype === "lot" && r.entry) s += 2;
    return s;
  }

  function why(r) {
    var bits = [], alt = val("altitude");
    if (r.alt === 0 && alt === "sea") bits.push("it stays near sea level");
    if (r.alt >= 2 && alt !== "sea") bits.push("it fits your openness to altitude");
    if (r.humidity <= Number(val("humidity"))) bits.push("the humidity is within what you chose");
    if (r.heat <= Number(val("heat"))) bits.push("the heat is within what you chose");
    if (val("health") === "major" && r.health === 2) bits.push("hospital care is strong here");
    if (val("airport") === "intl" && r.airport === 2) bits.push("the international airport is in the city");
    if (val("internet") === "fiber" && r.internet === 2) bits.push("fiber is realistic in established neighborhoods");
    if ((val("purpose") === "hold" || val("ptype") === "farm" || val("ptype") === "forest") && r.land) bits.push("farmland and larger parcels are part of the local market");
    if (val("budget") === "entry" && r.entry) bits.push("small lots can start at low prices here");
    if (val("isolation") === "city" && r.isol === 0) bits.push("daily services are city-scale");
    if (!bits.length) bits.push("it's the closest fit on the list, with the caution below");
    var t = bits.slice(0, 3).join("; ") + ".";
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (i < steps.length - 1) { if (answered(steps[i])) show(i + 1); return; }
    var missing = steps.filter(function (s) { return !answered(s); });
    if (missing.length) { show(steps.indexOf(missing[0])); return; }
    bar.style.width = "100%";

    var ranked = REGIONS.map(function (r) { return { r: r, s: score(r) }; }).sort(function (a, b) { return b.s - a.s; });
    var top = ranked.slice(0, 3), best = top[0].s, worst = ranked[ranked.length - 1].s;
    var homeInTop = top.some(function (t) { return t.r.home; });
    var guide = form.getAttribute("data-guide") || "regions.html";

    var html = '<h2>Your regions to read first</h2><p>Based on your answers. It doesn\'t know your health or your finances, so treat it as a reading list, not a recommendation to buy.</p><ol class="results">';
    top.forEach(function (t, k) {
      var pct = best === worst ? 100 : Math.round(55 + 45 * (t.s - worst) / (best - worst));
      html += '<li class="result' + (t.r.home ? " is-home" : "") + '"><p class="rank">Match ' + (k + 1) + (t.r.home ? ' <span class="tag home-tag">Where I live</span>' : "") + '</p>' +
        '<h3><a href="' + guide + '#' + t.r.id + '">' + esc(t.r.name) + '</a></h3>' +
        '<div class="meter" role="img" aria-label="Fit ' + pct + ' percent"><span style="width:' + pct + '%"></span></div>' +
        '<p><strong>Why it rose:</strong> ' + esc(why(t.r)) + '</p>' +
        '<p><strong>Before you get attached:</strong> ' + esc(t.r.caution) + '</p></li>';
    });
    html += "</ol>";
    html += homeInTop
      ? '<div class="result-note"><h3>Good news: one of these is my backyard</h3><p>I live outside Lamas and scout land in San Martín myself, in person. Send me your results and I\'ll tell you what\'s realistic for your budget.</p></div>'
      : '<div class="result-note"><h3>Outside my home region?</h3><p>I live in San Martín and know it best. For other regions I\'ll tell you honestly whether I\'m the right person to help, and what to check either way.</p></div>';

    var lines = ["My region quiz results:", ""];
    top.forEach(function (t, k) { lines.push((k + 1) + ". " + t.r.name); });
    lines.push("", "My answers:");
    steps.forEach(function (s) {
      var name = s.querySelector("input").name;
      lines.push("- " + s.querySelector("legend").lastChild.textContent.trim() + " " + labelFor(name));
    });
    var msg = encodeURIComponent(lines.join("\n"));
    var contact = form.getAttribute("data-contact") || "../contact.html";
    html += '<div class="cta"><a class="btn btn-primary" href="' + contact + '?quiz=' + msg + '#form">Send my results to Lucas</a>' +
      '<a class="btn btn-ghost" href="' + guide + '">Read all region guides</a>' +
      '<button type="button" class="btn btn-ghost" id="q-restart">Start over</button></div>';

    out.innerHTML = html;
    out.hidden = false;
    form.hidden = true;
    out.focus();
    out.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("q-restart").addEventListener("click", function () {
      form.reset(); form.hidden = false; out.hidden = true; show(0);
    });
  });
})();
