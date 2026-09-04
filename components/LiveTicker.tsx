import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TickerItem } from '../types';

const tickerItems: TickerItem[] = [
  { id: 1, text: "Auditoría Laboral Patronal", location: "ZAMORA" },
  { id: 2, text: "Estructuración de Socios", location: "JACONA" },
  { id: 3, text: "Blindaje Fiscal Superado", location: "MORELIA" },
  { id: 4, text: "Recuperación de Cartera", location: "LA PIEDAD" },
  { id: 5, text: "Registro de Marca Aprobado", location: "TANGANCÍCUARO" },
  { id: 6, text: "Fusión Corporativa", location: "GUADALAJARA" },
  { id: 7, text: "Convenio Comercial Ejecutado", location: "URUAPAN" },
];

const LiveTicker: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div ref={ref} className="bg-offwhite text-charcoal py-3 overflow-hidden border-b border-gray-200 relative z-20">
      <div className={`flex whitespace-nowrap space-x-16 hover:[animation-play-state:paused] items-center ${isInView ? 'animate-scroll' : 'opacity-0'}`}>
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="flex items-center space-x-3 opacity-90 hover:opacity-100 transition-opacity cursor-default group">
            <span className="w-1.5 h-1.5 rounded-full bg-obsidian shadow-[0_0_8px_rgba(5,5,5,0.3)]"></span>
            <span className="font-sans text-[14px] font-medium group-hover:text-obsidian transition-colors tracking-tight">{item.text}</span>
            <span className="text-stone text-[10px] uppercase tracking-widest font-sans border-l border-gray-300 pl-3 group-hover:border-gray-400 transition-colors">{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTicker;

