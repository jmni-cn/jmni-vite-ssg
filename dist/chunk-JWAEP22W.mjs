import { createRequire } from "module"; const require = createRequire(import.meta.url);
import {
  __dirname
} from "./chunk-RLDK5MNK.mjs";

// src/node/constants/index.ts
import path from "path";
var PACKAGE_ROOT = path.join(__dirname, "..");
var CLIENT_ENTRY_PATH = path.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "client-entry.tsx"
);
var SERVER_ENTRY_PATH = path.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "ssr-entry.tsx"
);
var DEFAULT_TEMPLATE_PATH = path.join(PACKAGE_ROOT, "template.html");

// src/node/plugin-island/indexHtml.ts
import { readFile } from "fs/promises";
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
              src: `/@fs/${CLIENT_ENTRY_PATH}`
            },
            injectTo: "body"
          }
        ]
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res) => {
          let content = await readFile(DEFAULT_TEMPLATE_PATH, "utf-8");
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

// src/node/vitePlugins.ts
import pluginReact from "@vitejs/plugin-react";

// src/node/plugin-island/config.ts
import { relative } from "path";
import { join } from "path";
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
            "@runtime": join(PACKAGE_ROOT, "src", "runtime", "index.ts")
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
${relative(config.root, ctx.file)} changed, restarting server...`
        );
        await restartServer();
      }
    }
  };
}

// src/node/plugin-routes/RouteService.ts
import fastGlob from "fast-glob";
import { normalizePath } from "vite";
import path2 from "path";
var RouteService = class {
  #scanDir;
  #routeData = [];
  constructor(scanDir) {
    this.#scanDir = scanDir;
  }
  async init() {
    const files = fastGlob.sync(["**/*.{js,jsx,ts,tsx,md,mdx}"], {
      cwd: this.#scanDir,
      absolute: true,
      ignore: ["**/node_modules/**", "**/build/**", "config.ts"]
    }).sort();
    files.forEach((file) => {
      const fileRelativePath = normalizePath(
        path2.relative(this.#scanDir, file)
      );
      const routePath = this.normalizeRoutePath(fileRelativePath);
      this.#routeData.push({
        routePath,
        absolutePath: normalizePath(file)
      });
    });
  }
  generateRoutesCode() {
    return `
        import React from 'react';
        import loadable from '@loadable/component';
        ${this.#routeData.map((route, index) => {
      return `const Route${index} = loadable(() => import('${route.absolutePath}'));`;
    }).join("\n       ")}
        export const routes = [
        ${this.#routeData.map((route, index) => {
      return `{ path: '${route.routePath}', element: React.createElement(Route${index}) }`;
    }).join(",\n       ")}
        ];
    `;
  }
  getRouteMeta() {
    return this.#routeData;
  }
  normalizeRoutePath(rawPath) {
    const routePath = rawPath.replace(/\.(.*)?$/, "").replace(/index$/, "");
    return routePath.startsWith("/") ? routePath : `/${routePath}`;
  }
};

// src/node/plugin-routes/index.ts
var CONVENTIONAL_ROUTE_ID = "island:routes";
function pluginRoutes(options) {
  const routeService = new RouteService(options.root);
  return {
    name: "island:routes",
    async configResolved() {
      await routeService.init();
    },
    resolveId(id) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return "\0" + id;
      }
    },
    load(id) {
      if (id === "\0" + CONVENTIONAL_ROUTE_ID) {
        return routeService.generateRoutesCode();
      }
    }
  };
}

// src/node/plugin-mdx/pluginMdxRollup.ts
import pluginMdx from "@mdx-js/rollup";
import remarkPluginGFM from "remark-gfm";
import rehypePluginAutolinkHeadings from "rehype-autolink-headings";
import rehypePluginSlug from "rehype-slug";
import remarkPluginMDXFrontMatter from "remark-mdx-frontmatter";
import remarkPluginFrontmatter from "remark-frontmatter";
function pluginMdxRollup() {
  return pluginMdx({
    remarkPlugins: [
      remarkPluginGFM,
      remarkPluginFrontmatter,
      [remarkPluginMDXFrontMatter, { name: "frontmatter" }]
    ],
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: "header-anchor"
          },
          content: {
            type: "text",
            value: "#"
          }
        }
      ]
    ]
  });
}

// src/node/plugin-mdx/index.ts
function createPluginMdx() {
  return [pluginMdxRollup()];
}

// src/node/vitePlugins.ts
function createVitePlugins(config, restartServer) {
  return [
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: "automatic"
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root
    }),
    createPluginMdx()
  ];
}

export {
  PACKAGE_ROOT,
  CLIENT_ENTRY_PATH,
  SERVER_ENTRY_PATH,
  createVitePlugins
};
