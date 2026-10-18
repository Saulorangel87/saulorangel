// Dados estruturais dos projetos. Os textos (título, descrição, status, tags) ficam em src/i18n/translations.js.
export const projects = [
  { id: 'cadencia', number: '01', url: 'https://cadencia.devsaulo.com.br/', image: './images/cadencia.png?v=20260920', width: 1908, height: 891 },
  { id: 'estoque', number: '02', url: 'https://estoque.devsaulo.com.br/', image: './images/estoque.png?v=20260920', width: 1908, height: 891 },
  { id: 'despesas', number: '03', url: 'https://despesas.devsaulo.com.br/', image: './images/despesas.png?v=20260920', width: 1908, height: 891 },
  { id: 'logistica', number: '04', url: null, image: './images/correios@3x.webp?v=20261018', width: 1901, height: 857, restricted: true },
  { id: 'letsgorun', number: '05', url: 'https://letsgorun.devsaulo.com.br/', image: './images/letsgorun.webp?v=20261018', width: 1912, height: 866 },
];

export const technologyGroups = [
  ['React', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Tailwind CSS'],
  ['Go', 'Python', 'C', 'APIs REST'],
  ['PostgreSQL', 'SQLite'],
  ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'Cloudflare', 'VPS', 'Git', 'GitHub', 'VS Code'],
];
