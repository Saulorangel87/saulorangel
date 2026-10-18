import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGES, translations } from './translations';

const THEME_COLORS = { dark: '#11100f', light: '#f7f4ee' };
const PreferencesContext = createContext(null);

function readStored(key, allowed) {
  try {
    const value = window.localStorage.getItem(key);
    return allowed.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Armazenamento bloqueado (modo privado, política do navegador): a preferência vale só para esta visita.
  }
}

// public/theme-init.js já aplicou idioma e tema antes da pintura; aqui só lemos o que ele decidiu.
function initialLanguage() {
  const applied = document.documentElement.getAttribute('data-lang');
  if (LANGUAGES.includes(applied)) return applied;
  return readStored('lang', LANGUAGES) ?? ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
}

function initialTheme() {
  const applied = document.documentElement.getAttribute('data-theme');
  if (applied === 'light' || applied === 'dark') return applied;
  return readStored('theme', ['light', 'dark']) ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

function lookup(dictionary, path) {
  return path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), dictionary);
}

export function PreferencesProvider({ children }) {
  const [lang, setLangState] = useState(initialLanguage);
  const [theme, setThemeState] = useState(initialTheme);

  useEffect(() => {
    const dictionary = translations[lang];
    const root = document.documentElement;
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    root.setAttribute('data-lang', lang);
    document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', dictionary.meta.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', dictionary.meta.ogDescription);
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) skipLink.textContent = dictionary.common.skipLink;
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    writeStored('lang', next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      writeStored('theme', next);
      return next;
    });
  }, []);

  const value = useMemo(() => {
    const dictionary = translations[lang];
    // t('projects.count', { n: 5 }) — busca por caminho e substitui {variáveis}.
    const t = (path, vars) => {
      const found = lookup(dictionary, path);
      if (typeof found !== 'string' || !vars) return found ?? path;
      return found.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
    };
    return { lang, setLang, theme, toggleTheme, t, dictionary };
  }, [lang, theme, setLang, toggleTheme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences precisa estar dentro de <PreferencesProvider>.');
  return context;
}
