import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';

const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-obsidian font-sans py-12 px-6 lg:py-24">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between gap-4 mb-12"><a 
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone hover:text-gold transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </a><LanguageSwitch /></div>

                <h1 className="text-4xl lg:text-5xl font-serif font-medium mb-6">
                    Aviso de Privacidad
                </h1>
                
                <div className="prose prose-stone max-w-none text-charcoal/80 font-light leading-relaxed">
                    <p className="font-medium text-obsidian">
                        CVIL Alianza Estratégica en Derecho, con domicilio en C. Suiza 721-Piso 3, Col. La Luneta, C.P. 59689, Zamora de Hidalgo, Michoacán, México, es responsable de los datos personales que recibe para atender solicitudes de información y servicios jurídicos.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">1. Información que puedes proporcionar</h2>
                    <p>
                        El formulario prepara un mensaje con la información que escribes y abre WhatsApp. CVIL recibe ese mensaje cuando lo envías desde la aplicación. También puedes contactar al despacho directamente por teléfono o correo. La información de contacto puede incluir:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Nombre completo.</li>
                        <li>Número de teléfono (móvil o fijo).</li>
                        <li>Tipo de servicio jurídico que requiere.</li>
                        <li>Un resumen del asunto que deseas consultar.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">2. Para qué se utiliza la información</h2>
                    <p>
                        La información que envías permite atender tu solicitud y preparar el contacto con el despacho:
                    </p>
                    <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
                        <li>Responder preguntas sobre los servicios del despacho y la forma de solicitar una consulta.</li>
                        <li>Agendar, confirmar y dar seguimiento a una cita o llamada.</li>
                        <li>Identificar el asunto, los documentos necesarios y el alcance de la consulta solicitada.</li>
                    </ul>
                    <p className="font-medium mt-6 mb-2 text-obsidian">Para el primer contacto:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Comparte sólo lo necesario.</strong> Evita incluir datos sensibles o documentos de otras personas en el resumen inicial. Si es necesario revisar un expediente, el despacho te indicará cómo continuar.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">3. Contacto por WhatsApp y servicios externos</h2>
                    <p>
                        Al abrir WhatsApp, utilizas un servicio externo con sus propios términos y política de privacidad. La información incluida en el mensaje preparado pasa a ese servicio; puedes revisarla antes de enviarla al despacho. La atención jurídica puede requerir comunicar información a autoridades u otras personas cuando corresponda al asunto y a la legislación aplicable.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">4. Recursos utilizados al navegar</h2>
                    <p>
                        El sitio carga tipografías de Google y un mapa de Google Maps para mostrar la ubicación de la oficina. Al cargar estos recursos, los proveedores pueden recibir información técnica de la conexión y aplicar sus propias políticas de privacidad. Los enlaces a otras plataformas se rigen por las condiciones de cada proveedor.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">5. Acceso, corrección y otras solicitudes sobre tus datos</h2>
                    <p>
                        Puedes solicitar acceso a los datos que tiene el despacho, corregir información inexacta, pedir su cancelación u oponerte a determinados usos, en los supuestos que permite la ley. Estos derechos se conocen como ARCO. También puedes solicitar la revocación del consentimiento cuando proceda.
                    </p>
                    <p className="mt-4">
                        Para solicitar el ejercicio de estos derechos o la revocación del consentimiento, escribe a: <strong>contacto@cvilabogados.mx</strong>.
                    </p>
                    <p className="mt-4">Incluye en tu solicitud:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Tu nombre y un medio para recibir la respuesta.</li>
                        <li>Documentación para acreditar tu identidad o, en su caso, la representación de otra persona.</li>
                        <li>El derecho que deseas ejercer, los datos relacionados y la información que ayude a localizarlos.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">6. Atención de las solicitudes</h2>
                    <p>
                        La Ley Federal de Protección de Datos Personales en Posesión de los Particulares establece un plazo máximo de veinte días hábiles, desde la recepción de una solicitud ARCO, para comunicar la determinación. Si procede, debe hacerse efectiva dentro de los quince días hábiles siguientes a esa respuesta. Los plazos pueden ampliarse una vez por un periodo igual cuando las circunstancias lo justifiquen. Para entregar datos debe acreditarse la identidad.
                    </p>

                    <h2 className="text-2xl font-medium text-obsidian mt-10 mb-4 font-serif">7. Actualizaciones de este aviso</h2>
                    <p>
                        Las modificaciones a este aviso se publicarán en esta página. La fecha al final permite identificar la versión disponible. Si cambia la forma de contacto o el tratamiento de la información, el aviso deberá reflejarlo.
                    </p>

                    <p className="mt-12 text-sm text-stone font-bold uppercase tracking-widest">
                        Última actualización: 13 de noviembre de 2026.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;

