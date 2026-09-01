import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: '"La estructuración corporativa que implementaron nos dio certeza jurídica y resolvió los conflictos internos de raíz."',
        author: '— CONSEJO DE ADMINISTRACIÓN, EMPRESA AGROINDUSTRIAL.'
    },
    {
        id: 2,
        text: '"Teníamos un riesgo operativo grave por contingencias laborales. Su auditoría preventiva nos ahorró millones en posibles multas."',
        author: '— DIRECTOR GENERAL, EMPRESA EMPACADORA.'
    },
    {
        id: 3,
        text: '"Enfrentábamos un litigio mercantil que amenazaba nuestras operaciones. Su estrategia liberó nuestros fondos en tiempo récord."',
        author: '— CEO, COMPAÑÍA LOGÍSTICA Y TRANSPORTE.'
    }
];

const SocialProof: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Auto-carousel timer
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="social-proof" className="py-8 lg:py-12 bg-white border-t border-gray-100 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="mb-6 lg:mb-10 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-stone uppercase mb-4 block">
                        Lo que dicen nuestros clientes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-obsidian leading-tight">
                        Clientes que confiaron en nosotros.
                    </h2>
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden">
                    <div className="relative h-[450px]">
                        {testimonials.map((testimonial, idx) => (
                            <div 
                                key={testimonial.id}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <div className="flex flex-col justify-between h-full bg-offwhite p-10 border border-gray-200">
                                    <div className="flex space-x-1 mb-6">
                                        {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-obsidian text-obsidian" />)}
                                    </div>
                                    <p className="text-2xl font-serif italic text-obsidian leading-relaxed mb-8">
                                        {testimonial.text}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="h-px w-12 bg-gray-300 mb-4"></div>
                                        <p className="text-xs font-sans font-bold uppercase tracking-widest text-gray-500">
                                            {testimonial.author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Dots indicator */}
                    <div className="mt-6 flex justify-center space-x-2">
                        {testimonials.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-obsidian' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-3 gap-12">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex flex-col justify-between h-full bg-offwhite p-10 border border-gray-200">
                            <div className="flex space-x-1 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-obsidian text-obsidian" />)}
                            </div>
                            <p className="text-2xl lg:text-3xl font-serif italic text-obsidian leading-relaxed mb-8">
                                {testimonial.text}
                            </p>
                            <div className="mt-auto">
                                <div className="h-px w-12 bg-gray-300 mb-4"></div>
                                <p className="text-xs font-sans font-bold uppercase tracking-widest text-gray-500">
                                    {testimonial.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
