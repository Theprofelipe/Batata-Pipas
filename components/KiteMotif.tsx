interface KiteMotifProps {
  className?: string;
  variant?: 1 | 2 | 3 | 4;
}

// Ilustração de linha (line-art) de uma pipa em losango com cauda,
// usada como elemento de assinatura visual da marca em toda a interface.
export default function KiteMotif({ className, variant = 1 }: KiteMotifProps) {
  const palettes: Record<number, [string, string]> = {
    1: ['#f6d76a', '#b8860b'],
    2: ['#fbe7a1', '#e0ac1f'],
    3: ['#f2c94c', '#8a6408'],
    4: ['#fde68a', '#c9971c'],
  };
  const [from, to] = palettes[variant];
  const gradId = `kiteGrad-${variant}`;

  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="200" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      {/* corpo da pipa */}
      <path
        d="M100 8 L184 100 L100 220 L16 100 Z"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        fill={`url(#${gradId})`}
        fillOpacity="0.12"
      />
      {/* travessas */}
      <path d="M100 8 L100 220" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeOpacity="0.6" />
      <path d="M16 100 L184 100" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeOpacity="0.6" />
      {/* rabiola */}
      <path
        d="M100 220 C 96 232, 104 236, 100 246 C 96 254, 104 258, 100 260"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="100" cy="230" r="3" fill={`url(#${gradId})`} />
      <circle cx="100" cy="245" r="3" fill={`url(#${gradId})`} />
      <circle cx="100" cy="258" r="3" fill={`url(#${gradId})`} />
    </svg>
  );
}
