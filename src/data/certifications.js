// Dados estruturais das certificações. Títulos, instituições e grupos ficam em src/i18n/translations.js (chave `certs`).
// Nenhum PDF é publicado: cada certificado é comprovado por link público ou código de validação da instituição.
// `featured: true` faz o certificado aparecer na seção da home; todos aparecem na página #/certificacoes.
const ENAP_VALIDATION_URL = 'https://www.escolavirtual.gov.br/documentos/validacao';

export const certificationGroups = ['web', 'python', 'security', 'hardware'];

export const certifications = [
  {
    id: 'ciberseguranca', issuer: 'alura', hours: 52, date: '2026-10-12', group: 'security', featured: true,
    validation: { url: 'https://cursos.alura.com.br/degree/certificate/7ddc07b6-f537-4dbc-8dcc-026da2c7f44c' },
  },
  {
    id: 'git-github', issuer: 'alura', hours: 8, date: '2026-07-23', group: 'web',
    validation: { url: 'https://cursos.alura.com.br/certificate/6d5a0a3a-4162-4b84-a9b7-2a97042f9fde' },
  },
  {
    id: 'praticando-js', issuer: 'alura', hours: 30, date: '2026-06-11', group: 'web', featured: true,
    validation: { url: 'https://cursos.alura.com.br/degree/certificate/6825f2aa-50dd-4974-b305-13760ef3c67f' },
  },
  {
    id: 'html-css', issuer: 'alura', hours: 20, date: '2026-06-09', group: 'web',
    validation: { url: 'https://cursos.alura.com.br/certificate/d02a162c-aa1b-483b-950d-f0ca1aa227b2' },
  },
  {
    id: 'frontend', issuer: 'alura', hours: 60, date: '2026-06-06', group: 'web', featured: true,
    validation: { url: 'https://cursos.alura.com.br/degree/certificate/74db4291-8c88-4b89-98f0-ee52ca694f0b' },
  },
  {
    id: 'enap-python', issuer: 'enap', hours: 20, date: '2026-04-07', group: 'python', grade: { type: 'score', value: 100 },
    validation: { idKind: 'code', id: '24ve217249049U6i', url: ENAP_VALIDATION_URL },
  },
  {
    id: 'enap-pln', issuer: 'enap', hours: 25, date: '2026-04-06', group: 'python', featured: true, grade: { type: 'score', value: 100 },
    validation: { idKind: 'code', id: '4ahe21704092iigy', url: ENAP_VALIDATION_URL },
  },
  {
    id: 'ifrs-simuladores', issuer: 'ifrs', hours: 20, date: '2026-03-27', group: 'hardware', grade: { type: 'percent', value: 87.78 },
    validation: { idKind: 'digital', id: 'e4ad33b8-d0b3-40d0-8d5f-791ac684028f' },
  },
  {
    id: 'ifrs-hardware', issuer: 'ifrs', hours: 20, date: '2026-03-20', group: 'hardware', grade: { type: 'percent', value: 96.67 },
    validation: { idKind: 'digital', id: 'bea9d210-14d7-4e7d-93ea-89303154601b' },
  },
  {
    id: 'santander-python', issuer: 'santander', hours: 8, date: '2026-03-16', group: 'python',
    validation: { idKind: 'serial', id: 'OA-2026-0316002365173' },
  },
];
