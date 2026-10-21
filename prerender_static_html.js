import fs from 'fs';
import path from 'path';
import http from 'http';
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

// 1. Start simple static server for dist
const server = http.createServer((req, res) => {
  let reqPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  let filePath = path.join(distDir, reqPath);
  
  if (!fs.existsSync(filePath)) {
    filePath = indexPath; // SPA fallback
  }

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(4173, async () => {
  console.log('[+] Static server listening at http://localhost:4173');

  try {
    const browser = await chromium.launch({ channel: 'msedge', headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    console.log('[+] Navigating to http://localhost:4173 to capture full DOM...');
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // Extract rendered #root HTML
    const rootHtml = await page.evaluate(() => {
      const el = document.getElementById('root');
      return el ? el.innerHTML : '';
    });

    console.log(`[+] Captured rendered root HTML: ${rootHtml.length} characters`);

    if (rootHtml.length > 500) {
      let indexHtml = fs.readFileSync(indexPath, 'utf-8');
      
      // Inject inside <div id="root">
      if (indexHtml.includes('<div id="root"></div>')) {
        indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
      } else {
        indexHtml = indexHtml.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${rootHtml}</div>`);
      }

      fs.writeFileSync(indexPath, indexHtml, 'utf-8');
      console.log('✅ Successfully pre-rendered and injected full static HTML into dist/index.html!');
    } else {
      console.error('❌ Rendered HTML was too short, skipping injection.');
    }

    await browser.close();
  } catch (err) {
    console.error('Error during prerendering:', err);
  } finally {
    server.close();
    console.log('[+] Static server closed.');
  }
});
