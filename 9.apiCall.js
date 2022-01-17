(function() {
  var send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function() { 
      this.addEventListener('load', function(e) {
          if(this.responseURL.match(/https:\/\/victoriaplum\.com\/(browse|search\/filter)/i)) {
              
          }
      });
      return send.apply(this, arguments);
  };
})();

