import Reveal from './Reveal';
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { usePreferences } from '../i18n/Preferences';

export default function Contact() {
  const { t } = usePreferences();
  return (
    <section className="section-padding contact-section" id="contato" aria-labelledby="contato-title">
      <div className="site-container">
        <Reveal className="contact-layout">
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <div className="contact-copy">
            <h2 id="contato-title">{t('contact.titlePre')}<span>{t('contact.titleEm')}</span></h2>
            <p>{t('contact.text')}</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:sauloleonardo1987@gmail.com">
              {t('contact.sendEmail')} <ArrowUpRight />
            </a>
            <nav className="contact-links" aria-label={t('contact.socialLabel')}>
              <a href="https://github.com/Saulorangel87" target="_blank" rel="noopener noreferrer"><GitHubIcon />GitHub</a>
              <a href="https://www.linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6/" target="_blank" rel="noopener noreferrer"><LinkedInIcon />LinkedIn</a>
              <a href="mailto:sauloleonardo1987@gmail.com"><MailIcon />{t('contact.email')}</a>
            </nav>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
