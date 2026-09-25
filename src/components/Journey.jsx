import Reveal from './Reveal';
import { journey } from '../data/projects';

export default function Journey() {
  return (
    <section className="section-padding journey-section" id="trajetoria" aria-labelledby="trajetoria-title">
      <div className="site-container">
        <Reveal className="journey-heading">
          <div>
            <p className="eyebrow">trajetória</p>
            <h2 id="trajetoria-title" className="section-title">Uma carreira em <span>movimento.</span></h2>
          </div>
          <p>O caminho até a tecnologia se apoia em experiência, disciplina e vontade de resolver melhor.</p>
        </Reveal>
        <div className="journey-list">
          {journey.map((item, index) => (
            <Reveal as="article" className="journey-item" key={item.date + '-' + item.title}>
              <span className="journey-index">0{index + 1}</span>
              <span className="journey-date">{item.date}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
