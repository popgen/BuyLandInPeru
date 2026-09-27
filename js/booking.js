var BOOKING_URL = "https://calendar.app.google/h65oLNrYFP7pGCRKA";

(function () {
  var root = document.getElementById("book-meet");
  if (!root) return;
  var link = root.querySelector("[data-book-link]");
  if (!link || !BOOKING_URL) return;
  link.href = BOOKING_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.hidden = false;
})();
