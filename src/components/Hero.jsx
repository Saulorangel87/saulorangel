import Reveal from './Reveal';
import { ArrowUpRight, MapPinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-backdrop"
        src="./images/hero-desk.webp"
        alt=""
        aria-hidden="true"
        width="1536"
        height="1024"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="site-container hero-content">
        <Reveal className="hero-copy">
          <p className="eyebrow">desenvolvedor em formação</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-name">Saulo Rangel</span>
            <span className="hero-profession">Full Stack<br />Developer</span>
          </h1>
          <p className="hero-lede">
            Desenvolvo aplicações para resolver problemas reais — da interface ao backend e ao deploy.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Ver projetos <ArrowUpRight /></a>
            <a className="button button-outline" href="#contato">Entrar em contato</a>
          </div>
          <p className="hero-location"><MapPinIcon /> Campos dos Goytacazes, RJ</p>
        </Reveal>
      </div>
    </section>
  );
}
