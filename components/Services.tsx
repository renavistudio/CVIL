import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, FileSignature, Building2, Users, Landmark, TreePine, X } from 'lucide-react';
import { ServiceItem } from '../types';

const services: (ServiceItem & { image: string, tag: string, href?: string })[] = [
    {
        id: 1,
        category: 'CORPORATIVO',
        title: "Empresas y socios",
        href: "/abogados-corporativos-zamora",
        description: "Acompañamos decisiones sobre la empresa: cómo se administra, quién puede representarla y cómo dejar por escrito los acuerdos entre socios.",
        actionText: "Ver asuntos de socios",
        icon: Building2,
        tag: "Organización",
        image: "/images/delitos de alto impacto_opt.webp",
        details: [
            "Constitución de sociedades y cambios en su estructura.",
            "Actas de asamblea y actualización de libros corporativos.",
            "Acuerdos entre socios y documentación de aportaciones.",
            "Acuerdos para la continuidad de empresas familiares."
        ]
    },
    {
        id: 2,
        category: 'MERCANTIL',
        title: "Cobranza y conflictos comerciales",
        href: "/abogados-mercantiles-zamora",
        description: "Si hay un adeudo o un acuerdo incumplido, revisamos los documentos, las gestiones de cobro y las posibilidades de negociar o acudir a juicio.",
        actionText: "Ver opciones ante un adeudo",
        icon: Landmark,
        tag: "Adeudos",
        image: "/images/derecho civil.webp",
        details: [
            "Revisión de adeudos, pagarés y comprobantes de pago.",
            "Representación en procedimientos mercantiles.",
            "Revisión de garantías y medidas dictadas por la autoridad.",
            "Negociación y atención de incumplimientos entre empresas."
        ]
    },
    {
        id: 3,
        category: 'LABORAL',
        title: "Asesoría laboral para empresas",
        href: "/abogados-laborales-zamora",
        description: "Ayudamos a empleadores a revisar contratos, documentar decisiones y atender conciliaciones o demandas relacionadas con su personal.",
        actionText: "Ver asesoría para empleadores",
        icon: Users,
        tag: "Empleadores",
        image: "/images/Materia familiar_opt.webp",
        details: [
            "Revisión de expedientes y prácticas laborales de la empresa.",
            "Contratos de trabajo acordes con el puesto y sus condiciones.",
            "Revisión de reglamentos interiores de trabajo.",
            "Asesoría en terminaciones, convenios y conciliaciones."
        ]
    },
    {
        id: 4,
        category: 'PROPIEDAD',
        title: "Marcas y propiedad intelectual",
        description: "Revisamos la protección de tu marca y los acuerdos para usar, compartir o licenciar los derechos que forman parte del negocio.",
        actionText: "Ver asuntos de marcas",
        icon: FileSignature,
        tag: "Marcas",
        image: "/images/office/IMG_0645.webp",
        details: [
            "Orientación y trámites sobre marcas y otros derechos de propiedad intelectual.",
            "Contratos de franquicia y licencias de uso.",
            "Acuerdos de confidencialidad y revisión de restricciones contractuales.",
            "Atención de controversias sobre registros y uso de derechos."
        ]
    },
    {
        id: 5,
        category: 'FISCAL',
        title: "Asuntos fiscales y administrativos",
        description: "Cuando llega un requerimiento, una multa o una resolución, revisamos su contenido, la fecha de notificación y las alternativas para responder.",
        actionText: "Ver asuntos ante autoridades",
        icon: Shield,
        tag: "Autoridades",
        image: "/images/office/IMG_0585.webp",
        details: [
            "Atención de auditorías y requerimientos de información.",
            "Revisión y preparación de recursos administrativos.",
            "Representación ante el Tribunal Federal de Justicia Administrativa.",
            "Revisión de multas, clausuras y créditos fiscales."
        ]
    },
    {
        id: 6,
        category: 'INMOBILIARIO',
        title: "Contratos e inmuebles",
        href: "/derecho-corporativo-zamora",
        description: "Antes de comprar, arrendar o invertir en un inmueble, revisamos los documentos disponibles y las condiciones de la operación.",
        actionText: "Ver revisión de inmuebles",
        icon: Building2,
        tag: "Operaciones",
        image: "/images/derecho civil.webp",
        details: [
            "Revisión de la documentación y situación jurídica del inmueble.",
            "Contratos de compraventa y documentación de fideicomisos.",
            "Arrendamientos de locales, oficinas e inmuebles industriales.",
            "Revisión de uso de suelo y trámites registrales relacionados."
        ]
    }
];

type ServiceWithDetails = ServiceItem & { image: string; tag: string };

