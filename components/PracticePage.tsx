import React from 'react';
import { PRACTICE_PAGES, SITE } from '../data/site.js';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

export default function PracticePage({ slug }: { slug: string }) {
  const practice = PRACTICE_PAGES.find((item) => item.slug === slug)!;
  return (
    <div className="min-h-screen bg-white text-obsidian font-sans">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-12 lg:py-20 bg-offwhite border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <a href="/" className="text-sm text-charcoal hover:underline">Inicio</a>
            <div className="max-w-3xl mt-8 mb-12">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">CVIL Abogados · Zamora, Michoacán</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">{practice.h1}</h1>
              <p className="text-lg md:text-xl text-charcoal mb-6">{practice.subtitle}</p>
              <p className="text-base text-charcoal leading-relaxed mb-8">{practice.p1}</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/524432735543" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-sm">Agendar asesoría</a>
                <a href="tel:+523511277317" className="px-8 py-4 border border-obsidian text-xs font-bold uppercase tracking-widest rounded-sm">Llamar: 351 127 7317</a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practice.sections.map(([title, description]) => (
                <section key={title} className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm">
                  <h2 className="text-xl font-serif mb-3 font-semibold">{title}</h2>
                  <p className="text-charcoal text-sm leading-relaxed">{description}</p>
                </section>
              ))}
            </div>
            <section className="mt-12 bg-obsidian text-white p-8 md:p-12 rounded-sm">
              <h2 className="text-2xl font-serif mb-4">Qué preparar para una primera consulta</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">Reúne los contratos y documentos relacionados con el asunto, las comunicaciones relevantes y una relación de fechas. Revisaremos los hechos, los riesgos y las alternativas antes de proponer una estrategia.</p>
              <p className="text-sm mb-4">{SITE.address}</p>
              <a href={SITE.map} target="_blank" rel="noopener noreferrer" className="text-gold underline">Cómo llegar al despacho</a>
            </section>
            <nav aria-label="Servicios relacionados" className="mt-10 flex flex-wrap gap-5 text-sm">
              {PRACTICE_PAGES.filter((item) => item.slug !== slug).map((item) => <a key={item.slug} href={`/${item.slug}`} className="underline">{item.h1}</a>)}
              <a href="/blog" className="underline">Guías legales para empresas</a>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
