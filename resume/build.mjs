// Gera os PDFs do currículo (PT e EN) a partir de resume/data.mjs usando o Edge/Chrome em modo headless.
// Uso: npm run resume   (saída: public/curriculo-saulo-rangel-{pt,en}.pdf)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { contact, resume } from './data.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'resume', 'build');
const outDir = join(root, 'public');

const browserCandidates = [
  process.env.RESUME_BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const browser = browserCandidates.find((path) => existsSync(path));
if (!browser) throw new Error('Edge/Chrome não encontrado. Defina RESUME_BROWSER com o caminho do executável.');

const esc = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const css = `
@font-face { font-family: "DM Sans"; src: url("../../assets/fonts/dm-sans-latin-300-normal.woff2") format("woff2"); font-weight: 300; }
@font-face { font-family: "DM Sans"; src: url("../../assets/fonts/dm-sans-latin-400-normal.woff2") format("woff2"); font-weight: 400; }
@font-face { font-family: "DM Sans"; src: url("../../assets/fonts/dm-sans-latin-500-normal.woff2") format("woff2"); font-weight: 500; }
@font-face { font-family: "DM Serif Display"; src: url("../../assets/fonts/dm-serif-display-latin-400-normal.woff2") format("woff2"); font-weight: 400; }
@page { size: A4; margin: 12mm 0; }
:root { --ink: #1c1815; --body: #3b3631; --muted: #6a645c; --accent: #c2410c; --rule: #d9d2c6; --side: 66mm; }
* { box-sizing: border-box; }
html { background: linear-gradient(to right, #f3eee5 0, #f3eee5 var(--side), #fff var(--side)); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; color: var(--body); font-family: "DM Sans", Arial, sans-serif; font-size: 9.3pt; line-height: 1.45; }
a { color: inherit; text-decoration: none; }
.side { float: left; width: var(--side); padding: 0 7mm 0 9mm; }
.main { margin-left: var(--side); padding: 0 11mm 0 9mm; }
.name { margin: 0; color: var(--ink); font-family: "DM Serif Display", Georgia, serif; font-size: 27pt; font-weight: 400; line-height: 1.04; letter-spacing: -.01em; }
.role { margin: 3mm 0 0; color: var(--accent); font-size: 8.6pt; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; }
.headline { margin: 1.2mm 0 0; color: var(--muted); font-size: 9.3pt; font-style: italic; font-weight: 300; }
h2 { margin: 0 0 2.6mm; padding-bottom: 1.4mm; border-bottom: 1px solid var(--rule); color: var(--accent); font-size: 7.6pt; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
.side h2 { margin-top: 0; }
section { margin-bottom: 6mm; }
h2 { break-after: avoid; }
.main > section:first-of-type { margin-top: 8mm; }
.side section { margin-bottom: 5.5mm; }
.field { margin: 0 0 2.6mm; font-size: 8.7pt; word-break: break-word; }
.field small { display: block; color: var(--muted); font-size: 6.6pt; letter-spacing: .16em; text-transform: uppercase; }
.skill { margin: 0 0 2.4mm; font-size: 8.5pt; }
.skill strong { display: block; color: var(--ink); font-size: 8.5pt; font-weight: 500; }
.skill span { color: var(--body); }
.lang { margin: 0 0 1.4mm; font-size: 8.7pt; }
.entry { margin: 0 0 3.8mm; break-inside: avoid; }
.entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
.entry h3 { margin: 0; color: var(--ink); font-size: 10pt; font-weight: 500; line-height: 1.3; }
.badge { flex: 0 0 auto; color: var(--accent); font-size: 7.6pt; font-weight: 500; white-space: nowrap; }
.meta { margin: .6mm 0 0; color: var(--muted); font-size: 8.2pt; }
.stack { color: var(--accent); }
.entry p.text { margin: 1.2mm 0 0; }
.link { color: var(--accent); }
.profile { margin: 0; font-size: 9.6pt; line-height: 1.55; }
.cert { display: flex; justify-content: space-between; gap: 4mm; margin: 0 0 2mm; padding-left: 3mm; border-left: 2px solid var(--accent); break-inside: avoid; }
.cert strong { display: block; color: var(--ink); font-size: 8.8pt; font-weight: 500; line-height: 1.3; }
.cert span { color: var(--muted); font-size: 7.9pt; }
.cert time { flex: 0 0 auto; color: var(--muted); font-size: 8pt; white-space: nowrap; }
`;

function render(data) {
  const l = data.labels;
  const sideFields = `
    <section>
      <h2>${esc(l.contact)}</h2>
      <p class="field"><small>${esc(l.location)}</small>${esc(data.location)}</p>
      <p class="field"><small>E-mail</small><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></p>
      <p class="field"><small>LinkedIn</small><a href="${esc(contact.linkedinUrl)}">${esc(contact.linkedin)}</a></p>
      <p class="field"><small>GitHub</small><a href="${esc(contact.githubUrl)}">${esc(contact.github)}</a></p>
      <p class="field"><small>Portfolio</small><a href="${esc(contact.siteUrl)}">${esc(contact.site)}</a></p>
    </section>
    <section>
      <h2>${esc(l.skills)}</h2>
      ${data.skills.map((s) => `<p class="skill"><strong>${esc(s.group)}</strong><span>${esc(s.items)}</span></p>`).join('')}
    </section>
    <section>
      <h2>${esc(l.languages)}</h2>
      ${data.languages.map((item) => `<p class="lang">${esc(item)}</p>`).join('')}
    </section>`;

  const experience = data.experience.map((e) => `
    <article class="entry">
      <div class="entry-head"><h3>${esc(e.title)}</h3><span class="badge">${esc(e.badge)}</span></div>
      <p class="meta">${esc(e.meta)}</p>
      <p class="text">${esc(e.text)}</p>
    </article>`).join('');

  const projects = data.projects.map((p) => `
    <article class="entry">
      <div class="entry-head"><h3>${esc(p.title)}</h3><span class="badge">${esc(p.meta)}</span></div>
      <p class="meta"><span class="stack">${esc(p.stack)}</span>${p.url ? ` · <a class="link" href="${esc(p.url)}">${esc(p.link)}</a>` : ''}</p>
      <p class="text">${esc(p.text)}</p>
    </article>`).join('');

  const education = data.education.map((e) => `
    <article class="entry">
      <div class="entry-head"><h3>${esc(e.title)}</h3><span class="badge">${esc(e.badge)}</span></div>
      <p class="meta">${esc(e.meta)}</p>
    </article>`).join('');

  const certs = data.certifications.map((c) => `
    <div class="cert">
      <div><strong>${esc(c.title)}</strong><span>${esc(c.issuer)} · ${esc(c.detail)}</span></div>
      <time>${esc(c.date)}</time>
    </div>`).join('');

  return `<!doctype html>
<html lang="${esc(data.lang)}">
<head>
<meta charset="utf-8">
<title>${esc(data.docTitle)}</title>
<style>${css}</style>
</head>
<body>
  <aside class="side">${sideFields}</aside>
  <div class="main">
    <header>
      <h1 class="name">Saulo Rangel<br>Rosa Leonardo</h1>
      <p class="role">${esc(data.role)}</p>
      <p class="headline">${esc(data.headline)}</p>
    </header>
    <section><h2>${esc(l.profile)}</h2><p class="profile">${esc(data.profile)}</p></section>
    <section><h2>${esc(l.experience)}</h2>${experience}</section>
    <section><h2>${esc(l.projects)}</h2>${projects}</section>
    <section><h2>${esc(l.education)}</h2>${education}</section>
    <section><h2>${esc(l.certifications)}</h2>${certs}</section>
  </div>
</body>
</html>`;
}

mkdirSync(buildDir, { recursive: true });
for (const [code, data] of Object.entries(resume)) {
  const htmlPath = join(buildDir, `curriculo-${code}.html`);
  const pdfPath = join(outDir, data.file);
  writeFileSync(htmlPath, render(data), 'utf8');
  execFileSync(browser, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
    `--user-data-dir=${join(buildDir, 'profile')}`,
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' });
  console.log('gerado', pdfPath);
}
