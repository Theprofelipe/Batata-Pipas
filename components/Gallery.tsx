'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import KiteMotif from './KiteMotif';

export default function Gallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openImage = galleryImages.find((img) => img.id === openId);

  return (
    <section id="galeria" className="relative bg-night-950 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Nosso acervo"
          title="Galeria"
          description="Clique em uma imagem para ver em tela cheia."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setOpenId(img.id)}
                className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-night-800 to-night-900 transition-all hover:border-gold-400/40"
                aria-label={`Ampliar ${img.alt}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(242,201,76,0.1),transparent_60%)]" />
                <KiteMotif
                  variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
                  className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-night-950/95 p-6 backdrop-blur-sm"
            onClick={() => setOpenId(null)}
          >
            <button
              aria-label="Fechar"
              className="absolute right-6 top-6 text-sand-100 hover:text-gold-400"
              onClick={() => setOpenId(null)}
            >
              <X size={30} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex max-h-[80vh] w-full max-w-lg items-center justify-center rounded-2xl border border-gold-400/20 bg-gradient-to-br from-night-800 to-night-950 p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <KiteMotif variant={2} className="h-48 w-48" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
