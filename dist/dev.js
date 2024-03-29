"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _module = require('module'); const require = _module.createRequire.call(void 0, import.meta.url);



var _chunkPIFHPJ6Zjs = require('./chunk-PIFHPJ6Z.js');


var _chunk5ETD4WGWjs = require('./chunk-5ETD4WGW.js');

// src/node/dev.ts
var _vite = require('vite');
async function createDevServer(root, restartServer) {
  const config = await _chunk5ETD4WGWjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root: _chunkPIFHPJ6Zjs.PACKAGE_ROOT,
    plugins: await _chunkPIFHPJ6Zjs.createVitePlugins.call(void 0, config, restartServer),
    server: {
      fs: {
        allow: [_chunkPIFHPJ6Zjs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
