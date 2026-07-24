import { BadgeCheck } from 'lucide-react';
import { differentials } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Differentials() {
  return (
    <section className="relative bg-night-900 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Por que escolher a gente"
          title="Nossos Diferenciais"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-night-800/60 p-5 transition-colors hover:border-gold-400/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-night-950">
                  <BadgeCheck size={20} />
                </span>
                <span className="font-medium text-sand-100">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
