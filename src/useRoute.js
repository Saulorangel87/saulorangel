import { useEffect, useState } from 'react';

// Roteamento por hash: o site continua uma página estática (sem regra extra no Nginx).
// `#/certificacoes` abre a lista completa; qualquer outro hash (#projetos, #contato...) é a home.
export const CERTIFICATIONS_HASH = '#/certificacoes';

export function useRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash.startsWith(CERTIFICATIONS_HASH) ? 'certifications' : 'home';
}
