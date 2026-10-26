import { useEffect } from 'react';
import { getPageMeta, getStructuredData, SITE } from '../data/site.js';

export default function Seo() {
  useEffect(() => {
    const page = getPageMeta(window.location.pathname);
    const url = SITE.url + (page.path === '/' ? '/' : page.path);
    document.title = page.title;
    const meta = (attribute: string, key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    meta('name', 'description', page.description);
    meta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow');
    meta('property', 'og:title', page.title);
    meta('property', 'og:description', page.description);
    meta('property', 'og:url', url);
    meta('property', 'og:type', page.type === 'article' ? 'article' : 'website');
    const image = SITE.url + (page.image || '/images/og-image.webp');
    meta('property', 'og:image', image);
    meta('property', 'og:image:alt', page.h1);
    meta('name', 'twitter:image', image);
    meta('name', 'twitter:title', page.title);
    meta('name', 'twitter:description', page.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((node) => node.remove());
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify(getStructuredData(page.path));
    document.head.appendChild(schema);
    document.documentElement.dataset.seoReady = 'true';
  }, []);
  return null;
}
