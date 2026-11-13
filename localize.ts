let translations: Record<string, string> = {};
let translationsByLowercase: Map<string, string> = new Map();
let observer: MutationObserver | undefined;
let enabled = false;

export function setTranslationMap(map: Record<string, string>) {
  translations = map;
  translationsByLowercase = new Map(Object.entries(map).map(([source, translated]) => [source.toLocaleLowerCase('es-MX'), translated]));
  enabled = true;
}

function translateTopic(topic: string): string {
  return translations[topic] ?? translationsByLowercase.get(topic.toLocaleLowerCase('es-MX')) ?? topic;
}

function translateWhatsAppMessage(message: string): string {
  const articlePrefix = 'Hola, quiero agendar una consulta sobre este asunto: ';
  if (message.startsWith(articlePrefix)) {
    return `Hello, I would like to schedule a consultation about: ${translateTopic(message.slice(articlePrefix.length))}`;
  }
  const practicePrefix = 'Hola, quiero consultar sobre ';
  if (message.startsWith(practicePrefix)) {
    return `Hello, I would like advice about ${translateTopic(message.slice(practicePrefix.length).replace(/\.$/, ''))}.`;
  }
  const servicePrefix = 'Hola, buen día. Vi su página web y busco asesoría especializada en ';
  if (message.startsWith(servicePrefix)) {
    const topic = message.slice(servicePrefix.length).replace(/\. Me gustaría agendar una cita\.$/, '');
    return `Hello, I would like legal advice about ${translateTopic(topic)}. I would like to schedule a consultation.`;
  }
  return 'Hello, I would like to schedule a legal consultation with CVIL.';
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
      const message = url.searchParams.get('text');
      if (message?.startsWith('Hola')) {
        url.searchParams.set('text', translateWhatsAppMessage(message));
        if (url.href !== href) root.setAttribute('href', url.href);
      }
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

