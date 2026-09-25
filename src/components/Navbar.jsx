import { useEffect, useState } from 'react';
import { MenuIcon } from './Icons';

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Stack' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
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
        <a className="brand-wordmark" href="#inicio" onClick={closeMenu} aria-label="Saulo Rangel, voltar ao início">
          SAULO RANGEL<span aria-hidden="true">.</span>
        </a>
        <nav id="main-nav" className={'main-nav' + (menuOpen ? ' is-open' : '')} aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              className={active === link.href.slice(1) ? 'is-active' : ''}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
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
