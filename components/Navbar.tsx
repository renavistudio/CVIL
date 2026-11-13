import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe2, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { getPageMeta } from '../data/site.js';

interface NavbarProps {
  onOpenBlog?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBlog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const page = getPageMeta(window.location.pathname);
  const english = page.lang === 'en';
  const homeHref = english ? '/en' : '/';
  const spanishHref = page.sourcePath;
  const englishHref = '/en' + (page.sourcePath === '/' ? '' : page.sourcePath);
  const contactMessage = english
    ? 'Hello, I would like to schedule a legal consultation with CVIL.'
    : 'Hola, buen día. Vi su página web y me interesa agendar una reunión de valoración legal.';
  const contactHref = 'https://wa.me/524432735543?text=' + encodeURIComponent(contactMessage);
  const navLinks = [
    { label: english ? 'Services' : 'Servicios', href: homeHref + '#services' },
    { label: english ? 'Cases' : 'Casos', href: homeHref + '#cases' },
    { label: english ? 'Team' : 'Equipo', href: homeHref + '#partners' },
    { label: 'Blog', href: english ? '/en/blog' : '/blog', blog: true },
  ];

  useEffect(() => {
    if (!languageOpen && !isOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (languageOpen && !languageRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (languageOpen) {
        setLanguageOpen(false);
        languageButtonRef.current?.focus();
      } else if (isOpen) {
        setIsOpen(false);
        mobileButtonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [languageOpen, isOpen]);

  const closeMobileMenu = (blog?: boolean) => {
    setIsOpen(false);
    if (blog) onOpenBlog?.();
  };

  return (
    <header data-no-translate className="fixed inset-x-0 top-0 z-50 h-[68px] min-[1100px]:h-[72px] border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto grid h-full max-w-[1360px] grid-cols-[1fr_auto] items-center px-6 min-[1100px]:grid-cols-[1fr_auto_1fr] min-[1100px]:gap-10 min-[1100px]:px-12">
        <a href={homeHref} aria-label={english ? 'CVIL home' : 'Inicio de CVIL'} className="w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
          <Logo showText={false} className="h-11 min-[1100px]:h-12" />
        </a>

        <button
          ref={mobileButtonRef}
          type="button"
          aria-label={isOpen ? (english ? 'Close menu' : 'Cerrar menú') : (english ? 'Open menu' : 'Abrir Menú')}
          aria-controls="cvil-mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(value => !value)}
          className="flex h-10 w-10 items-center justify-center text-obsidian focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold min-[1100px]:hidden"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <nav aria-label={english ? 'Main menu' : 'Menú principal'} className="hidden items-center gap-8 whitespace-nowrap min-[1100px]:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => link.blog && onOpenBlog?.()}
              className="text-sm font-medium tracking-[0.015em] text-charcoal transition-colors hover:text-[#9f720d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-6 min-[1100px]:flex">
          <div ref={languageRef} className="relative">
            <button
              ref={languageButtonRef}
              type="button"
              aria-label={english ? 'Choose language, current: English' : 'Elegir idioma, actual: Español'}
              aria-controls="cvil-language-options"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen(value => !value)}
              onKeyDown={event => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  setLanguageOpen(true);
                  window.requestAnimationFrame(() => languageRef.current?.querySelector<HTMLAnchorElement>('#cvil-language-options a')?.focus());
                }
              }}
              className="flex items-center gap-2 whitespace-nowrap py-2 text-[13px] font-medium text-charcoal transition-colors hover:text-obsidian focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <Globe2 className="h-[17px] w-[17px] text-stone" aria-hidden="true" />
              <span>{english ? 'English' : 'Español'}</span>
              <ChevronDown className="h-3 w-3 text-stone" aria-hidden="true" />
            </button>
            <div id="cvil-language-options" className={'absolute right-0 top-full z-20 w-40 border border-gray-200 bg-white p-1.5 shadow-xl ' + (languageOpen ? 'block' : 'hidden')}>
                {[
                  { label: 'Español', href: spanishHref, active: !english, lang: 'es' },
                  { label: 'English', href: englishHref, active: english, lang: 'en' },
                ].map(option => (
                  <a
                    key={option.lang}
                    href={option.href}
                    lang={option.lang}
                    aria-current={option.active ? 'page' : undefined}
                    className={'flex items-center justify-between px-3 py-2.5 text-[13px] hover:bg-[#faf8f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ' + (option.active ? 'bg-[#faf8f2] font-semibold text-[#9c6e06]' : 'text-charcoal')}
                  >
                    {option.label}
                    {option.active && <Check className="h-4 w-4" aria-hidden="true" />}
                  </a>
                ))}
            </div>
          </div>
          <a href={contactHref} target="_blank" rel="noopener noreferrer" className="flex h-[38px] w-[118px] items-center justify-center bg-obsidian text-xs font-semibold tracking-[0.04em] text-white transition-colors hover:bg-[#33343a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            {english ? 'Contact' : 'Contacto'}
          </a>
        </div>
      </div>

      {isOpen && <button type="button" tabIndex={-1} aria-label={english ? 'Close menu' : 'Cerrar menú'} onClick={() => setIsOpen(false)} className="fixed inset-x-0 top-[68px] h-[calc(100vh-68px)] bg-black/20 min-[1100px]:hidden" />}
        <nav id="cvil-mobile-menu" aria-label={english ? 'Mobile menu' : 'Menú móvil'} className={'absolute inset-x-0 top-full z-10 max-h-[calc(100vh-68px)] overflow-y-auto bg-white px-6 pb-6 pt-4 shadow-xl min-[1100px]:hidden ' + (isOpen ? 'block' : 'hidden')}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => closeMobileMenu(link.blog)}
              className="block border-b border-gray-100 px-0.5 py-3.5 text-base font-medium text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              {link.label}
            </a>
          ))}
          <a href={homeHref + '#manifesto'} onClick={() => closeMobileMenu()} className="block border-b border-gray-100 px-0.5 py-3.5 text-sm font-medium text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
            {english ? 'The firm' : 'La firma'}
          </a>
          <div className="mb-5 mt-5" aria-label={english ? 'Language' : 'Idioma'}>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.07em] text-stone">{english ? 'Language' : 'Idioma'}</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Español', href: spanishHref, active: !english, lang: 'es' },
                { label: 'English', href: englishHref, active: english, lang: 'en' },
              ].map(option => (
                <a
                  key={option.lang}
                  href={option.href}
                  lang={option.lang}
                  aria-current={option.active ? 'page' : undefined}
                  className={'flex h-[38px] items-center justify-center border text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ' + (option.active ? 'border-[#b48312] bg-[#faf8f2] font-semibold text-[#8c6408]' : 'border-gray-300 text-charcoal hover:border-[#b48312]')}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
          <a href={contactHref} target="_blank" rel="noopener noreferrer" onClick={() => closeMobileMenu()} className="flex h-11 w-full items-center justify-center bg-obsidian text-[13px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            {english ? 'Contact' : 'Contacto'}
          </a>
        </nav>
    </header>
  );
};

export default Navbar;

