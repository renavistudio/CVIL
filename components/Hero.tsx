import React, { useRef, useState } from 'react';
import { ArrowRight, X, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section ref={targetRef} id="home" className="relative min-h-screen lg:h-screen lg:min-h-[700px] flex items-center bg-white overflow-hidden pt-0">

                {/* Background Texture - Subtle Grain */}
                <div className="absolute inset-0 bg-[url('/images/stardust.png')] opacity-20 pointer-events-none z-0"></div>

                {/* ===== MOBILE LAYOUT ===== */}
                <div className="lg:hidden w-full flex flex-col min-h-screen">

                    {/* Top decorative gold line */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#946B00]/40 to-transparent mt-16"></div>

                    {/* Photo of the partners */}
                    <div className="relative z-10 px-5 pt-6 "
                    >
                        <div className="relative overflow-hidden rounded-sm">
                            <img
                                src="/images/dsc/DSC_6061_mob.webp"
                                alt="Socios Fundadores de CVIL"
                                width="500"
                                height="334"
                                fetchPriority="high"
                                className="w-full h-[85vw] object-cover contrast-[1.05]"
                                onClick={() => setSelectedImage('/images/dsc/DSC_6061_opt.webp')}
                            />
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="relative z-10 px-6 pt-8 pb-4 flex-1 flex flex-col ">
                        <h1 className="sr-only">Abogados Corporativos en Zamora - Especialistas en Derecho Corporativo y Blindaje Empresarial</h1>
                        <p className="text-[13vw] leading-[0.9] font-serif font-medium text-obsidian tracking-tighter mb-5">
                            Ganar es <br />
                            <span className="italic text-gray-400 font-light">lo único.</span>
                        </p>

                        <p className="text-base text-charcoal/75 font-light leading-relaxed mb-8 max-w-sm">
                            Como su abogado corporativo de confianza, protegemos su empresa, sus operaciones comerciales y la estabilidad legal de su negocio en Zamora y todo Michoacán.
                        </p>

                        {/* CTA Button - full width golden */}
                        <a
                            href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 bg-gold hover:bg-[#7A5500] text-white w-full py-4 rounded-sm transition-all duration-300 shadow-lg"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Agendar Consulta</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <p className="text-[10px] text-stone uppercase tracking-[0.2em] text-center mt-4 font-medium">
                            Respuesta en menos de 15 minutos
                        </p>

                        {/* Scroll indicator */}
                        <div
                            className="flex flex-col items-center mt-auto pt-6 pb-4 opacity-75"
                        >
                            <ChevronDown className="w-5 h-5 text-gray-300" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">Desplazar para más</span>
                        </div>
                    </div>
                </div>

                {/* ===== DESKTOP LAYOUT ===== */}
                <div className="hidden lg:block max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">

                    <div className="grid grid-cols-12 gap-12 w-full items-center">

                        {/* Left: Typography */}
                        <div className="col-span-6 z-20 "
                        >

                        <h1 className="sr-only">Abogados Corporativos en Zamora - Especialistas en Derecho Corporativo y Blindaje Empresarial</h1>
                        <p className="text-[6.8rem] leading-[0.9] font-serif font-medium text-obsidian tracking-tighter mb-8 mix-blend-multiply">
                            Ganar es <br />
                            <span className="italic text-gray-400 font-light">lo único.</span>
                        </p>

                            <div className="max-w-2xl mt-4">
                                <p className="text-xl text-charcoal/80 font-light leading-relaxed">
                                    Como su despacho de abogados corporativos, protegemos su empresa, sus operaciones comerciales y la estabilidad legal de su negocio.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-6 items-center "
                            >
                                <a href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20de%20valoraci%C3%B3n%20legal." target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-gold text-white px-8 py-4 min-w-[200px] hover:bg-obsidian transition-all duration-300 shadow-lg hover:shadow-xl">
                                    <span className="text-xs font-bold uppercase tracking-widest">Agendar Consulta</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <span className="text-[10px] text-stone uppercase tracking-widest">
                                    Respuesta en menos de 15 minutos
                                </span>
                            </div>
                        </div>

                        {/* Right: Visual / Featured Partners Photo */}
                        <div className="col-span-6 relative h-[70vh] min-h-[520px] max-h-[680px]">
                            <div className="w-full h-full overflow-hidden shadow-2xl cursor-pointer rounded-sm "
                                onClick={() => setSelectedImage('/images/dsc/DSC_6061_opt.webp')}
                            >
                                <div className="w-full h-full relative overflow-hidden rounded-sm">
                                    <img
                                        src="/images/dsc/DSC_6061_opt.webp"
                                        alt="Socios Fundadores de CVIL"
                                        width="1000"
                                        height="667"
                                        fetchPriority="high"
                                        className="w-full h-full object-cover object-[center_top] contrast-[1.05]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Lightbox Popup Modal ===== */}
            {selectedImage && (
              <div
                onClick={() => setSelectedImage(null)}
                role="dialog" aria-modal="true" aria-label="Imagen ampliada" className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-4 md:p-12 backdrop-blur-sm cursor-zoom-out"
              >
                <div className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center cursor-default bg-charcoal border border-white/5 shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage} width="1000" height="667"
                    alt="Fotografía ampliada de las instalaciones corporativas de CVIL Abogados en Zamora"
                    className="w-full h-full object-contain"
                  />
                  <button
                    className="absolute top-4 right-4 p-4 bg-black/40 hover:bg-white text-white/70 hover:text-black rounded-full transition-all duration-300 backdrop-blur-md border border-white/10"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Cerrar imagen ampliada"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
        </>
    );
};

export default Hero;