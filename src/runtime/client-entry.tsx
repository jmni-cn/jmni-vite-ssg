import { createRoot } from 'react-dom/client';
import { App, initPageData } from './App';
import siteData from 'island:site-data';
import { BrowserRouter } from 'react-router-dom';
import { DataContext } from './hooks';

async function resderInBrowser() {
  console.log(siteData);

  const containerEL = document.getElementById('root');

  if (!containerEL) {
    throw new Error('#root element not found');
  }

  // 初始化 PageData
  const pageData = await initPageData(location.pathname);

  createRoot(containerEL).render(
    <DataContext.Provider value={pageData}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext.Provider>
  );
}

resderInBrowser();
