/* Buy Land In Peru: small site-wide enhancements */
(function () {
  // Prefill the contact form with region quiz results (contact.html?quiz=...)
  var msg = document.getElementById("f-message");
  if (msg && !msg.value) {
    try {
      var q = new URLSearchParams(location.search).get("quiz");
      if (q) msg.value = q.slice(0, 4000) + "\n\nAnything else:\n";
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
})();
