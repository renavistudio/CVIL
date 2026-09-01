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
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

const App: React.FC = () => {
  const [isSocioOpen, setIsSocioOpen] = React.useState(false);

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/socio/mario-cervantes') {
        setIsSocioOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  React.useEffect(() => {
    if (isSocioOpen) {
      document.title = 'Dr. Mario Enrique Cervantes Vieyra — Socio Penalista | CVIL';
    } else {
      document.title = 'CVIL | Derecho Corporativo | Abogados en Zamora, Michoacán';
    }
  }, [isSocioOpen]);

  if (window.location.pathname === "/aviso-de-privacidad") {
    return <PrivacyPolicyPage />;
  }

  return (
    <>
      <div className="min-h-screen bg-white text-obsidian selection:bg-stone selection:text-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Partners onOpenSocio={() => setIsSocioOpen(true)} />
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

      {isSocioOpen && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in">
          <SocioMario onClose={() => { setIsSocioOpen(false); window.location.hash = ''; }} />
        </div>
      )}
    </>
  );
};

export default App;