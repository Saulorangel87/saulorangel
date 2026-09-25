import Reveal from './Reveal';
import { technologyGroups } from '../data/projects';

export default function TechStack() {
  return (
    <section className="section-padding stack-section" id="tecnologias" aria-labelledby="tecnologias-title">
      <div className="site-container">
        <Reveal className="stack-heading">
          <div>
            <p className="eyebrow">stack</p>
            <h2 id="tecnologias-title" className="section-title">Ferramentas para construir do detalhe ao deploy.</h2>
          </div>
          <p>As tecnologias que aparecem nos projetos e no caminho que estou construindo agora.</p>
        </Reveal>
        <div className="technology-groups">
          {technologyGroups.map((group, index) => (
            <Reveal as="article" className="technology-group" key={group.label}>
              <span className="technology-index">0{index + 1}</span>
              <h3>{group.label}</h3>
              <p className="technology-description">{group.description}</p>
              <ul className="technology-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
