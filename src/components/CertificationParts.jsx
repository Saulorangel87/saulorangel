import { ArrowUpRight } from './Icons';
import { usePreferences } from '../i18n/Preferences';

export function formatCertificationDate(isoDate, lang) {
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const date = new Date(isoDate + 'T00:00:00Z');
  const month = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' }).format(date).replace('.', '');
  return month + ' ' + date.getUTCFullYear();
}

export function useCertificationMeta(cert) {
  const { t, lang } = usePreferences();
  const parts = [t('certs.issuers.' + cert.issuer), t('certs.hours', { n: cert.hours })];
  if (cert.grade?.type === 'score') parts.push(t('certs.score', { n: cert.grade.value }));
  if (cert.grade?.type === 'percent') {
    parts.push(cert.grade.value.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US', { minimumFractionDigits: 2 }) + '%');
  }
  return {
    title: t('certs.items.' + cert.id + '.title'),
    meta: parts.join(' · '),
    date: formatCertificationDate(cert.date, lang),
  };
}

// Comprovação sem publicar o PDF: link público (Alura) ou código/nº do certificado (+ link do validador, quando existe).
export function Credential({ cert }) {
  const { t } = usePreferences();
  const { validation } = cert;

  if (!validation.idKind) {
    return (
      <p className="credential">
        <a href={validation.url} target="_blank" rel="noopener noreferrer">{t('certs.validate')} <ArrowUpRight size={14} /></a>
      </p>
    );
  }

  return (
    <p className="credential">
      <span>{t('certs.idLabels.' + validation.idKind)}: <code>{validation.id}</code></span>
      {validation.url && (
        <a href={validation.url} target="_blank" rel="noopener noreferrer">{t('certs.validateAt')} <ArrowUpRight size={14} /></a>
      )}
    </p>
  );
}
