# Refatoração completa do portfólio pessoal — React + Tailwind CSS

Quero refatorar completamente meu portfólio pessoal:

https://devsaulo.com.br/

O projeto atualmente é um site estático e quero modernizar tanto a arquitetura quanto a identidade visual.

A nova versão deve ser desenvolvida em:

- React
- Vite
- Tailwind CSS
- JavaScript ou TypeScript, preferencialmente mantendo o padrão já existente no projeto caso exista
- Sem backend neste momento

Antes de modificar qualquer coisa, analise toda a estrutura atual do projeto.

Não comece simplesmente reescrevendo arquivos.

---

# 1. Objetivo principal

Quero transformar meu portfólio em uma apresentação moderna de desenvolvedor, dando muito mais destaque aos projetos reais que desenvolvi.

O portfólio atual representa uma fase anterior dos meus estudos.

Hoje já desenvolvo aplicações completas, incluindo frontend, APIs, bancos de dados, autenticação, Docker, deploy em VPS e aplicações utilizadas em situações reais.

Entretanto, não quero que o site tente me apresentar como desenvolvedor sênior ou invente experiência profissional em desenvolvimento que eu ainda não possuo.

A comunicação deve transmitir algo próximo de:

> Desenvolvedor Full Stack em formação, criando aplicações reais para resolver problemas reais.

Não precisa usar exatamente essa frase.

Crie uma comunicação profissional, natural e objetiva.

---

# 2. Direção visual

Quero abandonar o visual tradicional de portfólio e criar uma identidade mais moderna, tecnológica e imersiva.

A referência conceitual é:

- tecnologia;
- desenvolvimento de software;
- interfaces modernas;
- profundidade;
- elementos em camadas;
- movimentos sutis;
- sensação de ambiente digital.

Quero utilizar:

- dark mode como identidade principal;
- tons de azul, ciano e eventualmente roxo;
- gradientes discretos;
- glow controlado;
- transparências;
- glassmorphism apenas onde fizer sentido;
- grid tecnológico no background;
- elementos abstratos relacionados a programação;
- efeitos de profundidade;
- parallax;
- cards 3D;
- microinterações;
- animações suaves.

O resultado NÃO deve parecer:

- site gamer;
- site cyberpunk exagerado;
- painel administrativo;
- template genérico de portfólio;
- site cheio de neon piscando;
- demonstração de efeitos 3D sem propósito.

Quero um site profissional voltado para recrutadores, empresas e possíveis clientes de projetos freelance.

---

# 3. Regra fundamental sobre 3D e animações

Os efeitos devem complementar o conteúdo.

Não quero sacrificar:

- performance;
- responsividade;
- acessibilidade;
- legibilidade;
- navegação;
- experiência em celulares.

Evite Three.js ou bibliotecas 3D grandes apenas para produzir pequenos efeitos.

Priorize:

- CSS transforms;
- perspective;
- transform-style;
- translate3d;
- rotateX;
- rotateY;
- IntersectionObserver;
- requestAnimationFrame quando necessário;
- animações baseadas principalmente em transform e opacity.

Pode utilizar uma biblioteca de animação caso realmente agregue valor, mas justifique antes de adicionar uma dependência.

Evite dependências desnecessárias.

---

# 4. Hero da página

Quero uma primeira seção visualmente marcante.

Ela deverá apresentar:

Saulo Rangel

E uma descrição profissional curta.

Algo conceitualmente semelhante a:

"Desenvolvedor Full Stack em formação"

seguido de uma frase curta sobre transformar problemas reais em aplicações.

Não copie necessariamente essas frases.

Crie uma versão que combine melhor com a nova identidade.

O Hero pode utilizar elementos como:

- janela de código flutuante;
- terminal;
- símbolos relacionados a React / JavaScript / Go;
- pequenos elementos geométricos;
- partículas extremamente discretas;
- linhas conectando pontos;
- grid em perspectiva;
- objetos abstratos relacionados a desenvolvimento.

Esses elementos podem reagir suavemente:

- ao movimento do mouse no desktop;
- ao scroll;
- à posição do elemento no viewport.

O efeito deve ser muito sutil.

Não quero movimentos exagerados seguindo o cursor.

---

# 5. Mobile primeiro

O site obrigatoriamente deve funcionar muito bem em celulares.

Não quero apenas uma versão desktop que "se adapta".

Projete pensando em:

320px
375px
390px
430px

e depois tablets e desktop.

No celular:

