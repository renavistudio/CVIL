import React from 'react';

interface LogoProps {
    className?: string;
    showText?: boolean;
    light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, light = false }) => {
    const subTextColor = light ? "text-white/70" : "text-stone";

    return (
        <div className="flex flex-col items-center justify-center group leading-none">
            <img width="800" height="600" 
                src="/images/CVIL%20Logo.webp" 
                alt="CVIL Logo" 
                className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105`} 
            />
            {showText && (
                <span className={`text-[6.5px] md:text-[7px] tracking-[0.18em] uppercase font-medium mt-1 ${subTextColor} whitespace-nowrap`}>
                    Alianza Estratégica En Derecho
                </span>
            )}
        </div>
    );
};

export default Logo;
