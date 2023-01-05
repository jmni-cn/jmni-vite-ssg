import { createRoot } from 'react-dom/client';
import { App } from './App';
import siteData from 'island:site-data';
import { BrowserRouter } from 'react-router-dom';

function resderInBrowser() {
  console.log(siteData);

  const containerEL = document.getElementById('root');

  if (!containerEL) {
    throw new Error('#root element not found');
  }

  createRoot(containerEL).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

resderInBrowser();
