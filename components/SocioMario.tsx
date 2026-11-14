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
                    <a href="/#partners" onClick={(e) => { if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) { e.preventDefault(); onClose(); } }} className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gold hover:text-obsidian transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Regresar
                    </a>

                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-[3/4] overflow-hidden shadow-sm rounded-sm">
                                <img width="800" height="600" src="/images/dsc/DSC_6010_opt.webp" alt="Dr. Mario Enrique Cervantes Vieyra" className="w-full h-full object-cover object-[center_top]" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Dr. Mario Enrique Cervantes Vieyra</h1>
                            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-6">Socio fundador · Litigio penal y asesoría a víctimas</p>
                            <div className="prose prose-lg text-charcoal/80 font-light">
                                <p className="mb-4">Mario Enrique Cervantes Vieyra es socio fundador de CVIL. Su práctica se concentra en litigio penal, defensa de personas y empresas, y asesoría jurídica a víctimas ante autoridades estatales y federales.</p>
                                <p>La atención parte de conocer los hechos, revisar el expediente y entender qué necesita resolver el cliente. A partir de esa información, explica las alternativas de defensa y prepara las actuaciones que corresponden a la etapa del procedimiento.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {/* Formación académica */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <GraduationCap className="w-6 h-6 mr-3 text-gold" />
                                Formación académica
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-obsidian">Doctorado en Derecho</h3>
                                    <p className="text-sm text-charcoal/70">Formación de posgrado en análisis e investigación jurídica.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-obsidian">Maestría en Derecho Procesal y Oralidad</h3>
                                    <p className="text-sm text-charcoal/70">Formación en procedimientos judiciales y técnicas de oralidad.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Juicios Orales</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Instituto Especializado en Ciencias Penales (IECP)</p>
                                    <p className="text-sm text-charcoal/70">Estudios en litigación oral, preparación del caso e interrogatorio en el sistema penal acusatorio.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Juicios Orales</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Universidad Contemporánea de las Américas (UNICLA)</p>
                                    <p className="text-sm text-charcoal/70">Estudios de posgrado en la preparación y desarrollo de juicios orales.</p>
                                </div>
                            </div>
                        </section>

                        {/* Asuntos en los que interviene */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Scale className="w-6 h-6 mr-3 text-gold" />
                                Asuntos en los que interviene
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-charcoal/80 list-disc ml-4">
                                <li>Litigio estratégico y controversias</li>
                                <li>Delitos de alto impacto</li>
                                <li>Delitos patrimoniales</li>
                                <li>Delitos contra la salud</li>
                                <li>Delincuencia organizada</li>
                                <li>Armas de fuego y delitos federales</li>
                                <li>Homicidio</li>
                                <li>Secuestro</li>
                                <li>Delitos sexuales</li>
                                <li>Procedimientos especializados de oralidad</li>
                                <li>Recursos de apelación</li>
                                <li>Juicio de amparo y control constitucional</li>
                                <li>Ejecución de sanciones penales</li>
                                <li>Medidas cautelares</li>
                                <li>Procedimientos abreviados</li>
                                <li>Suspensión condicional del proceso</li>
                                <li>Asesoría jurídica para víctimas</li>
                            </ul>
                        </section>

                        {/* Experiencia profesional */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Briefcase className="w-6 h-6 mr-3 text-gold" />
                                Experiencia profesional
                            </h2>
                            <div className="bg-obsidian text-white p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                                <p className="mb-6 font-light leading-relaxed relative z-10 text-lg">Su experiencia comprende la representación durante las distintas etapas del procedimiento penal:</p>
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
                                
                                <p className="mb-6 font-light leading-relaxed border-t border-gray-800 pt-8 relative z-10 text-lg">Ha intervenido en asuntos ante las siguientes autoridades:</p>
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
                                <li>Litigio y controversias penales</li>
                                <li>Defensa ante autoridades federales</li>
                                <li>Defensa ante autoridades estatales</li>
                                <li>Asesoría y acompañamiento a víctimas</li>
                                <li>Impugnación de resoluciones</li>
                                <li>Juicios de Amparo</li>
                                <li>Revisión de medidas cautelares</li>
                                <li>Asesoría sobre suspensión condicional del proceso</li>
                                <li>Asesoría sobre procedimientos abreviados</li>
                                <li>Atención de la ejecución de sentencias</li>
                                <li>Consulta sobre riesgos penales para empresas</li>
                            </ul>
                        </section>

                        {/* Cómo aborda cada asunto */}
                        <section className="text-center py-12 px-6 border-y border-gray-200 bg-offwhite">
                            <BookOpen className="w-8 h-8 mx-auto text-gold mb-6" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-obsidian mb-6">Cómo aborda cada asunto</h2>
                            <blockquote className="text-2xl font-serif text-charcoal italic max-w-3xl mx-auto leading-relaxed">
                                Una defensa requiere conocer el expediente, escuchar al cliente y preparar cada actuación. El trabajo incluye explicar las opciones y dar seguimiento al asunto.
                            </blockquote>
                        </section>
                    </div>
                </div>
                <nav aria-label="Otros socios" className="max-w-[1000px] mx-auto px-6 lg:px-12 mt-12 text-sm text-gold">
                    <a href="/socios/alejandro-arriaga" className="underline">Conocer a Alejandro Arriaga Bastida</a>
                </nav>
            </main>
            <Footer />
        </div>
    );
};

export default SocioMario;

