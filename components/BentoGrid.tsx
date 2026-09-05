import React from 'react';
import { Scale, Users, ArrowRight } from 'lucide-react';

const TramitologiaIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Base Folder behind */}
        <path d="M 14 6 L 16 6 L 19 9 L 26 9 C 27.1 9 28 9.9 28 11 L 28 26 C 28 27.1 27.1 28 26 28 L 18 28" />

        {/* A document inside the folder, partially visible */}
        <path d="M 16 4 L 24 4 C 25.1 4 26 4.9 26 6 L 26 9" opacity="0.6" />

        {/* Sliding Document (Front) */}
        <path d="M 6 10 L 16 10 C 17.1 10 18 10.9 18 12 L 18 26 C 18 27.1 17.1 28 16 28 L 6 28 C 4.9 28 4 27.1 4 26 L 4 12 C 4 10.9 4.9 10 6 10 Z" />

        {/* Document Text lines */}
        <line x1="8" y1="15" x2="14" y2="15" />
        <line x1="8" y1="19" x2="12" y2="19" />
        <line x1="8" y1="23" x2="14" y2="23" />

        {/* Speed Lines to the Right (implies document sliding left) */}
        <line x1="20" y1="14" x2="30" y2="14" />
        <line x1="22" y1="18" x2="28" y2="18" />
        <line x1="20" y1="22" x2="32" y2="22" />
    </svg>
);

const BentoGrid: React.FC = () => {
    return (
        <section id="philosophy" className="pt-6 lg:pt-8 pb-8 lg:pb-12 bg-offwhite">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Header */}
                    <div className="md:col-span-12 mb-8 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] text-stone uppercase mb-4 block">
                            Nuestra Filosofía
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-obsidian leading-tight">
                            Nuestro Método.
                        </h2>
                    </div>

                    {/* Card 1: Main Strategy */}
                    <div
                        className="md:col-span-8 relative h-[450px] bg-white group overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:scale-[1.005] transition-all duration-500"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img width="800" height="600"
                                src="images/office/IMG_0645.webp"
                                alt="Estrategia"
                                className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

                        <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-obsidian group-hover:text-white transition-colors duration-500 shadow-sm">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <span className="text-9xl font-serif text-gray-100 absolute right-4 top-4 -z-10 font-bold">01</span>
                            </div>

                            <div>
                                <h3 className="text-3xl font-serif text-obsidian mb-4 group-hover:translate-x-2 transition-transform duration-300">Evaluación Honesta y Directa</h3>
                                <p className="text-charcoal/70 font-light leading-relaxed text-base max-w-lg">
                                    No vendemos falsas expectativas. Analizamos su caso a detalle. Si tomamos su representación, es porque tenemos una estrategia clara y factible para ganar.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Efficiency */}
                    <div
                        className="md:col-span-4 relative h-[450px] bg-obsidian text-white group overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:scale-[1.005] transition-all duration-500"
                    >
                        <div className="absolute inset-0">
                            <img width="800" height="600"
                                src="images/office/IMG_0559.webp"
                                alt="Digital"
                                className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 to-black/90"></div>

                        <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-obsidian transition-colors duration-500 shadow-sm">
                                    <TramitologiaIcon className="w-6 h-6 text-current" />
                                </div>
                                <span className="text-9xl font-serif text-white/5 absolute right-4 top-4 -z-10 font-bold">02</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">Cero vueltas al juzgado</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                                    Nosotros nos encargamos de cada trámite, fila y documento. Usted no necesita ir al juzgado ni preocuparse por el proceso; su única tarea es continuar con su vida mientras nosotros resolvemos todo.
                                </p>
                                <div className="w-full h-px bg-white/10 group-hover:bg-white/30 transition-colors"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Team */}
                    <div
                        className="md:col-span-12 relative h-[300px] bg-white group overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:scale-[1.005] transition-all duration-500"
                    >
                        <div className="absolute inset-0">
                            <img width="800" height="600"
                                src="images/office/IMG_0629.webp"
                                alt="Team"
                                className="w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-transparent"></div>

                        <div className="relative z-10 p-12 h-full flex flex-col md:flex-row items-center justify-between">
                            <div className="max-w-xl">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-obsidian group-hover:text-white transition-colors duration-500 shadow-sm rounded-sm shrink-0">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-obsidian">Equipo Multidisciplinario</span>
                                </div>
                                <h3 className="text-3xl font-serif text-obsidian mb-2 group-hover:translate-x-2 transition-transform duration-300">Un equipo de especialistas por cada caso.</h3>
                                <p className="text-charcoal/70 font-light text-sm">
                                    Cada caso es revisado simultáneamente por penalistas, fiscalistas y estrategas corporativos.
                                </p>
                            </div>
                            <span className="text-9xl font-serif text-gray-100 absolute right-12 top-1/2 -translate-y-1/2 -z-10 font-bold hidden md:block">03</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;