import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { BLOG_ARTICLES, PRACTICE_PAGES } from '../data/site.js';
import Footer from './Footer';
import LanguageSwitch from './LanguageSwitch';

type ArticleDetail = {
  category: string;
  intro: string;
  excerpt: string;
  sections: { title: string; text: string }[];
  sources: { label: string; url: string }[];
  ctaTitle: string;
  ctaText: string;
  serviceLabel: string;
  relatedSlugs: string[];
};

const articleDetails: Record<string, ArticleDetail> = {
  "como-sacar-a-un-socio-de-una-empresa-zamora": {
    "category": "Socios y empresas",
    "intro": "Cuando un desacuerdo entre socios empieza a detener pagos, decisiones o el trabajo diario, conviene separar el problema personal de las facultades de cada persona. La salida de un socio, su participación en la empresa y su cargo en la administración son asuntos distintos. El primer paso es saber qué puede decidir cada uno y con qué documentos se acredita.",
    "excerpt": "Qué revisar cuando un desacuerdo entre socios bloquea decisiones, la administración o la salida de una persona.",
    "sections": [
      {
        "title": "Identifica qué está afectando a la empresa",
        "text": "Anota los hechos que necesitan una solución: una firma detenida, dinero sin justificar, información que no se entrega o decisiones que no se pueden tomar. Incluye fechas y conserva las comunicaciones. Esta relación permite distinguir un desacuerdo comercial de un posible incumplimiento y decidir qué requiere atención primero."
      },
      {
        "title": "Revisa la participación y las facultades de administración",
        "text": "No basta con saber quién aportó más dinero o quién trabaja todos los días en el negocio. El tipo de sociedad, los estatutos, los acuerdos y los poderes ayudan a determinar cómo se vota, quién representa a la empresa y qué procedimiento corresponde para cambiar a un administrador. No deben tratarse como si fueran la misma decisión."
      },
      {
        "title": "Si se busca una salida, define qué debe quedar acordado",
        "text": "Una negociación de salida debe abordar qué participación se transmite, cómo se determina su valor, cuándo se paga y qué ocurre con las obligaciones pendientes. También puede ser necesario revisar el cargo de administrador y las garantías personales. Un desacuerdo no permite dar por hecho que alguien pierde sus derechos o que existe un precio obligatorio de salida."
      },
      {
        "title": "Antes de cambiar firmas, accesos o disposición de bienes",
        "text": "Lleva a la consulta los documentos de la sociedad y explica qué resultado buscas: recuperar información, destrabar una decisión, negociar una salida o atender un incumplimiento. Indica también si solicitas asesoría como socio o en nombre de la empresa. Con ese contexto se puede delimitar la representación y revisar las medidas que sí están a tu alcance."
      }
    ],
    "sources": [
      {
        "label": "Ley General de Sociedades Mercantiles",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf"
      }
    ],
    "ctaTitle": "Cuéntanos qué decisión está detenida",
    "ctaText": "Explica quiénes participan en la sociedad y qué ha ocurrido. Te indicaremos qué documentos preparar para una consulta sobre la administración o la relación entre socios.",
    "serviceLabel": "Asesoría para empresas y socios",
    "relatedSlugs": [
      "traspaso-de-negocio-deudas-anteriores-zamora"
    ]
  },
  "como-cobrar-un-pagare-en-zamora-michoacan": {
    "category": "Cobro de deudas",
    "intro": "Si venció un pagaré y no recibiste el pago, conserva el documento y ordena la información del adeudo antes de negociar otra vez. El contenido del título, los abonos y la fecha de vencimiento influyen en la reclamación. Tener un pagaré es relevante, pero la posibilidad de recuperar el dinero también exige revisar las circunstancias del deudor y del asunto.",
    "excerpt": "Cómo ordenar el pagaré, los abonos y los antecedentes para decidir entre negociar y reclamar judicialmente.",
    "sections": [
      {
        "title": "Conserva el título y comprueba qué quedó pendiente",
        "text": "Guarda el original si se emitió en papel. Si el título es electrónico, conserva su soporte y los registros de emisión. Prepara una cuenta que distinga capital, pagos e intereses reclamados; adjunta transferencias y recibos. Evita añadir datos, corregir fechas o sustituir el pagaré sin revisar las consecuencias."
      },
      {
        "title": "Qué necesita revisar un abogado",
        "text": "Además del monto, importan las firmas, el vencimiento, los endosos y quién aparece obligado. También conviene explicar de dónde surgió el adeudo y si hay convenios posteriores. Estos datos ayudan a revisar la exigibilidad, los plazos aplicables y la vía de reclamación, sin asumir que todos los pagarés se cobran de la misma forma."
      },
      {
        "title": "Si hay una propuesta de pago, documenta el acuerdo",
        "text": "Una propuesta debe dejar claros los importes, las fechas y qué ocurre con el saldo y el documento original. Antes de aceptar descuentos, cambiar al obligado o entregar el título, revisa cómo se conservará la posibilidad de reclamar si el acuerdo no se cumple. Guarda constancia de cada abono."
      },
      {
        "title": "Qué cambia cuando se presenta una demanda",
        "text": "El procedimiento depende del documento y del caso. Las medidas sobre bienes o cuentas se solicitan y tramitan ante la autoridad; no son un resultado automático de contratar a un abogado. Conviene valorar desde el inicio el costo del asunto, la información disponible para localizar al obligado y las posibilidades reales de recuperación."
      }
    ],
    "sources": [
      {
        "label": "Ley General de Títulos y Operaciones de Crédito",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGTOC.pdf"
      },
      {
        "label": "Código de Comercio",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf"
      }
    ],
    "ctaTitle": "Prepara el pagaré y la relación de pagos",
    "ctaText": "Dinos cuánto quedó pendiente y si el deudor ha ofrecido pagar. Para revisar la reclamación necesitaremos conocer el documento y los comprobantes de abonos.",
    "serviceLabel": "Asesoría para cobrar un adeudo",
    "relatedSlugs": []
  },
  "como-despedir-a-un-trabajador-sin-demanda-zamora": {
    "category": "Laboral para empresas",
    "intro": "Antes de comunicar la salida de una persona, la empresa necesita tener claros el motivo, los hechos y los pagos que debe revisar. Una renuncia, un acuerdo y una rescisión tienen alcances distintos. Preparar la decisión con asesoría permite atender las formalidades del caso; ningún formato puede garantizar que no habrá una reclamación.",
    "excerpt": "Qué debe revisar una empresa antes de terminar una relación laboral y cómo preparar el expediente.",
    "sections": [
      {
        "title": "Aclara el motivo antes de hablar con la persona",
        "text": "Registra qué ocurrió, cuándo y quién tiene conocimiento de los hechos. Separa los problemas de desempeño de una decisión de reorganización o de una posible causa de rescisión. No cambies después la versión para hacerla encajar en un formato: la revisión debe partir de lo que realmente sucedió y de la información disponible."
      },
      {
        "title": "El expediente permite revisar pagos y obligaciones",
        "text": "La fecha de ingreso, el salario, la jornada y los pagos registrados son parte de la revisión. Señala si existen vacaciones pendientes, prestaciones pactadas o diferencias de nómina. Si falta un contrato o un recibo, indícalo; ocultar ese faltante no ayuda a decidir. Los cálculos deben hacerse con los datos de la relación concreta."
      },
      {
        "title": "La forma de terminar la relación importa",
        "text": "No debe documentarse una renuncia si la persona no está renunciando. Antes de entregar un aviso o proponer un convenio, hay que revisar la vía, su contenido y las formalidades que correspondan. La firma de un recibo tampoco sustituye la revisión de los derechos y cantidades involucrados."
      },
      {
        "title": "Qué conviene resolver en la consulta",
        "text": "Explica si la salida aún se está considerando, ya se comunicó o dio lugar a una reclamación. Esto cambia lo que necesita atenderse primero. La consulta debe ayudar a identificar los documentos faltantes, los pagos por revisar y los pasos siguientes. Esta guía está dirigida a empleadores; si ya recibiste un citatorio, consulta la guía de conciliación."
      }
    ],
    "sources": [
      {
        "label": "Ley Federal del Trabajo",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf"
      }
    ],
    "ctaTitle": "Revisa la decisión antes de comunicarla",
    "ctaText": "Cuéntanos en qué etapa está la empresa y si existe una fecha próxima. Te indicaremos qué información laboral reunir para preparar la consulta.",
    "serviceLabel": "Asesoría laboral para tu empresa",
    "relatedSlugs": [
      "citatorio-centro-de-conciliacion-laboral-zamora-que-hacer"
    ]
  },
  "como-sacar-a-un-inquilino-que-no-paga-renta-zamora": {
    "category": "Locales y negocios",
    "intro": "Cuando dejan de pagar la renta de un local, el primer paso es ordenar el contrato y la cuenta pendiente. Después hay que decidir si se busca regularizar el pago, acordar una entrega o reclamar ante la autoridad. Esta guía se refiere a locales comerciales; la respuesta depende del contrato, de los hechos y de la legislación aplicable al inmueble.",
    "excerpt": "Cómo documentar rentas pendientes y preparar una consulta sobre el cobro o la entrega de un local comercial.",
    "sections": [
      {
        "title": "Prepara una cuenta que se pueda comprobar",
        "text": "Relaciona los meses pendientes, las cantidades pactadas y los abonos recibidos. Separa renta, servicios y otros cargos para no mezclar conceptos. Conserva transferencias, recibos y mensajes sobre el pago. Una cronología breve permite identificar desde cuándo existe el problema y qué acuerdos se hicieron después."
      },
      {
        "title": "Revisa qué dice el contrato y quién lo firmó",
        "text": "Importan el plazo, el uso del local, las garantías, los avisos y las obligaciones que asumió cada parte. También hay que comprobar si existen anexos, renovaciones o acuerdos de pago. No des por hecho que una cláusula permite recuperar el inmueble sin ningún otro trámite; su alcance debe revisarse en el caso concreto."
      },
      {
        "title": "Evita una recuperación por cuenta propia",
        "text": "Cambiar cerraduras, sacar mercancía o cortar servicios puede agravar el conflicto. Antes de actuar, revisa qué puede solicitarse y cómo debe documentarse. Si hay daños, abandono aparente o riesgo para el inmueble, registra los hechos y pide orientación sobre la actuación que corresponda, sin alterar ni retirar bienes por iniciativa propia."
      },
      {
        "title": "Si se acuerda la entrega, deja constancia",
        "text": "Un acuerdo debe precisar cuándo se entrega el local, quién recibe las llaves y cómo se atenderán las cantidades pendientes y las garantías. Conviene documentar el estado del inmueble y la entrega. Si no hay acuerdo, la revisión jurídica permite definir qué se reclamará y qué pruebas harán falta, sin prometer una fecha de desocupación."
      }
    ],
    "sources": [
      {
        "label": "Código Civil de Michoacán: arrendamiento",
        "url": "https://congresomich.site/wp-content/uploads/2026/09/CODIGO-CIVIL-REF-27-DE-ABRIL-DE-2026-DEC-433.pdf"
      }
    ],
    "ctaTitle": "Trae el contrato y la cuenta de rentas",
    "ctaText": "Indica si buscas cobrar, recuperar el local o ambas cosas. Revisaremos la documentación necesaria para definir el alcance de la asesoría.",
    "serviceLabel": "Asesoría sobre contratos y arrendamientos",
    "relatedSlugs": []
  },
  "traspaso-de-negocio-deudas-anteriores-zamora": {
    "category": "Locales y negocios",
    "intro": "Antes de entregar un anticipo por un negocio, necesitas saber exactamente qué estás comprando y qué obligaciones pueden acompañar la operación. Recibir llaves, mobiliario o una lista de clientes no resuelve por sí solo la situación del local, los trabajadores o los contratos. La revisión debe hacerse antes de asumir compromisos que después resulte difícil cambiar.",
    "excerpt": "Qué pedir y revisar antes de comprar un negocio: activos, deudas, trabajadores, contratos y entrega.",
    "sections": [
      {
        "title": "Define qué incluye el precio",
        "text": "Pregunta si se transmiten acciones de una sociedad, activos concretos o derechos sobre un establecimiento. Prepara un inventario que identifique lo incluido y lo excluido: equipo, existencias, marca, contratos y otros elementos. Son operaciones distintas; una descripción como “se traspasa todo” no permite conocer las obligaciones que asumirá el comprador."
      },
      {
        "title": "Pide documentos que respalden lo que te ofrecen",
        "text": "Contrasta el inventario con facturas y contratos disponibles. Solicita información sobre adeudos, garantías y asuntos pendientes, y pregunta por la relación con trabajadores y proveedores. La documentación sirve para detectar qué falta aclarar; una declaración del vendedor no sustituye la revisión ni elimina por sí sola obligaciones frente a terceros."
      },
      {
        "title": "Comprueba la situación del local y de los permisos",
        "text": "Revisa quién es el arrendatario, el plazo del contrato y si la operación necesita consentimiento del propietario u otra autorización. Verifica también a nombre de quién están los permisos y si pueden mantenerse o deben tramitarse de nuevo. No asumas que todos los contratos y licencias se transmiten junto con el mobiliario."
      },
      {
        "title": "Lleva los hallazgos al contrato de compra",
        "text": "El contrato debe precisar qué recibe cada parte, el precio, los pagos y las condiciones para cerrar. También debe abordar las obligaciones identificadas y los documentos que se entregarán. Antes de pagar el saldo, comprueba que la entrega prevista coincide con lo acordado. La revisión debe ajustarse a la operación, no a una plantilla de traspaso."
      }
    ],
    "sources": [
      {
        "label": "Ley General de Sociedades Mercantiles",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf"
      },
      {
        "label": "Ley Federal del Trabajo",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf"
      },
      {
        "label": "Código Civil de Michoacán",
        "url": "https://congresomich.site/wp-content/uploads/2026/09/CODIGO-CIVIL-REF-27-DE-ABRIL-DE-2026-DEC-433.pdf"
      }
    ],
    "ctaTitle": "Revisa la operación antes de dar el anticipo",
    "ctaText": "Cuéntanos qué negocio vas a adquirir y comparte la propuesta, el inventario y los contratos disponibles. Identificaremos qué información hace falta para preparar la revisión.",
    "serviceLabel": "Revisión del contrato de adquisición",
    "relatedSlugs": [
      "como-sacar-a-un-socio-de-una-empresa-zamora"
    ]
  },
  "citatorio-centro-de-conciliacion-laboral-zamora-que-hacer": {
    "category": "Laboral para empresas",
    "intro": "Si tu empresa recibió un citatorio de conciliación laboral, conserva el documento completo y revisa la fecha de la audiencia. El citatorio comunica una cita para tratar un conflicto; no equivale por sí solo a una sentencia. La preparación comienza por confirmar quién está citado, ante qué autoridad y qué necesita acreditar la persona que representará a la empresa.",
    "excerpt": "Cómo preparar la representación de la empresa, el expediente y una posible propuesta para la audiencia.",
    "sections": [
      {
        "title": "Lee el citatorio completo y confirma la audiencia",
        "text": "Identifica autoridad, expediente, fecha, sede y nombre de la persona o empresa citada. Guarda también la constancia de recepción. Si hay un dato que no coincide, comunícalo al solicitar asesoría y contrástalo con el canal oficial del centro; no descartes el documento ni dependas de una dirección encontrada en una guía."
      },
      {
        "title": "Comprueba quién representará a la empresa",
        "text": "Revisa con anticipación la identificación y los documentos de representación que se necesitan para comparecer. Tener un puesto dentro del negocio no sustituye comprobar las facultades exigidas. Si participará un abogado, acuerda antes quién acudirá, con qué documentos y qué decisiones podrá tomar durante la audiencia."
      },
      {
        "title": "Ordena los hechos y prepara una posición",
        "text": "Resume la relación laboral, el origen del desacuerdo y lo que se ha comunicado entre las partes. Contrasta ese resumen con contrato, nómina, pagos y demás antecedentes. Si se considera un acuerdo, revisa qué cantidades y condiciones puede asumir la empresa y quién está autorizado para aceptarlas."
      },
      {
        "title": "Antes de firmar, entiende el alcance del acuerdo",
        "text": "La conciliación permite explorar una solución entre las partes. Lee qué conceptos se cubren, cómo se pagarán y qué obligaciones quedan documentadas. Los convenios están sujetos a las formalidades y a la protección de derechos previstas en la ley. No firmes una versión que no refleje lo acordado ni asumas que una frase genérica resuelve cualquier conflicto futuro."
      }
    ],
    "sources": [
      {
        "label": "Ley Federal del Trabajo",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf"
      }
    ],
    "ctaTitle": "Ten a la mano el citatorio completo",
    "ctaText": "Indica la fecha de la audiencia y a nombre de quién llegó. Con esa información podremos decirte qué preparar para revisar la representación de tu empresa.",
    "serviceLabel": "Asesoría para atender la conciliación",
    "relatedSlugs": [
      "como-despedir-a-un-trabajador-sin-demanda-zamora"
    ]
  }
};

