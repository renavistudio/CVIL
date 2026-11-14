import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../types';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

const cases: CaseStudy[] = [
    {
        id: 1,
        category: "Socios y empresa",
        title: "Un desacuerdo que detenía las decisiones",
        result: "Operación restablecida",
        stat: "Asamblea validada",
        description: "Un conflicto entre socios impedía tomar decisiones y distribuir utilidades. El trabajo incluyó una asamblea y la revisión de los documentos de la sociedad para resolver la participación del socio involucrado. La empresa recuperó la continuidad de su operación.",
        image: "/images/cases/caso_1_societario_v3.webp"
    },
    {
        id: 2,
        category: "Adeudos y litigios",
        title: "Cuentas bancarias necesarias para pagar la nómina",
        result: "Fondos disponibles",
        stat: "Garantía sustituida en 72h",
        description: "Una demanda de un proveedor derivó en el embargo de las cuentas operativas de la empresa. Se tramitó la sustitución de la garantía y, en ese expediente, los fondos quedaron disponibles en 72 horas para atender el pago de nómina.",
        image: "/images/cases/caso_2_mercantil_v3.webp"
    },
    {
        id: 3,
        category: "Laboral para empresas",
        title: "La separación de un directivo por conflicto de interés",
        result: "Terminación documentada",
        stat: "Expediente laboral",
        description: "La empresa detectó que un directivo destinaba recursos a negocios personales. Se documentaron los hechos y se prepararon las actuaciones para terminar la relación laboral. En este asunto, la separación se atendió sin llegar a un juicio por despido.",
        image: "/images/cases/caso_3_laboral_v3.webp"
    },
    {
        id: 4,
        category: "Marcas",
        title: "Una marca registrada por un excolaborador",
        result: "Marca recuperada",
        stat: "Procedimiento ante el IMPI",
        description: "Un exgerente había registrado a su nombre la marca que utilizaba la empresa. Se presentó un procedimiento de nulidad ante el IMPI con pruebas del uso previo y de las circunstancias del registro. En ese caso se recuperó la titularidad de la marca.",
        image: "/images/cases/caso_4_propiedad_v3.webp"
    },
];

const CaseSuccess: React.FC = () => {
    return (
        <section id="cases" className="pt-8 lg:pt-12 pb-6 lg:pb-8 bg-offwhite">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-6 lg:mb-10 border-b border-gray-200 pb-8">
                    <div>
                        <h2 className="text-4xl font-serif text-obsidian mb-2">Asuntos que hemos atendido</h2>
                        <p className="text-charcoal/60 text-sm">Resúmenes de casos con identidades reservadas.</p>
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
                                className="group bg-white border border-gray-200 hover:border-obsidian hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                {/* Image Header */}
                                <div className="h-48 overflow-hidden relative">
                                    <img width="800" height="600"
                                        src={c.image}
                                        alt={c.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                        Los resultados corresponden a asuntos concretos. Omitimos los datos de las partes por privacidad; cada nuevo caso depende de sus hechos y documentos.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CaseSuccess;
