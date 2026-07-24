# Imagens do site

Enquanto fotos reais não são adicionadas, o site exibe automaticamente uma
ilustração de assinatura (pipa dourada) no lugar de cada imagem. Para usar
fotos reais, basta:

## Produtos
1. Coloque o arquivo em `public/images/products/` (ex: `pipa-estrela.jpg`).
2. Em `lib/data.ts`, no produto correspondente, adicione:
   ```ts
   image: '/images/products/pipa-estrela.jpg'
   ```

## Galeria
1. Coloque as fotos em `public/images/gallery/`.
2. Em `lib/data.ts`, no array `galleryImages`, defina `src` e troque o
   componente `Gallery.tsx` para usar `next/image` com esse `src` (o
   componente já está preparado para receber esse ajuste simples).

## Depoimentos (avatares)
1. Coloque as fotos em `public/images/testimonials/`.
2. Em `lib/data.ts`, defina `avatar` no depoimento correspondente.

## Categorias
1. Ícones já são gerados via `lucide-react` — não é necessário upload de imagem.

Recomendação de formato: `.webp` ou `.jpg`, largura mínima de 800px,
proporção 4:3 para produtos.