- reduzir ou eliminar parallax pesado;
- remover movimentos que prejudiquem a leitura;
- cards devem ser fáceis de tocar;
- navegação deve ser confortável;
- nenhum conteúdo pode provocar scroll horizontal;
- textos devem manter tamanho adequado;
- botões precisam ter área de toque adequada;
- efeitos hover não podem ser necessários para acessar informações.

---

# 6. Navegação

Criar uma navbar moderna e discreta.

Possíveis seções:

Início
Sobre
Projetos
Tecnologias
Trajetória
Contato

Não quero mais uma opção "Currículo" como existe atualmente.

A seção atual de currículo deverá ser REMOVIDA.

Não criar nova página de currículo neste momento.

Depois decidirei como quero trabalhar essa informação.

A navbar pode ficar translúcida depois do scroll.

No mobile utilizar menu adequado e acessível.

---

# 7. Sobre mim

Criar uma seção curta.

Não quero um enorme bloco de texto contando minha vida.

Apresentar de forma resumida minha transição para tecnologia.

Contexto importante:

- curso Análise e Desenvolvimento de Sistemas;
- estudo desenvolvimento web;
- objetivo de evolução como desenvolvedor Full Stack;
- gosto de entender arquitetura e funcionamento das aplicações;
- procuro aplicar os estudos em projetos reais;
- vários projetos surgiram de problemas que encontrei no cotidiano.

Meu trabalho atual nos Correios pode aparecer como parte da trajetória e explicar a origem de projetos relacionados à logística.

Não transformar essa experiência em algo que pareça experiência profissional como desenvolvedor dentro da empresa.

---

# 8. Skills / tecnologias

Remover o modelo antigo de barras como:

HTML 80%
CSS 80%
JavaScript 65%
etc.

Não quero atribuir porcentagens arbitrárias ao meu conhecimento.

Criar algo mais profissional.

Por exemplo:

## Frontend

- React
- JavaScript
- HTML
- CSS
- Tailwind CSS

## Backend

- Go
- APIs REST

## Banco de dados

- PostgreSQL
- SQLite

## Infraestrutura / DevOps

- Docker
- Docker Compose
- Linux
- Nginx
- Cloudflare
- VPS

## Ferramentas

- Git
- GitHub
- VS Code

Somente exibir tecnologias que forem verdadeiras e que estejam confirmadas pelo projeto atual ou pelas informações existentes.

Não inventar tecnologias apenas para preencher a seção.

Podem ser utilizados ícones, cards, badges ou pequenos elementos 3D.

Não quero dezenas de logos gigantes ocupando a página inteira.

---

# 9. Projetos — prioridade máxima

Esta deve ser uma das partes mais importantes do site.

Quero deixar de destacar exercícios simples e passar a apresentar os projetos reais que desenvolvi.

Os quatro projetos principais inicialmente serão:

---

## Projeto 1 — Cadência

URL:

https://cadencia.devsaulo.com.br/

Aplicação voltada para ciclismo e planejamento inteligente de treinos.

Use o site real como referência visual e funcional.

Apresente o projeto de maneira profissional, destacando:

- problema;
- solução;
- principais funcionalidades;
- tecnologias, SOMENTE se puderem ser verificadas;
- aprendizado ou desafio técnico interessante.

Adicionar botão:

"Ver projeto"

Pode utilizar screenshot do sistema no card.

---

## Projeto 2 — Controle de Estoque

URL:

https://estoque.devsaulo.com.br/

É uma aplicação real de controle de estoque.

Entre as tecnologias e características conhecidas estão:

- React
- Vite
- Go
- API
- SQLite
- autenticação
- Docker
- deploy em VPS

Possui recursos como:

- controle de produtos;
- estoque mínimo;
- autenticação;
- importação de notas/XML;
- integração entre frontend e backend.

Analise o projeto/site antes de escrever a descrição final.

Não invente funcionalidades que não existam.

Adicionar botão:

"Ver projeto"

---

## Projeto 3 — Controle de Despesas

URL:

https://despesas.devsaulo.com.br/

Utilize o projeto real como referência.

Mostre-o como uma aplicação criada para organização e acompanhamento financeiro.

Analise a aplicação antes de escrever detalhes.

Não invente stack, funcionalidades ou números.

Adicionar botão:

"Ver projeto"

---

## Projeto 4 — Guia de Logística: CDD Campos dos Goytacazes

Este projeto é especial.

URL:

https://cddcampos.devsaulo.com.br/

O sistema possui acesso restrito a funcionários.

Por isso NÃO dependa do acesso ao site para montar a apresentação.

Vou fornecer junto deste prompt uma captura de tela do projeto.

USE ESSA CAPTURA como imagem de apresentação.

