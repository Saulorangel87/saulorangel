// Conteúdo do currículo (PT e EN). Edite aqui e rode `npm run resume` para regenerar os PDFs em public/.
// Privacidade: telefone, CPF e endereço não entram no currículo público.
export const contact = {
  email: 'sauloleonardo1987@gmail.com',
  linkedin: 'linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6',
  linkedinUrl: 'https://www.linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6/',
  github: 'github.com/Saulorangel87',
  githubUrl: 'https://github.com/Saulorangel87',
  site: 'devsaulo.com.br',
  siteUrl: 'https://devsaulo.com.br/',
};

export const resume = {
  pt: {
    file: 'curriculo-saulo-rangel-pt.pdf',
    lang: 'pt-BR',
    docTitle: 'Currículo — Saulo Rangel Rosa Leonardo',
    role: 'Desenvolvedor Full Stack em formação',
    headline: 'Analista de Sistemas em formação · Profissional dos Correios',
    labels: {
      contact: 'Contato', location: 'Localização', skills: 'Competências', languages: 'Idiomas',
      profile: 'Perfil profissional', experience: 'Experiência profissional', projects: 'Projetos',
      education: 'Formação acadêmica', certifications: 'Certificações',
    },
    location: 'Campos dos Goytacazes, RJ',
    skills: [
      { group: 'Frontend', items: 'React, JavaScript, HTML, CSS, Vite, Tailwind CSS' },
      { group: 'Backend e linguagens', items: 'Go, Python, C, APIs REST' },
      { group: 'Dados', items: 'PostgreSQL, SQLite' },
      { group: 'Infra e ferramentas', items: 'Docker, Docker Compose, Linux, Nginx, Cloudflare, Git, GitHub' },
      { group: 'Outras', items: 'Segurança web (fundamentos), Hardware e manutenção, Gestão de rotas e logística, Adaptabilidade' },
    ],
    languages: ['Português — Nativo'],
    profile: 'Profissional dos Correios há mais de 13 anos, com ingresso por concurso público e histórico de responsabilidade e comprometimento operacional, em transição para a tecnologia. Cursa Análise e Desenvolvimento de Sistemas e constrói aplicações reais de ponta a ponta (interface, API em Go, banco de dados e deploy com Docker e Nginx), de ferramentas internas de logística a produtos próprios. Perfil analítico e orientado a soluções, une a experiência de campo ao desenvolvimento de software.',
    experience: [
      {
        title: 'Agente de Correios — Carteiro Motorizado', badge: 'Efetivo',
        meta: 'Correios (ECT) · Mar. 2013 – Presente · Campos dos Goytacazes, RJ',
        text: 'Entrega de correspondências e encomendas externas como motorista, com pontualidade, organização de rotas e atendimento ao público. Mais de 13 anos de vivência nas operações logísticas e nos sistemas da empresa, base para os projetos de melhoria que desenvolve atualmente.',
      },
    ],
    projects: [
      {
        title: 'Guia de Logística — CDD Campos dos Goytacazes', meta: '2026 · uso interno', stack: 'React · Go · PostgreSQL · Leaflet · PWA',
        text: 'Sistema que digitaliza mapas, ruas, rotas e a organização operacional do CDD, substituindo mapas de papel por um mapa interativo acessível de qualquer dispositivo. Acesso restrito.',
      },
      {
        title: 'Cadência', meta: '2026', stack: 'Treino de ciclismo · planejamento', link: 'cadencia.devsaulo.com.br', url: 'https://cadencia.devsaulo.com.br/',
        text: 'Treino inteligente de ciclismo que respeita disponibilidade, experiência, recuperação e evolução, com decisões explicáveis e dados protegidos.',
      },
      {
        title: "Let's Go Run", meta: '2026', stack: 'Corrida · planos de treino', link: 'letsgorun.devsaulo.com.br', url: 'https://letsgorun.devsaulo.com.br/',
        text: 'Planos de corrida que se adaptam à rotina, ao corpo e à próxima prova, do primeiro 5 km à maratona, em português e inglês.',
      },
      {
        title: 'Controle de Estoque', meta: '2026', stack: 'React · Go · SQLite · Docker', link: 'estoque.devsaulo.com.br', url: 'https://estoque.devsaulo.com.br/',
        text: 'Organiza produtos, estoque mínimo, importação de notas e acesso autenticado em uma operação simples de acompanhar.',
      },
      {
        title: 'Controle de Despesas', meta: '2026', stack: 'Finanças · organização', link: 'despesas.devsaulo.com.br', url: 'https://despesas.devsaulo.com.br/',
        text: 'Organiza e acompanha a vida financeira com mais clareza, transformando registros do dia a dia em visão de conjunto.',
      },
      {
        title: 'Melhoria no App de Entregas dos Correios (SRO Operacional)', meta: '2026 · em andamento', stack: 'Proposta de funcionalidade',
        text: 'Proposta para o aplicativo interno que permite ao carteiro avisar o destinatário via WhatsApp antes da tentativa de entrega, para reduzir entregas não realizadas por ausência.',
      },
    ],
    education: [
      { title: 'Análise e Desenvolvimento de Sistemas', badge: 'Em andamento', meta: 'Estácio de Sá · Graduação · 2026 – Presente · Campos dos Goytacazes, RJ' },
    ],
    certifications: [
      { title: 'Trilha Cibersegurança (6 cursos)', issuer: 'Alura', detail: '52 h', date: 'Out/2026' },
      { title: 'Git e GitHub: compartilhando e colaborando em projetos', issuer: 'Alura', detail: '8 h', date: 'Jul/2026' },
      { title: 'Trilha Praticando JavaScript (5 cursos)', issuer: 'Alura', detail: '30 h', date: 'Jun/2026' },
      { title: 'HTML e CSS: ambiente, estrutura e estilo', issuer: 'Alura', detail: '20 h', date: 'Jun/2026' },
      { title: 'Trilha Desenvolvimento Front-end (8 cursos)', issuer: 'Alura', detail: '60 h', date: 'Jun/2026' },
      { title: 'Aprendendo com Python', issuer: 'Enap', detail: '20 h · nota 100', date: 'Abr/2026' },
      { title: 'Introdução ao Processamento de Linguagem Natural', issuer: 'Enap', detail: '25 h · nota 100', date: 'Abr/2026' },
      { title: 'Manutenção de Computadores: simuladores, sistemas operacionais e montagem', issuer: 'IFRS', detail: '20 h · 87,78%', date: 'Mar/2026' },
      { title: 'Manutenção de Computadores: hardware, software e evolução', issuer: 'IFRS', detail: '20 h · 96,67%', date: 'Mar/2026' },
      { title: 'Python — Certificação de Conclusão', issuer: 'Santander Open Academy', detail: '8 h', date: 'Mar/2026' },
    ],
  },

  en: {
    file: 'curriculo-saulo-rangel-en.pdf',
    lang: 'en',
    docTitle: 'Resume — Saulo Rangel Rosa Leonardo',
    role: 'Full Stack Developer in training',
    headline: 'Systems Analyst in training · Correios professional',
    labels: {
      contact: 'Contact', location: 'Location', skills: 'Skills', languages: 'Languages',
      profile: 'Professional summary', experience: 'Professional experience', projects: 'Projects',
      education: 'Education', certifications: 'Certifications',
    },
    location: 'Campos dos Goytacazes, RJ, Brazil',
    skills: [
      { group: 'Frontend', items: 'React, JavaScript, HTML, CSS, Vite, Tailwind CSS' },
      { group: 'Backend & languages', items: 'Go, Python, C, REST APIs' },
      { group: 'Data', items: 'PostgreSQL, SQLite' },
      { group: 'Infra & tools', items: 'Docker, Docker Compose, Linux, Nginx, Cloudflare, Git, GitHub' },
      { group: 'Other', items: 'Web security (fundamentals), Hardware & maintenance, Route & logistics management, Adaptability' },
    ],
    languages: ['Portuguese — Native'],
    profile: "Correios (Brazilian postal service) professional for over 13 years, hired through a public civil-service exam with a record of responsibility and operational commitment, now moving into technology. Studying Systems Analysis and Development and building real applications end to end (interface, Go API, database and deployment with Docker and Nginx), from internal logistics tools to products of my own. Analytical and solution-oriented, I combine field experience with software development.",
    experience: [
      {
        title: 'Postal Agent — Motorized Mail Carrier', badge: 'Permanent',
        meta: 'Correios (ECT) · Mar 2013 – Present · Campos dos Goytacazes, RJ, Brazil',
        text: 'Delivery of mail and parcels as a driver, with punctuality, route organization and customer service. Over 13 years of hands-on knowledge of the logistics operations and systems of the company, which is the basis for the improvement projects I build today.',
      },
    ],
    projects: [
      {
        title: 'Logistics Guide — Campos dos Goytacazes distribution center', meta: '2026 · internal use', stack: 'React · Go · PostgreSQL · Leaflet · PWA',
        text: 'System that digitizes maps, streets, routes and operational organization for the distribution center, replacing paper maps with an interactive map available on any device. Restricted access.',
      },
      {
        title: 'Cadência', meta: '2026', stack: 'Cycling training · planning', link: 'cadencia.devsaulo.com.br', url: 'https://cadencia.devsaulo.com.br/',
        text: 'Smart cycling training that respects availability, experience, recovery and progress, with explainable decisions and protected data.',
      },
      {
        title: "Let's Go Run", meta: '2026', stack: 'Running · training plans', link: 'letsgorun.devsaulo.com.br', url: 'https://letsgorun.devsaulo.com.br/',
        text: 'Running plans that adapt to your routine, your body and your next race, from the first 5K to the marathon, in Portuguese and English.',
      },
      {
        title: 'Inventory Control', meta: '2026', stack: 'React · Go · SQLite · Docker', link: 'estoque.devsaulo.com.br', url: 'https://estoque.devsaulo.com.br/',
        text: 'Organizes products, minimum stock levels, invoice imports and authenticated access in an operation that is simple to follow.',
      },
      {
        title: 'Expense Tracker', meta: '2026', stack: 'Finance · organization', link: 'despesas.devsaulo.com.br', url: 'https://despesas.devsaulo.com.br/',
        text: 'Organizes and follows personal finances more clearly, turning everyday records into the big picture.',
      },
      {
        title: 'Improvement for the Correios Delivery App (SRO Operacional)', meta: '2026 · in progress', stack: 'Feature proposal',
        text: 'Proposal for the internal app that lets the mail carrier notify the recipient via WhatsApp before a delivery attempt, to reduce failed deliveries caused by absence.',
      },
    ],
    education: [
      { title: 'Systems Analysis and Development', badge: 'In progress', meta: 'Estácio de Sá · Bachelor’s degree · 2026 – Present · Campos dos Goytacazes, RJ, Brazil' },
    ],
    certifications: [
      { title: 'Cybersecurity track (6 courses)', issuer: 'Alura', detail: '52 h', date: 'Oct 2026' },
      { title: 'Git and GitHub: sharing and collaborating on projects', issuer: 'Alura', detail: '8 h', date: 'Jul 2026' },
      { title: 'Practicing JavaScript track (5 courses)', issuer: 'Alura', detail: '30 h', date: 'Jun 2026' },
      { title: 'HTML and CSS: environment, structure and style', issuer: 'Alura', detail: '20 h', date: 'Jun 2026' },
      { title: 'Front-end Development track (8 courses)', issuer: 'Alura', detail: '60 h', date: 'Jun 2026' },
      { title: 'Learning with Python', issuer: 'Enap', detail: '20 h · grade 100', date: 'Apr 2026' },
      { title: 'Introduction to Natural Language Processing', issuer: 'Enap', detail: '25 h · grade 100', date: 'Apr 2026' },
      { title: 'Computer Maintenance: simulators, operating systems and assembly', issuer: 'IFRS', detail: '20 h · 87.78%', date: 'Mar 2026' },
      { title: 'Computer Maintenance: hardware, software and evolution', issuer: 'IFRS', detail: '20 h · 96.67%', date: 'Mar 2026' },
      { title: 'Python — Certificate of Completion', issuer: 'Santander Open Academy', detail: '8 h', date: 'Mar 2026' },
    ],
  },
};
