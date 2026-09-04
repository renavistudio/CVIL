import React, { useState } from 'react';
import { MapPin, ArrowRight, Navigation, Copy, Check } from 'lucide-react';

const Location: React.FC = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [copied, setCopied] = useState(false);

    const addressText = "C. Suiza 721-Piso 3, La Luneta, 59689 Zamora de Hidalgo, Mich.";
    const googleMapsUrl = "https://maps.google.com/?q=C.+Suiza+721-Piso+3,+La+Luneta,+59689+Zamora+de+Hidalgo,+Mich.";
    const wazeUrl = "https://waze.com/ul?q=C.%20Suiza%20721%20La%20Luneta%20Zamora%20Michoacan&navigate=yes";

    const handleCopy = () => {
        navigator.clipboard.writeText(addressText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="location" className="py-8 lg:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.webp')] opacity-10 pointer-events-none z-0"></div>

            <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    {/* Left: Info */}
                    <div className="w-full lg:w-5/12 flex flex-col pt-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-obsidian"></div>
                            <span className="text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase">
                                Nuestras Instalaciones
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-serif text-obsidian leading-[1.05] tracking-tight mb-6">
                            Sede Central <br />
                            <span className="italic font-light text-stone">Zamora, Michoacán.</span>
                        </h2>

                        <p className="text-charcoal/70 text-sm md:text-base font-light leading-relaxed mb-8">
                            Ubicación estratégica con infraestructura corporativa para sesiones confidenciales, audiencias y asesoría empresarial de alto perfil.
                        </p>

                        <div className="bg-[#fafaf9] border border-gray-200 p-6 rounded-sm mb-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-obsidian text-[#B8860B] rounded-sm shrink-0">
                                    <MapPin className="w-5 h-5" strokeWidth={1.8} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[11px] font-bold text-stone uppercase tracking-widest mb-1.5">
                                        Dirección Principal
                                    </h4>
                                    <p className="text-sm md:text-base font-serif text-obsidian leading-relaxed mb-3">
                                        C. Suiza 721-Piso 3, La Luneta, <br />
                                        59689 Zamora de Hidalgo, Mich.
                                    </p>
                                    <button
                                        onClick={handleCopy}
                                        className="inline-flex items-center gap-1.5 text-xs text-charcoal/70 hover:text-obsidian font-medium transition-colors cursor-pointer"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                <span className="text-emerald-600 font-semibold">¡Dirección copiada!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3.5 h-3.5" />
                                                <span>Copiar dirección</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Fast Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex-1 flex items-center justify-center gap-2 bg-obsidian text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-charcoal transition-all shadow-md rounded-sm"
                            >
                                <Navigation className="w-4 h-4 text-[#B8860B]" />
                                <span>Abrir en Google Maps</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href={wazeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-white text-obsidian border border-gray-300 px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all rounded-sm"
                            >
                                <span>Abrir en Waze</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Map with Instant Skeleton and Smooth Load */}
                    <div className="w-full lg:w-7/12 h-[420px] md:h-[480px] border border-gray-200 bg-[#fafaf9] p-1.5 shadow-xl relative overflow-hidden rounded-sm">
                        
                        {/* Instant Placeholder while Map Iframe completes downloading */}
                        {!isMapLoaded && (
                            <div className="absolute inset-0 bg-[#0f0f0f] flex flex-col items-center justify-center p-6 text-center z-10 transition-opacity duration-500">
                                <div className="w-14 h-14 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center mb-4 animate-pulse">
                                    <MapPin className="w-7 h-7 text-[#B8860B]" />
                                </div>
                                <h3 className="text-white font-serif text-lg mb-1">CVIL — Despacho Legal</h3>
                                <p className="text-stone text-xs max-w-sm mb-4">C. Suiza 721-Piso 3, La Luneta, Zamora, Mich.</p>
                                <div className="flex items-center gap-2 text-xs text-[#B8860B]/80 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping"></span>
                                    <span>Cargando mapa interactivo...</span>
                                </div>
                            </div>
                        )}

                        {/* Interactive Google Map with Eager Loading */}
                        <iframe
                            src="https://maps.google.com/maps?q=C.+Suiza+721,+La+Luneta,+Zamora,+Michoacan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                            onLoad={() => setIsMapLoaded(true)}
                            title="Ubicación CVIL Abogados en Zamora"
                            className={`w-full h-full object-cover transition-opacity duration-700 contrast-[1.03] ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
                        ></iframe>

                        {/* Discreet overlay badge */}
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                            <span className="bg-obsidian/90 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-md flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Edificio Corporativo CVIL
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
