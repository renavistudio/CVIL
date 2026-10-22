import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, MessageSquare } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenBlog?: (slug?: string) => void;
  onOpenService?: (serviceId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenBlog, onOpenService }) => {
  return (
    <footer role="contentinfo" className="bg-[#090A0E] text-[#D8DAE2] border-t border-white/10 py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Top: Logo & Redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="inline-block transition-transform hover:scale-[1.02]">
              <Logo showText={true} className="h-10 invert brightness-0" />
            </a>
            <p className="text-xs text-stone mt-2 font-light tracking-wide">
              Firma legal corporativa · Asesoría legal a empresas, contratos y acuerdos de socios en Zamora, Michoacán.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone hover:text-white hover:bg-[#B8860B] transition-all"
              aria-label="Facebook de CVIL Abogados"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone hover:text-white hover:bg-[#B8860B] transition-all"
              aria-label="Instagram de CVIL Abogados"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone hover:text-white hover:bg-[#B8860B] transition-all"
              aria-label="LinkedIn de CVIL Abogados"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Middle: Enlaces Corporativos sutiles en una sola línea (Sin saturación) */}
        <div className="py-6 flex flex-wrap justify-center md:justify-between items-center gap-y-3 gap-x-6 text-xs text-stone">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="/derecho-corporativo-zamora" className="hover:text-white transition-colors">
              Derecho Corporativo en Zamora
            </a>
            <span className="text-white/20">•</span>
            <a href="/abogados-corporativos-zamora" className="hover:text-white transition-colors">
              Abogados Corporativos
            </a>
            <span className="text-white/20">•</span>
            <a href="/abogados-laborales-zamora" className="hover:text-white transition-colors">
              Defensa Laboral Patronal
            </a>
            <span className="text-white/20">•</span>
            <a href="#services" className="hover:text-white transition-colors">
              Cobranza Mercantil
            </a>
            <span className="text-white/20">•</span>
            <a 
              href="#/blog" 
              onClick={() => onOpenBlog && onOpenBlog()} 
              className="text-[#E8CA9D] hover:text-white transition-colors font-medium"
            >
              Blog Corporativo
            </a>
          </div>

          <div>
            <a href="/aviso-de-privacidad" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </a>
          </div>
        </div>

        {/* Bottom: Bloque NAP limpio en una sola línea */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-stone/80">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>📍 C. Suiza 721-Piso 3, La Luneta, 59689 Zamora de Hidalgo, Mich.</span>
              <span className="hidden md:inline text-white/20">|</span>
              <a href="https://g.page/r/CWCRS9orNOB4EBI/review" target="_blank" rel="noopener noreferrer" className="text-[#E8CA9D] hover:text-white transition-colors font-semibold">⭐ 4.9 en Google Maps</a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="https://wa.me/524432735543" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              📲 WhatsApp: 443 273 5543
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a href="tel:+523511277317" className="hover:text-white transition-colors">
              📞 Sede: 351 127 7317
            </a>
          </div>

          <div className="text-center md:text-right text-stone/60">
            © {new Date().getFullYear()} CVIL Abogados. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
