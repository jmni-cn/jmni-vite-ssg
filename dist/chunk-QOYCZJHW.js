"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _module = require('module'); const require = _module.createRequire.call(void 0, import.meta.url);

// src/node/constants/index.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var PACKAGE_ROOT = _path2.default.join(__dirname, "..");
var CLIENT_ENTRY_PATH = _path2.default.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "client-entry.tsx"
);
var SERVER_ENTRY_PATH = _path2.default.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "ssr-entry.tsx"
);
var DEFAULT_TEMPLATE_PATH = _path2.default.join(PACKAGE_ROOT, "template.html");

// src/node/plugin-island/config.ts


var SITE_DATA_ID = "island:site-data";
function pluginConfig(config, restartServer) {
  let server = null;
  return {
    name: "island:config",
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            "@runtime": _path.join.call(void 0, PACKAGE_ROOT, "src", "runtime", "index.ts")
          }
        }
      };
    },
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







exports.PACKAGE_ROOT = PACKAGE_ROOT; exports.CLIENT_ENTRY_PATH = CLIENT_ENTRY_PATH; exports.SERVER_ENTRY_PATH = SERVER_ENTRY_PATH; exports.DEFAULT_TEMPLATE_PATH = DEFAULT_TEMPLATE_PATH; exports.pluginConfig = pluginConfig;
