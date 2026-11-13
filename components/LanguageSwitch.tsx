import { getPageMeta } from '../data/site.js';

export default function LanguageSwitch() {
  const page = getPageMeta(window.location.pathname);
  const english = page.lang === 'en';
  return <nav data-no-translate aria-label="Language / Idioma" className="flex items-center gap-2 text-xs font-semibold tracking-widest">
    <a href={page.sourcePath} lang="es" aria-current={!english ? 'page' : undefined} className={!english ? 'text-gold' : 'text-charcoal hover:text-gold'}>ES</a>
    <span aria-hidden="true" className="text-gray-400">/</span>
    <a href={'/en' + (page.sourcePath === '/' ? '' : page.sourcePath)} lang="en" aria-current={english ? 'page' : undefined} className={english ? 'text-gold' : 'text-charcoal hover:text-gold'}>EN</a>
  </nav>;
}

