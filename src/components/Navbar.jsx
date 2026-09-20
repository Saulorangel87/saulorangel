import { useEffect, useState } from 'react';
import { MenuIcon } from './Icons';

const links = [
  { href: '#inicio', label: 'Início' }, { href: '#sobre', label: 'Sobre' }, { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' }, { href: '#trajetoria', label: 'Trajetória' }, { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-38% 0px -52% 0px', threshold: 0 })
      : null;
    sections.forEach((section) => observer?.observe(section));
    return () => { window.removeEventListener('scroll', onScroll); observer?.disconnect(); };
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="site-container flex min-h-[4.5rem] items-center justify-between gap-6">
    <a className="brand-mark" href="#inicio" onClick={closeMenu} aria-label="Saulo Rangel, voltar ao início"><span>SR</span></a>
    <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">{links.map((link) => <a key={link.href} className={active === link.href.slice(1) ? 'is-active' : ''} href={link.href} onClick={closeMenu}>{link.label}</a>)}</nav>
    <div className="header-status hidden items-center gap-2 sm:flex"><span className="status-dot" /> aberto a oportunidades</div>
    <button className="menu-toggle sm:hidden" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><MenuIcon open={menuOpen} /></button>
  </div></header>;
}
