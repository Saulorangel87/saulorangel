# Portfólio pessoal — Saulo Rangel

Portfólio feito com React, Vite e Tailwind CSS. Apresenta minha trajetória como desenvolvedor em formação, projetos próprios e certificações, em português e inglês, com tema claro e escuro, layout responsivo, animações discretas e respeito à preferência por movimento reduzido.

Site: <https://devsaulo.com.br>

## Tecnologias

- React 19
- Vite 7
- Tailwind CSS 4
- Nginx para servir os arquivos estáticos de produção

## Recursos

- **Idioma PT/EN:** todo o texto fica em `src/i18n/translations.js`. O idioma escolhido é salvo no navegador; na primeira visita, navegadores em português veem PT e os demais veem EN.
- **Tema claro/escuro:** as cores são variáveis CSS em `src/index.css` (`:root` e `:root[data-theme="light"]`). Na primeira visita vale a preferência do sistema; a escolha é salva no navegador. `public/theme-init.js` aplica tema e idioma antes da primeira pintura (arquivo próprio porque a CSP não permite scripts inline).
- **Certificações:** seção na home com os destaques e lista completa em `#/certificacoes` (roteamento por hash, sem regra extra no Nginx). Os PDFs não são publicados; cada certificado é comprovado por link ou código de validação.
- **Currículo em PDF:** botão em Contato que baixa o PDF no idioma ativo.

## Desenvolvimento local

Requisitos: Node.js e npm instalados na máquina de desenvolvimento.

```bash
npm ci
npm run dev
```

Para testar a versão de produção localmente:

```bash
npm run build
npm run preview
```

O Vite gera os arquivos estáticos na pasta `dist/`.

## Publicação na VPS

O site em produção é estático. O container `saulorangel-portfolio` usa `nginx:alpine` e serve `dist/`, montada em `/usr/share/nginx/html`. A configuração do Nginx fica em `deploy/nginx/default.conf` e escuta na porta `8080` dentro do container.

Não há arquivo Compose neste repositório. O container existente recebe os arquivos por bind mount; portanto, não é necessário executar `docker compose up` nem reiniciar o Nginx após atualizar `dist/`. Node.js/npm não precisam ser instalados no host da VPS: o build roda em um container temporário de Node.

Depois de enviar as alterações ao repositório, atualize o checkout da VPS e gere o build a partir da pasta do projeto:

```bash
cd ~/apps/saulorangel-portfolio
git pull --ff-only
docker run --rm \
  --user "$(id -u):$(id -g)" \
  -e HOME=/tmp \
  -e npm_config_cache=/tmp/.npm \
  -v "$PWD:/app" \
  -w /app \
  node:22-bookworm-slim \
  sh -c 'npm ci && npm run build'
```

Como a pasta `dist/` está montada no Nginx, o site passa a servir o novo build assim que o comando termina. Se uma alteração de imagem ou favicon não aparecer, faça uma recarga forçada no navegador para limpar o cache.

Se `deploy/nginx/default.conf` mudar, recrie o container para que o bind mount individual passe a apontar para o arquivo atualizado. Um `nginx -s reload` no container antigo pode continuar lendo o inode anterior deixado pelo `git pull`. A recriação causa uma breve interrupção; estes comandos preservam o endereço e a porta já publicados, além das montagens somente leitura:

```bash
cd ~/apps/saulorangel-portfolio

# Valide a configuração antes de interromper o container atual.
docker run --rm \
  -v "$PWD/deploy/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro" \
  nginx:alpine nginx -t

# Reaproveite o bind de porta do container existente sem expor o IP privado no README.
PORT_BINDING="$(docker inspect --format '{{(index (index .HostConfig.PortBindings "8080/tcp") 0).HostIp}}:{{(index (index .HostConfig.PortBindings "8080/tcp") 0).HostPort}}:8080' saulorangel-portfolio)"
docker rm -f saulorangel-portfolio
docker run -d \
  --name saulorangel-portfolio \
  --restart unless-stopped \
  -p "$PORT_BINDING" \
  -v "$PWD/deploy/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro" \
  -v "$PWD/dist:/usr/share/nginx/html:ro" \
  nginx:alpine

docker exec saulorangel-portfolio nginx -t
docker inspect saulorangel-portfolio --format '{{.State.Status}}'
```

## Conteúdo

O portfólio destaca Cadência, Controle de Estoque, Controle de Despesas, o Guia de Logística e o Let's Go Run. As imagens dos projetos públicos abrem seus respectivos sites; o Guia é apresentado como projeto interno, sem link público, login ou credenciais.

### Como atualizar

| O que mudar | Onde |
| --- | --- |
| Textos do site (PT e EN) | `src/i18n/translations.js` |
| Projetos (link, imagem, ordem) | `src/data/projects.js` + textos em `translations.js` (`projects.items`) |
| Tecnologias da stack | `technologyGroups` em `src/data/projects.js` + rótulos em `translations.js` (`stack.groups`) |
| Certificações (dados, links de validação, destaques) | `src/data/certifications.js` + títulos em `translations.js` (`certs.items`) |
| Currículo | `resume/data.mjs`, depois `npm run resume` |

Ao adicionar um projeto, coloque a captura em `public/images/` e use um parâmetro de versão no caminho (`?v=AAAAMMDD`) para evitar cache antigo.

### Currículo

`npm run resume` gera `public/curriculo-saulo-rangel-pt.pdf` e `public/curriculo-saulo-rangel-en.pdf` com o Edge ou Chrome em modo headless (use `RESUME_BROWSER` para indicar outro executável). O currículo público não inclui telefone nem CPF. Gere novamente e faça commit dos PDFs sempre que `resume/data.mjs` mudar.

### Privacidade

Não publique PDFs de certificados: alguns trazem CPF e dados pessoais. Use apenas o link ou o código de validação da instituição.

## Estrutura do projeto

- `src/` — aplicação React: `components/`, `data/` (projetos, stack, certificações), `i18n/` (traduções e provedor de idioma/tema) e `index.css`.
- `public/` — arquivos servidos como estão: `images/`, `theme-init.js`, `ads.txt` e os PDFs do currículo.
- `resume/` — fonte do currículo (`data.mjs`) e gerador de PDF (`build.mjs`).
- `assets/fonts/` — fontes DM Sans e DM Serif Display, empacotadas pelo Vite.
- `deploy/nginx/default.conf` — configuração do Nginx do container.
- `dist/` — saída gerada pelo build; não editar manualmente.
