// Executa antes da pintura (script síncrono, permitido pela CSP 'self') para evitar o "flash" de tema/idioma errado.
(function () {
  var root = document.documentElement;
  var theme = null;
  var lang = null;
  try {
    theme = localStorage.getItem('theme');
    lang = localStorage.getItem('lang');
  } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  if (lang !== 'pt' && lang !== 'en') {
    lang = (navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
  }
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-lang', lang);
  root.lang = lang === 'pt' ? 'pt-BR' : 'en';
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f4ee' : '#11100f');
})();
