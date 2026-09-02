import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
    { name: 'Socios', href: '#partners' },
    { name: 'Experiencia', href: '#cases' },
    { name: 'Prácticas', href: '#services' },
    { name: 'La Firma', href: '#manifesto' },
  ];

  return (
    <nav className="fixed w-full animate-fade-in z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo - Typographic & Elegant */}
          <div className="flex items-center">
            <a href="#" className="flex items-center py-0.5">
              <Logo showText={true} className="h-11" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-obsidian transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-obsidian after:transition-all hover:after:w-full"
              >
                {link.name}
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
              className="text-obsidian"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white fixed inset-0 z-40 pt-24 px-6"
          >
            <div className="flex flex-col space-y-6 items-center justify-center h-full pb-24">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-obsidian hover:text-stone italic transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-obsidian text-white px-10 py-4 text-sm uppercase tracking-widest"
              >
                Agendar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;