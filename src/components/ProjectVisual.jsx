import { useEffect, useRef } from 'react';

export default function ProjectVisual({ project }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const motionAllowed = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    if (!image || !motionAllowed.matches) return undefined;

    let frame = 0;
    const updateParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const bounds = image.getBoundingClientRect();
        const progress = (bounds.top + bounds.height / 2) / window.innerHeight;
        const offset = Math.max(-12, Math.min(12, (0.5 - progress) * 24));
        image.style.setProperty('--parallax-y', offset.toFixed(1) + 'px');
        frame = 0;
      });
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const alt = project.id === 'logistica'
    ? 'Captura do Guia de Logística usado internamente no CDD Campos dos Goytacazes'
    : 'Captura de tela da aplicação ' + project.title;

  return (
    <figure className="project-visual">
      <div className="project-image-frame">
        <img
          ref={imageRef}
          src={project.image}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={project.id === 'logistica' ? 1914 : 1908}
          height={project.id === 'logistica' ? 873 : 891}
        />
      </div>
      <figcaption><span>{project.title}</span><span>interface do projeto</span></figcaption>
    </figure>
  );
}
