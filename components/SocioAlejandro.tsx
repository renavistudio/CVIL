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
                                <img src="images/dsc/DSC_6058_opt.webp" alt="Lic. Alejandro Arriaga Bastida" className="w-full h-full object-cover object-[center_top]" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Lic. Alejandro Arriaga Bastida</h1>
                            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-6">Abogado Litigante | Asesoría Jurídica Empresarial | Estrategia Procesal</p>
                            <div className="prose prose-lg text-charcoal/80 font-light">
                                <p className="mb-4">Licenciado en Derecho con formación de posgrado en Justicia Familiar, Juicios Orales y Derecho Penal. Su práctica integra litigación estratégica, representación de personas físicas y morales, asesoría empresarial, negociación y prevención de contingencias.</p>
                                <p className="mb-4">Interviene en asuntos familiares, penales, civiles, mercantiles, corporativos y constitucionales, con especial atención a la preparación del expediente, la calidad de la prueba y la construcción de rutas jurídicas viables. Ha desarrollado experiencia ante autoridades jurisdiccionales y administrativas, así como en la coordinación jurídica de asuntos empresariales, particularmente en los sectores agroindustrial y comercial.</p>
                                <p>Su estilo profesional es directo, técnico y reservado. Parte de diagnósticos honestos, distingue con claridad entre lo jurídicamente posible y lo inviable, evita prometer resultados que dependen de una autoridad y mantiene al cliente informado sobre los riesgos, la estrategia, los plazos y la siguiente decisión.</p>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                                <div className="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-obsidian mb-2">Maestría en Justicia Familiar</h3>
                                    <p className="text-charcoal/80 mb-1">Poder Judicial del Estado de Guanajuato</p>
                                    <p className="text-stone">2021 – 2023</p>
                                </div>
                                <div className="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-obsidian mb-2">Maestría en Juicios Orales</h3>
                                    <p className="text-charcoal/80 mb-1">Universidad UNIVER</p>
                                    <p className="text-stone">2016 – 2018</p>
                                </div>
                                <div className="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-obsidian mb-2">Especialidad en Derecho Penal</h3>
                                    <p className="text-charcoal/80 mb-1">Universidad UNIVER</p>
                                    <p className="text-stone">2014 – 2015</p>
                                </div>
                                <div className="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-obsidian mb-2">Licenciatura en Derecho</h3>
                                    <p className="text-charcoal/80 mb-1">Cédula Federal: 11122194</p>
                                </div>
                            </div>
                        </section>

                        {/* Áreas de Especialidad */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Scale className="w-6 h-6 mr-3 text-gold" />
                                Áreas de Práctica
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-charcoal/80 list-disc ml-4">
                                <li>Derecho Corporativo y Empresarial</li>
                                <li>Litigio Civil y Mercantil</li>
                                <li>Derecho Penal y Juicios Orales</li>
                                <li>Derecho Familiar</li>
                                <li>Juicio de Amparo</li>
                                <li>Negociación y Cobranza</li>
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
                                <p className="mb-6 font-light leading-relaxed relative z-10 text-lg">Su intervención empresarial se desarrolla desde una perspectiva preventiva y de solución, con amplia experiencia en:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-gray-300 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Representación y defensa jurídica (órganos jurisdiccionales)</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Diseño de estrategias procesales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Coordinación jurídica de asuntos corporativos</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Negociación y convenios</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Revisión y fortalecimiento de contratos</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Cobranza, conciliación y evaluación de avales</li>
                                </ul>
                            </div>
                        </section>

                        {/* Filosofía Profesional */}
                        <section className="text-center py-12 px-6 border-y border-gray-200 bg-offwhite">
                            <BookOpen className="w-8 h-8 mx-auto text-gold mb-6" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-obsidian mb-6">Principios de Ejercicio Profesional</h2>
                            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-sm">Rigor Técnico</h3>
                                    <p className="text-charcoal/80 text-sm">Cada posición debe sostenerse en hechos, prueba, norma y estrategia; no en improvisación.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-sm">Diagnóstico Honesto</h3>
                                    <p className="text-charcoal/80 text-sm">Se informa lo favorable y lo adverso. No se confunde la obligación de defensa con una promesa de resultado.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-sm">Firmeza con Método</h3>
                                    <p className="text-charcoal/80 text-sm">La actuación es contundente cuando el asunto lo exige, pero siempre documentada, proporcional y jurídicamente defendible.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-sm">Tranquilidad a través del Control</h3>
                                    <p className="text-charcoal/80 text-sm">El cliente recibe claridad sobre el riesgo, los plazos, la siguiente acción y la evidencia que respalda cada decisión.</p>
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
