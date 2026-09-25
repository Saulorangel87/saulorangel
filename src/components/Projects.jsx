import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="projects-section" id="projetos" aria-labelledby="projetos-title">
      <div className="site-container projects-intro">
        <Reveal>
          <p className="eyebrow">projetos em destaque</p>
          <h2 id="projetos-title" className="section-title">
            Aplicações reais<br />para <span>problemas reais.</span>
          </h2>
        </Reveal>
        <Reveal className="projects-intro-copy">
          <p>Cada projeto é um estudo, um desafio e uma oportunidade de transformar ideias em soluções funcionais.</p>
          <span>04 projetos · 2026</span>
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
