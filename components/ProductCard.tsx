import { MessageCircle } from 'lucide-react';
import { Product, buildWhatsAppLink } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import ProductVisual from './ProductVisual';

interface ProductCardProps {
  product: Product;
  variant?: 1 | 2 | 3 | 4;
}

export default function ProductCard({ product, variant = 1 }: ProductCardProps) {
  const message = `Olá! Tenho interesse na "${product.name}" (${formatPrice(
    product.price
  )}). Poderia me passar mais informações?`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-night-800/70 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-gold-lg">
      {product.highlight && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-night-950">
          Destaque
        </span>
      )}

      <ProductVisual image={product.image} name={product.name} variant={variant} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-sand-100">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-400">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-gradient-gold">
            {formatPrice(product.price)}
          </span>
        </div>

        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-night-950 transition-transform hover:scale-[1.03]"
        >
          <MessageCircle size={17} />
          Pedir pelo WhatsApp
        </a>
      </div>
    </article>
  );
}
