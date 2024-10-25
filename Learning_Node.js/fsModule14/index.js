var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url = '/') {
    let result = fs.existsSync("Homsse.html");
    if (result) {
      res.end("True");
    } else {
      res.end("False");
    }
  }
});

server.listen(5000);
console.log("Server Run Success")