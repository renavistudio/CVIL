import React from 'react';
import { TickerItem } from '../types';

const tickerItems: TickerItem[] = [
  { id: 1, text: "Revisión de contratos", location: "ANTES DE FIRMAR", time: "" },
  { id: 2, text: "Acuerdos entre socios", location: "EMPRESAS", time: "" },
  { id: 3, text: "Cobro de adeudos", location: "PAGARÉS", time: "" },
  { id: 4, text: "Asuntos laborales", location: "EMPLEADORES", time: "" },
  { id: 5, text: "Compra de negocios", location: "CONTRATOS", time: "" },
  { id: 6, text: "Registro de marcas", location: "PROPIEDAD INTELECTUAL", time: "" },
  { id: 7, text: "Representación penal", location: "PERSONAS Y EMPRESAS", time: "" },
];

const LiveTicker: React.FC = () => {
  return (
    <div className="bg-offwhite text-charcoal py-3 overflow-hidden border-b border-gray-200 relative z-20">
      <div className="flex animate-scroll whitespace-nowrap space-x-16 hover:[animation-play-state:paused] items-center">
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
