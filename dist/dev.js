"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _module = require('module'); const require = _module.createRequire.call(void 0, import.meta.url);






var _chunkPFETZIPPjs = require('./chunk-PFETZIPP.js');


var _chunk5ETD4WGWjs = require('./chunk-5ETD4WGW.js');

// src/node/dev.ts
var _vite = require('vite');

// src/node/plugin-island/indexHtml.ts
var _promises = require('fs/promises');
function pluginIndexHtml() {
  return {
    name: "island:index-html",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              type: "module",
              src: `/@fs/${_chunkPFETZIPPjs.CLIENT_ENTRY_PATH}`
            },
            injectTo: "body"
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res) => {
          let content = await _promises.readFile.call(void 0, _chunkPFETZIPPjs.DEFAULT_TEMPLATE_PATH, "utf-8");
          content = await server.transformIndexHtml(
            req.url,
            content,
            req.originalUrl
          );
          res.setHeader("Content-Type", "text/html");
          res.end(content);
        });
      };
    }
  };
}

// src/node/dev.ts
var _pluginreact = require('@vitejs/plugin-react'); var _pluginreact2 = _interopRequireDefault(_pluginreact);
async function createDevServer(root, restartServer) {
  const config = await _chunk5ETD4WGWjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root: _chunkPFETZIPPjs.PACKAGE_ROOT,
    plugins: [
      pluginIndexHtml(),
      _pluginreact2.default.call(void 0, ),
      _chunkPFETZIPPjs.pluginConfig.call(void 0, config, restartServer),
      _chunkPFETZIPPjs.pluginRoutes.call(void 0, { root: config.root })
    ],
    server: {
      fs: {
        allow: [_chunkPFETZIPPjs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
