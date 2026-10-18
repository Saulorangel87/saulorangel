import { useEffect, useState } from 'react';
import { MenuIcon, MoonIcon, SunIcon } from './Icons';
import { usePreferences } from '../i18n/Preferences';
import { LANGUAGES } from '../i18n/translations';

const links = [
  { href: '#projetos', key: 'projects' },
  { href: '#sobre', key: 'about' },
  { href: '#trajetoria', key: 'journey' },
  { href: '#tecnologias', key: 'stack' },
  { href: '#contato', key: 'contact' },
];

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = usePreferences();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        }, { rootMargin: '-38% 0px -52% 0px', threshold: 0 })
      : null;

    sections.forEach((section) => observer?.observe(section));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="site-container nav-inner">
        <a className="brand-wordmark" href="#inicio" onClick={closeMenu} aria-label={t('common.backHome')}>
          SAULO RANGEL
        </a>
        <nav id="main-nav" className={'main-nav' + (menuOpen ? ' is-open' : '')} aria-label={t('common.mainNav')}>
          {links.map((link) => (
            <a
              key={link.href}
              className={active === link.href.slice(1) ? 'is-active' : ''}
              href={link.href}
              onClick={closeMenu}
            >
              {t('nav.' + link.key)}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <div className="lang-switch" role="group" aria-label={t('common.language')}>
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                lang={code === 'pt' ? 'pt-BR' : 'en'}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === 'dark' ? t('common.switchToLight') : t('common.switchToDark')}
            title={theme === 'dark' ? t('common.switchToLight') : t('common.switchToDark')}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? t('common.closeMenu') : t('common.openMenu')}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </header>
  );
}
