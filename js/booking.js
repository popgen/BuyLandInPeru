var BOOKING_URL = "";

(function () {
  var root = document.getElementById("book-meet");
  if (!root) return;
  var link = root.querySelector("[data-book-link]");
  var wait = root.querySelector("[data-book-wait]");
  var pending = root.querySelector("[data-book-pending]");
  var detail = root.querySelector("[data-book-detail]");
  if (BOOKING_URL) {
    if (link) {
      link.href = BOOKING_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.hidden = false;
    }
    if (wait) wait.hidden = true;
    if (pending) pending.hidden = true;
    if (detail) detail.hidden = false;
  } else {
    if (link) {
      link.removeAttribute("href");
      link.hidden = true;
    }
    if (wait) wait.hidden = false;
    if (pending) pending.hidden = false;
    if (detail) detail.hidden = true;
  }
})();
