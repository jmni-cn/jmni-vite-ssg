import { App, initPageData } from './app'; //initPageData build报错增加逻辑
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { DataContext } from './hooks'; // build报错增加逻辑
// For ssr component render

export async function render(pagePath: string) {
  // 初始化 PageData
  const pageData = await initPageData(''); // build报错增加逻辑

  return renderToString(
    <StaticRouter location={pagePath}>
      <DataContext.Provider value={pageData}>
        <App />
      </DataContext.Provider>
    </StaticRouter>
  );
}

// 导出路由数据
export { routes } from 'island:routes';
