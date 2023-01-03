import { createRoot } from 'react-dom/client';
import { App } from './App';

function resderInBrowser() {
  const containerEL = document.getElementById('root');

  if (!containerEL) {
    throw new Error('#root element not found');
  }

  createRoot(containerEL).render(<App />);
}

resderInBrowser();
