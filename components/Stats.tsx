import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: 1, value: "15+", label: "Años de experiencia profesional" },
  { id: 2, value: "Empresas", label: "Acuerdos, contratos y conflictos" },
  { id: 3, value: "Reserva", label: "En el manejo de tu información" },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-6 lg:py-10 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center px-2 py-6 min-w-0"
            >
              <h3 className={`${stat.id === 2 ? "text-4xl lg:text-5xl" : "text-4xl lg:text-6xl"} font-serif font-bold text-obsidian leading-tight mb-4`}>
                {stat.value}
              </h3>
              <p className="leading-relaxed text-stone font-semibold tracking-widest uppercase text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
