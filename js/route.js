/* Buy Land In Peru: "The route" scrollytelling map on the region guides page */
(function () {
  var root = document.querySelector(".route");
  if (!root) return;
  var map = root.querySelector(".route-map svg");
  var stops = Array.prototype.slice.call(root.querySelectorAll(".rstop"));
  if (!map || !stops.length) return;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // simplified outline of Peru (lon, lat); illustrative only
  var PERU = [[-80.35,-3.4],[-80.1,-3.9],[-79.9,-4.4],[-79.45,-4.52],[-79.0,-4.95],[-78.65,-4.55],[-78.35,-3.4],[-77.85,-2.95],[-76.6,-2.55],[-75.55,-1.55],[-75.2,-0.9],[-75.25,-0.05],[-74.8,-0.2],[-74.25,-0.9],[-73.55,-1.25],[-72.9,-2.4],[-71.85,-2.3],[-70.9,-2.35],[-70.1,-2.6],[-70.7,-3.8],[-69.95,-4.25],[-70.8,-4.2],[-71.9,-4.55],[-72.85,-5.2],[-73.25,-6.1],[-73.8,-7.3],[-74.0,-7.6],[-73.6,-8.9],[-72.95,-9.3],[-72.4,-9.5],[-71.4,-10.0],[-70.6,-9.6],[-70.55,-11.0],[-69.6,-10.95],[-68.7,-12.5],[-68.95,-12.9],[-68.9,-14.2],[-69.35,-14.8],[-69.3,-15.4],[-68.85,-15.9],[-69.15,-16.4],[-69.55,-17.0],[-69.5,-17.5],[-69.95,-17.9],[-70.4,-18.35],[-71.35,-17.65],[-72.4,-16.95],[-73.3,-16.3],[-74.4,-15.75],[-75.25,-15.25],[-75.95,-14.55],[-76.3,-13.8],[-76.45,-13.0],[-77.0,-12.25],[-77.6,-11.35],[-78.2,-10.2],[-78.65,-9.1],[-79.05,-8.3],[-79.65,-7.2],[-80.05,-6.7],[-81.1,-6.0],[-80.9,-5.4],[-81.3,-4.7],[-81.05,-4.1],[-80.6,-3.6]];
  function MX(lon) { return (lon + 82) * 100; }
  function MY(lat) { return (-lat + 0.5) * 78 + 40; }
  var NS = "http://www.w3.org/2000/svg";

  var pts = stops.map(function (s) { return [MX(+s.dataset.lon), MY(+s.dataset.lat)]; });
  var CUM = [0];
  for (var i = 1; i < pts.length; i++) CUM.push(CUM[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  var TOTAL = CUM[CUM.length - 1];

  var P = PERU.map(function (p) { return [MX(p[0]), MY(p[1])]; });
  function inPoly(x, y) {
    var c = false;
    for (var i = 0, j = P.length - 1; i < P.length; j = i++) {
      if (((P[i][1] > y) !== (P[j][1] > y)) && x < (P[j][0] - P[i][0]) * (y - P[i][1]) / (P[j][1] - P[i][1]) + P[i][0]) c = !c;
    }
    return c;
  }
  // deterministic texture: trees in the east, peaks in the sierra
  var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
  var tex = "";
  for (var k = 0; k < 900; k++) {
    var x = rnd() * 1300, y = rnd() * 1500, r = rnd();
    if (!inPoly(x, y)) continue;
    var band = x - (1300 - y * 0.62) + 380;
    if (band > 60) tex += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="' + (3 + r * 5).toFixed(1) + '" fill="#1f6a3e" opacity=".35"/>';
    else if (band > -260) tex += '<path d="M' + (x - 9).toFixed(0) + " " + (y + 7).toFixed(0) + ' l9 -14 l9 14" fill="none" stroke="#6b4f36" stroke-width="2.4" opacity=".45"/>';
  }
  var outline = P.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ") + "Z";
  var line = pts.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ");
  var ocean = root.getAttribute("data-ocean") || "PACIFIC OCEAN";
  var html = '<defs><linearGradient id="rt-terrain" gradientUnits="userSpaceOnUse" x1="250" y1="700" x2="1000" y2="250">' +
    '<stop offset="0" stop-color="#e6c690"/><stop offset=".22" stop-color="#d6b37c"/><stop offset=".30" stop-color="#b99a78"/>' +
    '<stop offset=".48" stop-color="#a59274"/><stop offset=".58" stop-color="#8fae76"/><stop offset=".7" stop-color="#5f9a62"/><stop offset="1" stop-color="#3f8453"/></linearGradient>' +
    '<clipPath id="rt-clip"><path d="' + outline + '"/></clipPath></defs><g class="rt-g">' +
    '<text class="rt-ocean" x="60" y="1150" transform="rotate(-62 60 1150)">' + ocean + '</text>' +
    '<path class="rt-land" d="' + outline + '"/><g clip-path="url(#rt-clip)">' + tex + '</g>' +
    '<path class="rt-trail" d="' + line + '"/>' +
    '<path class="rt-done" d="' + line + '" stroke-dasharray="' + TOTAL + " " + TOTAL + '" stroke-dashoffset="' + TOTAL + '"/>';
  stops.forEach(function (s, i) {
    var p = pts[i], left = +s.dataset.lon < -76.8, id = s.id.replace("route-", "");
    var dy = id === "sacred-valley" ? -18 : id === "cusco" ? 34 : 10;
    html += '<circle class="rt-dot" cx="' + p[0] + '" cy="' + p[1] + '" r="13"/>';
    html += '<text class="rt-label" x="' + (p[0] + (left ? -22 : 22)) + '" y="' + (p[1] + dy) + '" text-anchor="' + (left ? "end" : "start") + '">' + s.dataset.short + "</text>";
  });
  html += '<circle class="rt-pulse" cx="' + pts[0][0] + '" cy="' + pts[0][1] + '" r="16"/></g>';
  map.innerHTML = html;
  root.classList.add("live");

  var g = map.querySelector(".rt-g"), done = map.querySelector(".rt-done"), pulse = map.querySelector(".rt-pulse");
  var dots = Array.prototype.slice.call(map.querySelectorAll(".rt-dot"));
  var box = root.querySelector(".route-map");
  var last = -1, ticking = false;

  function frame() {
    ticking = false;
    var br = box.getBoundingClientRect();
    var narrow = window.innerWidth <= 860;
    // desktop: the card crossing the middle of the screen; phones: the card whose top reaches just under the map
    var mid = narrow ? br.bottom + innerHeight * 0.12 : innerHeight * 0.55;
    var centers = stops.map(function (s) { var r = s.querySelector(".rcard").getBoundingClientRect(); return narrow ? r.top : r.top + r.height / 2; });
    var q = 0;
    if (mid <= centers[0]) q = 0;
    else if (mid >= centers[centers.length - 1]) q = centers.length - 1;
    else for (var i = 0; i < centers.length - 1; i++) if (mid >= centers[i] && mid < centers[i + 1]) { q = i + (mid - centers[i]) / (centers[i + 1] - centers[i]); break; }
    var a = Math.min(pts.length - 2, Math.floor(q)), f = q - a, active = Math.round(q);
    done.setAttribute("stroke-dashoffset", TOTAL - (CUM[a] + (CUM[a + 1] - CUM[a]) * f));
    var x = pts[a][0] + (pts[a + 1][0] - pts[a][0]) * f, y = pts[a][1] + (pts[a + 1][1] - pts[a][1]) * f, s = 1.55;
    g.setAttribute("transform", "translate(" + (650 - x * s).toFixed(1) + " " + (750 - y * s).toFixed(1) + ") scale(" + s + ")");
    if (active !== last) {
      last = active;
      pulse.setAttribute("cx", pts[active][0]); pulse.setAttribute("cy", pts[active][1]);
      dots.forEach(function (d, k) { d.classList.toggle("on", k === active); });
      stops.forEach(function (st, k) { st.classList.toggle("on", k === active); });
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  addEventListener("scroll", req, { passive: true });
  addEventListener("resize", req);
  frame();
  if (reduce) pulse.style.animation = "none";
})();