export const BLOG_POSTS = BLOG_ARTICLES.map((article) => ({ ...article, ...articleDetails[article.slug] }));

function formatArticleDate(date: string) {
  const locale = window.location.pathname.startsWith('/en') ? 'en-US' : 'es-MX';
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date + 'T12:00:00'));
}

interface BlogProps { onClose?: () => void; initialSlug?: string | null; }
export default function BlogHub({ initialSlug }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const currentArticle = BLOG_POSTS.find((post) => post.slug === initialSlug);
  const practice = PRACTICE_PAGES.find((item) => item.slug === currentArticle?.practiceSlug);
  const filteredPosts = activeCategory === 'Todos' ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === activeCategory);
  const categories = ['Todos', 'Socios y empresas', 'Cobro de deudas', 'Laboral para empresas', 'Locales y negocios'];
  const relatedPosts = currentArticle ? BLOG_POSTS.filter(post => currentArticle.relatedSlugs.includes(post.slug)) : [];
  return (
    <div className="min-h-screen bg-white text-obsidian flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-4">
          <a href={currentArticle ? '/blog' : '/'} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-gold"><ArrowLeft className="w-4 h-4" />{currentArticle ? 'Todas las guías' : 'Inicio'}</a>
          <div className="flex items-center gap-4"><LanguageSwitch /><a href="tel:+524432735543" className="hidden sm:flex items-center gap-2 text-sm"><Phone className="w-4 h-4 text-gold" />443 273 5543</a></div>
        </div>
      </header>
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 lg:px-12 py-10 lg:py-16">
        {currentArticle ? (
          <article className="max-w-3xl mx-auto">
            <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2 text-sm mb-6"><a href="/" className="underline">Inicio</a><span aria-hidden="true">/</span><a href="/blog" className="underline">Guías legales</a><span aria-hidden="true">/</span><span aria-current="page">{currentArticle.title}</span></nav>
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">{currentArticle.category}</p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-5">{currentArticle.title}</h1>
            <p className="text-lg text-charcoal mb-5">{currentArticle.intro}</p>
            <p className="text-sm text-stone mb-8">Por <a href="/#partners" className="underline">CVIL Abogados Corporativos</a> · Actualizado el <time dateTime={currentArticle.dateModified}>{formatArticleDate(currentArticle.dateModified)}</time></p>
            <img src={currentArticle.imageUrl} width="1200" height="675" alt={currentArticle.imageAlt} className="w-full h-64 md:h-96 object-cover rounded-sm mb-10" />
            <div className="space-y-8 text-charcoal leading-relaxed">
              {currentArticle.sections.map((section, i) => <section id={`seccion-${i + 1}`} key={section.title}><h2 className="text-2xl font-serif text-obsidian mb-3">{section.title}</h2><p>{section.text}</p></section>)}
            </div>
            <section id="documentos" className="mt-10 p-6 border border-gray-200"><h2 className="text-2xl font-serif mb-4">Documentos para preparar la consulta</h2><ul className="list-disc pl-5 space-y-3 text-charcoal">{currentArticle.checklist.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm text-charcoal">Si te falta alguno, indícalo al solicitar la cita. Llevar los documentos disponibles y una relación breve de los hechos ayuda a aprovechar la consulta.</p></section>
            <p className="mt-8 text-sm text-stone">Fuentes para consultar: {currentArticle.sources.map((source, index) => <React.Fragment key={source.url}>{index > 0 && <span aria-hidden="true"> · </span>}<a href={source.url} target="_blank" rel="noopener noreferrer" className="underline">{source.label}</a></React.Fragment>)}.</p>
            <section className="mt-10 p-8 bg-obsidian text-white rounded-sm">
              <h2 className="text-2xl font-serif mb-4">{currentArticle.ctaTitle}</h2>
              <p className="text-gray-300 text-sm mb-6">{currentArticle.ctaText}</p>
              {practice && <a href={`/${practice.slug}`} className="block underline text-white mb-6">{currentArticle.serviceLabel}</a>}
              <a href={`https://wa.me/524432735543?text=${encodeURIComponent(`Hola, quiero agendar una consulta sobre este asunto: ${currentArticle.title}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-sm rounded-sm"><MessageSquare className="w-4 h-4" />Preparar mi consulta por WhatsApp</a>
            </section>
            <nav aria-label="Guías relacionadas" className="mt-10 space-y-3">
              {relatedPosts.length > 0 && <h2 className="text-xl font-serif">También puede servirte</h2>}
              {relatedPosts.map((post) => <a key={post.slug} href={`/blog/${post.slug}`} className="block underline text-sm">{post.title}</a>)}
            <a href="/blog" className="block underline text-sm">Ver todas las guías legales</a></nav>
          </article>
        ) : (
          <>
            <h1 className="text-4xl lg:text-5xl font-serif font-medium mb-5">Soluciones legales para dueños de negocio y empresas</h1>
            <p className="text-charcoal max-w-3xl mb-10">Aquí puedes revisar qué documentos reunir, qué decisiones requieren atención y cuándo conviene pedir asesoría. Las guías laborales están dirigidas a empresas y empleadores. La oficina de CVIL está en Zamora y atendemos asuntos en todo México.</p>
            <div className="flex flex-wrap gap-2 mb-10" aria-label="Filtrar guías">
              {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`px-4 py-2 text-xs rounded-sm ${activeCategory === category ? 'bg-obsidian text-white' : 'bg-gray-100 text-charcoal'}`}>{category}</button>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => <a key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col border border-gray-200 hover:border-gold rounded-sm overflow-hidden shadow-sm">
                <img src={post.imageUrl} width="400" height="225" alt={post.imageAlt} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1"><p className="text-xs text-gold mb-3">{post.category}</p><h2 className="text-xl font-serif mb-4">{post.title}</h2><p className="text-sm text-charcoal mb-5">{post.excerpt}</p><span className="inline-flex items-center gap-2 text-sm">Consulta la guía<ArrowRight className="w-4 h-4" /></span></div>
              </a>)}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

