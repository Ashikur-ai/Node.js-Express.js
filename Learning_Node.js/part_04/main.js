var http = require('http');
var server = http.createServer(function (req, res) {
  res.end("Hello world");
})

server.listen(5050);
console.log("Server is Running")