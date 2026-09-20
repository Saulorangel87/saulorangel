import Reveal from './Reveal';
import { technologyGroups } from '../data/projects';

export default function TechStack() {
  return <section className="section-padding stack-section" id="tecnologias" aria-labelledby="tecnologias-title"><div className="site-container stack-grid"><Reveal className="stack-copy"><p className="eyebrow">03 · stack</p><h2 id="tecnologias-title" className="section-title">Ferramentas para construir do detalhe ao deploy.</h2><p>Não é uma lista para preencher espaço. É o conjunto de tecnologias que aparece nos projetos e no caminho que estou construindo agora.</p><span className="stack-note"><i /> aprendendo, testando, colocando em produção</span></Reveal><div className="technology-groups">{technologyGroups.map((group, index) => <Reveal as="article" className="technology-group" key={group.label}><div className="technology-group-heading"><span>0{index + 1}</span><div><h3>{group.label}</h3><p>{group.description}</p></div></div><div className="technology-list">{group.items.map((item) => <span className="technology-chip" key={item}>{item}</span>)}</div></Reveal>)}</div></div></section>;
}
