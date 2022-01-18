// pathname of url
window.location.pathname


// similar behavior as clicking on a link
window.location.href = "http://stackoverflow.com";

function getQueryString() {
  var queryString = window.location.search;
  return queryString;
}



function getQueryParameterValue(parameter) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var parameterValue = urlParams.get(parameter);

  return parameterValue;
}
