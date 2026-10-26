import React from 'react';
import { BLOG_ARTICLES, PRACTICE_PAGES, SITE } from '../data/site.js';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

export default function PracticePage({ slug }: { slug: string }) {
  const practice = PRACTICE_PAGES.find((item) => item.slug === slug)!;
  const guides = BLOG_ARTICLES.filter((item) => practice.guides.includes(item.slug));
  return (
    <div className="min-h-screen bg-white text-obsidian font-sans">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-12 lg:py-20 bg-offwhite border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2 text-sm text-charcoal">
              <a href="/" className="underline">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">{practice.h1}</span>
            </nav>
            <div className="max-w-3xl mt-8 mb-12">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">CVIL Abogados · Zamora, Michoacán</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">{practice.h1}</h1>
              <p className="text-lg md:text-xl text-charcoal mb-6">{practice.subtitle}</p>
              <p className="text-base text-charcoal leading-relaxed mb-8">{practice.p1}</p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/524432735543?text=${encodeURIComponent(`Hola, quiero consultar sobre ${practice.h1.toLowerCase()}.`)}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-sm">Agendar asesoría</a>
                <a href="tel:+523511277317" className="px-8 py-4 border border-obsidian text-xs font-bold uppercase tracking-widest rounded-sm">Llamar: 351 127 7317</a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practice.sections.map(([title, description]) => (
                <section key={title} className="bg-white border border-gray-200 p-6 lg:p-8 rounded-sm shadow-sm">
                  <h2 className="text-xl font-serif mb-3 font-semibold">{title}</h2>
                  <p className="text-charcoal text-sm leading-relaxed">{description}</p>
                </section>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <section>
                <h2 className="text-2xl font-serif mb-5">Cuándo consultar esta área</h2>
                <ul className="list-disc pl-5 space-y-3 text-charcoal leading-relaxed">{practice.situations.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <section>
                <h2 className="text-2xl font-serif mb-5">Documentos para la primera consulta</h2>
                <ul className="list-disc pl-5 space-y-3 text-charcoal leading-relaxed">{practice.documents.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>
            <section className="mt-12 bg-white border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-serif mb-6">Preguntas sobre el servicio</h2>
              <div className="space-y-6">{practice.faqs.map(([question, answer]) => <div key={question}><h3 className="font-semibold mb-2">{question}</h3><p className="text-charcoal leading-relaxed">{answer}</p></div>)}</div>
            </section>
            {guides.length > 0 && <section className="mt-12">
              <h2 className="text-2xl font-serif mb-5">Guías para preparar tu consulta</h2>
              <div className="grid md:grid-cols-2 gap-5">{guides.map((article) => <a key={article.slug} href={`/blog/${article.slug}`} className="block p-6 bg-white border border-gray-200 hover:border-gold"><h3 className="font-serif text-xl underline mb-3">{article.title}</h3><p className="text-sm text-charcoal leading-relaxed">{article.description}</p></a>)}</div>
            </section>}
            <section className="mt-12 bg-obsidian text-white p-8 md:p-12 rounded-sm">
              <h2 className="text-2xl font-serif mb-4">Atención en La Luneta, Zamora</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-5">Al solicitar una cita, indica el tema y si existe una notificación o fecha próxima. Revisaremos el alcance de la atención y los honorarios según el asunto. La contratación y los siguientes pasos se definen después de conocer sus circunstancias.</p>
              <p className="text-sm mb-4">{SITE.address}</p>
              <div className="flex flex-wrap gap-6 text-sm"><a href={SITE.map} target="_blank" rel="noopener noreferrer" className="text-gold underline">Cómo llegar al despacho</a><a href="/#partners" className="underline">Conoce al equipo de CVIL</a><a href="https://wa.me/524432735543" target="_blank" rel="noopener noreferrer" className="underline">Solicitar cita por WhatsApp</a></div>
            </section>
            <nav aria-label="Servicios relacionados" className="mt-10 flex flex-wrap gap-5 text-sm">
              {PRACTICE_PAGES.filter((item) => practice.related.includes(item.slug)).map((item) => <a key={item.slug} href={`/${item.slug}`} className="underline">{item.h1}</a>)}
              <a href="/blog" className="underline">Todas las guías legales</a>
            </nav>
          </div>
        </section>
      </main>
      <Footer /><ChatWidget />
    </div>
  );
}
