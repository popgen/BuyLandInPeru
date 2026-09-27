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

  var form = document.getElementById("intake");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var data = new FormData(form);
    var lines = [];
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      if (!field.name || field.type === "submit") return;
      var value = (data.get(field.name) || "").toString().trim();
      if (!value) return;
      var label = field.id ? document.querySelector('label[for="' + field.id + '"]') : null;
      var name = field.name;
      if (label) {
        var clone = label.cloneNode(true);
        clone.querySelectorAll("input, select, textarea, .hint").forEach(function (el) {
          el.remove();
        });
        name = clone.textContent.replace(/\s+/g, " ").trim() || field.name;
      }
      lines.push(name + ": " + value);
    });

    var body = lines.join("\n");
    var subject = form.getAttribute("data-subject") || "Peruvian Dreamland inquiry";
    var email = "hello@peruviandreamland.example";
    var href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    var preview = document.getElementById("intake-preview");
    var mail = document.getElementById("intake-mail");
    var copy = document.getElementById("intake-copy");
    var note = document.getElementById("intake-note");
    if (preview) {
      preview.hidden = false;
      var block = document.getElementById("intake-text");
      if (block) block.textContent = body;
    }
    if (mail) {
      mail.href = href;
      mail.hidden = false;
    }
    if (note) {
      note.hidden = false;
      note.textContent = href.length > 1800
        ? "This note is long enough that some email apps will cut it off. Copy the text below and paste it into a message to the address on this page."
        : "Open your email app with the button, or copy the text. The address on this site is a placeholder until the owner replaces it.";
    }
    if (copy) {
      copy.hidden = false;
      copy.onclick = function () {
        var done = function () {
          copy.textContent = form.getAttribute("data-copied") || "Copied";
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(body).then(done).catch(function () {
            window.prompt("Copy this note:", body);
          });
        } else {
          window.prompt("Copy this note:", body);
        }
      };
    }
    if (preview) preview.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
