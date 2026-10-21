import React, { useState } from 'react';
import { ArrowLeft, Clock, MessageSquare, Phone, ArrowRight, ShieldCheck, Scale, FileText, Briefcase, AlertTriangle, Building2, UserCheck, TrendingUp, DollarSign } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Socios & Empresas' | 'Cobranza Mercantil' | 'Laboral Patronal' | 'Arrendamiento Comercial';
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  targetKeyword: string;
  competition: string;
  imageUrl: string;
  excerpt: string;
  content: React.ReactNode;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-sacar-a-un-socio-de-una-empresa-zamora',
    title: 'Cómo sacar a un socio de una empresa legalmente en Zamora: Guía para resolver conflictos sin ir a juicio',
    subtitle: 'El paso a paso corporativo para excluir a un socio, comprar sus acciones o forzar una salida limpia sin congelar la operación.',
    category: 'Socios & Empresas',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Especialista en Estructuración Corporativa',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como sacar a un socio de una empresa zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_socios_conflicto.jpg',
    excerpt: 'Cuando un socio deja de aportar, boicotea las decisiones o compite deslealmente, la empresa no puede esperar. Existen mecanismos legales en México para negociar o forzar su salida.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          Uno de los dolores más desgastantes para un empresario en Michoacán es tener a un socio que ya no trabaja, bloquea las firmas bancarias o exige utilidades sin generar valor.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">¿Se puede expulsar a un socio de una sociedad en México?</h3>
        <p>
          En la Ley General de Sociedades Mercantiles (LGSM), sacar a un accionista de una <strong>S.A. de C.V.</strong> o de una <strong>S. de R.L.</strong> no es como despedir a un empleado; no puedes simplemente "darlo de baja". Sin embargo, existen 3 rutas jurídicas efectivas:
        </p>

        <div className="space-y-4 pt-2">
          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">1</span>
              La Salida Negociada con Convenio de Adquisición de Acciones
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              Es la vía más rápida (días, no meses). Se estructura un contrato de compraventa o cesión de partes sociales fijando una valuación realista, calendario de pagos y cláusulas estrictas de no competencia y confidencialidad.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">2</span>
              Causas de Exclusión Previstas en Estatutos o LGSM
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              Si el socio cometió actos desleales, usó la firma social para negocios propios o infringió los estatutos, se convoca a Asamblea Extraordinaria para declarar la rescisión de su participación y reembolsar el valor contable de su aportación.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">3</span>
              Mecanismos de Desempate (Texas Shootout / Compras o Vendes)
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              En sociedades 50/50 donde nadie tiene mayoría para votar una salida, se activa la oferta vinculante: tú le pones precio a la mitad de la empresa, y el otro socio está obligado a comprar a ese precio o venderte su parte exactamente por la misma cantidad.
            </p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 text-xs text-charcoal/70 rounded-sm mt-4">
          💡 <strong>Recomendación estratégica:</strong> Antes de confrontar al socio, audita los poderes notariales otorgados y las firmas bancarias mancomunadas para evitar que retire fondos de la empresa antes de la negociación.
        </div>
      </div>
    )
  },
  {
    slug: 'como-cobrar-un-pagare-en-zamora-michoacan',
    title: 'Cómo cobrar un pagaré vencido en Zamora: El proceso legal para embargar cuentas y bienes de deudores',
    subtitle: 'La vía ejecutiva mercantil permite requerir el pago inmediato y embargar en el primer acto judicial.',
    category: 'Cobranza Mercantil',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Especialista Mercantil',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como cobrar un pagare en zamora michoacan',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_cobranza_pagares.jpg',
    excerpt: 'Si un cliente, comercializadora o comprador te firmó pagarés y ya no contesta las llamadas, demandar por la vía ejecutiva mercantil congela sus activos antes de que se declare insolvente.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          En el comercio y las empresas de Zamora fiar producto o maquinaria contra pagarés es común. El error más grave es esperar meses creyendo promesas verbales mientras el deudor vacía sus cuentas.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">El Juicio Ejecutivo Mercantil: Embargo antes de sentencia</h3>
        <p>
          A diferencia de un pleito civil normal donde esperas años a que un juez decida quién tiene la razón, el pagaré es un título ejecutivo. Esto otorga una ventaja legal contundente:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>El Actuario llega con orden de embargo:</strong> Se notifica la demanda en el domicilio del deudor y se le exige el pago en efectivo o transferencia en ese segundo.</li>
          <li><strong>Si no paga al momento, se traban bienes:</strong> El acreedor tiene derecho a señalar cuentas bancarias, camionetas, camiones de carga, bodegas o mercancía.</li>
          <li><strong>Cobro de intereses moratorios y gastos:</strong> Se recupera la suerte principal más los intereses pactados en el documento mercantil.</li>
        </ul>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-sm text-xs text-amber-900 mt-2">
          <strong>⏱️ Plazo fatal de prescripción:</strong> Los pagarés tienen una vigencia legal de <strong>3 años</strong> a partir de su fecha de vencimiento. Si dejas vencer ese plazo sin presentar la demanda mercantil, pierdes el derecho al embargo expedito.
        </div>
      </div>
    )
  },
  {
    slug: 'como-despedir-a-un-trabajador-sin-demanda-zamora',
    title: 'Cómo despedir a un trabajador sin demanda laboral en Zamora: Pasos clave para patrones y empresas',
    subtitle: 'La guía patronal para dar de baja a personal conflictivo con respaldo documental pleno y cero contingencias.',
    category: 'Laboral Patronal',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Coordinador Laboral Patronal',
    readTime: '5 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como despedir a un trabajador sin demanda zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_despido_patronal.jpg',
    excerpt: 'Despedir sin respaldo es regalar 90 días de indemnización constitucional más salarios caídos. Así se blindan los comercios y empresas de Zamora.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          En Zamora, la mayoría de demandas laborales que pierden las empresas no se pierden por falta de razón, sino por falta de actas administrativas bien elaboradas y constancias de aviso.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Protocolo patronal de 4 pasos antes de la separación</h3>
        <div className="space-y-3 pt-2">
          <div className="p-3 bg-gray-50 border-l-3 border-obsidian">
            <h4 className="font-semibold text-obsidian text-sm">1. Documentar la causal del Art. 47 de la LFT</h4>
            <p className="text-xs text-charcoal/80 mt-1">Faltas injustificadas (más de 3 en 30 días), indisciplina grave, desobediencia expresa o daño intencional a equipo. Sin acta administrativa firmada por testigos, para la ley es despido injustificado.</p>
          </div>
          <div className="p-3 bg-gray-50 border-l-3 border-[#B8860B]">
            <h4 className="font-semibold text-obsidian text-sm">2. Entrega formal del Aviso de Rescisión</h4>
            <p className="text-xs text-charcoal/80 mt-1">El patrón debe entregar personalmente el aviso al trabajador indicando fecha y causa exacta. Si el empleado se niega a firmar de recibido, se tramita de inmediato la notificación vía Centro de Conciliación.</p>
          </div>
          <div className="p-3 bg-gray-50 border-l-3 border-emerald-700">
            <h4 className="font-semibold text-obsidian text-sm">3. Ratificación de Convenio ante Autoridad Laboral</h4>
            <p className="text-xs text-charcoal/80 mt-1">Si la salida es por renuncia o acuerdo económico, jamás pagues en efectivo dentro de la oficina con una hoja simple. Se debe acudir al Centro de Conciliación Laboral de Zamora para que el convenio adquiera valor de cosa juzgada.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    slug: 'como-sacar-a-un-inquilino-que-no-paga-renta-zamora',
    title: 'Inquilino moroso en local comercial o bodega en Zamora: Cómo recuperar el inmueble sin cometer despojo',
    subtitle: 'Por qué cambiar cerraduras o cortar la luz te convierte en demandado, y cuál es la vía judicial rápida de desahucio.',
    category: 'Arrendamiento Comercial',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Especialista Inmobiliario Comercial',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como sacar a un inquilino que no paga renta zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_inquilino_arrendamiento.jpg',
    excerpt: 'Si tienes un local en el Centro de Zamora o una bodega en carretera que debe meses de renta, la ley protege al propietario si actúa mediante juicio de desahucio civil.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          La desesperación de ver un local ocupado sin cobrar renta lleva a muchos propietarios a cometer un grave error: mandar cambiar chapas, sacar muebles a la banqueta o cortar el agua.
        </p>

        <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-xs text-red-900">
          <strong>⛔ Alerta Legal:</strong> En Michoacán, cambiar chapas o privar de la posesión por propia mano constituye el delito de <strong>despojo de inmueble</strong>. El inquilino moroso puede denunciarte y obligarte a un acuerdo penal.
        </div>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">La ruta legal: Juicio Especial de Desahucio</h3>
        <p>
          Ante el incumplimiento de dos o más mensualidades de renta, el Código de Procedimientos Civiles de Michoacán faculta al propietario a demandar el desahucio inmediato:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Requerimiento judicial:</strong> El juez le otorga un plazo improrrogable para pagar o acreditar que está al corriente.</li>
          <li><strong>Embargo por rentas vencidas:</strong> Si no acredita el pago, se embargan bienes dentro del local comercial para cubrir la deuda acumulada.</li>
          <li><strong>Lanzamiento con fuerza pública:</strong> Si no desocupa en el plazo legal, se ordena el desalojo formal con presencia del actuario y cerrajero judicial.</li>
        </ul>
      </div>
    )
  },
  {
    slug: 'traspaso-de-negocio-deudas-anteriores-zamora',
    title: '¿Vas a comprar o traspasar un negocio en Zamora? Cómo blindarte para no heredar deudas ocultas',
    subtitle: 'La auditoría legal express (Due Diligence) para evitar que te embarguen por pasivos laborales o fiscales del dueño anterior.',
    category: 'Socios & Empresas',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Especialista Corporativo',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'traspaso de negocio deudas anteriores zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_traspaso_empresas.jpg',
    excerpt: 'Comprar una empresa, restaurante o empacadora parece una gran oportunidad hasta que llega un actuario a cobrar la liquidación de empleados que despidió el dueño previo.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          "El negocio ya está acreditado, solo págame el traspaso y te entrego las llaves". Si compras un negocio bajo esa promesa informal, eres solidariamente responsable de todo su pasado.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Los 3 pasivos invisibles que heredas si no auditas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="border border-gray-200 p-3 rounded-sm bg-gray-50">
            <h4 className="font-bold text-obsidian text-xs mb-1">Sustitución Patronal</h4>
            <p className="text-[11px] text-charcoal/70">Si mantienes a los empleados o la unidad económica, respondes de sus años de antigüedad acumulados.</p>
          </div>
          <div className="border border-gray-200 p-3 rounded-sm bg-gray-50">
            <h4 className="font-bold text-obsidian text-xs mb-1">Adeudos con Proveedores</h4>
            <p className="text-[11px] text-charcoal/70">Contratos de suministro con cláusulas de cesión forzosa o pagarés respaldados con equipo de la empresa.</p>
          </div>
          <div className="border border-gray-200 p-3 rounded-sm bg-gray-50">
            <h4 className="font-bold text-obsidian text-xs mb-1">Contrato de Arrendamiento</h4>
            <p className="text-[11px] text-charcoal/70">La mayoría de contratos prohíben el subarriendo o traspaso sin consentimiento expreso por escrito del dueño del local.</p>
          </div>
        </div>

        <p className="text-sm pt-2">
          Un contrato de compraventa mercantil estructurado con cláusulas de <strong>indemnidad</strong> y retención de fondos en garantía evita que pagues por los platos rotos del dueño saliente.
        </p>
      </div>
    )
  },
  {
    slug: 'citatorio-centro-de-conciliacion-laboral-zamora-que-hacer',
    title: 'Recibiste un citatorio del Centro de Conciliación Laboral de Zamora: Guía patronal para acudir preparado',
    subtitle: 'Dirección Justo Sierra 290: Cómo calcular el pago real, qué documentos llevar y cómo cerrar un convenio sin riesgo de juicio.',
    category: 'Laboral Patronal',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Coordinador Laboral Patronal',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'citatorio centro de conciliacion laboral zamora que hacer',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_citatorio_conciliacion.jpg',
    excerpt: 'Si te notificaron una audiencia en el Centro de Conciliación en Zamora, no acudas sin un cálculo de liquidación previo y expediente laboral completo.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          El Centro de Conciliación Laboral de Zamora (ubicado en Justo Sierra No. 290, Col. Jardines de Catedral) atiende diariamente decenas de quejas laborales de la región.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">3 Acciones indispensables del patrón ante la notificación</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Asistencia obligatoria del patrón o representante con poder notarial:</strong> Si el patrón no asiste injustificadamente, la ley impone una multa económica de 50 a 100 UMAs y se emite la constancia de no conciliación que abre la puerta a la demanda laboral.</li>
          <li><strong>Cálculo desglosado previo:</strong> Muchos extrabajadores acuden asesorados con solicitudes infladas pidiendo 3 meses de sueldo cuando renunciaron voluntariamente. El abogado patronal debe llevar el desglose exacto de partes proporcionales (aguinaldo, vacaciones, prima vacacional).</li>
          <li><strong>El convenio ratificado termina la controversia:</strong> Una vez firmado y aprobado por el conciliador oficial, adquiere la categoría de <strong>laudo firme (cosa juzgada)</strong>. El extrabajador ya no puede volver a demandar a la empresa.</li>
        </ul>
      </div>
    )
  }
];

