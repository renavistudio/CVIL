import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { ROUTES, getPageMeta, SITE } from './data/site.js';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('Build requires a clean, empty source root.');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.xml': 'application/xml' };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = pathname.replace(/^\/+/, '');
    let file = path.resolve(dist, relative || 'index.html');
    if (!file.startsWith(dist + path.sep) && file !== dist) { res.writeHead(403).end(); return; }
    let stat = await fs.stat(file).catch(() => null);
    if (stat?.isDirectory()) { file = path.join(file, 'index.html'); stat = await fs.stat(file).catch(() => null); }
    if (stat?.isFile()) {
      res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
      res.end(await fs.readFile(file));
    } else if (ROUTES.includes(pathname) || pathname === '/404.html') {
      res.writeHead(200, { 'Content-Type': mime['.html'] }).end(template);
    } else res.writeHead(404).end('Not found');
  } catch { res.writeHead(500).end('Static build server error'); }
});
await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  // CI installs Chromium explicitly. Developers can use their existing Edge installation.
  try { browser = await chromium.launch({ headless: true }); }
  catch (error) {
    if (process.platform !== 'win32') throw error;
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  }
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  // External maps and fonts are unnecessary for HTML generation and can stall builds.
  await context.route('**/*', (route) => route.request().url().startsWith(origin) ? route.continue() : route.abort());
  for (const pathname of [...ROUTES, '/404.html']) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(origin + pathname, { waitUntil: 'load' });
    if (response.status() !== 200) throw new Error(`Failed route ${pathname}: HTTP ${response.status()}`);
    await page.waitForFunction(() => document.documentElement.dataset.seoReady === 'true' && document.querySelector('#root h1'), null, { timeout: 15000 });
    const meta = getPageMeta(pathname);
    const state = await page.evaluate(() => ({
      h1Count: document.querySelectorAll('h1').length,
      h1: document.querySelector('h1')?.textContent.trim(),
      title: document.title,
      roots: document.querySelectorAll('#root').length,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
      schemaCount: document.querySelectorAll('script[type="application/ld+json"]').length,
      html: document.querySelector('#root').innerHTML,
    }));
    if (errors.length || state.roots !== 1 || state.h1Count !== 1 || state.h1 !== meta.h1 || state.title !== meta.title || state.schemaCount !== 1) {
      throw new Error(`Invalid prerender for ${pathname}: ${JSON.stringify({ ...state, html: state.html.length, errors })}`);
    }
    if (state.canonical !== SITE.url + (pathname === '/' ? '/' : pathname)) throw new Error(`Wrong canonical: ${pathname}`);
    let html = await page.content();
    // Runtime-only flag must not make a subsequent validation pass prematurely.
    html = html.replace(/ data-seo-ready="true"/, '');
    const output = pathname === '/404.html' ? path.join(dist, '404.html') : path.join(dist, pathname === '/' ? '' : pathname.slice(1), 'index.html');
    await fs.mkdir(path.dirname(output), { recursive: true });
    await fs.writeFile(output, html, 'utf8');
    console.log(`Prerender OK ${pathname}: one H1, matching title and canonical`);
    await page.close();
  }
  // Sitemap includes only the canonical, indexable routes. Do not invent lastmod dates.
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ROUTES.map((route) => `  <url><loc>${SITE.url}${route === '/' ? '/' : route}</loc></url>`).join('\n') + '\n</urlset>\n';
  await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');
  await context.close();
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
