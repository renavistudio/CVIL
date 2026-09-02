import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../types';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

const cases: CaseStudy[] = [
    {
        id: 1,
        category: "Derecho Societario",
        title: "Exclusión de socio minoritario y toma de control",
        result: "Control Operativo Recuperado",
        stat: "Asamblea validada",
        description: "Un socio bloqueaba la toma de decisiones y el reparto de dividendos. Ejecutamos una asamblea extraordinaria, ajustamos los estatutos y logramos la exclusión legal pagando el valor contable estricto, destrabando la operación en menos de 4 meses.",
        image: "images/cases/caso_1_societario_v3.webp"
    },
    {
        id: 2,
        category: "Litigio Mercantil",
        title: "Levantamiento urgente de embargo en cuentas bancarias",
        result: "Cuentas Liberadas",
        stat: "Garantía sustituida en 72h",
        description: "Un proveedor demandó por la vía ejecutiva mercantil y congeló las cuentas operativas del cliente. Promovimos un incidente de sustitución de garantía, liberando los fondos en 72 horas para asegurar el pago de nómina.",
        image: "images/cases/caso_2_mercantil_v3.webp"
    },
    {
        id: 3,
        category: "Laboral Patronal",
        title: "Rescisión de contrato a Director por conflicto de interés",
        result: "Cero Contingencia Laboral",
        stat: "Demanda evitada",
        description: "El directivo desvió recursos a empresas personales. Instrumentamos las actas administrativas ante notario y ejecutamos la rescisión sin responsabilidad patronal, evitando un juicio por despido injustificado de alto impacto.",
        image: "images/cases/caso_3_laboral_v3.webp"
    },
    {
        id: 4,
        category: "Propiedad Intelectual",
        title: "Recuperación de marca registrada por ex-empleado",
        result: "Titularidad Restituida",
        stat: "Juicio de Nulidad ganado",
        description: "Un ex-gerente registró a su nombre el logotipo y nombre comercial de la empresa. Presentamos un juicio de nulidad ante el IMPI demostrando mala fe y uso previo, recuperando así el activo intangible de la compañía.",
        image: "images/cases/caso_4_propiedad_v3.webp"
    },
];

const CaseSuccess: React.FC = () => {
    return (
        <section id="cases" className="pt-8 lg:pt-12 pb-6 lg:pb-8 bg-offwhite">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-6 lg:mb-10 border-b border-gray-200 pb-8">
                    <div>
                        <h2 className="text-4xl font-serif text-obsidian mb-2">Expedientes Recientes</h2>
                        <p className="text-charcoal/60 text-sm">Algunos de nuestros casos recientes.</p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((c, idx) => {
                        return (
                            <motion.div
                                key={c.id}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="opacity-0 group bg-white border border-gray-200 hover:border-obsidian hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                {/* Image Header */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={c.image}
                                        alt={c.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 bg-black/50 px-2 py-1 backdrop-blur-md">
                                            {c.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 mb-4">
                                        <h3 className="text-xl md:text-2xl font-serif text-obsidian group-hover:translate-x-1 transition-transform duration-300 leading-tight md:max-w-[70%]">
                                            {c.title}
                                        </h3>
                                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded flex items-center gap-1 border border-green-100 self-start md:self-auto whitespace-nowrap">
                                            <CheckCircle2 className="w-3 h-3 shrink-0" /> {c.result}
                                        </span>
                                    </div>

                                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6 border-l-2 border-gray-100 pl-4 group-hover:border-obsidian transition-colors flex-1">
                                        {c.description}
                                    </p>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-stone italic max-w-2xl mx-auto">
                        * En CVIL la confidencialidad es absoluta. Los casos presentados ilustran resoluciones reales omitiendo datos sensibles.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CaseSuccess;