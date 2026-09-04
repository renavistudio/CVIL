import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-8 lg:py-12 bg-obsidian text-white relative overflow-hidden flex items-center justify-center min-h-[600px]">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img loading="lazy"
          src="images/fachada.webp"
          alt="Fachada y sede corporativa de la firma legal CVIL en Zamora, Michoacán"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian"></div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 text-center relative z-10">

        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-10 h-10 text-white stroke-[1px]" />
          </div>
        </div>

        <p className="text-stone text-xs font-bold tracking-[0.3em] uppercase mb-8">
          Nuestra Garantía
        </p>

        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-12 tracking-tight">
          "Cada caso que aceptamos tiene una estrategia clara.<br />
          <span className="text-gray-500 italic font-light">Si lo tomamos, es porque sabemos cómo resolverlo."</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 text-left max-w-4xl mx-auto mt-16">
          <div className="flex-1 p-6 border-l border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
            <h3 className="text-lg font-bold mb-4 text-white">Transparencia Total</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Le mantenemos informado del avance de su caso en todo momento. Sin tecnicismos, sin sorpresas. Sabrá exactamente qué estamos haciendo y por qué.
            </p>
          </div>
          <div className="flex-1 p-6 border-l border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
            <h3 className="text-lg font-bold mb-4 text-white">Claridad en Resultados</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Nuestros honorarios están vinculados al avance real de su caso. Su inversión está protegida por contratos de prestación de servicios claros y transparentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;