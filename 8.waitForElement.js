function waitForElement(selector, callback) {
  var isString = typeof selector === "string";
  (function pollForSelector() {
    if (isString && document.querySelector(selector)) {
      callback();
    } else if (
      !isString && selector.length > 0 && selector.every(function (element) {
        return document.querySelector(element);
      })
    ) {
      callback();
    } else {
      setTimeout(pollForSelector, 25);
    }
  })();
}