interface BlogProps {
  onClose: () => void;
  initialSlug?: string | null;
}

const BlogHub: React.FC<BlogProps> = ({ onClose, initialSlug }) => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Socios & Empresas', 'Cobranza Mercantil', 'Laboral Patronal', 'Arrendamiento Comercial'];

  const filteredPosts = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const currentArticle = selectedSlug ? BLOG_POSTS.find(p => p.slug === selectedSlug) : null;

  return (
    <div className="min-h-screen bg-white text-obsidian flex flex-col">
      {/* Top Bar Editorial */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (selectedSlug) {
                  setSelectedSlug(null);
                  window.location.hash = '#/blog';
                } else {
                  onClose();
                }
              }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-obsidian transition-colors py-1.5 px-3 border border-gray-300 hover:border-obsidian rounded-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{selectedSlug ? 'Volver a Artículos' : 'Volver a la Web'}</span>
            </button>
            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
            <span className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#B8860B] hidden sm:inline">
              CVIL Abogados Corporativos · Guías para Dueños de Empresa
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20blog%20corporativo%20y%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#B8860B] hover:bg-obsidian text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Consulta Legal</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 lg:px-12 py-10 lg:py-16">
        {currentArticle ? (
          /* DETALLE DE ARTÍCULO */
          <article className="animate-fade-in max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-obsidian text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                {currentArticle.category}
              </span>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold rounded-sm">
                {currentArticle.competition}
              </span>
              <span className="text-xs text-stone flex items-center gap-1">
                <Clock className="w-3 h-3" /> {currentArticle.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-medium text-obsidian leading-tight tracking-tight mb-4">
              {currentArticle.title}
            </h1>

            <p className="text-lg md:text-xl text-charcoal/70 font-light leading-relaxed mb-8">
              {currentArticle.subtitle}
            </p>

            {/* Author Box */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-sm mb-8">
              <div className="w-12 h-12 rounded-full bg-obsidian text-[#E8CA9D] flex items-center justify-center font-serif text-lg font-bold">
                AA
              </div>
              <div>
                <div className="font-semibold text-obsidian text-sm">{currentArticle.author}</div>
                <div className="text-xs text-stone">{currentArticle.authorRole}</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-sm mb-10 bg-gray-100 border border-gray-200 shadow-sm">
              <img
                src={currentArticle.imageUrl}
                alt={currentArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="prose prose-stone max-w-none mb-12">
              {currentArticle.content}
            </div>

            {/* HIGH-TICKET DUAL-PHONE CONVERSION BOX */}
            <div className="mt-12 p-8 bg-[#0B0D13] text-white rounded-sm border border-[#B8860B]/40 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8CA9D] block mb-2">
                  Atención Directa a Directores y Socios · Zamora, Michoacán
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3 text-white">
                  ¿Necesitas atender esta contingencia en tu negocio?
                </h3>
                <p className="text-stone text-sm leading-relaxed mb-6 max-w-xl">
                  Habla directamente con el área de derecho corporativo y laboral de CVIL Abogados. Diseñamos la estrategia para proteger tu patrimonio y resolver el conflicto con máxima firmeza.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href={`https://wa.me/524432735543?text=${encodeURIComponent('Hola, leí el artículo sobre "' + currentArticle.title + '" y me interesa asesoría legal para mi empresa.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#B8860B] hover:bg-[#9a7209] text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp: 443 273 5543</span>
                  </a>

                  <a
                    href="tel:+523511277317"
                    className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#E8CA9D]" />
                    <span>Sede Zamora: 351 127 7317</span>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs text-stone gap-2">
                  <span>📍 C. Suiza 721-Piso 3, La Luneta, 59689 Zamora de Hidalgo, Mich.</span>
                  <span>🌐 cvilabogados.mx</span>
                </div>
              </div>
            </div>
          </article>
        ) : (
          /* HUB DE ARTÍCULOS */
          <div>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase block mb-3">
                Derecho Corporativo · Estrategia de Negocios
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-medium text-obsidian tracking-tight mb-4">
                Guías Legales Estratégicas para Empresas en Michoacán
              </h1>
              <p className="text-base text-charcoal/70 font-light leading-relaxed">
                Respuestas prácticas a los problemas más costosos que enfrentan dueños de negocio, socios y administradores: conflictos de accionistas, cobro de deudas comerciales, arrendamiento y blindaje laboral patronal.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                    activeCategory === cat
                      ? 'bg-obsidian text-white shadow-sm'
                      : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  onClick={() => {
                    setSelectedSlug(post.slug);
                    window.location.hash = `#/blog/${post.slug}`;
                  }}
                  className="group flex flex-col justify-between bg-white border border-gray-200 hover:border-[#B8860B] transition-all duration-300 rounded-sm shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
                >
                  <div>
                    {/* Card Thumbnail Image */}
                    <div className="w-full h-48 overflow-hidden bg-gray-100 relative">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-[#0B0D13]/85 text-[#E8CA9D] backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm inline-block">
                          🎯 {post.targetKeyword}
                        </span>
                        <span className="text-[11px] text-stone">{post.readTime}</span>
                      </div>

                      <h2 className="font-serif text-xl font-medium text-obsidian group-hover:text-[#B8860B] transition-colors leading-snug mb-3">
                        {post.title}
                      </h2>

                      <p className="text-xs text-charcoal/75 font-light leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 flex justify-between items-center mt-auto">
                    <span className="text-[11px] font-medium text-stone">{post.author}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-obsidian group-hover:translate-x-1 transition-transform">
                      Leer Guía <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Conversion Banner on Hub */}
            <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-obsidian mb-1">
                  ¿Requieres asesoría sobre un contrato, socio o cobranza en tu empresa?
                </h3>
                <p className="text-xs text-stone">
                  Atención presencial en nuestra sede en La Luneta o reunión confidencial para empresas de Michoacán y El Bajío.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="https://wa.me/524432735543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-obsidian hover:bg-[#B8860B] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-sm"
                >
                  Consultar con un Especialista
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogHub;
