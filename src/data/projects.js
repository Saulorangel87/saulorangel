export const projects = [
  {
    id: 'cadencia', number: '01', eyebrow: 'aplicação real · 2026', title: 'Cadência',
    description: 'Treino inteligente de ciclismo que respeita disponibilidade, experiência, recuperação e evolução — com decisões explicáveis e dados protegidos.',
    tags: ['ciclismo', 'planejamento', 'produto'], status: 'em evolução', url: 'https://cadencia.devsaulo.com.br/', image: './images/cadencia.png?v=20260920', visual: 'cadencia',
  },
  {
    id: 'estoque', number: '02', eyebrow: 'aplicação real · 2026', title: 'Controle de Estoque',
    description: 'Aplicação para organizar produtos, estoque mínimo, importação de notas e acesso autenticado em uma operação simples de acompanhar.',
    tags: ['React', 'Go', 'SQLite', 'Docker'], status: 'em produção', url: 'https://estoque.devsaulo.com.br/', image: './images/estoque.png?v=20260920', visual: 'estoque',
  },
  {
    id: 'despesas', number: '03', eyebrow: 'aplicação real · 2026', title: 'Controle de Despesas',
    description: 'Uma aplicação criada para organizar e acompanhar a vida financeira com mais clareza, transformando registros do dia a dia em visão de conjunto.',
    tags: ['finanças', 'organização', 'produto'], status: 'em evolução', url: 'https://despesas.devsaulo.com.br/', image: './images/despesas.png?v=20260920', visual: 'despesas',
  },
  {
    id: 'logistica', number: '04', eyebrow: 'projeto de uso interno · 2026', title: 'Guia de Logística',
    description: 'Sistema interno para digitalizar mapas, ruas, rotas e organização operacional do CDD Campos dos Goytacazes.',
    tags: ['React', 'Go', 'PostgreSQL', 'Leaflet', 'PWA'], status: 'acesso restrito', url: null, image: './images/correios@3x.webp?v=20260920', visual: 'mapa', restricted: true,
  },
];

export const technologyGroups = [
  { label: 'Frontend', description: 'interfaces claras e responsivas', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Tailwind CSS'] },
  { label: 'Backend', description: 'serviços que sustentam o produto', items: ['Go', 'APIs REST'] },
  { label: 'Dados', description: 'informação organizada para decidir melhor', items: ['PostgreSQL', 'SQLite'] },
  { label: 'Infra & ferramentas', description: 'do código ao ambiente em produção', items: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'Cloudflare', 'VPS', 'Git', 'GitHub', 'VS Code'] },
];

export const journey = [
  { date: '2013', title: 'Experiência de campo', text: 'Ingresso nos Correios e construção de uma visão prática sobre rotas, operação e pessoas.' },
  { date: '2026', title: 'Tecnologia ganha espaço', text: 'Certificações, estudos de Python e IA, e o início da graduação em Análise e Desenvolvimento de Sistemas.' },
  { date: '2026', title: 'Problemas reais viram produtos', text: 'Primeiro projeto real: o Guia de Logística. Depois, aplicações de treino, estoque e organização financeira.' },
  { date: 'próximo passo', title: 'Full Stack em formação', text: 'Aprofundar arquitetura, APIs, dados e colaboração em times de tecnologia.' },
];
