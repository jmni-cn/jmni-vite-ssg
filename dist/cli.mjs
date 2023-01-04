import { createRequire } from "module"; const require = createRequire(import.meta.url);
import {
  CLIENT_ENTRY_PATH,
  SERVER_ENTRY_PATH
} from "./chunk-KEYUN5CX.mjs";
import {
  __require
} from "./chunk-Q3QJ7CQS.mjs";

// src/node/cli.ts
import cac from "cac";

// src/node/build.ts
import { build as viteBuild } from "vite";
import fs from "fs-extra";
import ora from "ora";
import { pathToFileURL } from "url";
var path = __require("path");
async function bundle(root) {
  const resolveViteConfig = (isServer) => {
    return {
      mode: "production",
      root,
      build: {
        ssr: isServer,
        outDir: isServer ? ".temp" : "build",
        rollupOptions: {
          input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
          output: {
            format: isServer ? "cjs" : "esm"
          }
        }
      }
    };
  };
  const spinner = ora();
  spinner.start("Building client + server bundles...");
  try {
    const clientBuild = async () => viteBuild(resolveViteConfig(false));
    const serverBuild = async () => viteBuild(resolveViteConfig(true));
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
  await fs.writeFile(path.join(root, "build", "index.html"), html);
  await fs.remove(path.join(root, ".temp"));
}
async function build(root = process.cwd()) {
  const [clientBundle, serverBundle] = await bundle(root);
  const serverEntryPath = path.join(root, ".temp", "ssr-entry.js");
  console.log("test lint-staged eslint --fix");
  const { render } = await import(pathToFileURL(serverEntryPath));
  await renderPage(render, root, clientBundle);
}

// src/node/cli.ts
import path2 from "path";
var cli = cac("island").version("0.0.1").help();
cli.command("dev [root]", "start dev serve").action(async (root) => {
  const createServer = async () => {
    const { createDevServer } = await import("./dev.mjs");
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
    root = path2.resolve(root);
    await build(root);
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
