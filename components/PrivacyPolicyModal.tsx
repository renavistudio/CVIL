import React, { useEffect } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    // Cerrar con tecla Escape y bloquear scroll del body
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full max-w-4xl bg-white text-obsidian shadow-2xl rounded-sm border border-gray-200 z-10 max-h-[90vh] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 bg-obsidian text-white flex items-center justify-between border-b border-white/10 shrink-0">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-gold/20 text-gold rounded-sm">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold block">
                                        Cumplimiento Legal LFPDPPP
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-serif text-white">
                                        Aviso de Privacidad Integral
                                    </h2>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Cerrar"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Body Scrollable */}
                        <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-sm text-charcoal/80 leading-relaxed font-light">
                            {/* Intro block */}
                            <div className="bg-offwhite p-5 border-l-4 border-gold text-xs leading-relaxed text-charcoal/90">
                                <p className="font-semibold text-obsidian mb-1">Responsable del Tratamiento de Datos Personales:</p>
                                <p>
                                    <strong>CVIL — Derecho Corporativo</strong>, con domicilio legal ubicado en Calle Suiza 721-Piso 3, Colonia La Luneta, C.P. 59689, Zamora de Hidalgo, Michoacán, México, es responsable del uso, protección y tratamiento de sus datos personales conforme a la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</em>.
                                </p>
                            </div>

                            {/* 1. Datos personales */}
                            <section className="space-y-3">
                                <h3 className="text-base font-bold text-obsidian uppercase tracking-wider flex items-center">
                                    <FileText className="w-4 h-4 mr-2 text-gold" />
                                    1. Datos Personales que Recabamos
                                </h3>
                                <p>
                                    Para la atención de consultas, formulación de diagnósticos preliminares y prestación de servicios jurídicos, podemos recabar las siguientes categorías de datos:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 list-disc text-xs text-charcoal">
                                    <li>Nombre completo e identificación oficial.</li>
                                    <li>Números telefónicos de contacto y WhatsApp.</li>
                                    <li>Correo electrónico corporativo o personal.</li>
                                    <li>Denominación o razón social de su empresa.</li>
                                    <li>Información y antecedentes sobre el asunto legal a consultar.</li>
                                    <li>Datos fiscales estrictamente para facturación (en caso de contratación).</li>
                                </ul>
                            </section>

                            {/* 2. Finalidades */}
                            <section className="space-y-3">
                                <h3 className="text-base font-bold text-obsidian uppercase tracking-wider flex items-center">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-gold" />
                                    2. Finalidades del Tratamiento
                                </h3>
                                <p className="font-medium text-obsidian text-xs">A) Finalidades Primarias (necesarias para el servicio):</p>
                                <ul className="list-disc pl-6 text-xs space-y-1">
                                    <li>Verificar y confirmar su identidad.</li>
                                    <li>Establecer comunicación directa para agendar citas o brindar asesoría jurídica solicitada.</li>
                                    <li>Analizar la viabilidad técnica y jurídica de su caso o requerimiento corporativo.</li>
                                    <li>Elaboración de propuestas de servicios profesionales, contratos y dictámenes.</li>
                                    <li>Representación y defensa jurídica ante instancias judiciales o administrativas competentes.</li>
                                </ul>

                                <p className="font-medium text-obsidian text-xs pt-2">B) Finalidades Secundarias:</p>
                                <p className="text-xs">
                                    No comercializamos, cedemos ni transferimos sus datos a terceros con fines de publicidad masiva ni marketing externo.
                                </p>
                            </section>

                            {/* 3. Secreto profesional */}
                            <section className="space-y-3">
                                <h3 className="text-base font-bold text-obsidian uppercase tracking-wider flex items-center">
                                    <Lock className="w-4 h-4 mr-2 text-gold" />
                                    3. Confidencialidad y Secreto Profesional
                                </h3>
                                <p>
                                    Toda la información proporcionada a <strong>CVIL</strong> desde el primer momento de contacto se encuentra estrictamente protegida por el <strong>Secreto Profesional</strong> de acuerdo con la legislación civil, penal y procesal aplicable en los Estados Unidos Mexicanos. Implementamos medidas de seguridad administrativas, técnicas y físicas para evitar el daño, pérdida, alteración, destrucción o uso no autorizado.
                                </p>
                            </section>

                            {/* 4. Derechos ARCO */}
                            <section className="space-y-3">
                                <h3 className="text-base font-bold text-obsidian uppercase tracking-wider flex items-center">
                                    <Shield className="w-4 h-4 mr-2 text-gold" />
                                    4. Ejercicio de Derechos ARCO
                                </h3>
                                <p>
                                    Usted tiene derecho en cualquier momento de <strong>Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO)</strong> al tratamiento de sus datos personales, así como de revocar el consentimiento otorgado.
                                </p>
                                <p className="text-xs bg-gray-50 p-4 border border-gray-200">
                                    Para ejercer sus derechos ARCO, puede enviar una solicitud por escrito dirigida al departamento de privacidad al correo electrónico: <strong className="text-obsidian">contacto@cvil.mx</strong> o presentarse en nuestras oficinas en Calle Suiza 721-Piso 3, La Luneta, Zamora, Michoacán, con horario de atención de Lunes a Viernes de 09:00 a 18:00 hrs.
                                </p>
                            </section>

                            {/* 5. Modificaciones */}
                            <section className="space-y-2 border-t border-gray-200 pt-4 text-xs text-gray-500">
                                <p>
                                    <strong>5. Actualizaciones:</strong> El presente aviso de privacidad puede sufrir modificaciones derivadas de requerimientos legales o de nuestras propias prácticas operativas. Las actualizaciones estarán disponibles de forma permanente en nuestro portal web oficial.
                                </p>
                                <p>
                                    <em>Última actualización: Agosto 2026.</em>
                                </p>
                            </section>
                        </div>

                        {/* Footer Button */}
                        <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200 flex justify-end shrink-0">
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-obsidian text-white text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300 rounded-sm"
                            >
                                Entendido y Cerrar
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PrivacyPolicyModal;
