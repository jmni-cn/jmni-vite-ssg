import { createRequire } from "module"; const require = createRequire(import.meta.url);
import {
  CLIENT_ENTRY_PATH,
  SERVER_ENTRY_PATH,
  createVitePlugins
} from "./chunk-7KJZXD3H.mjs";
import {
  resolveConfig
} from "./chunk-RLDK5MNK.mjs";

// src/node/cli.ts
import cac from "cac";

// src/node/build.ts
import path, { dirname, join } from "path";
import { build as viteBuild } from "vite";
import fs from "fs-extra";
import ora from "ora";
import { pathToFileURL } from "url";
async function bundle(root, config) {
  const resolveViteConfig = async (isServer) => {
    return {
      mode: "production",
      root,
      plugins: await createVitePlugins(config, void 0, isServer),
      ssr: {
        noExternal: ["react-router-dom"]
      },
      build: {
        ssr: isServer,
        outDir: isServer ? path.join(root, ".temp") : path.join(root, "build"),
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
    const clientBuild = async () => viteBuild(await resolveViteConfig(false));
    const serverBuild = async () => viteBuild(await resolveViteConfig(true));
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
async function renderPage(render, root, clientBundle, routes) {
  console.log("Rendering page in server side...");
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  await Promise.all(
    routes.map(async (route) => {
      const routePath = route.path;
      const appHtml = render(routePath);
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
    <script type="module" src="/${clientChunk?.fileName}"><\/script>
  </body>
</html>`.trim();
      const fileName = routePath.endsWith("/") ? `${routePath}index.html` : `${routePath}.html`;
      await fs.ensureDir(join(root, "build", dirname(fileName)));
      await fs.writeFile(join(root, "build", fileName), html);
    })
  );
  await fs.remove(path.join(root, ".temp"));
}
async function build(root = process.cwd(), config) {
  const [clientBundle, serverBundle] = await bundle(root, config);
  const serverEntryPath = path.join(root, ".temp", "ssr-entry.js");
  const { render, routes } = await import(pathToFileURL(serverEntryPath).pathname);
  try {
    await renderPage(render, root, clientBundle, routes);
  } catch (e) {
    console.log("Render page error.\n", e);
  }
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
    const config = await resolveConfig(root, "build", "production");
    await build(root, config);
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
