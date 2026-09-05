import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft, BookOpen, Scale, GraduationCap, Briefcase } from 'lucide-react';

const SocioMario: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="min-h-screen bg-white text-obsidian font-sans antialiased">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
                    <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }} className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gold hover:text-obsidian transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Regresar
                    </a>

                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-[3/4] overflow-hidden shadow-sm rounded-sm">
                                <img width="800" height="600" src="images/dsc/DSC_6010_opt.webp" alt="Dr. Mario Enrique Cervantes Vieyra" className="w-full h-full object-cover object-[center_top]" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Dr. Mario Enrique Cervantes Vieyra</h1>
                            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-6">Abogado Penalista | Litigante en Sistema Penal Acusatorio</p>
                            <div className="prose prose-lg text-charcoal/80 font-light">
                                <p className="mb-4">El Dr. Mario Enrique Cervantes Vieyra es un abogado penalista distinguido por su rigurosa formación académica y destreza en litigación estratégica dentro del Sistema Penal Acusatorio. Su trayectoria se fundamenta en la representación legal de personas físicas, corporaciones y víctimas en asuntos de la más alta complejidad penal, interviniendo con autoridad ante instancias de fuero común y federal.</p>
                                <p>Su ejercicio profesional se caracteriza por una defensa técnica, audaz y sumamente personalizada. Su enfoque principal radica en el protección de los derechos fundamentales de sus representados, logrando resultados determinantes a través de un litigio estratégico, ético y de precisión impecable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {/* Formación Académica */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <GraduationCap className="w-6 h-6 mr-3 text-gold" />
                                Formación Académica
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-obsidian">Doctorado en Derecho</h3>
                                    <p className="text-sm text-charcoal/70">Grado de excelencia orientado al análisis jurídico profundo, la investigación avanzada y la continua innovación de la práctica profesional en materia penal.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-obsidian">Maestría en Justicia Penal para Adolescentes</h3>
                                    <p className="text-sm text-charcoal/70">Especialización de alto nivel en el Sistema Integral de Justicia Penal para Adolescentes, priorizando los derechos humanos, la reinserción social y el dominio de procedimientos especializados.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Juicios Orales en Materia Penal</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Instituto Especializado en Ciencias Penales (IECP)</p>
                                    <p className="text-sm text-charcoal/70">Entrenamiento avanzado en litigación oral, dominio absoluto de la teoría del caso, técnicas incisivas de interrogatorio y argumentación jurídica inquebrantable dentro del Sistema Penal Acusatorio.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Juicios Orales en Materia Penal</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Universidad Contemporánea de las Américas (UNICLA)</p>
                                    <p className="text-sm text-charcoal/70">Programa integral enfocado en la especialización de litigantes de élite para el manejo táctico y estratégico de procedimientos penales orales.</p>
                                </div>
                            </div>
                        </section>

                        {/* Áreas de Especialización */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Scale className="w-6 h-6 mr-3 text-gold" />
                                Áreas de Especialización
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-charcoal/80 list-disc ml-4">
                                <li>Defensa penal estratégica</li>
                                <li>Delitos de alto impacto</li>
                                <li>Delitos patrimoniales</li>
                                <li>Delitos contra la salud</li>
                                <li>Delincuencia organizada</li>
                                <li>Armas de fuego y delitos federales</li>
                                <li>Homicidio</li>
                                <li>Secuestro</li>
                                <li>Delitos sexuales</li>
                                <li>Justicia Penal para Adolescentes</li>
                                <li>Recursos de apelación</li>
                                <li>Juicio de amparo en materia penal</li>
                                <li>Ejecución de sanciones penales</li>
                                <li>Medidas cautelares</li>
                                <li>Procedimientos abreviados</li>
                                <li>Suspensión condicional del proceso</li>
                                <li>Asesoría jurídica para víctimas</li>
                            </ul>
                        </section>

                        {/* Experiencia Profesional */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Briefcase className="w-6 h-6 mr-3 text-gold" />
                                Experiencia Profesional
                            </h2>
                            <div className="bg-obsidian text-white p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                                <p className="mb-6 font-light leading-relaxed relative z-10 text-lg">A lo largo de su carrera, ha ejercido una representación jurídica de alto rigor en procedimientos penales de extrema complejidad, dominando intervenciones clave en:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-light text-gray-300 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Audiencias iniciales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Control de detención</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Vinculación a proceso</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Debate de medidas cautelares</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Investigación complementaria</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Etapa intermedia</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Juicios orales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Recursos de apelación</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Juicios de amparo</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Ejecución penal</li>
                                </ul>
                                
                                <p className="mb-6 font-light leading-relaxed border-t border-gray-800 pt-8 relative z-10 text-lg">Su capacidad de litigio ha sido probada con éxito ante las máximas instancias, incluyendo:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-light text-gray-300">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Juzgados de Control</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Tribunales de Enjuiciamiento</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Salas Penales de Apelación</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Juzgados de Ejecución</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Tribunales Colegiados</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Juzgados de Distrito</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Fiscalía General del Estado</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Fiscalía General de la República</li>
                                </ul>
                            </div>
                        </section>

                        {/* Servicios */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Scale className="w-6 h-6 mr-3 text-gold" />
                                Servicios
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-charcoal/80 list-disc ml-4">
                                <li>Defensa Penal Particular</li>
                                <li>Defensa en Delitos Federales</li>
                                <li>Defensa en Delitos del Fuero Común</li>
                                <li>Asesoría Jurídica para Víctimas</li>
                                <li>Recursos de Apelación</li>
                                <li>Juicios de Amparo</li>
                                <li>Medidas Cautelares</li>
                                <li>Suspensión Condicional del Proceso</li>
                                <li>Procedimientos Abreviados</li>
                                <li>Cumplimiento de Sentencias</li>
                                <li>Asesoría Penal Preventiva para Empresas</li>
                            </ul>
                        </section>

                        {/* Filosofía Profesional */}
                        <section className="text-center py-12 px-6 border-y border-gray-200 bg-offwhite">
                            <BookOpen className="w-8 h-8 mx-auto text-gold mb-6" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-obsidian mb-6">Filosofía Profesional</h2>
                            <blockquote className="text-2xl font-serif text-charcoal italic max-w-3xl mx-auto leading-relaxed">
                                "Cada asunto representa la confianza depositada por una persona en momentos de gran trascendencia. Por ello, cada defensa se construye con estrategia, preparación, estudio permanente y absoluto compromiso con la justicia y los derechos de nuestros representados."
                            </blockquote>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SocioMario;
