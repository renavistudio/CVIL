import React from 'react';
import { MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => (
  <footer role="contentinfo" className="bg-[#090A0E] text-[#D8DAE2] border-t border-white/10 py-12">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="/" className="inline-block"><Logo showText className="h-10 invert brightness-0" /></a>
          <p className="text-xs text-stone mt-2 font-light tracking-wide">Firma legal corporativa · Asesoría a empresas, contratos y acuerdos de socios en Zamora, Michoacán.</p>
        </div>
        <a href="https://maps.google.com/?cid=8710019042285162848" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white"><MapPin className="w-4 h-4" />Ver ubicación y opiniones en Google</a>
      </div>
      <nav aria-label="Enlaces del despacho" className="py-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-stone">
        <a href="/derecho-corporativo-zamora" className="hover:text-white">Contratos y gobierno corporativo</a>
        <a href="/abogados-corporativos-zamora" className="hover:text-white">Abogados corporativos</a>
        <a href="/abogados-laborales-zamora" className="hover:text-white">Defensa laboral patronal</a>
        <a href="/abogados-mercantiles-zamora" className="hover:text-white">Litigio mercantil y cobranza</a>
        <a href="/abogados-penalistas-zamora" className="hover:text-white">Defensa penal</a>
        <a href="/#services" className="hover:text-white">Especialidades legales</a>
        <a href="/blog" className="text-[#E8CA9D] hover:text-white">Guías legales</a>
        <a href="/aviso-de-privacidad" className="hover:text-white">Aviso de privacidad</a>
        <a href="https://www.linkedin.com/company/cvil-abogados" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn de CVIL</a>
      </nav>
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center md:text-left">
          <span>Calle Suiza 721, Piso 3, La Luneta, 59689 Zamora de Hidalgo, Michoacán.</span>
          <a href="https://wa.me/524432735543" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: 443 273 5543</a>
          <a href="tel:+523511277317" className="hover:text-white">Oficina: 351 127 7317</a>
        </div>
        <p>© {new Date().getFullYear()} CVIL Abogados.</p>
      </div>
    </div>
  </footer>
);
export default Footer;
