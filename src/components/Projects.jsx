import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { usePreferences } from '../i18n/Preferences';

export default function Projects() {
  const { t } = usePreferences();
  return (
    <section className="projects-section" id="projetos" aria-labelledby="projetos-title">
      <div className="site-container projects-intro">
        <Reveal>
          <p className="eyebrow">{t('projects.eyebrow')}</p>
          <h2 id="projetos-title" className="section-title">
            {t('projects.titleLine')}<br />{t('projects.titlePre')}<span>{t('projects.titleEm')}</span>
          </h2>
        </Reveal>
        <Reveal className="projects-intro-copy">
          <p>{t('projects.intro')}</p>
          <span>{t('projects.count', { n: String(projects.length).padStart(2, '0') })}</span>
        </Reveal>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal as="div" className="project-reveal" key={project.id}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
