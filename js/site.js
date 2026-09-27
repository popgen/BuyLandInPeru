(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("nav-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var q = document.getElementById("gloss-q");
  var list = document.getElementById("gloss-list");
  var empty = document.getElementById("gloss-empty");
  if (q && list) {
    var items = Array.prototype.slice.call(list.querySelectorAll("li"));
    q.addEventListener("input", function () {
      var needle = q.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (li) {
        var hay = (li.getAttribute("data-term") || li.textContent || "").toLowerCase();
        var match = !needle || hay.indexOf(needle) !== -1;
        li.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  }

  document.querySelectorAll("[data-print]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.print();
    });
  });

  var status = document.getElementById("form-status");
  if (status && window.URLSearchParams) {
    var sent = new URLSearchParams(location.search).get("sent");
    var es = document.documentElement.lang === "es";
    var link = '<a href="https://calendar.app.google/h65oLNrYFP7pGCRKA" target="_blank" rel="noopener noreferrer">https://calendar.app.google/h65oLNrYFP7pGCRKA</a>';
    var text = "";
    if (sent === "1") {
      text = es
        ? "Su nota fue enviada, y un agradecimiento va en camino a su correo. Reserve un horario: "
        : "Your note was sent, and a thank-you is on its way to your email. Book a time: ";
    } else if (sent === "2") {
      text = es
        ? "Su nota fue enviada. El correo de agradecimiento no pudo salir ahora. Igual puede reservar un horario: "
        : "Your note was sent. The thank-you email could not go out just now. You can still book a time: ";
    } else if (sent === "noted") {
      text = es
        ? "Recibimos la nota, pero ese correo no parecía válido, así que no enviamos un agradecimiento. Escriba a info@buylandinperu.com. También puede reservar: "
        : "We received the note, but that email address did not look valid, so no thank-you was sent. Write to info@buylandinperu.com. You can still book: ";
    } else if (sent === "0") {
      text = es
        ? "La nota no pudo enviarse. Escriba directamente a info@buylandinperu.com."
        : "The note could not be sent. Please write directly to info@buylandinperu.com.";
    }
    if (text) {
      status.hidden = false;
      status.innerHTML = text + (sent === "0" ? "" : link);
      status.focus();
    }
  }
})();
