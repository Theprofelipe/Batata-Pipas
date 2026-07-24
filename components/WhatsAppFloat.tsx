'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/data';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppLink('Olá! Vim pelo site da Batata Pipas.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle size={26} className="relative" />
    </motion.a>
  );
}
