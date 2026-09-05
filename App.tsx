import React from 'react';
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
import SocioMario from './components/SocioMario';
import SocioAlejandro from './components/SocioAlejandro';
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

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

  if (window.location.pathname === "/aviso-de-privacidad") {
    return <PrivacyPolicyPage />;
  }

  const handleCloseSocio = () => {
    setActiveSocio(null);
    window.location.hash = '';
  };

  return (
    <>
      <div className="min-h-screen bg-white text-obsidian selection:bg-stone selection:text-white font-sans antialiased">
        <Navbar />
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
          <ContactForm />
          <Location />
        </main>
        <Footer />
        <ChatWidget />
      </div>

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
