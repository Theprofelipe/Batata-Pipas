'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';
import KiteMotif from './KiteMotif';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav py-3 shadow-card' : 'bg-transparent py-5'
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold text-sand-100">
          <KiteMotif variant={1} className="h-8 w-8" />
          Batata <span className="text-gradient-gold">Pipas</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-sand-300 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#produtos"
          className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-night-950 shadow-gold transition-transform hover:scale-105 lg:inline-block"
        >
          Ver Catálogo
        </a>

        <button
          aria-label="Abrir menu"
          className="text-sand-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="glass-nav container flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-sand-200 hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  className="mt-2 block rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-night-950"
                >
                  Fazer Pedido
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
