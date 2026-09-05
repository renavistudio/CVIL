import React from 'react';
import { TickerItem } from '../types';

const tickerItems: TickerItem[] = [
  { id: 1, text: "Auditoría Laboral Patronal", location: "ZAMORA", time: "Hoy" },
  { id: 2, text: "Estructuración de Socios", location: "JACONA", time: "Ayer" },
  { id: 3, text: "Blindaje Fiscal Superado", location: "MORELIA", time: "Ayer" },
  { id: 4, text: "Recuperación de Cartera", location: "LA PIEDAD", time: "Esta semana" },
  { id: 5, text: "Registro de Marca Aprobado", location: "TANGANCÍCUARO", time: "Hace 2 días" },
  { id: 6, text: "Fusión Corporativa", location: "GUADALAJARA", time: "Hace 3 días" },
  { id: 7, text: "Convenio Comercial Ejecutado", location: "URUAPAN", time: "Hace 3 días" },
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