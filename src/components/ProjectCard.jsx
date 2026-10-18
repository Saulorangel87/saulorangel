import { ArrowUpRight } from './Icons';
import ProjectVisual from './ProjectVisual';
import { usePreferences } from '../i18n/Preferences';

export default function ProjectCard({ project, index }) {
  const { t } = usePreferences();
  const reversed = index % 2 === 1;
  const titleId = 'project-title-' + project.id;
  const text = t('projects.items.' + project.id);

  return (
    <article className={'project-row' + (reversed ? ' is-reversed' : '')} aria-labelledby={titleId}>
      <div className="project-copy">
        <span className="project-number" aria-hidden="true">{project.number}</span>
        <p className="project-kicker">{text.eyebrow}<span> · {text.status}</span></p>
        <h3 id={titleId}>{text.title}</h3>
        <p className="project-description">{text.description}</p>
        <ul className="project-tags" aria-label={t('projects.tagsLabel', { title: text.title })}>
          {text.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.url ? (
          <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
            {t('projects.viewProject')} <ArrowUpRight />
          </a>
        ) : (
          <span className="restricted-label">{t('projects.internalUse')}</span>
        )}
      </div>
      <ProjectVisual project={project} title={text.title} />
    </article>
  );
}
