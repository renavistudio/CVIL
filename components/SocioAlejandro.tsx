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
                    <a href="/#partners" onClick={(e) => { if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) { e.preventDefault(); onClose(); } }} className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gold hover:text-obsidian transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Regresar
                    </a>

                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-[3/4] overflow-hidden shadow-sm rounded-sm">
                                <img width="800" height="600" src="/images/dsc/DSC_6058_opt.webp" alt="Lic. Alejandro Arriaga Bastida" className="w-full h-full object-cover object-[center_top]" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Lic. Alejandro Arriaga Bastida</h1>
                            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-6">Socio fundador · Empresas, contratos y litigio</p>
                            <div className="prose prose-lg text-charcoal/80 font-light">
                                <p className="mb-4">Alejandro Arriaga Bastida es socio fundador de CVIL. Asesora a empresas y personas en contratos, acuerdos y controversias civiles y mercantiles. Su trabajo combina la negociación con la representación ante tribunales.</p>
                                <p className="mb-4">Cuenta con experiencia en la coordinación jurídica de empresas de los sectores agroindustrial y comercial. Atiende decisiones sobre patrimonio, cobro de adeudos y cumplimiento de obligaciones, además de asuntos familiares.</p>
                                <p>Antes de recomendar una acción, revisa los documentos, las pruebas y las posibilidades de llevarla a cabo. La consulta busca que el cliente conozca los riesgos, los costos que deben considerarse y los pasos siguientes.</p>
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
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Justicia Familiar</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Poder Judicial del Estado de Guanajuato</p>
                                    <p className="text-sm text-charcoal/70">Formación de posgrado en procedimientos y asuntos de derecho familiar.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Maestría en Juicios Orales</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Universidad UNIVER</p>
                                    <p className="text-sm text-charcoal/70">Formación en preparación de audiencias, presentación de pruebas y argumentación oral.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Especialidad en Estrategia Procesal</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Universidad UNIVER</p>
                                    <p className="text-sm text-charcoal/70">Estudios en análisis del caso y preparación de actuaciones dentro de un procedimiento judicial.</p>
                                </div>
                                <div className="bg-offwhite p-6 border border-gray-100 hover:border-gold/50 transition-colors">
                                    <h3 className="font-bold text-lg mb-1 text-obsidian">Licenciatura en Derecho</h3>
                                    <p className="text-xs text-gold font-semibold mb-3">Cédula Federal: 11122194</p>
                                    <p className="text-sm text-charcoal/70">Formación profesional en Derecho. Cédula federal 11122194.</p>
                                </div>
                            </div>
                        </section>

                        {/* Áreas de Práctica (Como los bullets de Mario) */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Scale className="w-6 h-6 mr-3 text-gold" />
                                Asuntos en los que interviene
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-charcoal/80 list-disc ml-4">
                                <li>Organización y acuerdos de empresas</li>
                                <li>Redacción y revisión de contratos</li>
                                <li>Controversias civiles y mercantiles</li>
                                <li>Representación en juicio y audiencias</li>
                                <li>Asuntos de derecho familiar</li>
                                <li>Juicios de amparo</li>
                                <li>Cobro de adeudos</li>
                                <li>Documentación de garantías</li>
                                <li>Negociación de acuerdos</li>
                                <li>Cumplimiento de obligaciones</li>
                                <li>Revisión de pagarés y avales</li>
                                <li>Asuntos relacionados con el patrimonio</li>
                            </ul>
                        </section>

                        {/* Experiencia Profesional */}
                        <section>
                            <h2 className="text-2xl font-serif text-obsidian mb-8 flex items-center border-b border-gray-200 pb-4">
                                <Briefcase className="w-6 h-6 mr-3 text-gold" />
                                Experiencia y forma de trabajo
                            </h2>
                            <div className="bg-obsidian text-white p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                                <p className="mb-6 font-light leading-relaxed relative z-10 text-lg">Su trabajo con empresas incluye la revisión de operaciones y documentos, la negociación de acuerdos y el seguimiento de controversias. Entre los asuntos que ha atendido se encuentran:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-sm font-light text-gray-300 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Representación ante juzgados y tribunales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Preparación de demandas, contestaciones e impugnaciones</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Coordinación de asuntos jurídicos de empresas agroindustriales</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Negociación y documentación de convenios</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Seguimiento de conflictos que afectan la operación de una empresa</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Revisión de garantías y posibilidades de recuperación de un adeudo</li>
                                </ul>
                                
                                <p className="mb-6 font-light leading-relaxed border-t border-gray-800 pt-8 relative z-10 text-lg">Para recomendar cómo avanzar, considera:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-light text-gray-300">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Lo que establece el contrato</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Las pruebas disponibles</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Las posibilidades reales de cobro</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>El costo y el alcance del servicio</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 shrink-0"></span>Las vías de negociación y reclamación</li>
                                </ul>
                            </div>
                        </section>

                        {/* Filosofía Profesional */}
                        <section className="text-center py-12 px-6 border-y border-gray-200 bg-offwhite">
                            <BookOpen className="w-8 h-8 mx-auto text-gold mb-6" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-obsidian mb-6">Qué puedes esperar de la atención</h2>
                            <blockquote className="text-2xl font-serif text-charcoal italic max-w-3xl mx-auto leading-relaxed mb-10">
                                Una recomendación debe tener sentido para el asunto y para la situación del cliente. Por eso, la revisión de los documentos precede a cualquier propuesta de actuación.
                            </blockquote>
                            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left border-t border-gray-200 pt-10">
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Revisión de documentos</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">Los contratos, comunicaciones y demás pruebas permiten conocer qué puede sostenerse en una negociación o un juicio.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Explicación de riesgos</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">La consulta debe dejar claros los puntos favorables, las dificultades y la información que aún hace falta.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Alcance acordado</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">Antes de iniciar el trabajo, se define qué actuaciones comprende el servicio y qué participación requiere del cliente.</p>
                                </div>
                                <div>
                                    <h3 className="text-gold font-bold mb-2 uppercase text-xs tracking-wider">Seguimiento del asunto</h3>
                                    <p className="text-charcoal/80 text-sm leading-relaxed">El seguimiento permite conocer las actuaciones realizadas, los documentos pendientes y el siguiente paso.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <nav aria-label="Otros socios" className="max-w-[1000px] mx-auto px-6 lg:px-12 mt-12 text-sm text-gold">
                    <a href="/socios/mario-cervantes" className="underline">Conocer a Mario Enrique Cervantes Vieyra</a>
                </nav>
            </main>
            <Footer />
        </div>
    );
};

export default SocioAlejandro;

