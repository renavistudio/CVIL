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

const BLOG_ARTICLES = [
  {
    slug: 'como-sacar-a-un-socio-de-una-empresa-zamora',
    title: 'Cómo sacar a un socio de una empresa en Zamora | CVIL Abogados',
    description: 'Guía práctica para dueños de negocio: cómo quitarle poderes, sacarlo legalmente y salvar tu patrimonio sin irte a años de juicio.'
  },
  {
    slug: 'como-cobrar-un-pagare-en-zamora-michoacan',
    title: 'Cómo cobrar un pagaré en Zamora Michoacán y embargar bienes | CVIL Abogados',
    description: 'Aprende cómo proceder por la vía ejecutiva mercantil para congelar cuentas bancarias y embargar bienes de deudores morosos en Michoacán.'
  },
  {
    slug: 'como-despedir-a-un-trabajador-sin-demanda-zamora',
    title: 'Cómo despedir a un trabajador sin demanda en Zamora | CVIL Abogados',
    description: 'Paso a paso patronal para dar de baja a un empleado conflictivo legalmente sin pagar liquidaciones infladas ni contingencias laborales.'
  },
  {
    slug: 'como-sacar-a-un-inquilino-que-no-paga-renta-zamora',
    title: 'Cómo sacar a un inquilino que no paga renta en Zamora | CVIL Abogados',
    description: 'Procedimiento legal de desahucio para recuperar locales comerciales y bodegas sin incurrir en despojo ni delitos.'
  },
  {
    slug: 'traspaso-de-negocio-deudas-anteriores-zamora',
    title: 'Qué revisar antes de comprar un negocio o traspaso en Zamora | CVIL Abogados',
    description: 'Auditoría express de pasivos y protección ante sustitución patronal y deudas ocultas antes de adquirir un negocio en marcha.'
  },
  {
    slug: 'citatorio-centro-de-conciliacion-laboral-zamora-que-hacer',
    title: 'Citatorio del Centro de Conciliación Laboral en Zamora: Qué hacer | CVIL Abogados',
    description: 'Estrategia patronal ante citatorios de conciliación laboral en Zamora: cómo negociar y evitar demandas en el tribunal laboral.'
  }
];

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

    let indexHtml = fs.readFileSync(indexPath, 'utf-8');
    const rootStart = indexHtml.indexOf('<div id="root">');
    const bodyEnd = indexHtml.indexOf('</body>', rootStart);

    if (rootHtml.length > 500 && rootStart !== -1 && bodyEnd !== -1) {
      // 1. Inject into dist/index.html
      indexHtml = indexHtml.slice(0, rootStart) + `<div id="root">${rootHtml}</div>\n\n` + indexHtml.slice(bodyEnd);
      fs.writeFileSync(indexPath, indexHtml, 'utf-8');
      console.log('✅ Successfully pre-rendered and injected full static HTML into dist/index.html!');

      // 2. Also inject into source index.html so Git & Vercel builds always retain it
      const sourceIndexPath = path.join(__dirname, 'index.html');
      if (fs.existsSync(sourceIndexPath)) {
        let srcHtml = fs.readFileSync(sourceIndexPath, 'utf-8');
        const srcRootStart = srcHtml.indexOf('<div id="root">');
        const srcBodyEnd = srcHtml.indexOf('</body>', srcRootStart);
        if (srcRootStart !== -1 && srcBodyEnd !== -1) {
          srcHtml = srcHtml.slice(0, srcRootStart) + `<div id="root">${rootHtml}</div>\n\n` + srcHtml.slice(srcBodyEnd);
          fs.writeFileSync(sourceIndexPath, srcHtml, 'utf-8');
          console.log('✅ Injected fresh static HTML into source index.html for Vercel/Git!');
        }
      }
    }

    // 3. Prerender standalone Blog pages for SEO & Search Console
    const publicBlogDir = path.join(__dirname, 'public', 'blog');
    const distBlogDir = path.join(distDir, 'blog');
    fs.mkdirSync(publicBlogDir, { recursive: true });
    fs.mkdirSync(distBlogDir, { recursive: true });

    // Prerender Blog Hub
    try {
      console.log('[+] Prerendering Blog Hub (/blog)...');
      await page.goto('http://localhost:4173/#/blog', { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      const blogHubRoot = await page.evaluate(() => document.getElementById('root')?.innerHTML || '');
      if (blogHubRoot.length > 500) {
        let blogHubHtml = indexHtml.slice(0, rootStart) + `<div id="root">${blogHubRoot}</div>\n\n` + indexHtml.slice(bodyEnd);
        blogHubHtml = blogHubHtml.replace(/<title>.*?<\/title>/i, '<title>Recursos Legales & Guías para Empresas en Zamora | CVIL Abogados</title>');
        fs.writeFileSync(path.join(publicBlogDir, 'index.html'), blogHubHtml, 'utf-8');
        fs.writeFileSync(path.join(distBlogDir, 'index.html'), blogHubHtml, 'utf-8');
        console.log('✅ Blog Hub prerendered and saved to public/blog and dist/blog');
      }
    } catch (e) {
      console.log('[-] Hub prerender note:', e.message);
    }

    // Prerender each article
    for (const art of BLOG_ARTICLES) {
      try {
        console.log(`[+] Prerendering article: ${art.slug}...`);
        await page.goto(`http://localhost:4173/#/blog/${art.slug}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(600);
        const artRoot = await page.evaluate(() => document.getElementById('root')?.innerHTML || '');
        if (artRoot.length > 500) {
          let artHtml = indexHtml.slice(0, rootStart) + `<div id="root">${artRoot}</div>\n\n` + indexHtml.slice(bodyEnd);
          artHtml = artHtml.replace(/<title>.*?<\/title>/i, `<title>${art.title}</title>`);
          artHtml = artHtml.replace(/<meta name="description" content=".*?"/i, `<meta name="description" content="${art.description}"`);
          artHtml = artHtml.replace(/<meta property="og:title" content=".*?"/i, `<meta property="og:title" content="${art.title}"`);
          artHtml = artHtml.replace(/<meta property="og:description" content=".*?"/i, `<meta property="og:description" content="${art.description}"`);
          artHtml = artHtml.replace(/<meta property="og:url" content=".*?"/i, `<meta property="og:url" content="https://cvilabogados.mx/blog/${art.slug}"`);
          artHtml = artHtml.replace(/<link rel="canonical" href=".*?"/i, `<link rel="canonical" href="https://cvilabogados.mx/blog/${art.slug}"`);

          const pubArtDir = path.join(publicBlogDir, art.slug);
          const distArtDir = path.join(distBlogDir, art.slug);
          fs.mkdirSync(pubArtDir, { recursive: true });
          fs.mkdirSync(distArtDir, { recursive: true });
          fs.writeFileSync(path.join(pubArtDir, 'index.html'), artHtml, 'utf-8');
          fs.writeFileSync(path.join(distArtDir, 'index.html'), artHtml, 'utf-8');
          console.log(`   ✅ Article prerendered: ${art.slug}`);
        }
      } catch (e) {
        console.log(`[-] Article ${art.slug} prerender note:`, e.message);
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
