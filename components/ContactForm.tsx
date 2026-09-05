import React, { useState } from 'react';
import { Phone, MapPin, AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';

interface ContactFormProps {
    onOpenPrivacy?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onOpenPrivacy }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [matter, setMatter] = useState('Contratos Mercantiles y Acuerdos Comerciales');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState<{ name?: string; phone?: string;  }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedSuccess, setSubmittedSuccess] = useState(false);

    const [captchaA, setCaptchaA] = useState(0);
    const [captchaB, setCaptchaB] = useState(0);
    const [captchaAnswer, setCaptchaAnswer] = useState('');

    React.useEffect(() => {
        setCaptchaA(Math.floor(Math.random() * 9) + 1);
        setCaptchaB(Math.floor(Math.random() * 9) + 1);
    }, []);

    const validate = () => {
        const newErrors: { name?: string; phone?: string } = {};

        const nameTrimmed = name.trim();
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\.\-]{3,60}$/;

        if (!nameTrimmed) {
            newErrors.name = 'Por favor ingrese su nombre completo.';
        } else if (nameTrimmed.length < 3) {
            newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
        } else if (!nameRegex.test(nameTrimmed)) {
            newErrors.name = 'Ingrese un nombre válido (solo letras, sin números).';
        }

        const cleanPhone = phone.replace(/\D/g, '');
        const invalidPhones = ['0000000000', '1111111111', '1234567890', '9999999999', '8888888888', '5555555555', '1231231234'];

        if (!phone.trim()) {
            newErrors.phone = 'Por favor ingrese su número de teléfono o WhatsApp.';
        } else if (cleanPhone.length < 10) {
            newErrors.phone = 'Ingrese un número válido a 10 dígitos (ej. 443 123 4567).';
        } else if (cleanPhone.length > 13) {
            newErrors.phone = 'El número es demasiado largo.';
        } else if (invalidPhones.includes(cleanPhone) || /^(\d)\1{9}$/.test(cleanPhone)) {
            newErrors.phone = 'El número ingresado no parece ser un teléfono real.';
        }

        if (parseInt(captchaAnswer) !== (captchaA + captchaB)) {
            newErrors.captcha = 'La respuesta de seguridad es incorrecta.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        const waMessage = `Hola, mi nombre es ${name.trim()}. Vi su página web y los contacto para solicitar una consulta sobre *${matter}*.\n\nTeléfono de contacto: ${phone.trim()}${message.trim() ? `\nResumen del caso: ${message.trim()}` : ''}`;
        const waUrl = `https://wa.me/524432735543?text=${encodeURIComponent(waMessage)}`;

        setTimeout(() => {
            window.open(waUrl, '_blank');
            setIsSubmitting(false);
            setSubmittedSuccess(true);
            setCaptchaAnswer('');
            setCaptchaA(Math.floor(Math.random() * 9) + 1);
            setCaptchaB(Math.floor(Math.random() * 9) + 1);
            setTimeout(() => setSubmittedSuccess(false), 6000);
        }, 400);
    };

    return (
        <section id="contact" className="py-8 lg:py-12 bg-white border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-stretch">

                    {/* Info Side with Background Image */}
                    <div className="lg:col-span-5 relative bg-obsidian text-white p-10 lg:p-16 overflow-hidden flex flex-col justify-between min-h-[500px]">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img width="800" height="600"
                                src="images/office/IMG_0559.webp"
                                alt="Instalaciones y pasillo de las oficinas corporativas CVIL en Zamora"
                                className="w-full h-full object-cover opacity-30"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 to-obsidian/90"></div>
                        </div>

                        <div className="relative z-10">
                            <span className="block text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6">
                                Atención Jurídica
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8">
                                Platiquemos sobre su caso.
                            </h2>
                            <p className="text-gray-300 font-light leading-relaxed mb-12 border-l-2 border-gold pl-6 text-sm">
                                Todo lo que nos comparta es estrictamente reservado.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-8 mt-auto">
                            <div className="flex items-start space-x-6">
                                <Phone className="w-5 h-5 text-gold mt-1" />
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Línea Directa & Urgencias 24/7</p>
                                    <a href="tel:+524432735543" className="text-xl font-serif text-white hover:text-gold transition-colors block mb-1">
                                        +52 (443) 273-5543
                                    </a>
                                    <p className="text-[10px] text-gray-400">Atención profesional inmediata.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <MapPin className="w-5 h-5 text-gold mt-1" />
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Sede Corporativa</p>
                                    <p className="text-sm text-gray-300 font-light">
                                        C. Suiza 721-Piso 3, La Luneta<br />
                                        59689 Zamora de Hidalgo, Michoacán.
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
                                    <label htmlFor="service" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                        Nombre Completo <span className="text-gold">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                                        }}
                                        className={`w-full bg-white border ${errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-obsidian'} px-4 py-3 text-obsidian text-sm focus:outline-none transition-colors rounded-sm shadow-sm`}
                                        placeholder="Ej. Lic. Roberto Gómez"
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
                                    <label htmlFor="service" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                        Teléfono / WhatsApp <span className="text-gold">*</span>
                                    </label>
                                    <input
                                        name="phone"
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
                                    Servicio o Necesidad de su Empresa
                                </label>
                                <div className="relative">
                                    <select id="service"
                                        value={matter}
                                        onChange={(e) => setMatter(e.target.value)}
                                        className="appearance-none w-full bg-white border border-gray-300 px-4 py-3 pr-10 text-obsidian text-sm focus:outline-none focus:border-obsidian transition-colors rounded-sm shadow-sm"
                                    >
                                        <option value="Contratos Mercantiles y Acuerdos Comerciales">Contratos Mercantiles & Acuerdos Comerciales</option>
                                        <option value="Constitución de Empresas, Socios y Asambleas">Constitución de Empresas, Socios & Asambleas</option>
                                        <option value="Cobranza Judicial y Recuperación de Cartera">Cobranza Judicial & Recuperación de Cartera</option>
                                        <option value="Cumplimiento Laboral y Contratos de Trabajo">Cumplimiento Laboral & Contratos de Trabajo</option>
                                        <option value="Litigio Mercantil y Controversias de Negocios">Litigio Mercantil & Controversias de Negocios</option>
                                        <option value="Registro de Marca (IMPI) y Propiedad Intelectual">Registro de Marca (IMPI) & Propiedad Intelectual</option>
                                        <option value="Fraudes, Delitos Patrimoniales y Penal Empresarial">Fraudes, Delitos Patrimoniales & Penal Empresarial</option>
                                        <option value="Iguala Jurídica (Abogado de Cabecera para Empresas)">Iguala Jurídica (Abogado de Cabecera para Empresas)</option>
                                        <option value="Otra Consulta Corporativa / Empresarial">Otra Consulta Corporativa / Empresarial</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Optional message */}
                            <div>
                                <label htmlFor="service" className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                                    Breve descripción de su consulta <span className="text-gray-400 font-normal">(Opcional)</span>
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={3}
                                    className="w-full bg-white border border-gray-300 px-4 py-3 text-obsidian text-sm focus:outline-none focus:border-obsidian transition-colors rounded-sm shadow-sm resize-none"
                                    placeholder="Comparta de forma general la situación para canalizarlo con el socio especialista..."
                                />
                            </div>



                            {submittedSuccess && (
                                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm flex items-center space-x-2 animate-fade-in">
                                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Solicitud recibida correctamente. Se ha abierto la conversación directa para brindarle atención.</span>
                                </div>
                            )}

                            <div className="flex flex-col w-full">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-12 bg-gold hover:bg-obsidian text-white text-xs font-bold uppercase tracking-widest py-5 transition-all duration-300 flex items-center justify-center space-x-4 shadow-md hover:shadow-xl rounded-sm"
                                >
                                    <span>{isSubmitting ? 'Conectando con el área legal...' : 'SOLICITAR CONSULTA'}</span>
                                    {!isSubmitting && <Phone className="w-3.5 h-3.5" />}
                                </button>

                                <p className="text-[11px] text-gray-500 mt-4 text-center leading-relaxed">
                                    Al enviar este formulario, usted confirma que sus datos serán tratados conforme a nuestro{' '}
                                    <a href="/aviso-de-privacidad" className="text-obsidian font-semibold underline hover:text-gold transition-colors inline">Aviso de Privacidad</a>.
                                    <br />
                                    <span className="text-gray-400">🔒 Información amparada por Secreto Profesional.</span>
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