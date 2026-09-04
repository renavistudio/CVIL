import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to improve TBT & LCP
const Partners = React.lazy(() => import('./components/Partners'));
const Stats = React.lazy(() => import('./components/Stats'));
const LiveTicker = React.lazy(() => import('./components/LiveTicker'));
const CaseSuccess = React.lazy(() => import('./components/CaseSuccess'));
const BentoGrid = React.lazy(() => import('./components/BentoGrid'));
const Services = React.lazy(() => import('./components/Services'));
const Manifesto = React.lazy(() => import('./components/Manifesto'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Location = React.lazy(() => import('./components/Location'));
const Footer = React.lazy(() => import('./components/Footer'));
const SocialProof = React.lazy(() => import('./components/SocialProof'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));
const SocioMario = React.lazy(() => import('./components/SocioMario'));
const SocioAlejandro = React.lazy(() => import('./components/SocioAlejandro'));
const PrivacyPolicyPage = React.lazy(() => import('./components/PrivacyPolicyPage'));

const App: React.FC = () => {
  const [activeSocio, setActiveSocio] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/socio/mario-cervantes') {
        setActiveSocio('mario');
      } else if (hash === '#/socio/alejandro-arriaga') {
        setActiveSocio('alejandro');
      } else {
        setActiveSocio(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  React.useEffect(() => {
    if (activeSocio === 'mario') {
      document.title = 'Dr. Mario Enrique Cervantes Vieyra — Socio Penalista | CVIL';
    } else if (activeSocio === 'alejandro') {
      document.title = 'Lic. Alejandro Arriaga Bastida — Socio Corporativo | CVIL';
    } else {
      document.title = 'CVIL | Derecho Corporativo | Abogados en Zamora, Michoacán';
    }
  }, [activeSocio]);

  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === "/aviso-de-privacidad") {
    return (
      <Suspense fallback={<div className="p-10 text-center font-sans">Cargando...</div>}>
        <PrivacyPolicyPage />
      </Suspense>
    );
  }

  const handleCloseSocio = () => {
    setActiveSocio(null);
    window.location.hash = '';
  };

  return (
    <>
      <div className="min-h-screen bg-white text-obsidian selection:bg-stone selection:text-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20 w-full" />}>
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
            <ContactForm />
            <Location />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <ChatWidget />
        </Suspense>
      </div>

      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
};

export default App;
