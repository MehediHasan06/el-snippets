function fetchData(targetUrl) {
  return fetch(targetUrl)
    .then(function (response) {
      return response.text(); //Returns a promise that resolves with a text representation of the response body.
    })
    .then(function (html) {
      var parser = new DOMParser(); 
      //The DOMParser interface provides the ability to parse XML or, HTML source code from a string into a DOM Document.
      var doc = parser.parseFromString(html, "text/html");
      //The parseFromString() method of the DOMParser interface parses a string containing either HTML or XML, returning an HTMLDocument or an XMLDocument.
      console.log(doc);
    })
    .catch(function (err) {
      console.log("Failed to fetch page: ", err);
    });
}
fetchData('');
