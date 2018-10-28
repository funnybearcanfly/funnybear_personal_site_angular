import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import * as https from 'https'
import * as http from 'http'

enableProdMode();

const DIST_FOLDER = join(process.cwd(), 'dist');

var options = {
  key: readFileSync(join(DIST_FOLDER, '215085664710706.key')),
  cert: readFileSync(join(DIST_FOLDER, '215085664710706.pem'))
};

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.use('/resource', express.static('/usr/site/resource'))

app.get('*', (req, res) => {
  res.render('index', { req });
});

https.createServer(options, app).listen(443);
console.log("Listening 443...");

http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);
console.log("Listening 80 and redirecting to 443...");