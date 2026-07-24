import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import KiteMotif from './KiteMotif';

const points = [
  'Fabricação cuidadosa, peça por peça',
  'Materiais selecionados para máxima resistência',
  'Atendimento personalizado do início ao fim',
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-night-900 py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-white/5 bg-gradient-to-br from-night-800 to-night-950 p-10 shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,201,76,0.14),transparent_55%)]" />
            <KiteMotif variant={2} className="h-56 w-56 animate-float" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-gold-400" />
            Nossa história
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-sand-100 sm:text-4xl">
            Conheça a Batata Pipas
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand-400">
            Somos uma loja dedicada a quem vive o hobby de empinar pipas com paixão.
            Trabalhamos com produtos de alta qualidade, fabricação cuidadosa e um
            atendimento pensado para cada cliente — do primeiro voo às disputas mais
            acirradas de raia.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sand-200">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold-400" size={20} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
