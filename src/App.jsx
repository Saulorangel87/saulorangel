import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const canMatchMedia = typeof window.matchMedia === 'function';
    if (!canMatchMedia) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduceMotion || !finePointer) return undefined;
    let frame = 0; let x = 0; let y = 0;
    const applyPointer = () => { root.style.setProperty('--pointer-x', x.toFixed(3)); root.style.setProperty('--pointer-y', y.toFixed(3)); frame = 0; };
    const onPointerMove = (event) => { x = event.clientX / window.innerWidth - 0.5; y = event.clientY / window.innerHeight - 0.5; if (!frame) frame = requestAnimationFrame(applyPointer); };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onPointerMove); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <><div className="site-shell"><Navbar /><main id="conteudo"><Hero /><About /><Projects /><TechStack /><Journey /><Contact /></main></div><Footer /></>;
}
