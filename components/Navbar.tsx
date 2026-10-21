import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenBlog?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBlog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Socios', href: '#partners' },
    { name: 'Experiencia', href: '#cases' },
    { name: 'Prácticas', href: '#services' },
    { name: 'La Firma', href: '#manifesto' },
    { name: 'Blog', href: '#/blog', isBlog: true },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.isBlog && onOpenBlog) {
      onOpenBlog();
    }
  };

  return (
    <nav role="navigation" aria-label="Menú Principal" className="fixed w-full animate-fade-in z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo - Typographic & Elegant */}
          <div className="flex items-center">
            <a href="#" className="flex items-center py-0.5">
              <Logo showText={true} className="h-11" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div role="navigation" aria-label="Menú Principal" className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-medium transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-obsidian after:transition-all hover:after:w-full ${
                  link.isBlog
                    ? 'text-[#B8860B] font-semibold hover:text-obsidian flex items-center gap-1.5'
                    : 'text-charcoal hover:text-obsidian'
                }`}
              >
                {link.isBlog && <BookOpen className="w-3.5 h-3.5" />}
                <span>{link.name}</span>
              </a>
            ))}
            <a
              href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-obsidian border border-obsidian hover:bg-white hover:text-obsidian transition-all duration-300 rounded-sm"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Abrir Menú" 
              aria-expanded={isOpen}
              className="text-obsidian p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className={`text-base font-medium uppercase tracking-wider py-2 border-b border-gray-100 ${
                  link.isBlog ? 'text-[#B8860B] font-bold flex items-center gap-2' : 'text-charcoal'
                }`}
              >
                {link.isBlog && <BookOpen className="w-4 h-4" />}
                <span>{link.name}</span>
              </a>
            ))}
            <a
              href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 text-xs uppercase tracking-widest font-bold text-white bg-obsidian rounded-sm mt-2"
            >
              Contacto Urgente
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
