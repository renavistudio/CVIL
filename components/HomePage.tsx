import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './Navbar';
import LiveTicker from './LiveTicker';
import Hero from './Hero';
import Partners from './Partners';
import Stats from './Stats';
import CaseSuccess from './CaseSuccess';
import BentoGrid from './BentoGrid';
import Services from './Services';
import Manifesto from './Manifesto';
import ContactForm from './ContactForm';
import Location from './Location';
import Footer from './Footer';
import SocialProof from './SocialProof';
import ChatWidget from './ChatWidget';
import { BlogSection } from './BlogSection';
const SocioMario = lazy(() => import('./SocioMario'));
const SocioAlejandro = lazy(() => import('./SocioAlejandro'));

import { getPageMeta } from '../data/site.js';
export default function HomePage() {
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
  return (
    <>
      <div className="min-h-screen bg-white text-obsidian selection:bg-stone selection:text-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Partners paused={!!activeSocio} onOpenSocio={(id) => { window.location.hash = id === 1 ? '#/socio/mario-cervantes' : '#/socio/alejandro-arriaga'; }} />
          <Stats /><LiveTicker /><CaseSuccess /><BentoGrid /><Services /><Manifesto /><SocialProof /><BlogSection /><ContactForm /><Location />
        </main>
        <Footer /><ChatWidget />
      </div>
      {activeSocio && <div role="dialog" aria-modal="true" aria-label="Perfil profesional" className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
        <Suspense fallback={<p role="status" className="p-8 text-center">Cargando perfil…</p>}>{activeSocio === 'mario' ? <SocioMario onClose={closeSocio} /> : <SocioAlejandro onClose={closeSocio} />}</Suspense>
      </div>}
    </>
  );
}
