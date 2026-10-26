import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LiveTicker from './components/LiveTicker';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import CaseSuccess from './components/CaseSuccess';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services';
import Manifesto from './components/Manifesto';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import ChatWidget from './components/ChatWidget';
import { BlogSection } from './components/BlogSection';
import SocioMario from './components/SocioMario';
import SocioAlejandro from './components/SocioAlejandro';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import BlogHub from './components/BlogHub';
import PracticePage from './components/PracticePage';
import Seo from './components/Seo';
import { getPageMeta } from './data/site.js';

const App: React.FC = () => {
  const [activeSocio, setActiveSocio] = useState<string | null>(null);
  const page = getPageMeta(window.location.pathname);
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      // Preserve old shared links, but move blog navigation to real URLs.
      if (hash === '#/blog' || hash.startsWith('#/blog/')) {
        window.location.replace(hash.slice(1));
        return;
      }
      if (['#/socio/mario-cervantes', '#/abogado-penalista-zamora', '#/litigio-estrategico-zamora'].includes(hash)) setActiveSocio('mario');
      else if (['#/socio/alejandro-arriaga', '#/abogados-de-empresas-zamora', '#/abogado-laboral-patronal-zamora'].includes(hash)) setActiveSocio('alejandro');
      else setActiveSocio(null);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const closeSocio = () => { setActiveSocio(null); window.location.hash = 'partners'; };
  let content: React.ReactNode;
  if (page.type === 'privacy') content = <main><PrivacyPolicyPage /></main>;
  else if (page.type === 'practice') content = <PracticePage slug={page.path.slice(1)} />;
  else if (page.type === 'blog' || page.type === 'article') content = <BlogHub onClose={() => window.location.assign('/')} initialSlug={page.type === 'article' ? page.path.slice('/blog/'.length) : null} />;
  else if (page.type === 'notFound') content = (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-serif">Página no encontrada</h1>
      <p>La dirección solicitada no existe.</p>
      <a href="/" className="underline">Volver al inicio</a><a href="/blog" className="underline">Consultar las guías legales</a>
    </main>
  );
  else content = (
    <>
      <div className="min-h-screen bg-white text-obsidian selection:bg-stone selection:text-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Partners onOpenSocio={(id) => { window.location.hash = id === 1 ? '#/socio/mario-cervantes' : '#/socio/alejandro-arriaga'; }} />
          <Stats /><LiveTicker /><CaseSuccess /><BentoGrid /><Services /><Manifesto /><SocialProof /><BlogSection /><ContactForm /><Location />
        </main>
        <Footer /><ChatWidget />
      </div>
      {activeSocio && <div role="dialog" aria-modal="true" aria-label="Perfil profesional" className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
        {activeSocio === 'mario' ? <SocioMario onClose={closeSocio} /> : <SocioAlejandro onClose={closeSocio} />}
      </div>}
    </>
  );
  return <><Seo />{content}</>;
};
export default App;
