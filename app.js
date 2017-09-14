var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./214260419960706.key'),
  cert: fs.readFileSync('./214260419960706.pem')
};

var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

https.createServer(options, app).listen(443);
console.log("Listening 443...");

http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);
console.log("Listening 80 and redirecting to 443...");
