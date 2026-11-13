let translations: Record<string, string> = {};
let observer: MutationObserver | undefined;
let enabled = false;

export function setTranslationMap(map: Record<string, string>) {
  translations = map;
  enabled = true;
}

function translatedPath(href: string): string {
  if (!href.startsWith('/') || href.startsWith('/en') || href.startsWith('//')) return href;
  if (href.startsWith('/#')) return '/en' + href.slice(1);
  return '/en' + (href === '/' ? '' : href);
}

function translateTree(root: Node) {
  if (!enabled) return;
  const parent = root instanceof Element ? root : root.parentElement;
  if (parent?.closest('script, style, [data-no-translate]')) return;
  if (root.nodeType === Node.TEXT_NODE) {
    const value = root.nodeValue ?? '';
    const trimmed = value.trim();
    if (translations[trimmed] && translations[trimmed] !== trimmed) root.nodeValue = value.replace(trimmed, translations[trimmed]);
    return;
  }
  if (!(root instanceof Element)) return;
  for (const attribute of ['alt', 'aria-label', 'placeholder', 'title']) {
    const value = root.getAttribute(attribute);
    if (value && translations[value] && translations[value] !== value) root.setAttribute(attribute, translations[value]);
  }
  if (root instanceof HTMLAnchorElement) {
    const href = root.getAttribute('href');
    if (href && translatedPath(href) !== href) root.setAttribute('href', translatedPath(href));
    if (href?.startsWith('https://wa.me/') && href.includes('text=')) {
      const url = new URL(href);
      url.searchParams.set('text', 'Hello, I would like to schedule a legal consultation with CVIL.');
      if (url.href !== href) root.setAttribute('href', url.href);
    }
  }
  for (const child of [...root.childNodes]) translateTree(child);
}

export function translateDocument() {
  if (!enabled) return;
  const root = document.getElementById('root');
  if (!root) return;
  translateTree(root);
  observer?.disconnect();
  observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === 'characterData') translateTree(record.target);
      else if (record.type === 'attributes') translateTree(record.target);
      else for (const node of record.addedNodes) translateTree(node);
    }
  });
  observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['href', 'alt', 'aria-label', 'placeholder', 'title'] });
}

