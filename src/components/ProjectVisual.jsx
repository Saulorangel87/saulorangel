import { useEffect, useRef } from 'react';
import { ArrowUpRight } from './Icons';
import { usePreferences } from '../i18n/Preferences';

export default function ProjectVisual({ project, title }) {
  const { t } = usePreferences();
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
    ? t('projects.altInternal')
    : t('projects.altScreenshot', { title });

  return (
    <figure className="project-visual">
      <div className="project-image-frame">
        {project.url ? (
          <a
            className="project-image-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('projects.openSite', { title })}
          >
            <img
              ref={imageRef}
              src={project.image}
              alt={alt}
              loading="lazy"
              decoding="async"
              width={project.width}
              height={project.height}
            />
            <span className="project-image-cta" aria-hidden="true">
              {t('projects.visitProject')} <ArrowUpRight />
            </span>
          </a>
        ) : (
          <img
            ref={imageRef}
            src={project.image}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={project.width}
            height={project.height}
          />
        )}
      </div>
      <figcaption><span>{title}</span><span>{t('projects.interfaceCaption')}</span></figcaption>
    </figure>
  );
}
