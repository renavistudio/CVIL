import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { ROUTES, getPageMeta, SITE, BLOG_ARTICLES, PRACTICE_PAGES } from '../data/site.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'application/javascript', '.webp':'image/webp', '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml' };
const server = http.createServer(async (req,res) => {
  try {
    const name = decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\//,'');
    let file = path.resolve(dist,name || 'index.html');
    if (!file.startsWith(dist+path.sep) && file !== dist) { res.writeHead(403).end(); return; }
    let stat = await fs.stat(file).catch(()=>null);
    if (stat?.isDirectory()) { file=path.join(file,'index.html'); stat=await fs.stat(file).catch(()=>null); }
    if (!stat?.isFile()) { res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}).end(await fs.readFile(path.join(dist,'404.html'))); return; }
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'}).end(await fs.readFile(file));
  } catch { res.writeHead(500).end(); }
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const origin=`http://127.0.0.1:${server.address().port}`;
const results=[];
assert.equal(new Set(ROUTES.map(route=>getPageMeta(route).title)).size,ROUTES.length,'Unique page titles');
assert.equal(new Set(ROUTES.map(route=>getPageMeta(route).description)).size,ROUTES.length,'Unique descriptions');
let browser;
try {
  try { browser=await chromium.launch({headless:true}); } catch (e) { if (process.platform !== 'win32') throw e; browser=await chromium.launch({channel:'msedge',headless:true}); }
  for (const javaScriptEnabled of [false,true]) {
    const context=await browser.newContext({javaScriptEnabled,viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    await context.route('**/*',route=>route.request().url().startsWith(origin)?route.continue():route.abort());
    for (const pathname of ROUTES) {
      const page=await context.newPage();const errors=[];
      page.on('pageerror',error=>errors.push(error.message));
      const response=await page.goto(origin+pathname,{waitUntil:'load'});
      assert.equal(response.status(),200);
      if(javaScriptEnabled)await page.waitForFunction(()=>document.documentElement.dataset.seoReady==='true');
      const state=await page.evaluate(()=>({
        title:document.title, h1:[...document.querySelectorAll('h1')].map(e=>e.textContent.trim()),
        canonical:document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
        roots:document.querySelectorAll('#root').length,main:document.querySelectorAll('main').length,
        schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent)),
        links:[...document.querySelectorAll('a[href]')].map(e=>e.getAttribute('href')),
        images:[...document.images].map(e=>({src:e.getAttribute('src'),alt:e.alt})),
        text:document.body.textContent,
        description:document.querySelector('meta[name=description]')?.content,
        shareImage:document.querySelector('meta[property="og:image"]')?.content,
        ids:[...document.querySelectorAll('[id]')].map(e=>e.id),
        mainLinks:[...document.querySelectorAll('main a[href]')].map(e=>e.getAttribute('href')),
        modified:document.querySelector('time[datetime]')?.getAttribute('datetime'),
        breadcrumbs:!!document.querySelector('nav[aria-label="Ruta de navegación"]'),
        overflow:document.documentElement.scrollWidth>innerWidth,
      }));
      const meta=getPageMeta(pathname);
      assert.deepEqual(state.h1,[meta.h1],`${pathname}: h1`);
      assert.equal(state.title,meta.title,`${pathname}: title`);
      assert.equal(state.description,meta.description,`${pathname}: description`);
      assert.ok(!state.overflow,`${pathname}: desktop overflow`);
      for(const href of state.links.filter(href=>href?.startsWith('#') && href.length > 1 && !href.startsWith('#/'))) {
        assert.ok(state.ids.includes(decodeURIComponent(href.slice(1))),`${pathname}: broken section ${href}`);
      }
      if(meta.type==='article') {
        const article=BLOG_ARTICLES.find(item=>pathname==='/blog/'+item.slug);
        assert.ok(state.mainLinks.includes('/'+article.practiceSlug),`${pathname}: missing contextual service link`);
        assert.equal(state.shareImage,SITE.url+article.imageUrl);
        assert.equal(state.modified,article.dateModified);
        const schemaArticle=state.schema[0]['@graph'].find(e=>e['@type']==='BlogPosting');
        assert.equal(schemaArticle.image,state.shareImage);
        assert.equal(schemaArticle.dateModified,state.modified);
        assert.ok(state.breadcrumbs);
      }
      if(meta.type==='practice') {
        const practice=PRACTICE_PAGES.find(item=>pathname==='/'+item.slug);
        for(const guide of practice.guides)assert.ok(state.mainLinks.includes('/blog/'+guide),`${pathname}: missing guide link`);
        assert.ok(state.breadcrumbs);
      }
      if(pathname==='/')for(const practice of PRACTICE_PAGES)assert.ok(state.mainLinks.includes('/'+practice.slug),`Home must link to ${practice.slug}`);
      assert.equal(state.canonical,SITE.url+(pathname==='/'?'/':pathname));
      assert.equal(state.roots,1);assert.equal(state.main,1);assert.equal(state.schema.length,1);
      assert.deepEqual(errors,[],`${pathname}: browser errors`);
      assert.ok(!state.schema[0]['@graph'].some(e=>e.aggregateRating||e['@type']==='FAQPage'));
      for (const href of state.links.filter(href=>href?.startsWith('/'))) {
        assert.ok(!href.startsWith('/#/blog'),`${pathname}: legacy blog link`);
        const url=new URL(href,origin);
        assert.ok(ROUTES.includes(url.pathname),`${pathname}: broken internal link ${href}`);
      }
      for(const image of state.images) {
        if(!image.src?.startsWith('/'))continue;
        assert.equal((await fetch(new URL(image.src,origin))).status,200,`${pathname}: image ${image.src}`);
      }
      if(pathname==='/blog'&&javaScriptEnabled){
        await page.getByRole('button',{name:'Defensa Patronal',exact:true}).click();
        assert.equal(await page.locator('main h2').count(),2);
      }
      results.push({path:pathname,javaScriptEnabled,title:state.title,h1:state.h1[0],links:state.links.length,images:state.images.length,ok:true});
      await page.close();
    }
    await context.close();
  }
  const missing=await fetch(origin+'/esta-ruta-no-existe');assert.equal(missing.status,404);
  const config=JSON.parse(await fs.readFile(path.join(root,'vercel.json'),'utf8'));
  assert.equal(config.cleanUrls,true);assert.equal(config.trailingSlash,false);assert.ok(!config.rewrites);
  const sitemap=await fs.readFile(path.join(dist,'sitemap.xml'),'utf8');
  for(const route of ROUTES)assert.ok(sitemap.includes(`<loc>${SITE.url}${route==='/'?'/':route}</loc>`));
  assert.ok(!sitemap.includes('<lastmod>')); // No fabricated freshness.
  const context=await browser.newContext({viewport:{width:390,height:844}});
  const page=await context.newPage();await page.goto(origin+'/#/blog',{waitUntil:'load'});await page.waitForURL(origin+'/blog');
  await page.goto(origin+'/',{waitUntil:'load'});
  assert.equal(await page.locator('h1').count(),1);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile horizontal overflow');
  await page.getByRole('button',{name:'Abrir Menú'}).click();await page.getByRole('link',{name:'Blog',exact:true}).click();await page.waitForURL(origin+'/blog');
  await context.close();
  if(process.env.CVIL_SCREENSHOT_DIR){
    await fs.mkdir(process.env.CVIL_SCREENSHOT_DIR,{recursive:true});
    for(const width of [1440,390]){
      const page=await browser.newPage({viewport:{width,height:width===390?844:1000}});
      for(const [name,route] of [['inicio','/'],['blog','/blog'],['corporativo','/abogados-corporativos-zamora'],['mercantil','/abogados-mercantiles-zamora'],['penal','/abogados-penalistas-zamora'],['guia-pagare','/blog/como-cobrar-un-pagare-en-zamora-michoacan']]){
        await page.goto(origin+route,{waitUntil:'networkidle'});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${route}: viewport overflow ${width}`);await page.screenshot({path:path.join(process.env.CVIL_SCREENSHOT_DIR,`${name}-${width}.png`),fullPage:name!=='inicio'});
      }
      await page.close();
    }
  }
  await fs.writeFile(path.resolve(process.env.CVIL_VERIFICATION_REPORT || path.join(root, 'verification.local.json')),JSON.stringify({routes:results.length,missingStatus:404,legacyBlogRedirect:true,mobileMenu:true,results},null,2));
  console.log(`Verified ${results.length} route/JavaScript combinations, local images, internal links, missing URL, sitemap, legacy redirect and mobile navigation.`);
} finally {
  if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));
}
