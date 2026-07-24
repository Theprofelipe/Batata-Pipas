'use client';

import { useState, useMemo } from 'react';
import { categories, products, CategoryId } from '@/lib/data';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';

export default function Products() {
  const [active, setActive] = useState<CategoryId | 'todos'>('todos');

  const filtered = useMemo(() => {
    if (active === 'todos') return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="produtos" className="relative bg-night-950 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Catálogo"
          title="Nossos Produtos"
          description="Cada peça é selecionada e revisada antes de chegar até você."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setActive('todos')}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === 'todos'
                ? 'border-gold-400 bg-gold-gradient text-night-950'
                : 'border-white/10 text-sand-300 hover:border-gold-400/40'
            )}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === cat.id
                  ? 'border-gold-400 bg-gold-gradient text-night-950'
                  : 'border-white/10 text-sand-300 hover:border-gold-400/40'
              )}
            >
              {cat.name}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 0.08}>
              <ProductCard product={product} variant={((i % 4) + 1) as 1 | 2 | 3 | 4} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
