# Plano e acompanhamento da refatoração

Projeto: portfólio pessoal de Saulo Rangel
Data de início: 2026-09-20
Direção: React + Vite + Tailwind CSS, sem backend

Este arquivo registra o processo da migração e as decisões tomadas. O arquivo `refatoracao.md` permanece como especificação da tarefa; este documento é o acompanhamento da execução.

## Etapas

- [x] **Etapa 1 — Auditoria da base atual**
  - Projeto estático com `index.html`, CSS principal em `assets/styles/style.css` e `assets/scripts/script.js`.
  - `index.html`: 747 linhas e aproximadamente 1,1 MB, incluindo uma imagem de currículo em base64.
  - Não existiam `package.json`, Vite, React ou Tailwind no checkout inicial.
  - O JavaScript existente controla tema claro/escuro com `localStorage` e rolagem suave.
  - Assets existentes: retrato, screenshots dos projetos antigos, fontes DM Sans/DM Serif, favicon e domínio em `CNAME`.
  - A home antiga mistura apresentação, timeline, barras percentuais, exercícios básicos e currículo completo.
  - Riscos identificados: CSS duplicado/inline, documento excessivamente grande, exposição de telefone e currículo completo, dependência de script de anúncios e ausência de uma arquitetura de dados para projetos.

- [x] **Etapa 2 — Planejamento da migração**
  - Nova entrada Vite em `index.html`.
  - Componentes React separados por responsabilidade: `Navbar`, `Hero`, `About`, `Projects`, `TechStack`, `Journey`, `Contact` e `Footer`.
  - Dados dos projetos separados em `src/data/projects.js`.
  - Estilos e tokens visuais centralizados em `src/index.css`, com Tailwind CSS disponível no build.
  - Efeitos 3D feitos com CSS transforms, `requestAnimationFrame` e `IntersectionObserver`, com suporte a `prefers-reduced-motion`.
  - Currículo removido da homepage e projetos de estudo básico rebaixados para fora da apresentação principal.
  - Não será criado formulário falso, backend, analytics ou segredo de frontend.

- [x] **Etapa 3 — Migração estrutural para React + Vite + Tailwind**
  - Criados `package.json`, `package-lock.json`, `vite.config.js` e a entrada `index.html` do Vite.
  - Implementados os componentes React em `src/` e os dados em `src/data/projects.js`.
  - Dependências instaladas localmente com sucesso; nenhuma alteração foi feita no repositório remoto.
  - A homepage anterior foi preservada em `legacy/` antes da substituição.

- [x] **Etapa 4 — Identidade visual e conteúdo**
  - Aplicada a linguagem visual do modelo: dark mode, grid tecnológico, profundidade, azul/ciano/roxo e cards assimétricos.
  - O hero apresenta a proposta profissional; a experiência nos Correios foi integrada à narrativa sem transformar a homepage em currículo.
  - Priorizados Cadência, Controle de Estoque, Controle de Despesas e Guia de Logística.
  - O Guia aparece como uso interno, sem CTA de login; a imagem pública existente foi reaproveitada sem identificador visível.

- [x] **Etapa 5 — Responsividade, acessibilidade e interações**
  - Adicionadas regras mobile-first para telas pequenas, tablet e desktop, além de menu móvel e navegação por âncoras.
  - Incluídos link de salto, HTML semântico, headings hierárquicos, `aria-label`, foco visível, `rel="noreferrer"` nos links externos e `prefers-reduced-motion`.
  - O preview local foi aberto e a navegação para a seção de projetos foi verificada no navegador.
  - A validação final em dispositivos físicos ainda é recomendada antes da publicação; a base responsiva está implementada no CSS.

- [x] **Etapa 6 — Assets e segurança**
  - Reaproveitados apenas retrato, fontes, favicon e imagem pública já existentes no projeto.
  - A busca no novo código não encontrou matrícula, senha, token, chave de API ou segredo.
  - O telefone e o currículo completo não foram levados para a nova homepage.
  - Mantidos `CNAME` e `ads.txt` em `public/` para a saída do Vite; nenhum script de anúncio ou analytics foi adicionado à aplicação.

- [x] **Etapa 7 — Verificação**
  - `npm install`: concluído com sucesso; auditoria retornou 0 vulnerabilidades.
  - `npm run build`: concluído com sucesso no Vite 7.3.6.
  - Build gerada com HTML, CSS, JavaScript, fontes, favicon, imagens, `CNAME` e `ads.txt`.
  - Preview local verificado com título, navegação, conteúdo dos projetos e estrutura acessível visíveis.
  - Nenhum erro foi observado durante a navegação básica; a verificação em dispositivos físicos permanece como recomendação de publicação.

- [x] **Etapa 8 — Auditoria final**
  - Criado `.gitignore` para não versionar `node_modules/`, `dist/`, `.DS_Store` e arquivos locais.
  - Atualizado o `README.md` com o fluxo Vite, a estrutura atual e o arquivo de acompanhamento.
  - Confirmada a preservação dos arquivos legados em `legacy/` e das configurações de domínio/publicação.
  - O novo bundle principal ficou aproximadamente 75 kB gzipado em JavaScript e 8 kB gzipados em CSS, sem a imagem de currículo em base64.

## Decisões e pendências

- Os projetos reais devem ser descritos apenas com informações verificáveis nos sites, no repositório ou fornecidas pelo proprietário.
- Os projetos reais com acesso público serão verificados antes de receberem descrição definitiva.
- O Guia de Logística possui acesso restrito; não será apresentado com CTA de login.
- A imagem pública existente `assets/images/correios@3x.webp` foi usada no card do Guia; ela não contém matrícula visível na revisão realizada.
- Nenhuma configuração de produção será alterada sem revisão explícita.

## Resumo da entrega

O projeto agora usa Vite como ferramenta de desenvolvimento e build, React para a composição da homepage e Tailwind CSS integrado ao pipeline. O visual foi reconstruído seguindo o modelo aprovado, mantendo os projetos e a essência profissional de Saulo Rangel, com o conteúdo sensível e o currículo completo fora da homepage.
