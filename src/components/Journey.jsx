import Reveal from './Reveal';
import { usePreferences } from '../i18n/Preferences';

export default function Journey() {
  const { t } = usePreferences();
  const items = t('journey.items');
  return (
    <section className="section-padding journey-section" id="trajetoria" aria-labelledby="trajetoria-title">
      <div className="site-container">
        <Reveal className="journey-heading">
          <div>
            <p className="eyebrow">{t('journey.eyebrow')}</p>
            <h2 id="trajetoria-title" className="section-title">{t('journey.titlePre')}<span>{t('journey.titleEm')}</span></h2>
          </div>
          <p>{t('journey.intro')}</p>
        </Reveal>
        <div className="journey-list">
          {items.map((item, index) => (
            <Reveal as="article" className="journey-item" key={index}>
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
