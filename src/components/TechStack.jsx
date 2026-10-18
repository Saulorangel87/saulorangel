import Reveal from './Reveal';
import { technologyGroups } from '../data/projects';
import { usePreferences } from '../i18n/Preferences';

export default function TechStack() {
  const { t } = usePreferences();
  const groups = t('stack.groups');
  return (
    <section className="section-padding stack-section" id="tecnologias" aria-labelledby="tecnologias-title">
      <div className="site-container">
        <Reveal className="stack-heading">
          <div>
            <p className="eyebrow">{t('stack.eyebrow')}</p>
            <h2 id="tecnologias-title" className="section-title">{t('stack.title')}</h2>
          </div>
          <p>{t('stack.intro')}</p>
        </Reveal>
        <div className="technology-groups">
          {groups.map((group, index) => (
            <Reveal as="article" className="technology-group" key={index}>
              <span className="technology-index">0{index + 1}</span>
              <h3>{group.label}</h3>
              <p className="technology-description">{group.description}</p>
              <ul className="technology-list">
                {technologyGroups[index].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
