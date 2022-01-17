function isElementVisibleInViewport (el) {
  var top = el.getBoundingClientRect().top;
  var right = el.getBoundingClientRect().right;
  var bottom = el.getBoundingClientRect().bottom;
  var left = el.getBoundingClientRect().left;
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;

  return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
}