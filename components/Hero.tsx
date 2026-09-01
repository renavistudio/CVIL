import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section ref={targetRef} id="home" className="relative min-h-screen lg:h-screen lg:min-h-[700px] flex items-center bg-white overflow-hidden pt-0">

                {/* Background Texture - Subtle Grain */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.webp')] opacity-20 pointer-events-none z-0"></div>

                {/* ===== MOBILE LAYOUT ===== */}
                <div className="lg:hidden w-full flex flex-col min-h-screen">

                    {/* Top decorative gold line */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent mt-16"></div>

                    {/* Photo of the partners */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 px-5 pt-6"
                    >
                        <div className="relative overflow-hidden rounded-sm">
                            <img
                                src="images/dsc/DSC_6061_opt.webp"
                                alt="Socios Fundadores de CVIL"
                                className="w-full h-[85vw] object-cover contrast-105"
                                style={{
                                    objectPosition: '57% 0%',
                                    transform: 'scale(1.02)'
                                }}
                                onClick={() => setSelectedImage('images/dsc/DSC_6061_opt.webp')}
                            />
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10 px-6 pt-8 pb-4 flex-1 flex flex-col"
                    >
                        <h1 className="text-[13vw] leading-[0.9] font-serif font-medium text-obsidian tracking-tighter mb-5">
                            Ganar es <br />
                            <span className="italic text-gray-400 font-light">lo único.</span>
                        </h1>

                        <p className="text-base text-charcoal/75 font-light leading-relaxed mb-8 max-w-sm">
                            Protegemos su empresa, sus operaciones y la estabilidad de su negocio.
                        </p>

                        {/* CTA Button - full width golden */}
                        <a
                            href="https://wa.me/523511277317?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 bg-[#B8860B] hover:bg-[#9a7209] text-white w-full py-4 rounded-sm transition-all duration-300 shadow-lg"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Agendar Consulta</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <p className="text-[10px] text-stone uppercase tracking-[0.2em] text-center mt-4 font-medium">
                            Respuesta en menos de 15 minutos
                        </p>

                        {/* Scroll indicator */}
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center mt-auto pt-6 pb-4"
                        >
                            <ChevronDown className="w-5 h-5 text-gray-300" />
                            <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mt-1">Desplazar para más</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ===== DESKTOP LAYOUT ===== */}
                <div className="hidden lg:block max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">

                    <div className="grid grid-cols-12 gap-12 w-full items-center">

                        {/* Left: Typography */}
                        <motion.div 
                            style={{ y: yText, opacity }} 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="col-span-6 z-20"
                        >

                            <h1 className="text-[6.8rem] leading-[0.9] font-serif font-medium text-obsidian tracking-tighter mb-8 mix-blend-multiply">
                                Ganar es <br />
                                <span className="italic text-gray-400 font-light">lo único.</span>
                            </h1>

                            <div className="max-w-2xl mt-4">
                                <p className="text-xl text-charcoal/80 font-light leading-relaxed">
                                    Protegemos su empresa, sus operaciones y la estabilidad de su negocio.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="mt-12 flex flex-wrap gap-6 items-center"
                            >
                                <a href="https://wa.me/523511277317?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal." target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-gold text-white px-8 py-4 min-w-[200px] hover:bg-obsidian transition-all duration-300 shadow-lg hover:shadow-xl">
                                    <span className="text-xs font-bold uppercase tracking-widest">Agendar Consulta</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <span className="text-[10px] text-stone uppercase tracking-widest">
                                    Respuesta en menos de 15 minutos
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Right: Visual / Featured Partners Photo */}
                        <div className="col-span-6 relative h-[70vh] min-h-[520px] max-h-[680px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full h-full overflow-hidden shadow-2xl cursor-pointer rounded-sm"
                                onClick={() => setSelectedImage('images/dsc/DSC_6061_opt.webp')}
                            >
                                <div className="w-full h-full relative overflow-hidden rounded-sm">
                                    <img
                                        src="images/dsc/DSC_6061_opt.webp"
                                        alt="Socios Fundadores de CVIL"
                                        className="w-full h-full object-cover object-[center_top] contrast-105"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Lightbox Popup Modal ===== */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-4 md:p-12 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center cursor-default bg-charcoal border border-white/5 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Fotografía ampliada de las instalaciones corporativas de CVIL Abogados en Zamora"
                                className="w-full h-full object-contain"
                            />

                            {/* Botón de cerrar elegante */}
                            <button
                                className="absolute top-4 right-4 p-3 bg-black/40 hover:bg-white text-white/70 hover:text-black rounded-full transition-all duration-300 backdrop-blur-md border border-white/10"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Hero;