IMPORTANTE:

Na captura existe uma matrícula de funcionário na área superior direita da interface.

ANTES de utilizar a imagem publicamente:

EMBACE SOMENTE A MATRÍCULA.

Não esconda:

- layout;
- mapa;
- menus;
- nome do projeto;
- estatísticas;
- legenda;
- demais partes da interface.

Apenas a matrícula deve ficar ilegível.

Não tente reconstruir ou adivinhar a matrícula.

Não exponha esse dado em:

- HTML;
- alt;
- nomes de arquivos;
- metadata;
- comentários;
- código fonte.

O projeto utiliza tecnologias como:

- React
- Vite
- Go
- Fiber
- PostgreSQL
- Leaflet
- OpenStreetMap
- Docker
- autenticação
- PWA

É uma aplicação criada para digitalizar e melhorar processos de logística e organização de rotas.

O sistema inclui funcionalidades relacionadas a:

- mapas;
- ruas;
- rotas;
- distritos;
- colaboradores;
- relatórios;
- ordenamento;
- administração.

Não é necessário mostrar todas elas no portfólio.

Crie uma descrição curta e profissional.

Como o sistema é restrito, NÃO apresentar um botão que induza visitantes a tentar fazer login.

Em vez de "Ver projeto", utilizar algo como:

"Projeto de uso interno"

ou

"Visualizar detalhes"

Caso exista modal de detalhes.

Adicionar badge:

"Acesso restrito"

---

# 10. Design dos cards de projetos

Quero fugir do tradicional:

imagem
título
texto
botão

dentro de quatro caixas iguais.

Quero que os projetos sejam apresentados de maneira mais sofisticada.

Podem existir cards grandes e assimétricos no desktop.

Uma possibilidade:

Projeto principal ocupando aproximadamente 2/3 da largura.

Outros projetos distribuídos em grid.

Cada card poderá ter:

- screenshot;
- título;
- breve explicação;
- tecnologias;
- botão;
- status;
- efeito de profundidade.

No hover desktop:

- leve rotateX / rotateY;
- elevação;
- mudança de iluminação;
- movimento extremamente pequeno da imagem.

Nada exagerado.

No touch/mobile:

não depender desse comportamento.

---

# 11. Screenshots

Para Cadência, Estoque e Despesas:

caso seja possível obter as telas diretamente dos projetos, utilize screenshots reais.

Não crie mockups falsos que mostrem funcionalidades inexistentes.

Otimize as imagens.

Preferencialmente:

AVIF
ou
WebP

com fallback se necessário.

Não carregar imagens gigantes na página.

Usar:

loading="lazy"

nas imagens fora da primeira dobra.

Definir width/height ou aspect-ratio para evitar layout shift.

---

# 12. Trajetória

Quero manter a ideia de trajetória, porém em uma versão muito mais compacta e moderna.

Não precisa mostrar tudo.

Pode destacar alguns marcos importantes:

- ingresso nos Correios;
- início dos estudos em tecnologia;
- ADS;
- primeiros projetos;
- projetos reais desenvolvidos;
- evolução para aplicações Full Stack.

Pode utilizar uma timeline vertical ou horizontal dependendo do viewport.

Não transformar essa seção em um currículo completo.

---

# 13. Projetos antigos

Os projetos de estudo básicos atualmente existentes no portfólio NÃO devem ter o mesmo destaque dos projetos reais.

Projetos como exercícios de:

- HTML;
- CSS;
- Cordel;
- Android;
- links;
- formulário/login de curso;

podem ser removidos da página principal.

Se houver motivo para preservá-los, podemos posteriormente criar uma seção separada chamada:

"Laboratório"
ou
"Primeiros estudos"

Mas NÃO implemente essa seção agora.

A prioridade são meus projetos atuais.

---

# 14. Contato / freelance

Atualmente o site continuará sendo completamente estático.

NÃO implementar backend.

NÃO criar API falsa.

NÃO implementar envio de formulário apenas no frontend fingindo funcionar.

Futuramente quero disponibilizar um formulário para pessoas interessadas em solicitar orçamento de desenvolvimento freelance.

Portanto, organize a arquitetura de maneira que futuramente seja simples adicionar uma seção:

"Vamos construir algo?"

ou

"Solicitar orçamento"

Neste momento podemos ter apenas contato profissional através dos canais já existentes.

Pode existir CTA como:

"Entre em contato"

Mas sem formulário funcional nesta fase.

---

# 15. Estrutura React

Organizar adequadamente os componentes.

Exemplo conceitual:

