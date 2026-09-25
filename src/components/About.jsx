import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section-padding about-section" id="sobre" aria-labelledby="sobre-title">
      <div className="site-container about-grid">
        <Reveal className="about-manifesto">
          <p className="eyebrow">sobre mim</p>
          <span className="manifesto-index">01 / PROCESSO</span>
          <p className="manifesto-quote">Do problema real <em>à aplicação.</em></p>
          <span className="manifesto-caption">Processo também é evolução.</span>
          <span className="manifesto-rule" aria-hidden="true" />
        </Reveal>
        <Reveal className="about-copy">
          <h2 id="sobre-title" className="section-title">A experiência de campo também faz parte do código.</h2>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e estou construindo meu caminho como desenvolvedor Full Stack. Gosto de entender como uma aplicação funciona por inteiro: da interface ao dado, da ideia ao deploy.
          </p>
          <p>
            Minha experiência profissional nos Correios me ensinou a observar processos, gargalos e pessoas. É desse lugar que nascem muitos dos meus projetos: problemas concretos, tratados com curiosidade, responsabilidade e software.
          </p>
          <p className="about-signature">Saulo Rangel <span>· Campos dos Goytacazes, RJ</span></p>
        </Reveal>
      </div>
    </section>
  );
}
