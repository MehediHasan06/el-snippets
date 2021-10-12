function fetchData(targetUrl) {
  return fetch(targetUrl)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, "text/html");
      console.log(doc);
    })

    .catch(function (err) {
      console.log("Failed to fetch page: ", err);
    });
}
fetchData('');
