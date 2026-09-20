# Portfólio pessoal — Saulo Rangel

Homepage profissional construída com React, Vite e Tailwind CSS. A apresentação combina narrativa de carreira, projetos reais e uma camada visual 3D/parallax leve, com foco em acessibilidade, desempenho e leitura em telas pequenas.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `src/` — aplicação React, componentes, dados dos projetos e estilos.
- `assets/` — imagens, fontes e favicon reaproveitados do projeto original.
- `public/` — arquivos necessários para a publicação (`CNAME` e `ads.txt`).
- `legacy/` — cópia da homepage, CSS e JavaScript anteriores, preservada para consulta.
- `plano-e-acompanhamento-da-refatoracao.md` — registro das etapas, decisões e verificações.

## Conteúdo

A homepage destaca Cadência, Controle de Estoque, Controle de Despesas e Guia de Logística. O Guia é apresentado como projeto de uso interno, sem CTA de login ou exposição de credenciais e identificadores.

## Publicação

O domínio configurado no projeto é `devsaulo.com.br`. A configuração `CNAME` é copiada para a saída do Vite por meio de `public/CNAME`.
