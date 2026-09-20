import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return <section className="section-padding projects-section" id="projetos" aria-labelledby="projetos-title"><div className="site-container"><Reveal className="section-heading-row"><div><p className="eyebrow">02 · laboratório real</p><h2 id="projetos-title" className="section-title">O problema vem primeiro.<br /><span>A tecnologia encontra o caminho.</span></h2></div><p className="section-intro">Aplicações que nasceram de necessidades concretas — e que me ensinaram a pensar em produto, dados, operação e pessoas.</p></Reveal><div className="projects-grid">{projects.map((project, index) => <Reveal key={project.id} className={`project-reveal project-reveal-${index + 1}`}><ProjectCard project={project} featured={index === 0} /></Reveal>)}</div></div></section>;
}
