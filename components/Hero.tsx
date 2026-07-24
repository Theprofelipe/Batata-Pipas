'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SkyBackground from './SkyBackground';
import { buildWhatsAppLink } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-night-radial pt-24"
    >
      <SkyBackground />

      <div className="container relative z-10 grid items-center gap-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow"
          >
            <span className="h-px w-6 bg-gold-400" />
            Tradição e performance desde sempre
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-sand-100 sm:text-5xl lg:text-6xl"
          >
            As melhores <span className="text-gradient-gold">pipas</span> do Brasil.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sand-300"
          >
            Qualidade, resistência e acabamento impecável para quem leva o hobby a sério.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#produtos"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-night-950 shadow-gold transition-transform hover:scale-105"
            >
              Ver Catálogo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={buildWhatsAppLink('Olá! Quero fazer um pedido na Batata Pipas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-sand-100 backdrop-blur transition-colors hover:border-gold-400 hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Fazer Pedido
            </a>
          </motion.div>
        </div>
      </div>

      {/* linha do horizonte sutil */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  );
}
