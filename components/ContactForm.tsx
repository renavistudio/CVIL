import React, { useState } from 'react';
import { Phone, MapPin, AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';

interface ContactFormProps {
    onOpenPrivacy?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onOpenPrivacy }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [matter, setMatter] = useState('Contratos y acuerdos comerciales');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState<{ name?: string; phone?: string;  }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedSuccess, setSubmittedSuccess] = useState(false);
    const [honeypot, setHoneypot] = useState('');

    const validate = () => {
        const newErrors: { name?: string; phone?: string } = {};

        const nameTrimmed = name.trim();
        const nameRegex = /^[\p{L}\p{M}\s.'’\-]{3,60}$/u;

        if (!nameTrimmed) {
            newErrors.name = 'Escribe tu nombre completo.';
        } else if (nameTrimmed.length < 3) {
            newErrors.name = 'Escribe al menos 3 caracteres en el nombre.';
        } else if (!nameRegex.test(nameTrimmed)) {
            newErrors.name = 'Revisa el nombre: usa letras y la puntuación que corresponda.';
        }

        const cleanPhone = phone.replace(/\D/g, '');
        const invalidPhones = ['0000000000', '1111111111', '1234567890', '9999999999', '8888888888', '5555555555', '1231231234'];

        if (!phone.trim()) {
            newErrors.phone = 'Escribe un teléfono de contacto.';
        } else if (cleanPhone.length < 10) {
            newErrors.phone = 'Revisa el teléfono e incluye al menos 10 dígitos.';
        } else if (cleanPhone.length > 13) {
            newErrors.phone = 'Revisa la longitud del teléfono.';
        } else if (invalidPhones.includes(cleanPhone) || /^(\d)\1{9}$/.test(cleanPhone)) {
            newErrors.phone = 'Revisa el número de contacto.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Si el honeypot fue llenado, es un bot de spam: abortar en silencio
        if (honeypot.trim() !== '') {
            return;
        }

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        const english = window.location.pathname.startsWith('/en');
        const selectedMatter = english ? (document.getElementById('service') as HTMLSelectElement)?.selectedOptions[0]?.text || matter : matter;
        const waMessage = english
            ? `Hello, my name is ${name.trim()}. I would like to schedule a consultation about *${selectedMatter}*.\n\nContact phone: ${phone.trim()}${message.trim() ? `\nCase summary: ${message.trim()}` : ''}`
            : `Hola, mi nombre es ${name.trim()}. Vi su página web y los contacto para solicitar una consulta sobre *${matter}*.\n\nTeléfono de contacto: ${phone.trim()}${message.trim() ? `\nResumen del caso: ${message.trim()}` : ''}`;
        const waUrl = `https://wa.me/524432735543?text=${encodeURIComponent(waMessage)}`;

        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsSubmitting(false);
        setSubmittedSuccess(true);
        setTimeout(() => setSubmittedSuccess(false), 6000);
    };

    return (
        <section id="contact" className="py-8 lg:py-12 bg-white border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-stretch">

                    {/* Info Side with Background Image */}
                    <div className="lg:col-span-5 relative bg-obsidian text-white p-10 lg:p-16 overflow-hidden flex flex-col justify-between min-h-[500px]">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img loading="lazy" decoding="async" width="800" height="600"
                                src="/images/office/IMG_0559.webp"
                                alt="Pasillo de las oficinas de CVIL"
                                className="w-full h-full object-cover opacity-30"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 to-obsidian/90"></div>
                        </div>

                        <div className="relative z-10">
                            <span className="block text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6">
                                Contacto
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
                                Cuéntanos qué necesitas resolver.
                            </h2>
                            <p className="text-gray-300 font-light leading-relaxed mb-12 border-l-2 border-gold pl-6 text-sm">
                                Si recibiste una notificación o tienes una fecha próxima, menciónala al contactarnos.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-8 mt-auto">
                            <div className="flex items-start space-x-6">
                                <Phone className="w-5 h-5 text-gold mt-1" />
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Llamadas / WhatsApp</p>
                                    <a href="tel:+524432735543" className="text-xl font-serif text-white hover:text-gold transition-colors block mb-1">
                                        443 273 5543
                                    </a>
                                    <a href="tel:+523511277317" className="text-xl font-serif text-white hover:text-gold transition-colors block mb-1">351 127 7317</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <MapPin className="w-5 h-5 text-gold mt-1" />
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Oficina en Zamora</p>
                                    <p className="text-sm text-gray-300 font-light">
                                        C. Suiza 721-Piso 3, La Luneta,<br />
                                        59689 Zamora de Hidalgo, Mich.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7 bg-offwhite p-10 lg:p-16 border border-gray-100 flex flex-col justify-center">
                        <form onSubmit={handleSubmit} noValidate className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name field */}
                                <div className="group relative">
                                    <label htmlFor="contact-name" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                        Nombre completo <span className="text-gold">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        autoComplete="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                                        }}
                                        className={`w-full bg-white border ${errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-obsidian'} px-4 py-3 text-obsidian text-sm focus:outline-none transition-colors rounded-sm shadow-sm`}
                                        placeholder="Tu nombre y apellidos"
                                    />
                                    {errors.name && (
                                        <p className="flex items-center text-xs text-red-600 font-medium mt-1.5 animate-fade-in">
                                            <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Phone field */}
                                <div className="group relative">
                                    <label htmlFor="contact-phone" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                        Teléfono / WhatsApp <span className="text-gold">*</span>
                                    </label>
                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        autoComplete="tel"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                                        }}
                                        className={`w-full bg-white border ${errors.phone ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-obsidian'} px-4 py-3 text-obsidian text-sm focus:outline-none transition-colors rounded-sm shadow-sm`}
                                        placeholder="Ej. 443 273 5543"
                                    />
                                    {errors.phone && (
                                        <p className="flex items-center text-xs text-red-600 font-medium mt-1.5 animate-fade-in">
                                            <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Matter dropdown */}
                            <div>
                                <label htmlFor="service" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                    ¿Sobre qué necesitas consultar?
                                </label>
                                <div className="relative">
                                    <select id="service"
                                        value={matter}
                                        onChange={(e) => setMatter(e.target.value)}
                                        className="appearance-none w-full bg-white border border-gray-300 px-4 py-3 pr-10 text-obsidian text-sm focus:outline-none focus:border-obsidian transition-colors rounded-sm shadow-sm"
                                    >
                                        <option value="Contratos y acuerdos comerciales">Contratos y acuerdos comerciales</option>
                                        <option value="Empresa, socios y asambleas">Empresa, socios y asambleas</option>
                                        <option value="Pago de un adeudo o pagaré">Pago de un adeudo o pagaré</option>
                                        <option value="Relaciones laborales de mi empresa">Relaciones laborales de mi empresa</option>
                                        <option value="Conflicto comercial">Conflicto comercial</option>
                                        <option value="Registro de marca o propiedad intelectual">Registro de marca o propiedad intelectual</option>
                                        <option value="Investigación o asunto penal">Investigación o asunto penal</option>
                                        <option value="Asesoría continua para mi empresa">Asesoría continua para mi empresa</option>
                                        <option value="Otro asunto">Otro asunto</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Optional message */}
                            <div>
                                <label htmlFor="contact-message" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                    ¿Qué está pasando? <span className="text-gray-400 font-normal">(opcional)</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={3}
                                    className="w-full bg-white border border-gray-300 px-4 py-3 text-obsidian text-sm focus:outline-none focus:border-obsidian transition-colors rounded-sm shadow-sm resize-none"
                                    placeholder="Escribe un resumen breve. Por ahora, evita datos o documentos sensibles."
                                />
                            </div>

                            {/* Campo trampa invisible para bots (Honeypot antispam) */}
                            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>


                            {submittedSuccess && (
                                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm flex items-center space-x-2 animate-fade-in">
                                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Tu mensaje está preparado. Envíalo en WhatsApp para que podamos leerlo.</span>
                                </div>
                            )}

                            <div className="flex flex-col w-full">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-12 bg-gold hover:bg-obsidian text-white text-xs font-bold uppercase tracking-widest py-5 transition-all duration-300 flex items-center justify-center space-x-4 shadow-md hover:shadow-xl rounded-sm"
                                >
                                    <span>{isSubmitting ? 'Preparando mensaje...' : 'Continuar en WhatsApp'}</span>
                                    {!isSubmitting && <Phone className="w-3.5 h-3.5" />}
                                </button>

                                <p className="text-[11px] text-gray-500 mt-4 text-center leading-relaxed">
                                    Al continuar, se abrirá WhatsApp con los datos que escribiste. Consulta nuestro{' '}
                                    <a href="/aviso-de-privacidad" className="text-obsidian font-semibold underline hover:text-gold transition-colors inline">Aviso de Privacidad</a>.
                                    <br />
                                    <span className="text-gray-400">En WhatsApp podrás revisar el mensaje antes de enviarlo.</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