const Services: React.FC = () => {
    const [selected, setSelected] = useState<ServiceWithDetails | null>(null);
    const [showAllMobile, setShowAllMobile] = useState(false);

    return (
        <>
            <section id="services" className="py-8 lg:py-12 bg-black relative overflow-hidden">

                {/* Fondo Sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

                <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-6 lg:mb-10 border-b border-white/10 pb-8">
                        <div className="max-w-2xl">
                            <m.div
                                initial={false}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-4"
                            >
                                <div className="h-[1px] w-12 bg-white/50"></div>
                                <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
                                    En qué podemos ayudarte
                                </span>
                            </m.div>
                            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tight">
                                Asuntos que <span className="text-stone italic font-light">atendemos.</span>
                            </h2>
                        </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">También atendemos asuntos civiles, familiares y <a href="/abogados-penalistas-zamora" className="font-semibold text-white hover:text-gold">penales</a>. Si tu caso no aparece aquí, cuéntanoslo.</p>
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, idx) => (
                            <m.div
                                key={service.id}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className={`group relative min-h-[420px] gap-8 bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col justify-between p-6 lg:p-8 transition-all duration-500 hover:border-white/20 ${!showAllMobile && idx >= 3 ? 'hidden md:flex' : 'flex'}`}
                            >
                                {/* BG image */}
                                <div className="absolute inset-0">
                                    <img loading="lazy" decoding="async" width="800" height="600"
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                {/* Big number */}
                                <span className="absolute top-0 right-0 text-[180px] font-serif font-bold text-white/[0.02] leading-none -translate-y-8 translate-x-8 select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">
                                    0{idx + 1}
                                </span>

                                {/* Top */}
                                <div className="relative z-10 flex justify-between items-start">
                                    <service.icon className="w-16 h-16 text-white/50 group-hover:text-white/80 transition-colors duration-300" strokeWidth={1} />
                                </div>

                                {/* Bottom */}
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-serif text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-5 transition-opacity duration-300">
                                        {service.description}
                                    </p>
                                    {service.href ? <a href={service.href} className="inline-flex items-center gap-2 text-white text-xs font-semibold underline underline-offset-4">{service.actionText}<ArrowUpRight className="w-3 h-3" /></a> : <button onClick={() => setSelected(service)} className="inline-flex items-center gap-2 text-white text-xs font-semibold underline underline-offset-4">{service.actionText}<ArrowUpRight className="w-3 h-3" /></button>}
                                </div>
                            </m.div>
                        ))}
                    </div>
                    
                    {/* Botón Ver Más para Móviles */}
                    {!showAllMobile && (
                        <div className="mt-8 flex justify-center md:hidden">
                            <button
                                onClick={() => setShowAllMobile(true)}
                                className="border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors"
                            >
                                Ver otros servicios
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ===== MODAL POPUP ===== */}
            <AnimatePresence>
                {selected && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <m.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="bg-[#0f0f0f] border border-white/15 w-full max-w-lg relative pointer-events-auto shadow-2xl">

                                {/* Modal Header without image */}
                                <div className="pt-8 px-6 pb-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <selected.icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone">{selected.category}</span>
                                    </div>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={() => setSelected(null)}
                                    aria-label="Cerrar detalle del servicio"
                                    className="absolute top-4 right-4 p-2 border border-white/10 hover:bg-white hover:text-black transition-all duration-200 text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Content */}
                                <div className="px-6 pb-6">
                                    <h3 className="text-3xl font-serif text-white mb-2">{selected.title}</h3>
                                    <p className="text-stone text-sm font-light mb-6 opacity-70">{selected.description}</p>

                                    <div className="border-t border-white/10 pt-5">
                                        <span className="text-[9px] font-bold text-stone/60 uppercase tracking-widest block mb-4">
                                            Trabajo que podemos realizar:
                                        </span>
                                        <ul className="space-y-3">
                                            {selected.details?.map((detail, i) => (
                                                <m.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -8 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.04 }}
                                                    className="flex items-start text-white/80 text-sm font-light"
                                                >
                                                    <span className="text-stone mr-3 mt-1 shrink-0">›</span>
                                                    <span className="leading-snug">{detail}</span>
                                                </m.li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href={`https://wa.me/524432735543?text=${encodeURIComponent("Hola, buen día. Vi su página web y busco asesoría especializada en " + selected.title + ". Me gustaría agendar una cita.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setSelected(null)}
                                        className="mt-8 w-full flex items-center justify-center bg-gold text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-obsidian transition-colors duration-300"
                                    >
                                        Consultar este asunto
                                    </a>
                                </div>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Services;
