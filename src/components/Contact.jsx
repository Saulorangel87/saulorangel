import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  return <section className="section-padding contact-section" id="contato" aria-labelledby="contato-title"><div className="site-container"><Reveal className="contact-card"><div><p className="eyebrow">05 · próximo capítulo</p><h2 id="contato-title">Vamos construir algo que faça sentido?</h2><p>Estou aberto a oportunidades de estágio, colaboração e projetos que conectem curiosidade, responsabilidade e impacto real.</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:sauloleonardo1987@gmail.com">Entrar em contato <ArrowUpRight /></a><div className="contact-links"><a href="https://github.com/Saulorangel87" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></Reveal></div></section>;
}
