var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');

var app = express();

var options = {
  key: fs.readFileSync('./214260419960706.key'),
  cert: fs.readFileSync('./214260419960706.pem')
};

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
console.log("Listening 80...");
console.log("Listening 443...");