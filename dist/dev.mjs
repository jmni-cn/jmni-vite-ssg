import { createRequire } from "module"; const require = createRequire(import.meta.url);
import {
  PACKAGE_ROOT,
  createVitePlugins
} from "./chunk-XDNP3K55.mjs";
import {
  resolveConfig
} from "./chunk-RLDK5MNK.mjs";

// src/node/dev.ts
import { createServer } from "vite";
async function createDevServer(root, restartServer) {
  const config = await resolveConfig(root, "serve", "development");
  console.log(config);
  return createServer({
    root: PACKAGE_ROOT,
    plugins: await createVitePlugins(config, restartServer),
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
export {
  createDevServer
};