src/
  components/
    layout/
    ui/
    sections/
    projects/

  data/
    projects.ts
    skills.ts

  hooks/

  assets/
    projects/
    icons/

  styles/

Não precisa obrigatoriamente seguir exatamente esta estrutura.

Primeiro analise a complexidade real do projeto.

Evite criar abstrações desnecessárias.

Componentes possíveis:

Navbar
Hero
About
Projects
ProjectCard
TechStack
Journey
Contact
Footer

Evite arquivos enormes.

Evite também fragmentar uma seção simples em dez componentes sem necessidade.

---

# 16. Dados dos projetos

Evitar colocar todas as informações diretamente dentro do JSX.

Criar estrutura de dados organizada para os projetos.

Exemplo conceitual:

{
  title,
  description,
  image,
  url,
  technologies,
  status,
  restricted
}

Os componentes devem renderizar esses dados.

Isso permitirá adicionar novos projetos no futuro sem modificar toda a interface.

---

# 17. Segurança

Segurança é uma prioridade do projeto.

Embora seja um site estático, siga boas práticas.

## Nunca colocar no frontend:

- senhas;
- tokens;
- secrets;
- API keys privadas;
- credenciais;
- dados internos;
- matrículas;
- informações pessoais desnecessárias.

Lembre-se:

qualquer variável `VITE_*` enviada para o frontend é pública.

Não considere `.env` frontend como armazenamento de segredo.

---

## React

Evitar:

dangerouslySetInnerHTML

a menos que exista uma justificativa muito forte.

Não renderizar HTML externo sem sanitização.

Não utilizar `eval`.

Não executar conteúdo recebido de parâmetros da URL.

---

## Links externos

Para links usando:

target="_blank"

utilizar:

rel="noopener noreferrer"

---

## Dependências

Minimizar dependências.

Antes de adicionar qualquer biblioteca:

- verificar necessidade;
- verificar manutenção;
- verificar se a funcionalidade pode ser feita sem dependência pesada.

Não adicionar pacotes apenas para resolver pequenos efeitos visuais.

---

# 18. Privacidade

Não exponha informações pessoais desnecessárias.

Não exibir matrícula de funcionário.

Não utilizar dados privados presentes em screenshots.

Evitar expor telefone pessoal diretamente no site.

Priorizar canais profissionais como:

- GitHub;
- LinkedIn;
- e-mail profissional, caso esteja configurado para uso público.

Não adicionar analytics, trackers ou pixels de publicidade sem solicitação.

---

# 19. Segurança no deploy

Caso o projeto possua configuração de Nginx ou deploy, revisar possibilidade de utilizar headers como:

Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy

HSTS somente quando configurado corretamente em HTTPS.

Não alterar configurações de infraestrutura de produção sem explicar previamente a mudança.

Se não fizer parte do repositório, documentar recomendações em vez de inventar configuração.

---

# 20. Acessibilidade

Quero boa acessibilidade desde o início.

Seguir WCAG sempre que possível.

Implementar:

- HTML semântico;
- header;
- nav;
- main;
- section;
- footer;
- headings em ordem lógica;
- labels adequados;
- alt text útil;
- navegação por teclado;
- foco claramente visível;
- contraste adequado;
- botões reais para ações;
- links reais para navegação;
- `aria-label` somente quando necessário;
- não usar div clicável no lugar de button;
- áreas de toque confortáveis.

Não remover outline sem fornecer alternativa equivalente.

---

# 21. Reduced motion

Isso é especialmente importante por causa do parallax.

Implementar suporte a:

prefers-reduced-motion: reduce

Quando ativo:

- remover parallax;
- reduzir animações;
- eliminar movimentos contínuos;
- evitar transformações que possam causar desconforto.

O conteúdo deve continuar completamente funcional sem animações.

---

# 22. Performance

Performance é prioridade.

Quero boa experiência principalmente em smartphones.

Evitar:

- grandes bibliotecas 3D;
- vídeos enormes em background;
- múltiplos canvases;
- partículas excessivas;
- imagens sem compressão;
- dezenas de listeners de scroll;
- animações que provoquem layout/reflow constantemente.

Priorizar:

transform
opacity

para animações.

Utilizar IntersectionObserver quando apropriado.

Utilizar requestAnimationFrame quando realmente necessário para efeitos ligados ao cursor/scroll.

---

# 23. Core Web Vitals

Manter atenção principalmente a:

LCP
CLS
INP

Evitar layout shift.

Fontes e imagens devem ser configuradas de maneira eficiente.

Não carregar várias famílias ou dezenas de pesos de fontes.

---

# 24. Meta de qualidade

Depois da implementação quero buscar aproximadamente:

