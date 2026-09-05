import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft, BookOpen, Scale, GraduationCap, Briefcase } from 'lucide-react';

const SocioAlejandro: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
                                <img width="800" height="600" src="images/dsc/DSC_6058_opt.webp" alt="Lic. Alejandro Arriaga Bastida" className="w-full h-full object-cover object-[center_top]" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Lic. Alejandro Arriaga Bastida</h1>
                            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-6">Abogado Litigante | Asesoría Jurídica Empresarial | Estrategia Procesal</p>
                            <div className="prose prose-lg text-charcoal/80 font-light">
                                <p className="mb-4">Licenciado en Derecho con formación de posgrado en Justicia Familiar, Juicios Orales y Derecho Penal. Su práctica integra litigación estratégica, representación de personas físicas y morales, asesoría empresarial, negociación y prevención de contingencias.</p>
                                <p className="mb-4">Interviene en asuntos de altísima exigencia familiar, penal, civil, mercantil y corporativa. Ha desarrollado una extensa trayectoria como coordinador jurídico del sector agroindustrial y comercial, asegurando una férrea protección del patrimonio empresarial e institucional.</p>
                                <p>Su estilo profesional es directo, técnico y reservado. Su firma es la construcción de rutas jurídicas viables basadas en diagnósticos inquebrantablemente honestos: prefiere distinguir con claridad entre lo jurídicamente posible y lo inviable antes de comprometer la estabilidad del cliente.</p>
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
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Justicia Familiar</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Poder Judicial del Estado de Guanajuato</p>
                                    <p className="text-sm text-charcoal/70">Estudio avanzado y minucioso de la dinámica procesal en el ámbito familiar, diseñado para proteger los intereses más sensibles de los representados y sus familias con el más alto rigor jurisdiccional.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Juicios Orales</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Universidad UNIVER</p>
                                    <p className="text-sm text-charcoal/70">Formación estratégica orientada al desarrollo impecable de audiencias y la destreza discursiva frente al estrado, vital para desarticular a la contraparte en el nuevo sistema de justicia.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Especialidad en Derecho Penal</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Universidad UNIVER</p>
                                    <p className="text-sm text-charcoal/70">Dominio técnico sobre los preceptos punitivos y la teoría del delito, dotándolo de la capacidad analítica para desmenuzar casos complejos y construir defensas herméticas.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Licenciatura en Derecho</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Cédula Federal: 11122194</p>
                                    <p className="text-sm text-charcoal/70">La base de una carrera inquebrantable, respaldada por la autorización federal para ejercer en los tribunales más exigentes de toda la República Mexicana.</p>
                                </div>
                            </div>
                        </section>

                        {/* Áreas de Práctica (Como los bullets de Mario) */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Scale className="w-6 h-6 mr-3 text-gold" />
                                Áreas de Especialización
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-charcoal/80 list-disc ml-4">
                                <li>Blindaje Corporativo y Empresarial</li>
                                <li>Elaboración y Revisión de Contratos</li>
                                <li>Litigio Civil y Mercantil</li>
                                <li>Derecho Penal y Juicios Orales</li>
                                <li>Derecho Familiar Estratégico</li>
                                <li>Juicio de Amparo Constitucional</li>
                                <li>Recuperación de Cartera Vencida</li>
                                <li>Formalización de Garantías</li>
                                <li>Solución Extrajudicial de Controversias</li>
                                <li>Cumplimiento de Obligaciones</li>
                                <li>Evaluación de Títulos y Avales</li>
                                <li>Defensa Patrimonial</li>
                            </ul>
                        </section>

                        {/* Experiencia Profesional */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Briefcase className="w-6 h-6 mr-3 text-gold" />
                                Experiencia y Enfoque
                            </h2>
                            <div className="bg-obsidian text-white p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                                <p className="mb-6 font-light leading-relaxed relative z-10 text-lg">La intervención jurídica de Alejandro se desarrolla desde una perspectiva implacable de prevención y contención de daños. Antes de promover una acción, exige precisión absoluta, con amplia experiencia dominando:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-sm font-light text-gray-300 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Representación y defensa jurídica ante órganos jurisdiccionales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Diseño de estrategias procesales e impugnaciones de alta complejidad</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Coordinación jurídica, corporativa y patrimonial de emporios agroindustriales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Negociación y formalización de convenios blindados</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Trazabilidad y contención de crisis corporativas (contingencias)</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Evaluación implacable de avales, garantías y viabilidad de cobranza</li>
                                </ul>
                                
                                <p className="mb-6 font-light leading-relaxed border-t border-gray-800 pt-8 relative z-10 text-lg">Cada decisión que recomienda a la junta directiva empresarial pasa por un filtro estricto:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-light text-gray-300">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Soporte Contractual</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Calidad de la Prueba</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Solvencia Demostrable</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Costo Jurídico vs Costo Real</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Preservación de Vía Judicial</li>
                                </ul>
                            </div>
                        </section>

                        {/* Filosofía Profesional */}
                        <section className="text-center py-12 px-6 border-y border-gray-200 bg-offwhite">
                            <BookOpen className="w-8 h-8 mx-auto text-gold mb-6" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-obsidian mb-6">Principios de Ejercicio Profesional</h2>
                            <blockquote className="text-2xl font-serif text-charcoal italic max-w-3xl mx-auto leading-relaxed mb-10">
                                "La firmeza se acompaña de preparación, seguimiento, absoluta confidencialidad y control documental."
                            </blockquote>
                            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left border-t border-gray-200 pt-10">
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Rigor Técnico</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">Cada posición debe sostenerse en hechos, prueba, norma y estrategia; nunca en la improvisación.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Diagnóstico Honesto</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">Se informa lo favorable y lo adverso. No se confunde la obligación de defensa con una promesa de resultado.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Firmeza con Método</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">La actuación es contundente cuando el asunto lo exige, pero siempre documentada y jurídicamente defendible.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Control Absoluto</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">El cliente recibe claridad inmediata sobre el riesgo, los plazos, la siguiente acción y la evidencia de respaldo.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SocioAlejandro;
