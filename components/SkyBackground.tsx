'use client';

import KiteMotif from './KiteMotif';

// Estrelas geradas de forma determinística (sem Math.random no render)
// para evitar mismatch de hidratação entre servidor e cliente.
const STARS = Array.from({ length: 60 }).map((_, i) => {
  const seed = i * 137.51; // ângulo áureo garante boa distribuição
  const top = (seed % 100);
  const left = ((seed * 1.6180339) % 100);
  const size = 1 + ((i % 4) * 0.5);
  const delay = (i % 10) * 0.35;
  return { id: i, top, left, size, delay };
});

const KITES = [
  { top: '12%', left: '8%', size: 90, variant: 1 as const, duration: '9s', delay: '0s', tilt: '-8deg' },
  { top: '55%', left: '85%', size: 70, variant: 2 as const, duration: '11s', delay: '1.2s', tilt: '10deg' },
  { top: '75%', left: '15%', size: 60, variant: 3 as const, duration: '8s', delay: '2.4s', tilt: '-4deg' },
  { top: '22%', left: '78%', size: 50, variant: 4 as const, duration: '10s', delay: '0.6s', tilt: '6deg' },
];

export default function SkyBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* estrelas cintilantes */}
      {STARS.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-gold-200 animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* pipas flutuando ao fundo */}
      {KITES.map((kite, i) => (
        <div
          key={i}
          className="absolute animate-float-slow opacity-70"
          style={
            {
              top: kite.top,
              left: kite.left,
              width: kite.size,
              animationDuration: kite.duration,
              animationDelay: kite.delay,
              '--tilt': kite.tilt,
            } as React.CSSProperties
          }
        >
          <KiteMotif variant={kite.variant} />
        </div>
      ))}

      {/* névoa de gradiente no rodapé para transição suave à próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night-900 to-transparent" />
    </div>
  );
}
