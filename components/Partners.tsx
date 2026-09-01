import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Partners: React.FC<{ onOpenSocio?: () => void }> = ({ onOpenSocio }) => {
    const partners = [
        {
            id: 1,
            name: "Dr. Mario Enrique Cervantes Vieyra",
            role: "Socio Fundador | Especialista en Sistema Penal Acusatorio",
            description: "Doctor en Derecho con sólida trayectoria en litigación estratégica y juicios orales. Representación de alto perfil ante instancias del fuero común y federal.",
            image: "images/dsc/DSC_6010_opt.webp",
            link: "#/socio/mario-cervantes"
        },
        {
            id: 2,
            name: "Lic. Alejandro Arriaga",
            role: "Socio Fundador",
            description: "Especialista en estructuración corporativa y planeación estratégica. Su visión ha sido fundamental para la consolidación de CVIL como firma líder en la región.",
            image: "images/dsc/DSC_6058_opt.webp"
        },
        {
            id: 3,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6030_opt.webp"
        },
        {
            id: 4,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6014_opt.webp"
        },
        {
            id: 5,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6018_opt.webp"
        },
        {
            id: 6,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6022_opt.webp"
        },
        {
            id: 7,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6026_opt.webp"
        },
        {
            id: 8,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6033_opt.webp"
        },
        {
            id: 9,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6038_opt.webp"
        },
        {
            id: 10,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6041_opt.webp"
        },
        {
            id: 11,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6065_opt.webp"
        },
        {
            id: 12,
            name: "Lic. Cynthia Díaz",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6075_opt.webp"
        },
        {
            id: 13,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6077_opt.webp"
        },
        {
            id: 14,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6080_opt.webp"
        },
        {
            id: 15,
            name: "",
            role: "Abogado",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "images/dsc/DSC_6083_opt.webp"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    // Auto-scroll loop (6s timer, resets on manual index change)
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % partners.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex, partners.length]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % partners.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    };

    return (
        <section id="partners" className="py-8 lg:py-12 bg-white border-t border-gray-100 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left side: Section Header / Intro (4 columns) */}
                    <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-8">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase mb-4 block">
                            Liderazgo Jurídico
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-obsidian leading-[1.1] mb-6">
                            Nuestros Socios & Equipo.
                        </h2>
                        <p className="text-charcoal/70 font-light text-base leading-relaxed mb-8">
                            Defensa de prestigio guiada por socios con sólida trayectoria y visión estratégica en cada rama del derecho.
                        </p>

                        {/* Custom Slider Navigation (Arrows & Dots) — desktop only */}
                        <div className="hidden lg:flex items-center space-x-8 mt-4">
                            <div className="flex space-x-3">
                                <button
                                    onClick={handlePrev}
                                    className="w-12 h-12 flex items-center justify-center bg-transparent hover:bg-gray-50 text-obsidian rounded-full transition-colors duration-300 border border-gray-200"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 flex items-center justify-center bg-transparent hover:bg-gray-50 text-obsidian rounded-full transition-colors duration-300 border border-gray-200"
                                    aria-label="Siguiente"
                                >
                                    <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                                </button>
                            </div>

                                                        {/* Advanced Sliding Pagination Track */}
                            <div 
                                className="relative flex items-center overflow-hidden mt-4"
                                style={{ 
                                    width: '60px', 
                                    height: '24px',
                                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                                }}
                            >
                                <motion.div 
                                    className="absolute flex items-center gap-1.5"
                                    animate={{ x: (1 - currentIndex) * 14 + 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {partners.map((_, dotIdx) => {
                                        const isActive = currentIndex === dotIdx;
                                        return (
                                            <motion.button
                                                key={dotIdx}
                                                onClick={() => {
                                                    setDirection(dotIdx > currentIndex ? 1 : -1);
                                                    setCurrentIndex(dotIdx);
                                                }}
                                                layout
                                                initial={false}
                                                animate={{
                                                    width: isActive ? 24 : 8,
                                                    backgroundColor: isActive ? '#B8860B' : 'rgba(209, 213, 219, 0.8)'
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                className="h-2 rounded-full shrink-0 focus:outline-none"
                                                aria-label={`Ver socio ${dotIdx + 1}`}
                                            />
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: The sliding content viewport (8 columns) */}
                    <div className="lg:col-span-8 relative overflow-hidden h-auto sm:h-[420px] bg-[#fafaf9] rounded-sm border border-gray-100 shadow-sm flex flex-col sm:flex-row">

                        {/* Mobile edge arrows — overlaid on card borders */}
                        <button
                            onClick={handlePrev}
                            className="lg:hidden absolute left-2 top-[32%] -translate-y-1/2 z-20 p-2 flex items-center justify-center active:scale-90 transition-all"
                            aria-label="Anterior"
                        >
                            <div className="bg-black/10 backdrop-blur-sm rounded-full p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                        </button>
                        <button
                            onClick={handleNext}
                            className="lg:hidden absolute right-2 top-[32%] -translate-y-1/2 z-20 p-2 flex items-center justify-center active:scale-90 transition-all"
                            aria-label="Siguiente"
                        >
                            <div className="bg-black/10 backdrop-blur-sm rounded-full p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                                <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                        </button>

                        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? '100%' : '-100%',
                                        opacity: 0.5,
                                    }),
                                    center: {
                                        x: 0,
                                        opacity: 1,
                                    },
                                    exit: (direction: number) => ({
                                        x: direction > 0 ? '-30%' : '30%',
                                        opacity: 0,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                className="w-full h-auto sm:h-full flex flex-col sm:flex-row items-stretch"
                            >
                                {/* Full-Height Left Image Column */}
                                <div className="w-full sm:w-5/12 sm:h-full shrink-0 relative overflow-hidden">
                                    <img
                                        src={partners[currentIndex].image}
                                        alt={partners[currentIndex].name}
                                        className="w-full h-auto sm:h-full object-cover object-[center_top]"
                                    />
                                </div>

                                {/* Partner details on the right */}
                                <div className="flex-1 flex flex-col justify-center p-8 sm:p-10 md:p-12 text-center sm:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-obsidian tracking-wide uppercase mb-1.5">
                                        {partners[currentIndex].name}
                                    </h3>
                                    <p className="text-[#B8860B] font-semibold text-xs uppercase tracking-wider mb-5">
                                        {partners[currentIndex].role}
                                    </p>
                                    <p className="text-charcoal/75 text-sm md:text-base font-light leading-relaxed max-w-lg mb-8">
                                        {partners[currentIndex].description}
                                    </p>
                                    {partners[currentIndex].link && (
                                        <div>
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (onOpenSocio) onOpenSocio();
                                                }}
                                                className="inline-block px-7 py-3 text-xs font-bold uppercase tracking-widest text-obsidian bg-transparent border border-obsidian hover:bg-obsidian hover:text-white transition-colors duration-300 rounded-sm"
                                            >
                                                Ver Currículum Completo
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Partners;


