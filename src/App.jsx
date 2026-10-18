import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import CertificationsPage from './components/CertificationsPage';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useRoute } from './useRoute';
import { usePreferences } from './i18n/Preferences';

export default function App() {
  const route = useRoute();
  const { t } = usePreferences();
  const firstRender = useRef(true);

  useEffect(() => {
    document.title = route === 'certifications' ? t('certs.page.docTitle') : t('meta.title');
  }, [route, t]);

  // Ao trocar de "página", o navegador ainda não tinha o elemento do hash: rola manualmente.
  useEffect(() => {
    const isFirst = firstRender.current;
    firstRender.current = false;
    const id = route === 'home' ? decodeURIComponent(window.location.hash.slice(1)) : '';
    const target = id ? document.getElementById(id) : null;
    if (target) target.scrollIntoView();
    else if (!isFirst || route === 'certifications') window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  return (
    <>
      <div className="site-shell">
        <Navbar route={route} />
        <main id="conteudo">
          {route === 'certifications' ? (
            <CertificationsPage />
          ) : (
            <>
              <Hero />
              <Projects />
              <About />
              <Journey />
              <Certifications />
              <TechStack />
              <Contact />
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
