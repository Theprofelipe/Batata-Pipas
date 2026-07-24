'use client';

import { Wind, Trophy, Scissors, Wrench, CircleDot, Sparkles, LucideIcon } from 'lucide-react';
import { categories } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Trophy,
  Ribbon: Scissors,
  Wrench,
  Spool: CircleDot,
  Sparkles,
};

export default function Categories() {
  return (
    <section className="relative bg-night-900 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Encontre o que precisa"
          title="Categorias"
          description="Do primeiro voo à disputa mais acirrada, temos o produto certo para cada momento."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Wind;
            return (
              <Reveal key={cat.id} delay={i * 0.05}>
                <a
                  href="#produtos"
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/5 bg-night-800/60 p-6 text-center transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-gold"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-night-950 transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-semibold text-sand-100">{cat.name}</span>
                  <span className="hidden text-xs leading-relaxed text-sand-400 sm:block">
                    {cat.description}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
