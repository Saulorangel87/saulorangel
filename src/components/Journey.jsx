import Reveal from './Reveal';
import { journey } from '../data/projects';

export default function Journey() {
  return <section className="section-padding journey-section" id="trajetoria" aria-labelledby="trajetoria-title"><div className="site-container"><Reveal className="section-heading-row"><div><p className="eyebrow">04 · trajetória</p><h2 id="trajetoria-title" className="section-title">Uma carreira em<br /><span>mudança de camada.</span></h2></div><p className="section-intro">O caminho até a tecnologia não começou do zero. Ele se apoia em experiência, disciplina e vontade de resolver melhor.</p></Reveal><div className="journey-list">{journey.map((item, index) => <Reveal as="article" className="journey-item" key={`${item.date}-${item.title}`}><span className="journey-index">0{index + 1}</span><span className="journey-date">{item.date}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div></div></section>;
}
