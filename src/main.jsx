import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ativa as animações somente depois que o JavaScript iniciou com sucesso.
// Assim, uma falha de compatibilidade não deixa todo o conteúdo invisível.
document.documentElement.classList.add('js-ready');

const rootElement = document.getElementById('root');
const fallbackMarkup = rootElement?.innerHTML ?? '';
const restoreFallback = () => {
  if (rootElement && !rootElement.querySelector('.site-shell')) rootElement.innerHTML = fallbackMarkup;
};
window.addEventListener('error', restoreFallback);
window.addEventListener('unhandledrejection', restoreFallback);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