Lighthouse Mobile

Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 90+

Esses valores são objetivos, não devem ser obtidos através de truques que prejudiquem a aplicação.

---

# 25. SEO

Mesmo sendo um portfólio pessoal, implementar SEO básico.

Criar:

title

description

Open Graph

favicon

theme-color

canonical quando apropriado

estrutura correta de headings.

Conteúdo importante precisa estar em texto HTML.

Não coloque informações essenciais exclusivamente dentro de canvas ou animações.

---

# 26. Responsividade

Testar pelo menos:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Não criar breakpoints especificamente para cada resolução.

Utilizar comportamento fluido.

---

# 27. Qualidade do código

Quero código:

- legível;
- organizado;
- simples;
- manutenível;
- sem duplicação desnecessária;
- sem gambiarra;
- sem abstração prematura.

Não altere dezenas de arquivos sem necessidade.

Não reescreva partes que estejam boas apenas por preferência pessoal.

---

# 28. Processo de trabalho

IMPORTANTE:

Não implemente tudo de uma vez sem primeiro entender o projeto.

Trabalhe em etapas.

## Etapa 1 — Auditoria

Analise:

- estrutura atual;
- HTML;
- CSS;
- JavaScript;
- assets;
- dependências;
- conteúdo;
- responsividade;
- acessibilidade;
- problemas de performance;
- possíveis riscos de segurança.

Explique brevemente o que encontrou.

---

## Etapa 2 — Planejamento

Antes de alterar o código, proponha:

1. nova arquitetura;
2. componentes;
3. estrutura de pastas;
4. dependências necessárias;
5. estratégia de migração;
6. identidade visual;
7. comportamento mobile;
8. estratégia para animações e parallax;
9. otimização de imagens;
10. estratégia de acessibilidade.

Não implemente ainda.

---

## Etapa 3 — Migração estrutural

Converter o projeto para:

React + Vite + Tailwind CSS

Mantendo o site funcional.

Não começar pelos efeitos visuais complexos.

---

## Etapa 4 — Componentização

Criar a nova estrutura.

Hero
About
Projects
TechStack
Journey
Contact
Footer

---

## Etapa 5 — Identidade visual

Implementar o novo design.

---

## Etapa 6 — 3D e parallax

Somente depois da interface principal estar correta e responsiva.

Adicionar efeitos progressivamente.

Verificar impacto em:

- FPS;
- CPU;
- mobile;
- Lighthouse;
- acessibilidade.

Se determinado efeito causar impacto perceptível, simplifique-o.

---

## Etapa 7 — Testes

Testar:

- desktop;
- mobile;
- teclado;
- reduced motion;
- links;
- imagens;
- navegação;
- console;
- build.

Não deixar warnings importantes no console.

---

## Etapa 8 — Auditoria final

Executar:

npm run build

e quaisquer testes/lint existentes.

Revisar:

- segurança;
- acessibilidade;
- performance;
- responsividade.

Apresentar no final um resumo das alterações.

---

# 29. Regra contra alterações destrutivas

Antes de remover algo importante:

verifique se é realmente código legado.

Não apagar arquivos ou configurações do deploy sem entender sua função.

Preservar configurações existentes relacionadas a:

- domínio;
- deploy;
- Docker, caso exista;
- Nginx;
- Cloudflare;
- GitHub;
- CI/CD.

Se houver dúvida sobre uma configuração de infraestrutura, pare e explique antes de alterá-la.

---

# 30. Git

Faça mudanças em etapas lógicas.

Não misture:

migração
design
refatoração
segurança
animações

em uma alteração gigantesca se puder evitar.

Sugira commits semanticamente separados, por exemplo:

refactor: migrate portfolio to react and vite

feat: create new portfolio layout

feat: add projects showcase

feat: add responsive interactions and parallax

perf: optimize project assets

a11y: improve navigation and reduced motion

---

# Resultado esperado

Ao terminar quero ter um portfólio que transmita:

"Este desenvolvedor ainda está evoluindo, mas já sabe transformar necessidades reais em aplicações reais."

O destaque não deve ser uma lista enorme de tecnologias.

O destaque deve ser:

PROBLEMA → SOLUÇÃO → PROJETO → TECNOLOGIA.

Quero que alguém consiga entrar no site e em poucos segundos entender:

1. quem sou;
2. o que desenvolvo;
3. quais problemas já resolvi;
4. quais projetos já coloquei em funcionamento;
5. como entrar em contato comigo.

Acima de tudo:

não sacrifique clareza, segurança, acessibilidade ou performance para criar efeitos visuais.