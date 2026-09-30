/* Buy Land In Peru: small site-wide enhancements */
(function () {
  // Prefill the contact form with region quiz results (contact.html?quiz=...)
  var msg = document.getElementById("f-message");
  if (msg && !msg.value) {
    try {
      var q = new URLSearchParams(location.search).get("quiz");
      if (q) msg.value = q.slice(0, 4000) + (document.documentElement.lang === "es" ? "\n\nAlgo más:\n" : "\n\nAnything else:\n");
    } catch (e) {}
  }

  // Glossary search filter
  var gs = document.getElementById("glossary-search");
  if (gs) {
    var terms = Array.prototype.slice.call(document.querySelectorAll(".gterm"));
    var empty = document.getElementById("glossary-empty");
    gs.addEventListener("input", function () {
      var v = gs.value.trim().toLowerCase(), shown = 0;
      terms.forEach(function (t) {
        var hit = !v || t.textContent.toLowerCase().indexOf(v) !== -1;
        t.hidden = !hit; if (hit) shown++;
      });
      empty.hidden = shown !== 0;
    });
  }

  // Lightbox for zoomable photos
  var zooms = document.querySelectorAll("a.zoom");
  if (zooms.length && window.HTMLDialogElement) {
    var es = document.documentElement.lang === "es";
    var dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.innerHTML = '<button type="button">' + (es ? "Cerrar" : "Close") + '</button><img alt=""><p></p>';
    document.body.appendChild(dlg);
    var big = dlg.querySelector("img"), cap = dlg.querySelector("p");
    dlg.querySelector("button").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    Array.prototype.forEach.call(zooms, function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var img = a.querySelector("img");
        big.src = a.getAttribute("href"); big.alt = img ? img.alt : "";
        var fc = a.parentNode.querySelector("figcaption");
        cap.textContent = fc ? fc.textContent : (img ? img.alt : "");
        dlg.showModal();
      });
    });
  }
})();

/* email addresses are assembled here so they never sit as plain text in the page source */
(function () {
  var els = document.querySelectorAll(".js-mail[data-m]");
  for (var i = 0; i < els.length; i++) {
    var el = els[i], a = el.getAttribute("data-m").split("").reverse().join("");
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + a + (el.getAttribute("data-q") || ""));
    if (el.getAttribute("data-show")) el.textContent = a;
  }
})();
