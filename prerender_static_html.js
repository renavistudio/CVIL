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

const CORE_PRACTICE_PAGES = [
  {
    slug: 'abogados-corporativos-zamora',
    title: 'Abogados Corporativos en Zamora | Derecho de Empresas CVIL',
    description: 'Firma de abogados corporativos en Zamora, Michoacán: gobierno corporativo, salida de socios, contratos comerciales y defensa patronal. Cita directa.',
    h1: 'Abogados Corporativos en Zamora, Michoacán',
    subtitle: 'Asesoría legal directa para accionistas, dueños de empresas y directores generales en Zamora, Jacona y la región.',
    p1: 'En CVIL Abogados Corporativos brindamos respaldo legal integral para empresas y sociedades mercantiles en Michoacán. Nuestro enfoque está diseñado para resolver contingencias societarias, asegurar contratos de suministro y proteger el patrimonio de la empresa ante desacuerdos internos o reclamos externos.',
    sections: [
      ['Conflictos entre Socios y Gobierno Corporativo', 'Convocatoria formal de asambleas extraordinarias de accionistas, remoción legal de administradores desleales, revocación de poderes bancarios y estructuración de convenios de salida con cláusulas de no competencia.'],
      ['Contratos Mercantiles y Alianzas Comerciales', 'Diseño, redacción y auditoría de contratos de distribución, suministro, arrendamiento de bodegas y convenios de confidencialidad (NDA) para blindar la operación diaria de tu negocio.'],
      ['Cobranza Ejecutiva y Embargos Comerciales', 'Demandas mercantiles inmediatas por pagarés o facturas impagadas con embargo precautorio de cuentas bancarias y vehículos en Zamora y todo Michoacán.']
    ]
  },
  {
    slug: 'derecho-corporativo-zamora',
    title: 'Derecho Corporativo en Zamora Michoacán | CVIL Abogados',
    description: 'Servicios de derecho corporativo en Zamora Michoacán: estructuración societaria, contratos, auditoría legal y defensa empresarial en La Luneta.',
    h1: 'Servicios de Derecho Corporativo en Zamora',
    subtitle: 'Estructuración legal y prevención de contingencias para empresas agroindustriales, comerciales y de servicios.',
    p1: 'El derecho corporativo es el pilar fundamental que asegura la continuidad de las empresas frente a inspecciones, pleitos de socios o incumplimientos contractuales. Nuestra sede en La Luneta, Zamora, ofrece atención directa y resolución inmediata para corporaciones en todo Michoacán.',
    sections: [
      ['Constitución y Reestructuración de Sociedades', 'Formalización de actas constitutivas, aumento o reducción de capital, transmisión de acciones y adecuación de estatutos a las reformas legales mercantiles.'],
      ['Auditoría Legal Empresarial (Due Diligence)', 'Revisión preventiva de contratos, pasivos laborales y licencias antes de adquirir un negocio o realizar fusiones comerciales en la región.'],
      ['Protección Patrimonial y Sucesión Familiar', 'Diseño de protocolos para empresas familiares, fideicomisos y protección de activos clave ante contingencias legales.']
    ]
  },
  {
    slug: 'abogados-laborales-zamora',
    title: 'Abogados Laborales en Zamora Michoacán | Defensa Patronal CVIL',
    description: 'Abogados laborales en Zamora Michoacán especializados exclusivamente en defensa patronal: bajas justificadas, actas LFT y Centro de Conciliación.',
    h1: 'Abogados Laborales Patronales en Zamora',
    subtitle: 'Protección jurídica exclusiva para patrones y empresas: despidos sin demandas y negociación en el Centro de Conciliación Laboral.',
    p1: 'Una demanda laboral mal atendida puede paralizar las finanzas de tu negocio con indemnizaciones de 3 meses, 20 días por año y salarios caídos. En CVIL representamos con firmeza a los empleadores de Zamora, asegurando bajas conforme al Art. 47 de la Ley Federal del Trabajo.',
    sections: [
      ['Actas Administrativas con Rigor Probatorio', 'Documentación exhaustiva de faltas, desobediencia o robos con testigos presenciales para anular pretensiones de liquidación forzosa ante los tribunales.'],
      ['Atención en el Centro de Conciliación Laboral (Justo Sierra 290)', 'Representación patronal directa en las audiencias de conciliación obligatoria de Zamora para cerrar convenios con validez definitiva de cosa juzgada.'],
      ['Contratos Laborales y Reglamento Interior', 'Estructuración de contratos de trabajo individuales, confidencialidad para personal clave y depósito del Reglamento Interior de Trabajo.']
    ]
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
      // 1. Inject into dist/index.html preserving any scripts before </body>
      const distScriptsMatch = indexHtml.slice(rootStart, bodyEnd).match(/<script[\s\S]*?<\/script>/gi);
      const distScripts = distScriptsMatch ? distScriptsMatch.join('\n  ') : '';
      indexHtml = indexHtml.slice(0, rootStart) + `<div id="root">${rootHtml}</div>\n\n` + (distScripts ? `  ${distScripts}\n` : '') + indexHtml.slice(bodyEnd);
      fs.writeFileSync(indexPath, indexHtml, 'utf-8');
      console.log('✅ Successfully pre-rendered and injected full static HTML into dist/index.html!');

      // 2. Also inject into source index.html ensuring /index.tsx is NEVER removed
      const sourceIndexPath = path.join(__dirname, 'index.html');
      if (fs.existsSync(sourceIndexPath)) {
        let srcHtml = fs.readFileSync(sourceIndexPath, 'utf-8');
        const srcRootStart = srcHtml.indexOf('<div id="root">');
        const srcBodyEnd = srcHtml.indexOf('</body>', srcRootStart);
        if (srcRootStart !== -1 && srcBodyEnd !== -1) {
          srcHtml = srcHtml.slice(0, srcRootStart) + `<div id="root">${rootHtml}</div>\n\n  <script type="module" src="/index.tsx"></script>\n` + srcHtml.slice(srcBodyEnd);
          fs.writeFileSync(sourceIndexPath, srcHtml, 'utf-8');
          console.log('✅ Injected fresh static HTML into source index.html with entry point preserved!');
        }
      }
    }

    // 3. Prerender standalone Blog pages
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

    // 4. Generate Core Practice Silo Pages
    console.log('[+] Generating 3 Core Practice Silo Pages...');
    const navMatch = indexHtml.match(/(<nav[^>]*>.*?<\/nav>)/s);
    const footerMatch = indexHtml.match(/(<footer[^>]*>.*?<\/footer>)/s);
    const navHtml = navMatch ? navMatch[1] : '';
    const footerHtml = footerMatch ? footerMatch[1] : '';

    for (const p of CORE_PRACTICE_PAGES) {
      let pHtml = indexHtml;
      pHtml = pHtml.replace(/<title>.*?<\/title>/i, `<title>${p.title}</title>`);
      pHtml = pHtml.replace(/<meta name="description" content=".*?"/i, `<meta name="description" content="${p.description}"`);
      pHtml = pHtml.replace(/<meta property="og:title" content=".*?"/i, `<meta property="og:title" content="${p.title}"`);
      pHtml = pHtml.replace(/<meta name="twitter:title" content=".*?"/i, `<meta name="twitter:title" content="${p.title}"`);
      pHtml = pHtml.replace(/<meta property="og:description" content=".*?"/i, `<meta property="og:description" content="${p.description}"`);
      pHtml = pHtml.replace(/<meta name="twitter:description" content=".*?"/i, `<meta name="twitter:description" content="${p.description}"`);
      pHtml = pHtml.replace(/<link rel="canonical" href=".*?"/i, `<link rel="canonical" href="https://cvilabogados.mx/${p.slug}"`);

      const h1Block = `<h1 class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-obsidian tracking-tight mb-6">
        <span class="block text-xs uppercase tracking-[0.25em] text-[#B8860B] font-sans font-semibold mb-3">Sede Central Zamora, Michoacán · CVIL Abogados</span>
        ${p.h1}
      </h1>`;

      const sectionsHtml = p.sections.map(([title, desc]) => `
        <div class="bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:border-obsidian transition-colors flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-serif text-obsidian mb-3 font-semibold">${title}</h3>
            <p class="text-charcoal/70 text-sm leading-relaxed mb-4">${desc}</p>
          </div>
          <div class="pt-4 border-t border-gray-100">
            <a href="https://wa.me/524432735543" target="_blank" class="text-xs font-bold text-[#B8860B] uppercase tracking-wider hover:underline inline-flex items-center gap-1">
              Consultar Caso →
            </a>
          </div>
        </div>
      `).join('');

      const bodyContent = `
      <div class="min-h-screen bg-white text-obsidian font-sans">
        ${navHtml}
        <main class="pt-24 pb-16">
          <section class="py-12 lg:py-20 bg-[#fafaf9] border-b border-gray-200">
            <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
              <div class="max-w-3xl mb-12">
                ${h1Block}
                <p class="text-lg md:text-xl text-charcoal/80 font-light leading-relaxed mb-6">${p.subtitle}</p>
                <p class="text-sm md:text-base text-charcoal/70 leading-relaxed mb-8">${p.p1}</p>
                <div class="flex flex-wrap gap-4">
                  <a href="https://wa.me/524432735543?text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20para%20mi%20empresa%20en%20Zamora." target="_blank" class="px-8 py-4 bg-[#B8860B] hover:bg-obsidian text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-md">
                    Agendar Asesoría Legal
                  </a>
                  <a href="tel:+523511277317" class="px-8 py-4 border border-obsidian text-obsidian hover:bg-obsidian hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                    Llamar a Sede: 351 127 7317
                  </a>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                ${sectionsHtml}
              </div>

              <div class="mt-12 bg-obsidian text-white p-8 md:p-12 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
                <div>
                  <span class="text-xs font-bold uppercase tracking-widest text-[#E8CA9D] mb-1 block">Atención Inmediata</span>
                  <h4 class="text-2xl font-serif mb-2">¿Tienes un asunto legal que resolver en Zamora?</h4>
                  <p class="text-stone text-sm">Sede en C. Suiza 721-Piso 3, Col. La Luneta, Zamora de Hidalgo, Mich.</p>
                </div>
                <a href="https://wa.me/524432735543" target="_blank" class="px-8 py-3.5 bg-white text-obsidian hover:bg-[#B8860B] hover:text-white transition-all text-xs font-bold uppercase tracking-widest rounded-sm shrink-0">
                  WhatsApp 443 273 5543
                </a>
              </div>
            </div>
          </section>
        </main>
        ${footerHtml}
      </div>`;

      const pRootStart = pHtml.indexOf('<div id="root">');
      const pBodyEnd = pHtml.indexOf('</body>', pRootStart);
      if (pRootStart !== -1 && pBodyEnd !== -1) {
        pHtml = pHtml.slice(0, pRootStart) + `<div id="root">${bodyContent}</div>\n\n` + pHtml.slice(pBodyEnd);
      }

      const pubDir = path.join(__dirname, 'public', p.slug);
      const disDir = path.join(distDir, p.slug);
      fs.mkdirSync(pubDir, { recursive: true });
      fs.mkdirSync(disDir, { recursive: true });
      fs.writeFileSync(path.join(pubDir, 'index.html'), pHtml, 'utf-8');
      fs.writeFileSync(path.join(disDir, 'index.html'), pHtml, 'utf-8');
      console.log(`   ✅ Practice Silo created: /${p.slug}`);
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
