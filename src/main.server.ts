// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { createServer } from 'http';
import * as https from 'https'
import { join } from 'path';
import { readFileSync } from 'fs';

import { enableProdMode } from '@angular/core';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';
import { NgSetupOptions } from '@nguniversal/express-engine';

import { createApi } from './api';

export { AppServerModule } from './app/app.server.module';

export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');

export const getNgRenderMiddlewareOptions: () => NgSetupOptions = () => ({
  bootstrap: exports.AppServerModuleNgFactory,
  providers: [
    // Import module map for lazy loading
    {
      provide: MODULE_MAP,
      useFactory: () => exports.LAZY_MODULE_MAP,
      deps: [],
    }
  ]
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

let requestListener = createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());

var options = {
  key: readFileSync(join('/usr/site/ssl', '215085664710706.key')),
  cert: readFileSync(join('/usr/site/ssl', '215085664710706.pem'))
};

const httpsServer = https.createServer(options, requestListener).listen(443);
console.log("Listening 443...");

// Start up the Node server
const server = createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);
console.log("Listening 80 and redirecting to 443...");

// HMR on server side
if (module.hot) {
  const hmr = () => {
    const { AppServerModuleNgFactory } = require('./app/app.server.module.ngfactory');

    exports.AppServerModuleNgFactory = AppServerModuleNgFactory;

    requestListener = require('./api').createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());
  };

  module.hot.accept('./api', hmr);
  module.hot.accept('./app/app.server.module.ngfactory', hmr);
}

export default httpsServer;