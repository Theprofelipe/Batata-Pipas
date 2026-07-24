'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="depoimentos" className="relative bg-night-900 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Quem já comprou"
          title="Depoimentos"
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-night-800/70 p-10 text-center shadow-card">
            <Quote className="mx-auto mb-4 text-gold-400/60" size={32} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-night-950">
                  {current.name.charAt(0)}
                </div>

                <div className="mb-3 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < current.rating ? 'fill-gold-400 text-gold-400' : 'text-night-600'}
                    />
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-sand-200">&ldquo;{current.comment}&rdquo;</p>

                <p className="mt-5 font-display text-sm font-bold text-sand-100">
                  {current.name}
                </p>
                <p className="text-xs text-sand-400">{current.city}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            aria-label="Depoimento anterior"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-white/10 bg-night-900 p-2 text-sand-300 transition-colors hover:border-gold-400/50 hover:text-gold-400 sm:-translate-x-14"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Próximo depoimento"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border border-white/10 bg-night-900 p-2 text-sand-300 transition-colors hover:border-gold-400/50 hover:text-gold-400 sm:translate-x-14"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-gold-400' : 'w-2 bg-night-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
