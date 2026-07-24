import { howToBuySteps } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function HowToBuy() {
  return (
    <section className="relative bg-night-950 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Passo a passo"
          title="Como Comprar"
          description="Um processo simples, do clique no catálogo até a pipa na sua mão."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold-400/60 via-gold-400/20 to-transparent sm:block" />

          <ol className="space-y-8">
            {howToBuySteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <li className="flex items-start gap-5">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient font-display text-sm font-bold text-night-950">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-sand-100">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-sand-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
