import React, { useState } from 'react';
import { ArrowLeft, Clock, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { BLOG_ARTICLES, PRACTICE_PAGES } from '../data/site.js';
import Footer from './Footer';

const articleDetails = [
  {
    category: 'Problemas con Socios',
    sections: [
      { title: 'Primero, revisa cómo está organizada la sociedad', text: 'Un desacuerdo entre socios no permite eliminar automáticamente la participación de alguien. Conviene revisar el tipo de sociedad, los estatutos, los títulos o partes sociales, los acuerdos de accionistas y las facultades de administración. Ser socio y ocupar un cargo administrativo son situaciones distintas.' },
      { title: 'Documentos útiles para evaluar alternativas', text: 'Reúne el acta constitutiva y sus reformas, las actas de asamblea, los poderes, los acuerdos vigentes y la documentación de los hechos que originan el conflicto. Preserva los documentos y evita disponer de activos o modificar accesos sin revisar antes quién tiene facultades para hacerlo.' },
      { title: 'Negociación, administración y continuidad', text: 'Según la documentación y los hechos, pueden evaluarse acuerdos de salida, compraventa de participaciones, cambios de administración o las acciones que correspondan. Ninguna de estas vías supone por sí misma una exclusión automática ni un precio de venta predeterminado. En CVIL revisamos la situación de la empresa y las opciones para dar continuidad a su operación.' },
    ], source: ['Ley General de Sociedades Mercantiles', 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf'],
  },
  {
    category: 'Cobranza & Pagarés',
    sections: [
      { title: 'Qué revisar en el pagaré', text: 'Conserva el documento original y reúne los comprobantes de pagos parciales, los acuerdos y las comunicaciones sobre el adeudo. La fecha de vencimiento, las firmas, los endosos y el contenido del título son relevantes para evaluar quién puede reclamar, contra quién y por qué vía.' },
      { title: 'Negociación y reclamación judicial', text: 'La estrategia debe considerar la exigibilidad del adeudo, la documentación, los plazos aplicables y las posibilidades de recuperación. Cuando procede una reclamación judicial, las medidas sobre bienes o cuentas requieren la intervención de la autoridad. Presentar una demanda no garantiza congelar fondos ni cobrar en un plazo determinado.' },
      { title: 'Cómo preparar la consulta', text: 'Lleva el pagaré, la identificación de las partes, los datos de contacto disponibles y una relación de lo pagado y lo pendiente. No alteres el documento ni acuerdes una sustitución sin revisar sus efectos. CVIL puede evaluar las alternativas de negociación y litigio mercantil en Zamora.' },
    ], source: ['Ley General de Títulos y Operaciones de Crédito', 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LGTOC.pdf'],
  },
  {
    category: 'Defensa Patronal',
    sections: [
      { title: 'Ningún trámite garantiza que no exista una reclamación', text: 'Antes de terminar una relación laboral es necesario revisar los hechos, los documentos y los derechos involucrados. Un acta administrativa o un recibo firmado no elimina por sí solo la posibilidad de controversia.' },
      { title: 'Qué documentación reunir', text: 'Prepara contrato, recibos de nómina, antigüedad, jornada, controles de asistencia y comunicaciones relevantes. La evaluación debe distinguir entre renuncia, terminación por acuerdo y rescisión, así como determinar los pagos y formalidades que correspondan.' },
      { title: 'Cómo puede ayudar la defensa patronal', text: 'La asesoría permite documentar las decisiones, revisar prestaciones pendientes y atender conciliaciones o juicios. En CVIL evaluamos las circunstancias de cada empresa sin prometer ausencia de demandas ni desconocer los derechos de las personas trabajadoras.' },
    ], source: ['Ley Federal del Trabajo', 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf'],
  },
  {
    category: 'Locales & Traspasos',
    sections: [
      { title: 'Documenta el incumplimiento', text: 'Reúne el contrato de arrendamiento y sus anexos, los recibos o transferencias, las garantías, los requerimientos y las comunicaciones. Es importante identificar qué obligaciones están pendientes y quiénes firmaron el contrato.' },
      { title: 'Recuperación del inmueble y cobro', text: 'La vía para reclamar rentas o recuperar la posesión depende del contrato, los hechos y la legislación aplicable. Los plazos y las medidas judiciales deben evaluarse en el asunto concreto. No se puede prometer una fecha de desocupación sin revisar el expediente.' },
      { title: 'Evita agravar el conflicto', text: 'Antes de cambiar cerraduras, retirar bienes o suspender servicios, revisa las consecuencias jurídicas con un profesional. CVIL ofrece asesoría en arrendamientos comerciales para evaluar acuerdos y, cuando corresponda, la intervención de la autoridad competente en Zamora.' },
    ], source: ['Poder Judicial de Michoacán', 'https://www.poderjudicialmichoacan.gob.mx/'],
  },
  {
    category: 'Locales & Traspasos',
    sections: [
      { title: 'Define qué se está comprando', text: 'Adquirir acciones, activos o derechos sobre un establecimiento puede tener efectos diferentes. Antes de entregar un anticipo, identifica qué bienes y contratos forman parte de la operación, quién puede transmitirlos y qué autorizaciones hacen falta.' },
      { title: 'Revisa obligaciones y documentos', text: 'Conviene examinar la documentación societaria, la situación laboral, los adeudos, los contratos con proveedores, las licencias y el arrendamiento del local. Un listado de activos no sustituye la revisión de pasivos ni confirma que todos los contratos puedan cederse.' },
      { title: 'Prepara el acuerdo y el cierre', text: 'El contrato debe reflejar los hallazgos de la revisión y las obligaciones que asume cada parte. Las garantías, condiciones y documentos de entrega se definen según la operación. CVIL puede acompañar la revisión legal y contractual de negocios en Zamora.' },
    ], source: ['Ley General de Sociedades Mercantiles', 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf'],
  },
  {
    category: 'Defensa Patronal',
    sections: [
      { title: 'Revisa el citatorio completo', text: 'Identifica la autoridad emisora, el expediente, la fecha, la sede y la persona citada. Comprueba los datos de la audiencia en el propio documento y en los canales oficiales; evita depender de una dirección publicada en un artículo.' },
      { title: 'Prepara la representación y el expediente', text: 'Reúne el citatorio, la identificación, los documentos de representación de la empresa y la información de la relación laboral. Revisa anticipadamente qué requisitos exige la autoridad y qué prestaciones o hechos se plantean.' },
      { title: 'Evalúa propuestas y formalidades', text: 'La conciliación permite explorar acuerdos. Antes de firmar, revisa su contenido, los derechos comprendidos y las formalidades aplicables. La firma de un documento no justifica afirmar que nunca podrá existir otra reclamación. CVIL asesora a empleadores de Zamora en la preparación y atención de estas audiencias.' },
    ], source: ['Ley Federal del Trabajo', 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf'],
  },
];

export const BLOG_POSTS = BLOG_ARTICLES.map((article, index) => ({ ...article, ...articleDetails[index], subtitle: article.description, readTime: '3 min de lectura' }));

interface BlogProps { onClose?: () => void; initialSlug?: string | null; }
export default function BlogHub({ initialSlug }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const currentArticle = BLOG_POSTS.find((post) => post.slug === initialSlug);
  const practice = PRACTICE_PAGES.find((item) => item.slug === currentArticle?.practiceSlug);
  const filteredPosts = activeCategory === 'Todos' ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === activeCategory);
  const categories = ['Todos', 'Problemas con Socios', 'Cobranza & Pagarés', 'Defensa Patronal', 'Locales & Traspasos'];
  return (
    <div className="min-h-screen bg-white text-obsidian flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-4">
          <a href={currentArticle ? '/blog' : '/'} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-gold"><ArrowLeft className="w-4 h-4" />{currentArticle ? 'Todas las guías' : 'Inicio'}</a>
          <a href="tel:+523511277317" className="flex items-center gap-2 text-sm"><Phone className="w-4 h-4 text-gold" />351 127 7317</a>
        </div>
      </header>
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 lg:px-12 py-10 lg:py-16">
        {currentArticle ? (
          <article className="max-w-3xl mx-auto">
            <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2 text-sm mb-6"><a href="/" className="underline">Inicio</a><span aria-hidden="true">/</span><a href="/blog" className="underline">Guías legales</a><span aria-hidden="true">/</span><span aria-current="page">{currentArticle.title}</span></nav>
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">{currentArticle.category}</p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-5">{currentArticle.title}</h1>
            <p className="text-lg text-charcoal mb-5">{currentArticle.description}</p>
            <p className="text-sm text-stone mb-8">Por <a href="/#partners" className="underline">CVIL Abogados Corporativos</a> · Actualizado el <time dateTime={currentArticle.dateModified}>26 de octubre de 2026</time></p>
            <img src={currentArticle.imageUrl} width="1200" height="675" alt={currentArticle.title} className="w-full h-64 md:h-96 object-cover rounded-sm mb-10" />
            <nav aria-label="Contenido de la guía" className="mb-10 border border-gray-200 bg-offwhite p-6"><p className="font-semibold mb-3">En esta guía</p><ol className="list-decimal pl-5 space-y-2">{currentArticle.sections.map((section, i) => <li key={section.title}><a href={`#seccion-${i + 1}`} className="underline">{section.title}</a></li>)}<li><a href="#documentos" className="underline">Lista de documentos</a></li></ol></nav>
            <div className="space-y-8 text-charcoal leading-relaxed">
              {currentArticle.sections.map((section, i) => <section id={`seccion-${i + 1}`} key={section.title}><h2 className="text-2xl font-serif text-obsidian mb-3">{section.title}</h2><p>{section.text}</p></section>)}
            </div>
            <section id="documentos" className="mt-10 p-6 border border-gray-200"><h2 className="text-2xl font-serif mb-4">Lista de documentos para consultar tu caso</h2><ul className="list-disc pl-5 space-y-3 text-charcoal">{currentArticle.checklist.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm text-charcoal">Lleva lo que tengas disponible e indica qué documentos faltan. Esta información es general; las opciones dependen de la documentación y las circunstancias del asunto.</p></section>
            <p className="mt-8 text-sm text-stone">Referencia: <a href={currentArticle.source[1]} target="_blank" rel="noopener noreferrer" className="underline">{currentArticle.source[0]}</a>.</p>
            <section className="mt-10 p-8 bg-obsidian text-white rounded-sm">
              <h2 className="text-2xl font-serif mb-4">Consulta tu situación con CVIL</h2>
              <p className="text-gray-300 text-sm mb-6">Revisamos los documentos y las circunstancias para evaluar las alternativas de tu asunto.</p>
              {practice && <a href={`/${practice.slug}`} className="block underline text-white mb-6">{practice.h1}: conoce el servicio y cómo preparar una consulta</a>}
              <a href="https://wa.me/524432735543" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-sm rounded-sm"><MessageSquare className="w-4 h-4" />WhatsApp: 443 273 5543</a>
            </section>
            <nav aria-label="Guías relacionadas" className="mt-10 space-y-3">
              <h2 className="text-xl font-serif">Otras guías legales</h2>
              {BLOG_POSTS.filter((post) => post.slug !== currentArticle.slug && (post.practiceSlug === currentArticle.practiceSlug || post.category === currentArticle.category)).map((post) => <a key={post.slug} href={`/blog/${post.slug}`} className="block underline text-sm">{post.title}</a>)}
            <a href="/blog" className="block underline text-sm">Ver todas las guías legales</a></nav>
          </article>
        ) : (
          <>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium mb-5">Soluciones legales para dueños de negocio y empresas</h1>
            <p className="text-charcoal max-w-3xl mb-10">Guías para preparar una consulta y entender qué documentos y alternativas revisar ante conflictos societarios, adeudos, relaciones laborales y contratos de negocios en Zamora.</p>
            <div className="flex flex-wrap gap-2 mb-10" aria-label="Filtrar guías">
              {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`px-4 py-2 text-xs rounded-sm ${activeCategory === category ? 'bg-obsidian text-white' : 'bg-gray-100 text-charcoal'}`}>{category}</button>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => <a key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col border border-gray-200 hover:border-gold rounded-sm overflow-hidden shadow-sm">
                <img src={post.imageUrl} width="400" height="225" alt={post.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1"><p className="text-xs text-gold mb-3">{post.category}</p><h2 className="text-xl font-serif mb-4">{post.title}</h2><p className="text-sm text-charcoal mb-5">{post.description}</p><span className="inline-flex items-center gap-2 text-sm">Leer guía<ArrowRight className="w-4 h-4" /></span></div>
              </a>)}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
