"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _module = require('module'); const require = _module.createRequire.call(void 0, import.meta.url);



var _chunkF6RGEJYRjs = require('./chunk-F6RGEJYR.js');


var _chunk5ETD4WGWjs = require('./chunk-5ETD4WGW.js');

// src/node/dev.ts
var _vite = require('vite');
async function createDevServer(root, restartServer) {
  const config = await _chunk5ETD4WGWjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root: _chunkF6RGEJYRjs.PACKAGE_ROOT,
    plugins: await _chunkF6RGEJYRjs.createVitePlugins.call(void 0, config, restartServer),
    server: {
      fs: {
        allow: [_chunkF6RGEJYRjs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
