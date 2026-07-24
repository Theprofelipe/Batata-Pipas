import Image from 'next/image';
import KiteMotif from './KiteMotif';

interface ProductVisualProps {
  image?: string;
  name: string;
  variant?: 1 | 2 | 3 | 4;
}

// Enquanto fotos reais dos produtos não são cadastradas em /public/images/products,
// renderiza uma ilustração de assinatura da marca no lugar de uma imagem genérica.
export default function ProductVisual({ image, name, variant = 1 }: ProductVisualProps) {
  if (image) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-night-800">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-night-700 via-night-800 to-night-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,201,76,0.12),transparent_60%)]" />
      <KiteMotif
        variant={variant}
        className="h-24 w-24 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
      />
    </div>
  );
}
