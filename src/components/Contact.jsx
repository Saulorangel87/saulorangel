import Reveal from './Reveal';
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export default function Contact() {
  return (
    <section className="section-padding contact-section" id="contato" aria-labelledby="contato-title">
      <div className="site-container">
        <Reveal className="contact-layout">
          <p className="eyebrow">contato</p>
          <div className="contact-copy">
            <h2 id="contato-title">Vamos construir <span>algo que faça sentido?</span></h2>
            <p>Estou aberto a conversas, oportunidades e projetos interessantes.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:sauloleonardo1987@gmail.com">
              Enviar e-mail <ArrowUpRight />
            </a>
            <nav className="contact-links" aria-label="Redes e contato">
              <a href="https://github.com/Saulorangel87" target="_blank" rel="noopener noreferrer"><GitHubIcon />GitHub</a>
              <a href="https://www.linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6/" target="_blank" rel="noopener noreferrer"><LinkedInIcon />LinkedIn</a>
              <a href="mailto:sauloleonardo1987@gmail.com"><MailIcon />E-mail</a>
            </nav>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
