# Portfólio pessoal — Saulo Rangel

Portfólio de página única feito com React, Vite e Tailwind CSS. Apresenta minha trajetória como desenvolvedor em formação e projetos próprios, com layout responsivo, animações discretas e respeito à preferência por movimento reduzido.

Site: <https://devsaulo.com.br>

## Tecnologias

- React 19
- Vite 7
- Tailwind CSS 4
- Nginx para servir os arquivos estáticos de produção

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

O portfólio destaca Cadência, Controle de Estoque, Controle de Despesas e o Guia de Logística. As imagens dos projetos públicos abrem seus respectivos sites; o Guia é apresentado como projeto interno, sem link público, login ou credenciais.

## Estrutura do projeto

- `src/` — aplicação React, componentes, dados e estilos.
- `public/images/` — capturas de tela, imagem do hero e favicon.
- `assets/fonts/` — fontes usadas pelo site.
- `deploy/nginx/default.conf` — configuração do Nginx do container.
- `legacy/` — versão anterior, mantida para consulta.
- `dist/` — saída gerada pelo build; não editar manualmente.
