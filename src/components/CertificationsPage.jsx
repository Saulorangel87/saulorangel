import Reveal from './Reveal';
import { Credential, useCertificationMeta } from './CertificationParts';
import { certificationGroups, certifications } from '../data/certifications';
import { usePreferences } from '../i18n/Preferences';

function CertificationRow({ cert }) {
  const { title, meta, date } = useCertificationMeta(cert);
  return (
    <li className="cert-row">
      <span className="cert-date">{date}</span>
      <div>
        <h3>{title}</h3>
        <p className="cert-meta">{meta}</p>
      </div>
      <Credential cert={cert} />
    </li>
  );
}

export default function CertificationsPage() {
  const { t } = usePreferences();

  return (
    <section className="section-padding certs-page" aria-labelledby="certs-page-title">
      <div className="site-container">
        <Reveal>
          <a className="cert-back" href="#certificacoes">← {t('certs.page.back')}</a>
          <p className="eyebrow">{t('certs.page.eyebrow')}</p>
          <h1 id="certs-page-title" className="section-title">{t('certs.page.title')}<span>{t('certs.page.titleEm')}</span></h1>
          <p className="certs-page-intro">{t('certs.page.intro')}</p>
          <span className="certs-page-count">{t('certs.page.count', { n: certifications.length })}</span>
        </Reveal>
        {certificationGroups.map((group) => {
          const items = certifications.filter((cert) => cert.group === group);
          if (!items.length) return null;
          return (
            <Reveal as="div" className="cert-group" key={group}>
              <div className="cert-group-head">
                <h2>{t('certs.groups.' + group)}</h2>
                <span>{items.length}</span>
              </div>
              <ul className="cert-list">
                {items.map((cert) => <CertificationRow key={cert.id} cert={cert} />)}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
