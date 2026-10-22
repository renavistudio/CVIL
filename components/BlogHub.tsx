import React, { useState } from 'react';
import { ArrowLeft, Clock, MessageSquare, Phone, ArrowRight, ShieldCheck, Scale, FileText, Briefcase, AlertTriangle, Building2, UserCheck, TrendingUp, DollarSign } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Problemas con Socios' | 'Cobranza & Pagarés' | 'Defensa Patronal' | 'Locales & Traspasos';
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
    title: 'Mi socio no trabaja, se gasta el dinero o bloquea las cuentas: Cómo sacar a un socio de una empresa en Zamora',
    subtitle: 'Guía práctica para dueños de negocio: cómo quitarle poderes, sacarlo legalmente y salvar tu patrimonio sin irte a años de juicio.',
    category: 'Problemas con Socios',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como sacar a un socio de una empresa zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_socios_conflicto.jpg',
    excerpt: 'Cuando un socio deja de trabajar, te roba clientes o bloquea las cuentas del banco, la empresa no puede esperar. Existen mecanismos legales y contundentes para forzar su salida sin quebrar el negocio.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          Uno de los problemas más destructivos para un empresario en Zamora o en el Valle agrícola es tener a un socio que ya no aporta, no se presenta a trabajar, retira dinero para lujos personales y bloquea las decisiones porque tiene firma mancomunada en el banco.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">El error fatal: Intentar correrlo "a la brava"</h3>
        <p>
          Muchos empresarios, hartos del abuso, cometen el error de cambiar las cerraduras de la oficina o amenazar verbalmente al socio. En México, a un socio o accionista no puedes simplemente "darlo de baja" ni despedirlo como a un empleado. Si actúas con el estómago, le das armas para denunciarte, demandar la disolución judicial o congelarte las cuentas bancarias de la empresa.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">El plan de acción legal en 4 pasos para recuperar el control</h3>
        <div className="space-y-4 pt-2">
          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">1</span>
              Audita y revoca firmas bancarias y poderes notariales de inmediato
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              Antes de que el socio sepa que vas a confrontarlo, auditamos los poderes otorgados en el acta constitutiva. Si tiene facultades de dominio o cheques abiertos, se prepara la revocación notarial urgente para evitar que vacíe las cuentas en represalia.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">2</span>
              Documenta la deslealtad, competencia desleal o faltas a los estatutos
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              ¿Abrió otro negocio a espaldas de la empresa?, ¿desvió clientes?, ¿usó dinero de la caja para gastos familiares? Con pruebas contables y documentales en mano, la ley mercantil permite justificar la rescisión de su participación y excluirlo de la sociedad.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">3</span>
              Compra obligada de sus acciones con cláusula estricta de no competencia
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              Negociamos una salida pactada fijando el valor contable real de su aportación (no sus pretensiones infladas), con calendario de pagos en parcialidades y una cláusula penal estricta: si te compite en Zamora o contacta a tus clientes, pierde todo derecho a cobro y se le multa.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#B8860B]/20 rounded-sm">
            <h4 className="font-bold text-obsidian text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#B8860B] text-white text-xs flex items-center justify-center font-bold">4</span>
              Asamblea Extraordinaria para removerlo de la administración
            </h4>
            <p className="text-xs text-charcoal/80 mt-1">
              Si se niega a vender, convocamos a Asamblea General de Accionistas conforme a la ley para quitarlo del Consejo de Administración, nombrar un Administrador Único y retirarle formalmente toda injerencia en las decisiones del negocio.
            </p>
          </div>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 text-xs text-amber-900 rounded-sm mt-4">
          ⚠️ <strong>Recomendación legal:</strong> No le avises a tu socio que quieres que se vaya hasta que tengamos revisada tu acta constitutiva y protegidas las cuentas bancarias en la oficina de CVIL Abogados en Zamora.
        </div>
      </div>
    )
  },
  {
    slug: 'como-cobrar-un-pagare-en-zamora-michoacan',
    title: 'Te firmaron pagarés y no te pagan: Cómo cobrar un pagaré en Zamora Michoacán y embargarles cuentas o bienes de inmediato',
    subtitle: 'Deja de esperar promesas que nunca llegan: la ley te permite caerle por sorpresa a tu deudor con un actuario y congelarle cuentas bancarias o camionetas desde el primer día.',
    category: 'Cobranza & Pagarés',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como cobrar un pagare en zamora michoacan',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_cobranza_pagares.jpg',
    excerpt: 'Si un cliente, comercializadora o comprador te firmó pagarés y ya no contesta el teléfono, demandar por la vía ejecutiva mercantil congela su dinero antes de que se declare en quiebra o esconda sus bienes.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          En el comercio y las empresas de Zamora (fresas, berries, maquinaria, agroquímicos o abarrotes) fiar producto contra pagarés firmados es pan de todos los días. El error más costoso es creer en el "te deposito el viernes" mientras el deudor vacía sus cuentas y pone sus camionetas a nombre de sus familiares.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Por qué un pagaré es un arma letal si lo cobras a tiempo</h3>
        <p>
          A diferencia de un pleito civil ordinario donde tienes que esperar años a que un juez decida quién tiene la razón, el pagaré es un título ejecutivo mercantil. Esto te da una ventaja descomunal: <strong>el embargo se ejecuta en el PRIMER acto de la demanda</strong>.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Cómo funciona la diligencia de embargo sorpresa en Zamora</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>El Actuario llega al negocio o casa del deudor:</strong> Se le notifica la demanda judicial y se le exige el pago íntegro en efectivo o transferencia en ese mismo segundo.</li>
          <li><strong>Si no paga al momento, señalamos bienes para embargo:</strong> Como acreedor, tú tienes el derecho prioritario de señalar qué se le va a embargar para garantizar la deuda.</li>
          <li><strong>Cuentas bancarias congeladas:</strong> Solicitamos al juez que gire oficio a la Comisión Nacional Bancaria y de Valores (CNBV) para congelar el saldo de sus cuentas en BBVA, Banorte, Santander o cualquier banco.</li>
          <li><strong>Vehículos, bodegas y mercancía:</strong> Se embargan camionetas particulares, camiones de carga, locales o la mercancía dentro de su establecimiento.</li>
          <li><strong>Cobro de intereses moratorios:</strong> Además del monto principal del pagaré, se condena al deudor al pago de los intereses moratorios pactados mes con mes.</li>
        </ul>

        <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-xs text-red-900 mt-2">
          <strong>⏱️ Cuidado con el plazo fatal de 3 años:</strong> Los pagarés prescriben legalmente a los <strong>3 años</strong> exactos de su fecha de vencimiento. Si dejas pasar ese plazo por pena o por creer en sus promesas, pierdes el derecho de embargar de inmediato.
        </div>
      </div>
    )
  },
  {
    slug: 'como-despedir-a-un-trabajador-sin-demanda-zamora',
    title: 'Tienes un empleado conflictivo, flojo o que te roba: Cómo despedir a un trabajador sin demanda en Zamora',
    subtitle: 'Deja de tener miedo a las demandas: el paso a paso patronal para darlo de baja legalmente sin pagarle liquidaciones infladas ni regalarle tu dinero.',
    category: 'Defensa Patronal',
    readTime: '5 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como despedir a un trabajador sin demanda zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_despido_patronal.jpg',
    excerpt: 'Correr a un trabajador al calor del coraje te puede costar 90 días de indemnización más salarios caídos. Así protegemos a los patrones y negocios en Zamora para despedir sin contingencias.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          Muchos dueños de negocio en Zamora se sienten rehenes de empleados conflictivos que faltan, hacen mal su trabajo a propósito o roban inventario, confiados en que "la ley siempre protege al trabajador" y amenazando con ir a Conciliación a sacarle dinero al patrón.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Los 3 errores gravísimos que regalan demandas laborales</h3>
        <div className="space-y-3 pt-2">
          <div className="p-3 bg-gray-50 border-l-3 border-obsidian">
            <h4 className="font-semibold text-obsidian text-sm">1. Despedirlo verbalmente al calor del coraje</h4>
            <p className="text-xs text-charcoal/80 mt-1">Decirle "lárgate y ya no te quiero ver" es despido injustificado automático ante los ojos de la ley. Sin un aviso formal por escrito, el trabajador inventará que lo corriste sin motivo y exigirá 90 días de indemnización más salarios caídos.</p>
          </div>
          <div className="p-3 bg-gray-50 border-l-3 border-[#B8860B]">
            <h4 className="font-semibold text-obsidian text-sm">2. Cerrarle la puerta o quitarle el checador</h4>
            <p className="text-xs text-charcoal/80 mt-1">Si le prohíbes la entrada sin haberle entregado su rescisión formal, el empleado va directo con dos testigos y presenta demanda alegando negativa de acceso y despido injustificado.</p>
          </div>
          <div className="p-3 bg-gray-50 border-l-3 border-emerald-700">
            <h4 className="font-semibold text-obsidian text-sm">3. Pagarle en efectivo en la oficina con una hojita firmada</h4>
            <p className="text-xs text-charcoal/80 mt-1">Una hoja simple de renuncia firmada en tu escritorio puede ser impugnada con facilidad en juicio laboral. Si le vas a pagar un finiquito, se ratifica ante el Centro de Conciliación de Zamora para que tenga validez de sentencia definitiva.</p>
          </div>
        </div>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">El protocolo legal para darlo de baja sin pagar de más</h3>
        <p>
          Para despedir con causa justificada (más de 3 faltas en 30 días, desobediencia grave, robo o violencia) levantamos <strong>actas administrativas con testigos presenciales</strong>, redactamos el aviso de rescisión conforme al Art. 47 de la LFT y, si se niega a recibirlo, lo notificamos formalmente por conducto de la autoridad laboral en Zamora para cerrar cualquier riesgo de demanda.
        </p>
      </div>
    )
  },
  {
    slug: 'como-sacar-a-un-inquilino-que-no-paga-renta-zamora',
    title: 'Tu inquilino no paga la renta y no se quiere salir: Cómo sacar a un inquilino que no paga renta en Zamora',
    subtitle: 'No caigas en la trampa de cambiar chapas o cortarle la luz (te puede denunciar por despojo): así recuperas tu local o bodega por la vía legal y cobras lo que te debe.',
    category: 'Locales & Traspasos',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'como sacar a un inquilino que no paga renta zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_inquilino_arrendamiento.jpg',
    excerpt: 'Tener un local comercial en el Centro o una bodega en Zamora ocupada por alguien que no paga renta es una sangría financiera. Conoce cómo desalojarlo rápido y embargar sus bienes para cobrar adeudos.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          Pusiste tu patrimonio en un local comercial en el Centro de Zamora o en una bodega sobre la carretera y el inquilino lleva 3, 5 o 8 meses sin pagarte un solo peso de renta. Te da largas, se burla y se niega a entregarte las llaves mientras tú sigues pagando predial y agua.
        </p>

        <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-xs text-red-900">
          <strong>⛔ ALERTA CRÍTICA:</strong> Jamás mandes cambiar chapas, soldar la cortina o sacar sus cosas a la banqueta. En Michoacán eso constituye el <strong>delito de despojo de inmueble</strong>. El inquilino moroso te denunciará en el Ministerio Público y tú terminarás negociando para no ir a prisión.
        </div>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">La ruta judicial efectiva: Juicio Especial de Desahucio</h3>
        <p>
          Cuando un inquilino adeuda dos o más mensualidades de renta, el Código de Procedimientos Civiles de Michoacán te da las herramientas para desalojarlo y recuperar tu dinero:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Requerimiento judicial obligatorio:</strong> El actuario del juzgado acude a notificar al inquilino y le fija un plazo perentorio para exhibir los recibos de pago o desocupar el local comercial.</li>
          <li><strong>Embargo por las rentas acumuladas:</strong> Si no acredita el pago de inmediato, se embargan las vitrinas, maquinaria, computadoras, mercancía o camionetas del inquilino dentro del inmueble para saldar tu adeudo.</li>
          <li><strong>Lanzamiento con cerrajero y fuerza pública:</strong> Si no entrega voluntariamente, el juez ordena el desalojo formal; se abre la cerradura con actuario judicial y se te restituye la posesión legal de tus llaves.</li>
        </ul>
      </div>
    )
  },
  {
    slug: 'traspaso-de-negocio-deudas-anteriores-zamora',
    title: '¿Vas a comprar o traspasar un negocio? Traspaso de negocio y deudas anteriores en Zamora',
    subtitle: 'No compres problemas ajenos: cómo asegurarte de no terminar pagando las demandas de empleados viejos ni los pagarés del dueño anterior.',
    category: 'Locales & Traspasos',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Especialista en Compraventa de Empresas',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'traspaso de negocio deudas anteriores zamora',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_traspaso_empresas.jpg',
    excerpt: 'Comprar un restaurante, empacadora o tienda en marcha parece un gran negocio, hasta que llega un actuario a cobrarte deudas y demandas del dueño anterior. Así protegemos tu inversión.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          "El negocio ya está acreditado, tiene clientela cautiva y proveedores fijos; solo págame el traspaso y te entrego las llaves". En Zamora esto se pacta a diario con un simple apretón de manos, y semanas después el nuevo dueño descubre por qué vendían con tanta prisa.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Las 3 deudas ocultas que heredas si compras sin revisión legal previa</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="border border-gray-200 p-3 rounded-sm bg-gray-50">
            <h4 className="font-bold text-obsidian text-xs mb-1">1. Sustitución Patronal</h4>
            <p className="text-[11px] text-charcoal/70">Si te quedas con los trabajadores, por ley respondes solidariamente de todos sus años de antigüedad acumulados con el dueño anterior.</p>
          </div>
          <div className="border border-gray-200 p-3 rounded-sm bg-gray-50">
            <h4 className="font-bold text-obsidian text-xs mb-1">2. Pagarés con Proveedores</h4>
            <p className="text-[11px] text-charcoal/70">Facturas y pagarés no liquidados donde el dueño saliente puso en garantía la maquinaria o refrigeradores que ahora usas tú.</p>
          </div>
          <div className="border border-gray-200 p-3 rounded-sm bg-gray-50">
            <h4 className="font-bold text-obsidian text-xs mb-1">3. El Local Comercial</h4>
            <p className="text-[11px] text-charcoal/70">Si el dueño del local no firmó autorizando el traspaso por escrito, te puede desalojar en 15 días y pierdes todo lo invertido.</p>
          </div>
        </div>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Cómo estructuramos un contrato de traspaso seguro y formal</h3>
        <p className="text-sm">
          Auditamos en 48 horas el estado laboral, mercantil y contractual del negocio, obligamos a que los empleados firmen finiquitos con el dueño saliente ante Conciliación y redactamos un contrato mercantil con <strong>retención de precio en garantía</strong> por 6 meses para responder si brotan adeudos sorpresa.
        </p>
      </div>
    )
  },
  {
    slug: 'citatorio-centro-de-conciliacion-laboral-zamora-que-hacer',
    title: 'Te llegó un citatorio del Centro de Conciliación en Zamora: Qué hacer para defender a tu empresa y no pagar de más',
    subtitle: 'No vayas a ciegas a Justo Sierra 290: cómo evitar que un extrabajador te extorsione con liquidaciones infladas y cerrar un convenio definitivo.',
    category: 'Defensa Patronal',
    author: 'Lic. Alejandro Arriaga',
    authorRole: 'Socio Director · Coordinador de Defensa Laboral Patronal',
    readTime: '4 min de lectura',
    date: 'Octubre 2026',
    targetKeyword: 'citatorio centro de conciliacion laboral zamora que hacer',
    competition: 'Competencia SEO: NULA en Zamora',
    imageUrl: '/images/blog/blog_citatorio_conciliacion.jpg',
    excerpt: 'Si un notificador te dejó un citatorio laboral en tu negocio de Zamora, no caigas en pánico ni te confíes. Conoce cómo defenderte, qué llevar a la audiencia y cómo cerrar el asunto sin juicio.',
    content: (
      <div className="space-y-6 text-charcoal/90 leading-relaxed font-sans text-base">
        <p className="text-lg font-light leading-relaxed text-obsidian border-l-2 border-[#B8860B] pl-4 italic">
          Un notificador llega a tu empresa o taller en Zamora y te entrega un sobre oficial: "Citatorio para Audiencia de Conciliación Prejudicial" en Justo Sierra No. 290, Col. Jardines de Catedral. El coraje y la duda son inmediatos: ¿cuánto dinero me van a exigir y qué debo hacer?
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Tranquilo: Un citatorio de conciliación NO es una demanda judicial</h3>
        <p>
          Es una etapa administrativa obligatoria donde la autoridad invita a conciliar. Por lo general, los extrabajadores acuden asesorados por pseudoabogados que inflan las cuentas pidiendo 3 meses de sueldo más horas extras ficticias, aun cuando el empleado renunció voluntariamente o fue dado de baja por faltas.
        </p>

        <h3 className="text-xl font-serif font-semibold text-obsidian pt-2">Las 3 reglas de oro del patrón ante el citatorio</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Bajo ninguna circunstancia faltes a la cita:</strong> Si el patrón no asiste ni envía a su abogado acreditado con poder notarial, la autoridad le impone una <strong>multa económica de 50 a 100 UMAs (más de $5,400 a $10,800 pesos)</strong> y le regala al empleado la "Constancia de No Conciliación" para demandarte en juicio.</li>
          <li><strong>Llevamos el cálculo real centavo por centavo:</strong> Si el trabajador renunció o incurrió en faltas graves, solo le corresponden sus partes proporcionales legales (aguinaldo, vacaciones y prima vacacional). Llevamos recibos y expediente para desarmar solicitudes infladas.</li>
          <li><strong>El Convenio Ratificado es sentencia definitiva (Cosa Juzgada):</strong> En la audiencia cerramos un convenio formal aprobado por el conciliador oficial. Una vez firmado, el extrabajador ya NUNCA puede volver a molestarte ni demandar a tu empresa.</li>
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

  const categories = ['Todos', 'Problemas con Socios', 'Cobranza & Pagarés', 'Defensa Patronal', 'Locales & Traspasos'];

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
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-obsidian hover:text-[#B8860B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{selectedSlug ? 'Volver a todas las guías' : 'Volver a cvilabogados.mx'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/524432735543?text=Hola%2C%20vi%20las%20gu%C3%ADas%20legales%20de%20CVIL%20Abogados%20y%20me%20interesa%20asesor%C3%ADa%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a7209] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Directo</span>
            </a>
            <a
              href="tel:+523511277317"
              className="flex items-center gap-2 border border-gray-300 hover:border-obsidian px-4 py-2 rounded-sm text-xs font-semibold text-obsidian transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="hidden md:inline">351 127 7317</span>
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
                  Atención Directa a Directores y Dueños de Negocio · Zamora, Michoacán
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3 text-white">
                  ¿Tienes este problema en tu empresa y necesitas resolverlo ya?
                </h3>
                <p className="text-stone text-sm leading-relaxed mb-6 max-w-xl">
                  Habla directamente con el área corporativa y patronal de CVIL Abogados en Zamora. Revisamos tu situación directamente y diseñamos la estrategia más rápida para resolver el problema y proteger tu dinero.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href={`https://wa.me/524432735543?text=${encodeURIComponent('Hola, leí la guía sobre "' + currentArticle.title + '" y me interesa asesoría urgente para mi negocio.')}`}
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
                CVIL Abogados · Zamora, Michoacán
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-medium text-obsidian tracking-tight mb-4">
                Soluciones Legales para Dueños de Negocio y Empresas
              </h1>
              <p className="text-base text-charcoal/70 font-light leading-relaxed">
                Respuestas directas y prácticas para los problemas reales que ponen en riesgo tu patrimonio en Zamora: socios conflictivos, clientes morosos que no pagan pagarés, empleados problemáticos y recuperación de locales comerciales.
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
                    <span className="text-[11px] font-medium text-stone">CVIL Abogados</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-obsidian group-hover:translate-x-1 transition-transform">
                      Leer Solución <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Conversion Banner on Hub */}
            <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-obsidian mb-1">
                  ¿Tienes un problema legal urgente con un socio, cliente o empleado?
                </h3>
                <p className="text-xs text-stone">
                  Atención directa en nuestra sede de Zamora (C. Suiza 721, La Luneta) o por llamada para todo Michoacán y El Bajío.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="https://wa.me/524432735543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-obsidian hover:bg-[#B8860B] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-sm"
                >
                  Agendar Asesoría Legal
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
