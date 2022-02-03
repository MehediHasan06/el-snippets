(function () {
  var send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    this.addEventListener('load', function (e) {
      if (this.responseURL.match(/https:\/\/victoriaplum\.com\/(browse|search\/filter)/i)) {
        console.log(JSON.parse(this.responseText));
      }
    });
    return send.apply(this, arguments);
  };
})();

