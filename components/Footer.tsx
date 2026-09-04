import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Logo showText={true} className="h-10" />
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
          <div className="text-stone text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} CVIL — Zamora, Michoacán. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-3 text-[11px] text-stone">
            <a href="/aviso-de-privacidad" className="hover:text-obsidian transition-colors underline underline-offset-2">Aviso de Privacidad</a>
            <span>•</span>
            <span className="text-gray-600">
              Hecho por <a href="https://www.instagram.com/renavistudio/" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-obsidian transition-colors underline underline-offset-2">Renavi Studio</a>
            </span>
          </div>
        </div>

        {/* Redes sociales ocultas temporalmente */}
        <div className="hidden space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-obsidian transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5 stroke-[1.5]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-obsidian transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5 stroke-[1.5]" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;