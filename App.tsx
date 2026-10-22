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
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import BlogHub from './components/BlogHub';

const App: React.FC = () => {
  const [activeSocio, setActiveSocio] = useState<string | null>(null);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [blogArticleSlug, setBlogArticleSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/socio/mario-cervantes') {
        setActiveSocio('mario');
        setIsBlogOpen(false);
      } else if (hash === '#/socio/alejandro-arriaga') {
        setActiveSocio('alejandro');
        setIsBlogOpen(false);
      } else if (hash.startsWith('#/blog') || window.location.pathname.startsWith('/blog')) {
        setIsBlogOpen(true);
        setActiveSocio(null);
        let slug = null;
        if (window.location.pathname.startsWith('/blog/')) {
          slug = window.location.pathname.replace('/blog/', '').replace(/\/$/, '');
        } else if (hash.startsWith('#/blog/')) {
          slug = hash.split('#/blog/')[1];
        }
        setBlogArticleSlug(slug || null);
      } else if (hash === '#/abogado-penalista-zamora' || hash === '#/litigio-estrategico-zamora') {
        setActiveSocio('mario');
        setIsBlogOpen(false);
      } else if (hash === '#/abogados-de-empresas-zamora') {
        setActiveSocio('alejandro');
        setIsBlogOpen(false);
      } else if (hash === '#/abogado-laboral-patronal-zamora') {
        setActiveSocio('alejandro');
        setIsBlogOpen(false);
      } else {
        setActiveSocio(null);
        setIsBlogOpen(false);
        setBlogArticleSlug(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  useEffect(() => {
    if (isBlogOpen) {
      if (blogArticleSlug) {
        document.title = 'Abogado en Zamora Mich | Abogados Corporativos CVIL';
      } else {
        document.title = 'Abogado en Zamora Mich | Abogados Corporativos CVIL';
      }
    } else if (activeSocio === 'mario') {
      document.title = 'Dr. Mario Enrique Cervantes Vieyra — Litigio Estratégico | CVIL';
    } else if (activeSocio === 'alejandro') {
      document.title = 'Lic. Alejandro Arriaga — Abogado Corporativo & Laboral | CVIL';
    } else {
      document.title = 'Abogado en Zamora Mich | Abogados Corporativos CVIL';
    }
  }, [activeSocio, isBlogOpen, blogArticleSlug]);

  if (window.location.pathname === "/aviso-de-privacidad") {
    return <PrivacyPolicyPage />;
  }

  const handleCloseSocio = () => {
    setActiveSocio(null);
    window.location.hash = '';
  };

  const handleOpenBlog = (slug?: string) => {
    setIsBlogOpen(true);
    if (slug) {
      setBlogArticleSlug(slug);
      window.location.hash = `#/blog/${slug}`;
    } else {
      setBlogArticleSlug(null);
      window.location.hash = '#/blog';
    }
  };

  const handleCloseBlog = () => {
    setIsBlogOpen(false);
    setBlogArticleSlug(null);
    window.location.hash = '';
  };

  return (
    <>
      <div className="min-h-screen bg-white text-obsidian selection:bg-stone selection:text-white font-sans antialiased">
        <Navbar onOpenBlog={() => handleOpenBlog()} />
        <main role="main">
          <Hero />
          <Partners onOpenSocio={(id) => {
            if (id === 1) {
              setActiveSocio('mario');
              window.location.hash = '#/socio/mario-cervantes';
            }
            if (id === 2) {
              setActiveSocio('alejandro');
              window.location.hash = '#/socio/alejandro-arriaga';
            }
          }} />
          <Stats />
          <LiveTicker />
          <CaseSuccess />
          <BentoGrid />
          <Services />
          <Manifesto />
          <SocialProof />
          <BlogSection onOpenBlog={(slug) => handleOpenBlog(slug)} />
          <ContactForm />
          <Location />
        </main>
        <Footer 
          onOpenBlog={(slug) => handleOpenBlog(slug)}
          onOpenService={(serviceId) => {
            if (serviceId === 'penal') {
              setActiveSocio('mario');
              window.location.hash = '#/socio/mario-cervantes';
            } else {
              setActiveSocio('alejandro');
              window.location.hash = '#/socio/alejandro-arriaga';
            }
          }}
        />
        <ChatWidget />
      </div>

      {/* MODAL DE BLOG EDITORIAL COMPLETO */}
      {isBlogOpen && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
          <BlogHub 
            onClose={handleCloseBlog} 
            initialSlug={blogArticleSlug}
          />
        </div>
      )}

      {/* MODALES DE SOCIOS */}
      {activeSocio === 'mario' && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
          <SocioMario onClose={handleCloseSocio} />
        </div>
      )}
      
      {activeSocio === 'alejandro' && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
          <SocioAlejandro onClose={handleCloseSocio} />
        </div>
      )}
    </>
  );
};

export default App;
