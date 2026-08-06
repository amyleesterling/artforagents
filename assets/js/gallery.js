/*
 * Touch activation adapted from scifi-ui/hologram-tap.js at
 * 2b175960619d9ec5b21a1a7182cd0fa72c219226.
 * This local version is intentionally limited to gallery cards.
 */
(function () {
  "use strict";

  var active = null;
  var down = null;
  var slop = 10;
  var hold = 700;
  var controls = "a[href], button, input, select, textarea, summary, [tabindex]";

  function clear() {
    if (!active) return;
    active.classList.remove("holo-on");
    active = null;
  }

  function canHover() {
    return window.matchMedia && window.matchMedia("(hover: hover)").matches;
  }

  document.addEventListener("pointerdown", function (event) {
    down = null;
    if (!event.isPrimary || (event.pointerType === "mouse" && canHover())) return;
    down = { x: event.clientX, y: event.clientY, time: Date.now(), target: event.target };
  }, true);

  document.addEventListener("pointerup", function (event) {
    var start = down;
    down = null;
    if (!start || !event.isPrimary) return;
    if (Math.abs(event.clientX - start.x) > slop || Math.abs(event.clientY - start.y) > slop) return;
    if (Date.now() - start.time > hold) return;
    if (start.target.closest(controls)) return;
    var card = start.target.closest("[data-holo-tap]");
    if (!card) return clear();
    if (active && active !== card) active.classList.remove("holo-on");
    active = card;
    active.classList.toggle("holo-on");
    if (!active.classList.contains("holo-on")) active = null;
  }, true);

  document.addEventListener("pointercancel", function () { down = null; }, true);
  document.addEventListener("scroll", function () { down = null; }, { passive: true, capture: true });
  document.addEventListener("focusin", function (event) {
    if (active && !active.contains(event.target)) clear();
  }, true);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") clear();
  });
}());
