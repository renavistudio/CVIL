import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: 1, value: "15+", label: "Años de Experiencia" },
  { id: 2, value: "150+", label: "Empresas Protegidas" },
  { id: 3, value: "100%", label: "Secreto Profesional" },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-6 lg:py-10 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6"
            >
              <h3 className="text-5xl md:text-6xl font-serif font-bold text-obsidian mb-3">
                {stat.value}
              </h3>
              <p className="text-stone font-semibold tracking-widest uppercase text-xs">
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
