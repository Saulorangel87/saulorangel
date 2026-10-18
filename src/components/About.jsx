import Reveal from './Reveal';
import { usePreferences } from '../i18n/Preferences';

export default function About() {
  const { t } = usePreferences();
  return (
    <section className="section-padding about-section" id="sobre" aria-labelledby="sobre-title">
      <div className="site-container about-grid">
        <Reveal className="about-manifesto">
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <span className="manifesto-index">{t('about.index')}</span>
          <p className="manifesto-quote">{t('about.quotePre')}<em>{t('about.quoteEm')}</em></p>
          <span className="manifesto-caption">{t('about.caption')}</span>
          <span className="manifesto-rule" aria-hidden="true" />
        </Reveal>
        <Reveal className="about-copy">
          <h2 id="sobre-title" className="section-title">{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p className="about-signature">Saulo Rangel <span>· {t('hero.location')}</span></p>
        </Reveal>
      </div>
    </section>
  );
}
