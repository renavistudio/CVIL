import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const Location: React.FC = () => {
    return (
        <section id="location" className="py-8 lg:py-12 bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.webp')] opacity-10 pointer-events-none z-0"></div>

            <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                    {/* Left: Info */}
                    <div}}}}
                        className="w-full lg:w-1/3 flex flex-col pt-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-obsidian"></div>
                            <span className="text-xs font-bold tracking-[0.3em] text-stone uppercase">
                                Nuestras Instalaciones
                            </span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-serif text-obsidian leading-[0.9] tracking-tight mb-10">
                            CVIL.
                        </h2>

                        <div className="mb-12 border-l border-obsidian/20 pl-6 py-2">
                            <div className="flex items-start gap-4 mb-6">
                                <MapPin className="w-5 h-5 text-obsidian mt-1 shrink-0" strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-[10px] font-bold text-stone uppercase tracking-widest mb-2">Dirección Principal</h4>
                                    <p className="text-base font-serif text-obsidian leading-relaxed">
                                        C. Suiza 721-Piso 3, La Luneta, <br />
                                        59689 Zamora de Hidalgo, Mich.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.google.com/?q=C.+Suiza+721-Piso+3,+La+Luneta,+59689+Zamora+de+Hidalgo,+Mich."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between bg-obsidian text-white px-8 py-4 w-full md:w-auto md:max-w-xs hover:bg-charcoal transition-all duration-300 shadow-lg"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">Abrir en Mapa</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right: Map */}
                    <div}}}}
                        className="w-full lg:w-2/3 h-[500px] border border-gray-200 bg-gray-100 p-2 shadow-2xl relative group overflow-hidden"
                    >
                        {/* Map Overlay to prevent accidental scrolling unless clicked (optional, can just use pointer-events config on iframe) */}
                        <div className="absolute inset-0 bg-obsidian/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>

                        <iframe
                            src="https://maps.google.com/maps?q=C.+Suiza+721,+La+Luneta,+Zamora,+Michoacan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="bg-gray-100 contrast-[1.05] opacity-90 hover:opacity-100 transition-all duration-700 w-full h-full object-cover"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
