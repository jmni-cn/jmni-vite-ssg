import path from 'path';
import { build as viteBuild, InlineConfig } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constants';

import type { RollupOutput } from 'rollup';
import fs from 'fs-extra';
// import { join } from "path";
import ora from 'ora';
import { SiteConfig } from 'shared/types';
import pluginReact from '@vitejs/plugin-react';
import { pluginConfig } from './plugin-island/config';
import { pluginRoutes } from './plugin-routes';
import { pathToFileURL } from 'url';
// const dynamicImport = new Function('m', 'return import(m)');

export async function bundle(root: string, config: SiteConfig) {
  const resolveViteConfig = (isServer: boolean): InlineConfig => {
    return {
      mode: 'production',
      root,
      plugins: [
        pluginReact(),
        pluginConfig(config),
        pluginRoutes({ root: config.root })
      ],
      ssr: {
        noExternal: ['react-router-dom']
      },
      build: {
        ssr: isServer,
        outDir: isServer ? path.join(root, '.temp') : path.join(root, 'build'),
        rollupOptions: {
          input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
          output: {
            format: isServer ? 'cjs' : 'esm'
          }
        }
      }
    };
  };

  // const { default: ora } = await dynamicImport('ora');
  const spinner = ora();
  spinner.start('Building client + server bundles...');
  // console.log(('Building client + server bundles...'));

  try {
    const clientBuild = async () => viteBuild(resolveViteConfig(false));
    const serverBuild = async () => viteBuild(resolveViteConfig(true));

    const [clientBundle, serverBundle] = await Promise.all([
      clientBuild(),
      serverBuild()
    ]);
    spinner.stop();
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}

export async function renderPage(
  render: () => string,
  root: string,
  clientBundle: RollupOutput
) {
  const appHtml = render();
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
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
      <script src="/${clientChunk.fileName}" type="module" ></script>
    </body>
  </html>`.trim();
  await fs.writeFile(path.join(root, 'build', 'index.html'), html);
  await fs.remove(path.join(root, '.temp'));
}

export async function build(root: string = process.cwd(), config: SiteConfig) {
  // 打包代码，包括 client 端 + server 端
  const [clientBundle, serverBundle] = await bundle(root, config);
  //   debugger;
  // 引入 server-entry 模块
  const serverEntryPath = path.join(root, '.temp', 'ssr-entry.js');
  // 服务端渲染，产出 HTML str

  // const { render } = await import(serverEntryPath);
  const { render } = await import(pathToFileURL(serverEntryPath).pathname);

  await renderPage(render, root, clientBundle);
}
