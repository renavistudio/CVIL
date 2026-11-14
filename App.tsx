import React from 'react';
let HomePage: typeof import('./components/HomePage').default;
let PrivacyPolicyPage: typeof import('./components/PrivacyPolicyPage').default;
let BlogHub: typeof import('./components/BlogHub').default;
let PracticePage: typeof import('./components/PracticePage').default;
let ProfileMario: typeof import('./components/SocioMario').default;
let ProfileAlejandro: typeof import('./components/SocioAlejandro').default;

// Keep the prerendered page visible until its interactive component is ready.
// Profile dialogs remain lazy because they are opened after initial navigation.
export async function preparePage(pathname: string) {
  const page = getPageMeta(pathname);
  if (page.type === 'home') HomePage = (await import('./components/HomePage')).default;
  else if (page.type === 'privacy') PrivacyPolicyPage = (await import('./components/PrivacyPolicyPage')).default;
  else if (page.type === 'profile' && page.profile === 'mario') ProfileMario = (await import('./components/SocioMario')).default;
  else if (page.type === 'profile') ProfileAlejandro = (await import('./components/SocioAlejandro')).default;
  else if (page.type === 'practice') PracticePage = (await import('./components/PracticePage')).default;
  else if (page.type === 'blog' || page.type === 'article') BlogHub = (await import('./components/BlogHub')).default;
}
import Seo from './components/Seo';
import { getPageMeta } from './data/site.js';

const App: React.FC = () => {
  const page = getPageMeta(window.location.pathname);
  let content: React.ReactNode;
  if (page.type === 'privacy') content = <main><PrivacyPolicyPage /></main>;
  else if (page.type === 'profile') content = page.profile === 'mario' ? <ProfileMario onClose={() => window.location.assign(page.lang === 'en' ? '/en#partners' : '/#partners')} /> : <ProfileAlejandro onClose={() => window.location.assign(page.lang === 'en' ? '/en#partners' : '/#partners')} />;
  else if (page.type === 'practice') content = <PracticePage slug={page.sourcePath.slice(1)} />;
  else if (page.type === 'blog' || page.type === 'article') content = <BlogHub onClose={() => window.location.assign('/')} initialSlug={page.type === 'article' ? page.sourcePath.slice('/blog/'.length) : null} />;
  else if (page.type === 'notFound') content = (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-serif">Página no encontrada</h1>
      <p>La dirección solicitada no existe.</p>
      <a href="/" className="underline">Volver al inicio</a><a href="/blog" className="underline">Consultar las guías legales</a>
    </main>
  );
  else content = <HomePage />;
  return <><Seo />{content}</>;
};
export default App;
