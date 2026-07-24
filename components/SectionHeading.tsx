import Reveal from './Reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-14 max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      )}
    >
      <span className="section-eyebrow">
        <span className="h-px w-6 bg-gold-400" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-sand-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-sand-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
