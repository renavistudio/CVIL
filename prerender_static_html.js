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

// Check if dist/index.html already has full static HTML (> 50KB)
const currentDistHtml = fs.readFileSync(indexPath, 'utf-8');
if (currentDistHtml.length > 50000 && currentDistHtml.includes('<div id="root"><')) {
  console.log(`✅ dist/index.html already contains complete pre-rendered static HTML (${currentDistHtml.length} bytes).`);
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
    let browser;
    try {
      browser = await chromium.launch({ channel: 'msedge', headless: true });
    } catch {
      browser = await chromium.launch({ headless: true });
    }

    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    console.log('[+] Navigating to http://localhost:4173 to capture full DOM...');
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    const rootHtml = await page.evaluate(() => {
      const el = document.getElementById('root');
      return el ? el.innerHTML : '';
    });

    console.log(`[+] Captured rendered root HTML: ${rootHtml.length} characters`);

    if (rootHtml.length > 500) {
      // 1. Inject into dist/index.html
      let indexHtml = fs.readFileSync(indexPath, 'utf-8');
      const rootStart = indexHtml.indexOf('<div id="root">');
      const scriptStart = indexHtml.indexOf('<script', rootStart);
      if (rootStart !== -1 && scriptStart !== -1) {
        indexHtml = indexHtml.slice(0, rootStart) + `<div id="root">${rootHtml}</div>\n  ` + indexHtml.slice(scriptStart);
        fs.writeFileSync(indexPath, indexHtml, 'utf-8');
        console.log('✅ Successfully pre-rendered and injected full static HTML into dist/index.html!');
      }

      // 2. Also inject into source index.html so Git & Vercel builds always retain it
      const sourceIndexPath = path.join(__dirname, 'index.html');
      if (fs.existsSync(sourceIndexPath)) {
        let srcHtml = fs.readFileSync(sourceIndexPath, 'utf-8');
        const srcRootStart = srcHtml.indexOf('<div id="root">');
        const srcScriptStart = srcHtml.indexOf('<script', srcRootStart);
        if (srcRootStart !== -1 && srcScriptStart !== -1) {
          srcHtml = srcHtml.slice(0, srcRootStart) + `<div id="root">${rootHtml}</div>\n  ` + srcHtml.slice(srcScriptStart);
          fs.writeFileSync(sourceIndexPath, srcHtml, 'utf-8');
          console.log('✅ Injected fresh static HTML into source index.html for Vercel/Git!');
        }
      }
    }

    await browser.close();
  } catch (err) {
    console.log(`[i] Pre-rendering note: ${err.message}. Relying on source static HTML.`);
  } finally {
    server.close();
    console.log('[+] Static server closed.');
    process.exit(0);
  }
});
