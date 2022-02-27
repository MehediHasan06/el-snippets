function createElem(elementType, className) {
  var element = document.createElement(elementType);
  element.classList.add(className);
  return element;
}
