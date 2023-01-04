"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _module = require('module'); const require = _module.createRequire.call(void 0, import.meta.url);




var _chunkUGNOXD6Kjs = require('./chunk-UGNOXD6K.js');


var _chunk5ETD4WGWjs = require('./chunk-5ETD4WGW.js');
require('./chunk-7ISAOXNV.js');

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
              src: `/@fs/${_chunkUGNOXD6Kjs.CLIENT_ENTRY_PATH}`
            },
            injectTo: "body"
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let content = await _promises.readFile.call(void 0, _chunkUGNOXD6Kjs.DEFAULT_TEMPLATE_PATH, "utf-8");
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

// src/node/plugin-island/config.ts
var _path = require('path');
var SITE_DATA_ID = "island:site-data";
function pluginConfig(config, restartServer) {
  let server = null;
  return {
    name: "island:config",
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return "\0" + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === "\0" + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    configureServer(s) {
      server = s;
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath];
      const include = (id) => customWatchedFiles.some((file) => id.includes(file));
      if (include(ctx.file)) {
        console.log(
          `
${_path.relative.call(void 0, config.root, ctx.file)} changed, restarting server...`
        );
        await restartServer();
      }
    }
  };
}

// src/node/dev.ts
async function createDevServer(root, restartServer) {
  const config = await _chunk5ETD4WGWjs.resolveConfig.call(void 0, root, "serve", "development");
  console.log(config);
  return _vite.createServer.call(void 0, {
    root,
    plugins: [
      pluginIndexHtml(),
      _pluginreact2.default.call(void 0, ),
      pluginConfig(config, restartServer)
    ],
    server: {
      fs: {
        allow: [_chunkUGNOXD6Kjs.PACKAGE_ROOT]
      }
    }
  });
}


exports.createDevServer = createDevServer;
