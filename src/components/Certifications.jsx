import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';
import { Credential, useCertificationMeta } from './CertificationParts';
import { certifications } from '../data/certifications';
import { CERTIFICATIONS_HASH } from '../useRoute';
import { usePreferences } from '../i18n/Preferences';

function CertificationCard({ cert }) {
  const { title, meta, date } = useCertificationMeta(cert);
  return (
    <Reveal as="article" className="cert-card">
      <span className="cert-date">{date}</span>
      <h3>{title}</h3>
      <p className="cert-meta">{meta}</p>
      <Credential cert={cert} />
    </Reveal>
  );
}

export default function Certifications() {
  const { t } = usePreferences();
  const featured = certifications.filter((cert) => cert.featured);

  return (
    <section className="section-padding certs-section" id="certificacoes" aria-labelledby="certificacoes-title">
      <div className="site-container">
        <Reveal className="certs-heading">
          <div>
            <p className="eyebrow">{t('certs.eyebrow')}</p>
            <h2 id="certificacoes-title" className="section-title">{t('certs.titlePre')}<span>{t('certs.titleEm')}</span></h2>
          </div>
          <p>{t('certs.intro')}</p>
        </Reveal>
        <div className="cert-grid">
          {featured.map((cert) => <CertificationCard key={cert.id} cert={cert} />)}
        </div>
        <a className="button button-outline certs-cta" href={CERTIFICATIONS_HASH}>
          {t('certs.seeAll', { n: certifications.length })} <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
