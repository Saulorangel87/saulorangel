import { ArrowUpRight } from './Icons';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  const titleId = 'project-title-' + project.id;

  return (
    <article className={'project-row' + (reversed ? ' is-reversed' : '')} aria-labelledby={titleId}>
      <div className="project-copy">
        <span className="project-number" aria-hidden="true">{project.number}</span>
        <p className="project-kicker">{project.eyebrow}<span> · {project.status}</span></p>
        <h3 id={titleId}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label={'Tecnologias e temas de ' + project.title}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.url ? (
          <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
            Ver projeto <ArrowUpRight />
          </a>
        ) : (
          <span className="restricted-label">Projeto de uso interno</span>
        )}
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}
