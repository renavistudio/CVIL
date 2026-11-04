import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Partners: React.FC<{ onOpenSocio?: (id: number) => void; paused?: boolean }> = ({ onOpenSocio, paused = false }) => {
        const partners = [
        {
            id: 1,
            name: "Dr. Mario Enrique Cervantes Vieyra",
            role: "Socio Fundador | Litigio Estrategico y Controversias",
            description: "Doctor en Derecho con sólida trayectoria en litigación estratégica y juicios orales. Representación de alto perfil ante instancias del fuero común y federal.",
            image: "/images/dsc/DSC_6010_opt.webp",
            link: "#/socio/mario-cervantes"
        },
        {
            id: 2,
            name: "Lic. Alejandro Arriaga",
            role: "Socio Fundador",
            description: "Especialista en estructuración corporativa y planeación estratégica. Su visión ha sido fundamental para la consolidación de CVIL como firma líder en la región.",
            image: "/images/dsc/DSC_6058_opt.webp",
            link: "#/socio/alejandro-arriaga"
        },
        {
            id: 3,
            name: "Lic. Cynthia Díaz",
            role: "Abogada",
            description: "",
            image: "/images/dsc/DSC_6075_opt.webp"
        },
        {
            id: 4,
            name: "Lic. Daniela Molina",
            role: "Abogada",
            description: "",
            image: "/images/dsc/DSC_6026_opt.webp"
        },
        {
            id: 5,
            name: "Lic. Fabiola Sánchez",
            role: "Abogada",
            description: "",
            image: "/images/dsc/DSC_6014_opt.webp"
        },
        {
            id: 6,
            name: "Lic. Martha León",
            role: "Abogada",
            description: "",
            image: "/images/dsc/DSC_6065_opt.webp"
        },
        {
            id: 7,
            name: "Lic. Leticia Herrera",
            role: "Abogada",
            description: "",
            image: "/images/dsc/DSC_6018_opt.webp"
        },
        {
            id: 8,
            name: "Lic. Julian Lora",
            role: "Abogado",
            description: "",
            image: "/images/dsc/DSC_6030_opt.webp"
        },
        {
            id: 11,
            name: "Cristian Flores",
            role: "Postulante",
            description: "",
            image: "/images/dsc/DSC_6022_opt.webp"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const isFirstRender = useRef(true);

    // After the very first card change, allow animations
    useEffect(() => {
        if (isFirstRender.current && currentIndex !== 0) {
            isFirstRender.current = false;
        }
    }, [currentIndex]);

    // Touch/swipe handling
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const swiping = useRef(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        swiping.current = false;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null || touchStartY.current === null) return;
        const deltaX = e.touches[0].clientX - touchStartX.current;
        const deltaY = e.touches[0].clientY - touchStartY.current;
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
            swiping.current = true;
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || !swiping.current) {
            touchStartX.current = null;
            touchStartY.current = null;
            return;
        }
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const swipeThreshold = 50;
        if (deltaX < -swipeThreshold) {
            handleNext();
        } else if (deltaX > swipeThreshold) {
            handlePrev();
        }
        touchStartX.current = null;
        touchStartY.current = null;
        swiping.current = false;
    };

    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [fullyVisible, setFullyVisible] = useState(false);
    const remaining = useRef(6000);
    const startedAt = useRef<number | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // A tall mobile section cannot fit on screen: use the card's available
    // viewport area instead. The fixed navigation must not cover that area.
    useEffect(() => {
        let frame = 0;
        const measure = () => {
            frame = 0;
            if (!sectionRef.current || !cardRef.current) return;
            const top = Math.min(110, window.innerHeight / 4);
            const available = window.innerHeight - top;
            const section = sectionRef.current.getBoundingClientRect();
            const card = cardRef.current.getBoundingClientRect();
            const target = section.height <= available ? section : card;
            const visible = Math.max(0, Math.min(target.bottom, window.innerHeight) - Math.max(target.top, top));
            const fitsWidth = target.left >= -1 && target.right <= window.innerWidth + 1;
            setFullyVisible(!document.hidden && fitsWidth && visible >= Math.min(target.height, available) - 1);
        };
        const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
        const resize = new ResizeObserver(schedule);
        resize.observe(sectionRef.current!);
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        document.addEventListener('visibilitychange', schedule);
        measure();
        return () => {
            cancelAnimationFrame(frame);
            resize.disconnect();
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            document.removeEventListener('visibilitychange', schedule);
        };
    }, []);

    const resetDelay = () => {
        if (timer.current !== null) clearTimeout(timer.current);
        timer.current = null;
        startedAt.current = null;
        remaining.current = 6000;
    };

    // Preserve elapsed time while offscreen instead of restarting the carousel.
    useEffect(() => {
        if (!fullyVisible || paused) return;
        startedAt.current = performance.now();
        timer.current = setTimeout(() => {
            timer.current = null;
            startedAt.current = null;
            remaining.current = 6000;
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % partners.length);
        }, remaining.current);
        return () => {
            if (timer.current !== null) clearTimeout(timer.current);
            timer.current = null;
            if (startedAt.current !== null) {
                remaining.current = Math.max(0, remaining.current - (performance.now() - startedAt.current));
                startedAt.current = null;
            }
        };
    }, [currentIndex, partners.length, fullyVisible, paused]);

    const handleNext = () => {
        resetDelay();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % partners.length);
    };

    // Pre-load next partner's image for smoother transition
    useEffect(() => {
        if (!fullyVisible || paused) return;
        const nextPartnerIndex = (currentIndex + 1) % partners.length;
        const img = new Image();
        img.src = partners[nextPartnerIndex].image;
    }, [currentIndex, partners.length, fullyVisible, paused]);

    const handlePrev = () => {
        resetDelay();
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    };

    const currentPartner = partners[currentIndex];

    return (
        <section id="partners" ref={sectionRef} className="py-8 lg:py-12 bg-white border-t border-gray-100 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left side: Section Header / Intro (4 columns) */}
                    <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-8">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase mb-4 block">
                            Liderazgo Jurídico
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-obsidian leading-[1.1] mb-6">
                            Nuestros Socios &amp; Equipo.
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
                                                    resetDelay();
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
                    <div
                        ref={cardRef}
                        className="lg:col-span-8 relative overflow-hidden bg-[#fafaf9] rounded-sm border border-gray-100 shadow-sm min-h-[600px] sm:min-h-[500px] md:min-h-[420px]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >

                        {/* Mobile edge arrows — overlaid on card borders */}
                        <button
                            onClick={handlePrev}
                            className="lg:hidden absolute left-2 top-[220px] sm:top-[240px] -translate-y-1/2 z-20 p-2 flex items-center justify-center active:scale-90 transition-all"
                            aria-label="Anterior"
                        >
                            <div className="bg-black/10 backdrop-blur-sm rounded-full p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                        </button>
                        <button
                            onClick={handleNext}
                            className="lg:hidden absolute right-2 top-[220px] sm:top-[240px] -translate-y-1/2 z-20 p-2 flex items-center justify-center active:scale-90 transition-all"
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
                                        opacity: 0,
                                        scale: 0.98,
                                    }),
                                    center: {
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                    },
                                    exit: (direction: number) => ({
                                        x: direction > 0 ? '-20%' : '20%',
                                        opacity: 0,
                                        scale: 0.98,
                                    }),
                                }}
                                initial={isFirstRender.current ? false : "enter"}
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full flex flex-col sm:flex-row items-stretch min-h-[600px] sm:min-h-[500px] md:min-h-[420px]"
                            >
                                {/* Full-Height Left Image Column */}
                                <div className="w-full sm:w-5/12 shrink-0 relative overflow-hidden" style={{ minHeight: '280px' }}>
                                    <img width="800" height="600"
                                        src={currentPartner.image}
                                        alt={currentPartner.name}
                                        className="w-full h-full object-cover object-[center_top] sm:absolute sm:inset-0"
                                        style={{ minHeight: '280px' }}
                                    />
                                </div>

                                {/* Partner details on the right */}
                                <div className="flex-1 flex flex-col justify-center p-8 sm:p-10 md:p-12 text-center sm:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-obsidian tracking-wide uppercase mb-1.5">
                                        {currentPartner.name}
                                    </h3>
                                    <p className="text-[#B8860B] font-semibold text-xs uppercase tracking-wider mb-5">
                                        {currentPartner.role}
                                    </p>
                                    {currentPartner.description && (
                                        <p className="text-charcoal/75 text-sm md:text-base font-light leading-relaxed max-w-lg mb-8">
                                            {currentPartner.description}
                                        </p>
                                    )}
                                    {currentPartner.link && (
                                        <div>
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (onOpenSocio) onOpenSocio(currentPartner.id);
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
