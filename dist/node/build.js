"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.renderPage = exports.bundle = void 0;
const path = require("path");
const vite_1 = require("vite");
const constants_1 = require("./constants");
const fs = require("fs-extra");
async function bundle(root) {
    const resolveViteConfig = (isServer) => {
        return {
            mode: 'production',
            root,
            build: {
                ssr: isServer,
                outDir: isServer ? '.temp' : 'build',
                rollupOptions: {
                    input: isServer ? constants_1.SERVER_ENTRY_PATH : constants_1.CLIENT_ENTRY_PATH,
                    output: {
                        format: isServer ? 'cjs' : 'esm'
                    }
                }
            }
        };
    };
    try {
        const clientBuild = async () => (0, vite_1.build)(resolveViteConfig(false));
        const serverBuild = async () => (0, vite_1.build)(resolveViteConfig(true));
        const [clientBundle, serverBundle] = await Promise.all([serverBuild(), clientBuild()]);
        return [clientBundle, serverBundle];
    }
    catch (e) {
        console.log(e);
    }
}
exports.bundle = bundle;
async function renderPage(render, root, clientBundle) {
    const appHtml = render();
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
    </body>
  </html>`.trim();
    await fs.writeFile(path.join(root, 'build', 'index.html'), html);
    await fs.remove(path.join(root, ".temp"));
}
exports.renderPage = renderPage;
async function build(root = process.cwd()) {
    // 打包代码，包括 client 端 + server 端
    const [clientBundle, serverBundle] = await bundle(root);
    // debugger
    // 引入 server-entry 模块
    const serverEntryPath = path.join(root, '.temp', 'ssr-entry.js');
    // 服务端渲染，产出 HTML str
    const { render } = require(serverEntryPath);
    await renderPage(render, root, clientBundle);
}
exports.build = build;
