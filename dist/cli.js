"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _module = require('module'); const require = _module.createRequire.call(void 0, import.meta.url);




var _chunkRXYPNVJKjs = require('./chunk-RXYPNVJK.js');


var _chunk5ETD4WGWjs = require('./chunk-5ETD4WGW.js');

// src/node/cli.ts
var _cac = require('cac'); var _cac2 = _interopRequireDefault(_cac);

// src/node/build.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _vite = require('vite');
var _fsextra = require('fs-extra'); var _fsextra2 = _interopRequireDefault(_fsextra);
var _ora = require('ora'); var _ora2 = _interopRequireDefault(_ora);
var _url = require('url');
async function bundle(root, config) {
  const resolveViteConfig = async (isServer) => {
    return {
      mode: "production",
      root,
      plugins: await _chunkRXYPNVJKjs.createVitePlugins.call(void 0, config),
      ssr: {
        noExternal: ["react-router-dom"]
      },
      build: {
        ssr: isServer,
        outDir: isServer ? _path2.default.join(root, ".temp") : _path2.default.join(root, "build"),
        rollupOptions: {
          input: isServer ? _chunkRXYPNVJKjs.SERVER_ENTRY_PATH : _chunkRXYPNVJKjs.CLIENT_ENTRY_PATH,
          output: {
            format: isServer ? "cjs" : "esm"
          }
        }
      }
    };
  };
  const spinner = _ora2.default.call(void 0, );
  spinner.start("Building client + server bundles...");
  try {
    const clientBuild = async () => _vite.build.call(void 0, await resolveViteConfig(false));
    const serverBuild = async () => _vite.build.call(void 0, await resolveViteConfig(true));
    const [clientBundle, serverBundle] = await Promise.all([
      clientBuild(),
      serverBuild()
    ]);
    spinner.stop();
    return [clientBundle, serverBundle];
  } catch (e) {
    console.log(e);
  }
}
async function renderPage(render, root, clientBundle) {
  const appHtml = render();
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>title</title>
      <meta name="description" content="xxx">
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script src="/${clientChunk.fileName}" type="module" ><\/script>
    </body>
  </html>`.trim();
  await _fsextra2.default.writeFile(_path2.default.join(root, "build", "index.html"), html);
  await _fsextra2.default.remove(_path2.default.join(root, ".temp"));
}
async function build(root = process.cwd(), config) {
  const [clientBundle, serverBundle] = await bundle(root, config);
  const serverEntryPath = _path2.default.join(root, ".temp", "ssr-entry.js");
  const { render } = await Promise.resolve().then(() => require(_url.pathToFileURL.call(void 0, serverEntryPath).pathname));
  await renderPage(render, root, clientBundle);
}

// src/node/cli.ts

var cli = _cac2.default.call(void 0, "island").version("0.0.1").help();
cli.command("dev [root]", "start dev serve").action(async (root) => {
  const createServer = async () => {
    const { createDevServer } = await Promise.resolve().then(() => require("./dev.js"));
    const server = await createDevServer(root, async () => {
      await server.close();
      await createServer();
    });
    await server.listen();
    server.printUrls();
  };
  await createServer();
});
cli.command("build [root]", "build in production").action(async (root) => {
  try {
    root = _path2.default.resolve(root);
    const config = await _chunk5ETD4WGWjs.resolveConfig.call(void 0, root, "build", "production");
    await build(root, config);
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
