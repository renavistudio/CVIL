import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, FileSignature, Building2, Users, Landmark, TreePine, X } from 'lucide-react';
import { ServiceItem } from '../types';

const services: (ServiceItem & { image: string, tag: string })[] = [
    {
        id: 1,
        category: 'CORPORATIVO',
        title: "Gobierno Corporativo",
        description: "Establecemos los cimientos legales sólidos que toda empresa necesita para operar, crecer y recibir inversión institucional.",
        actionText: "Ver más",
        icon: Building2,
        tag: "Preventivo",
        image: "images/delitos de alto impacto_opt.webp",
        details: [
            "Constitución y reestructuración de sociedades mercantiles.",
            "Estructuración de actas de asamblea y libros corporativos.",
            "Acuerdos de accionistas y levantamiento de capital.",
            "Diseño de protocolos familiares para sucesión empresarial."
        ]
    },
    {
        id: 2,
        category: 'MERCANTIL',
        title: "Litigio Mercantil Complejo",
        description: "Representación contundente en disputas comerciales de alta cuantía, enfocada en la recuperación de activos y la resolución favorable.",
        actionText: "Ver más",
        icon: Landmark,
        tag: "Estratégico",
        image: "images/derecho civil.webp",
        details: [
            "Recuperación estratégica de cartera vencida comercial.",
            "Atención a juicios ejecutivos y ordinarios mercantiles.",
            "Ejecución, retención y sustitución de garantías.",
            "Resolución de controversias contractuales B2B."
        ]
    },
    {
        id: 3,
        category: 'LABORAL',
        title: "Auditoría Laboral Patronal",
        description: "Aseguramos el estricto cumplimiento normativo de su empresa, mitigando el riesgo de demandas y multas ante autoridades locales o federales.",
        actionText: "Ver más",
        icon: Users,
        tag: "Regulatorio",
        image: "images/Materia familiar_opt.webp",
        details: [
            "Auditoría preventiva y cumplimiento normativo (Compliance).",
            "Redacción de contratos de trabajo especializados y para directivos.",
            "Diseño e implementación de Reglamentos Interiores de Trabajo.",
            "Terminaciones, convenios y rescisiones laborales estratégicas."
        ]
    },
    {
        id: 4,
        category: 'PROPIEDAD',
        title: "Propiedad Intelectual",
        description: "Protegemos los activos intangibles de su negocio y diseñamos los instrumentos jurídicos necesarios para asegurar su exclusividad comercial.",
        actionText: "Ver más",
        icon: FileSignature,
        tag: "Intangibles",
        image: "images/oficina.webp",
        details: [
            "Registro de marcas, patentes y derechos de autor.",
            "Estructuración de contratos de franquicia y licencias de uso.",
            "Acuerdos estrictos de confidencialidad (NDA) y no competencia.",
            "Representación en procedimientos de nulidad, infracción y piratería."
        ]
    },
    {
        id: 5,
        category: 'FISCAL',
        title: "Litigio Administrativo y Fiscal",
        description: "Protegemos el patrimonio de la empresa ante actos arbitrarios de autoridades fiscales y administrativas mediante estrategias de defensa especializadas.",
        actionText: "Ver más",
        icon: Shield,
        tag: "Defensa",
        image: "images/fachada.webp",
        details: [
            "Atención y desahogo de auditorías y requerimientos de la autoridad.",
            "Interposición de Recursos de Revocación e Inconformidad.",
            "Juicio de Nulidad ante el Tribunal Federal de Justicia Administrativa.",
            "Impugnación de multas, clausuras y créditos fiscales."
        ]
    },
    {
        id: 6,
        category: 'INMOBILIARIO',
        title: "Inmobiliario Corporativo",
        description: "Brindamos certeza jurídica absoluta en la adquisición, desarrollo y comercialización de proyectos inmobiliarios, comerciales e industriales.",
        actionText: "Ver más",
        icon: Building2,
        tag: "Desarrollo",
        image: "images/derecho civil.webp",
        details: [
            "Auditoría legal de inmuebles (Due Diligence inmobiliario).",
            "Elaboración y revisión de contratos de compraventa y fideicomisos.",
            "Arrendamientos corporativos e industriales complejos.",
            "Regularización de uso de suelo y trámites ante registro público."
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
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.webp')] opacity-20 pointer-events-none"></div>

                <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-6 lg:mb-10 border-b border-white/10 pb-8">
                        <div className="max-w-2xl">
                            <div}}}
                                className="flex items-center gap-4 mb-4"
                            >
                                <div className="h-[1px] w-12 bg-white/50"></div>
                                <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
                                    Nuestros Servicios
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tight">
                                Especialidades <span className="text-stone italic font-light">Legales.</span>
                            </h2>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, idx) => (
                            <div
                                key={service.id}}}}}
                                className={`group relative h-[420px] bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 hover:border-white/20 ${!showAllMobile && idx >= 3 ? 'hidden md:flex' : 'flex'}`}
                            >
                                {/* BG image */}
                                <div className="absolute inset-0">
                                    <img
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
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded-full group-hover:border-white/30 transition-colors mt-2">
                                        {service.tag}
                                    </span>
                                </div>

                                {/* Bottom */}
                                <div className="relative z-10">
                                    <span className="text-xs font-bold text-stone tracking-widest uppercase mb-2 block opacity-80 group-hover:text-white transition-colors">
                                        {service.category}
                                    </span>
                                    <h3 className="text-3xl font-serif text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-stone text-sm font-light leading-relaxed mb-5 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                                        {service.description}
                                    </p>
                                    <button
                                        onClick={() => setSelected(service)}
                                        className="flex items-center gap-2 group/btn cursor-pointer"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 group-hover/btn:border-white transition-colors">
                                            Ver más
                                        </span>
                                        <ArrowUpRight className="w-3 h-3 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Botón Ver Más para Móviles */}
                    {!showAllMobile && (
                        <div className="mt-8 flex justify-center md:hidden">
                            <button
                                onClick={() => setShowAllMobile(true)}
                                className="border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors"
                            >
                                Ver más especialidades
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
                        <div
                            key="backdrop"}}}}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <div
                            key="modal"}}}}
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
                                            Servicios que incluye:
                                        </span>
                                        <ul className="space-y-3">
                                            {selected.details?.map((detail, i) => (
                                                <li
                                                    key={i}}}}
                                                    className="flex items-start text-white/80 text-sm font-light"
                                                >
                                                    <span className="text-stone mr-3 mt-1 shrink-0">›</span>
                                                    <span className="leading-snug">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href={`https://wa.me/523511277317?text=${encodeURIComponent("Hola, buen día. Vi su página web y busco asesoría especializada en " + selected.title + ". Me gustaría agendar una cita.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setSelected(null)}
                                        className="mt-8 w-full flex items-center justify-center bg-gold text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-obsidian transition-colors duration-300"
                                    >
                                        Iniciar Consulta
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Services;