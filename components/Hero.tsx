import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  return (
    <>
      <section id="home" className="relative  flex items-center bg-white overflow-hidden pt-[88px] pb-6 lg:pt-28 lg:pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <button type="button" onClick={() => setShowPhoto(true)} aria-label="Ampliar fotografía de los socios fundadores" className="lg:order-2 w-full h-[85vw] lg:h-[640px] overflow-hidden rounded-sm shadow-xl">
            <img src="/images/dsc/DSC_6061_opt.webp" width="800" height="600" alt="Socios fundadores de CVIL Abogados Corporativos" fetchPriority="high" className="w-full h-full object-cover object-top contrast-[1.05]" />
          </button>
          <div className="lg:order-1">
            <p className="text-[10px] lg:text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">Oficina en Zamora · Atención en todo México</p>
            <h1 className="text-[2.45rem] leading-[1.06] sm:text-5xl lg:text-[4.6rem] lg:leading-[1.02] font-serif font-medium tracking-tight mb-4 text-obsidian">Abogados en Zamora Michoacán</h1>
            <p className="text-2xl sm:text-3xl lg:text-[2.25rem] leading-tight font-serif font-normal tracking-tight text-charcoal/75 mb-5 lg:mb-7">Hablemos de <span className="italic text-stone font-light">tu asunto.</span></p>
            <p className="text-base lg:text-xl text-charcoal/80 font-light leading-relaxed max-w-2xl">Si buscas un abogado en Zamora, Michoacán, aquí atendemos asuntos de personas, familias y empresas, desde una consulta preventiva hasta la representación en juicio. Escuchamos tu caso y te explicamos con claridad qué camino conviene tomar.</p>
            <div className="mt-8 lg:mt-12 flex flex-wrap gap-6 items-center">
              <a href="https://wa.me/524432735543?text=Hola%2C%20me%20interesa%20agendar%20una%20consulta%20con%20CVIL%20Abogados." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 bg-gold text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-obsidian transition-colors shadow-lg w-full sm:w-auto">Hablar con el despacho<ArrowRight className="w-4 h-4" /></a>
              <span className="text-[10px] text-stone uppercase tracking-widest">443 273 5543 · WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
      {showPhoto && <div role="dialog" aria-modal="true" aria-label="Fotografía de los socios fundadores" className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-4 md:p-12" onClick={() => setShowPhoto(false)}>
        <div className="relative max-w-6xl w-full h-[80vh]" onClick={(event) => event.stopPropagation()}>
          <img src="/images/dsc/DSC_6061_opt.webp" width="800" height="600" alt="Socios fundadores de CVIL Abogados Corporativos" className="w-full h-full object-contain" />
          <button type="button" aria-label="Cerrar fotografía" onClick={() => setShowPhoto(false)} className="absolute top-4 right-4 p-3 bg-black/60 text-white rounded-full"><X className="w-5 h-5" /></button>
        </div>
      </div>}
    </>
  );
};
export default Hero;
