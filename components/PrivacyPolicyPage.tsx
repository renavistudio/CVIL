import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Aviso de Privacidad | CVIL';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-obsidian font-sans py-12 px-6 lg:py-24">
            <div className="max-w-3xl mx-auto">
                <a 
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone hover:text-gold transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </a>

                <h1 className="text-4xl lg:text-5xl font-serif font-medium mb-6">
                    Aviso de Privacidad
                </h1>
                
                <div className="prose prose-stone max-w-none text-charcoal/80 font-light leading-relaxed">
                    <p className="font-medium text-obsidian">
                        CVIL Alianza Estratégica en Derecho, con domicilio físico en C. Suiza 721-Piso 3, Col. La Luneta, C.P. 59689, Zamora de Hidalgo, Michoacán, México, es el responsable del tratamiento de sus datos personales, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">1. Datos Personales Recabados</h2>
                    <p>
                        Para las finalidades señaladas en este aviso de privacidad, recabamos sus datos personales de forma directa cuando usted mismo los proporciona a través de los formularios de contacto de este sitio web. Los datos que obtenemos son:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Nombre completo.</li>
                        <li>Número de teléfono (móvil o fijo).</li>
                        <li>Tipo de servicio jurídico que requiere.</li>
                        <li>Descripción detallada del caso.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">2. Finalidades del Tratamiento de los Datos</h2>
                    <p>
                        Sus datos personales serán utilizados para las siguientes finalidades necesarias para el servicio que solicita:
                    </p>
                    <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                        <li>Gestionar y entregar el recurso informativo gratuito solicitado (lead magnet).</li>
                        <li>Agendar, confirmar y dar seguimiento a su cita o llamada de asesoría jurídica.</li>
                        <li>Evaluar y analizar la descripción del caso enviado para brindarle una atención legal personalizada.</li>
                    </ul>
                    <p className="font-medium mt-6 mb-2 text-obsidian">Finalidades secundarias y complementarias:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Análisis estadístico e interno:</strong> Utilizaremos la información de manera agregada y desasociada para generar estadísticas internas sobre los tipos de servicios jurídicos más solicitados, origen de los usuarios y efectividad de nuestra plataforma, con el objetivo de mejorar nuestros servicios legales y la experiencia en el sitio web.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">3. Transferencia de Datos</h2>
                    <p>
                        Le informamos que sus datos personales no serán compartidos, transferidos ni vendidos a terceros ajenos a esta firma legal. El uso de la información es estrictamente interno y confidencial.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">4. Uso de Tecnologías de Rastreo (Cookies y Píxeles)</h2>
                    <p>
                        Le informamos que actualmente este sitio web no utiliza cookies para recabar datos personales de identificación. Sin embargo, en el futuro se prevé la integración de herramientas de análisis y conversión web (como el Píxel de Meta u otras tecnologías de seguimiento publicitario) con el único fin de optimizar el rendimiento de nuestras campañas técnicas y generar las estadísticas mencionadas en el punto 2, sin que esto implique la vulneración o venta de su información de identidad.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">5. Derechos ARCO y Revocación del Consentimiento</h2>
                    <p>
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos se conocen como Derechos ARCO.
                    </p>
                    <p className="mt-4">
                        Para el ejercicio de cualquiera de los derechos ARCO o para revocar el consentimiento que nos ha otorgado, usted deberá presentar una solicitud enviando un correo electrónico a: <strong>contacto@cvilabogados.mx</strong>.
                    </p>
                    <p className="mt-4">La solicitud deberá contener al menos:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Nombre completo del titular y su domicilio o medio para comunicarle la respuesta.</li>
                        <li>Documento oficial que acredite su identidad (INE o Pasaporte).</li>
                        <li>Descripción clara de los datos sobre los que busca ejercer alguno de los derechos ARCO.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">6. Tiempos de Respuesta</h2>
                    <p>
                        Una vez recibida su solicitud completa, CVIL Alianza Estratégica en Derecho le comunicará la determinación adoptada en un plazo máximo de 20 (veinte) días hábiles, contados desde la fecha en que se recibió la solicitud. Si resulta procedente, se hará efectiva la misma dentro de los 15 (quince) días hábiles siguientes a la fecha en que se comunica la respuesta.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">7. Modificaciones al Aviso de Privacidad</h2>
                    <p>
                        Este aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos o de nuestras prácticas de privacidad. Cualquier cambio a este aviso de privacidad será publicado de manera visible en esta misma landing page.
                    </p>

                    <p className="mt-12 text-sm text-stone font-bold uppercase tracking-widest">
                        Última actualización: Agosto de 2026.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
