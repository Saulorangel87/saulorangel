import { useRef } from 'react';
import { ExternalLink } from './Icons';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, featured = false }) {
  const cardRef = useRef(null);
  const handlePointerMove = (event) => {
    if (typeof window.matchMedia !== 'function') return;
    if (!window.matchMedia('(hover: hover)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current; if (!card) return;
    const rect = card.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - 0.5; const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--card-rx', `${(y * -3.5).toFixed(2)}deg`); card.style.setProperty('--card-ry', `${(x * 4).toFixed(2)}deg`);
  };
  const resetTilt = () => { const card = cardRef.current; if (card) { card.style.setProperty('--card-rx', '0deg'); card.style.setProperty('--card-ry', '0deg'); } };
  return <article ref={cardRef} className={`project-card ${featured ? 'project-card-featured' : ''}`} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}><div className="project-card-top"><span className="project-number">{project.number} / 04</span><span className="project-status"><i />{project.status}</span></div><ProjectVisual project={project} /><div className="project-card-content"><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-card-footer"><div className="tag-list" aria-label={`Tecnologias e temas de ${project.title}`}>{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>{project.restricted ? <span className="restricted-label">uso interno</span> : <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver o projeto ${project.title}`}><ExternalLink /></a>}</div></div></article>;
}
