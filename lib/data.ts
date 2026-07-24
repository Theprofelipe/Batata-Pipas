// ============================================================================
// lib/data.ts
// ----------------------------------------------------------------------------
// Fonte única de conteúdo do site. Substitua os valores abaixo por dados reais
// (produtos, textos, imagens) ou, futuramente, plugue aqui uma chamada a uma
// API/CMS (ex: fetch de um painel administrativo) sem alterar os componentes.
// ============================================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  image?: string; // caminho em /public/images/products — se ausente, usa ilustração padrão
  highlight?: boolean;
}

export type CategoryId =
  | 'tradicionais'
  | 'profissionais'
  | 'raias'
  | 'acessorios'
  | 'linhas'
  | 'rabiolas';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: 'Wind' | 'Trophy' | 'Ribbon' | 'Wrench' | 'Spool' | 'Sparkles';
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number; // 1 a 5
  comment: string;
  avatar?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src?: string;
  alt: string;
}

export const siteConfig = {
  name: 'Batata Pipas',
  tagline: 'As melhores pipas do Brasil.',
  description:
    'Qualidade, resistência e acabamento impecável para quem leva o hobby a sério.',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_USER || 'batatapipas',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/batatapipas',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://batatapipas.com.br',
  address: 'Rua das Pipas, 123 — São Paulo, SP',
  openingHours: [
    { day: 'Segunda a Sexta', hours: '09h às 18h' },
    { day: 'Sábado', hours: '09h às 13h' },
    { day: 'Domingo', hours: 'Fechado' },
  ],
};

export const categories: Category[] = [
  {
    id: 'tradicionais',
    name: 'Pipas Tradicionais',
    description: 'Modelos clássicos, o ponto de partida de todo pipeiro.',
    icon: 'Wind',
  },
  {
    id: 'profissionais',
    name: 'Pipas Profissionais',
    description: 'Estrutura reforçada e acabamento para quem compete.',
    icon: 'Trophy',
  },
  {
    id: 'raias',
    name: 'Raias',
    description: 'Cortantes de alta performance, prontas para a disputa.',
    icon: 'Ribbon',
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    description: 'Tudo que falta para deixar sua pipa completa.',
    icon: 'Wrench',
  },
  {
    id: 'linhas',
    name: 'Linhas',
    description: 'Do algodão ao cerol, resistência para cada estilo de voo.',
    icon: 'Spool',
  },
  {
    id: 'rabiolas',
    name: 'Rabiolas',
    description: 'Estabilidade e estilo para o vento não te derrubar.',
    icon: 'Sparkles',
  },
];

export const products: Product[] = [
  {
    id: 'trad-01',
    name: 'Pipa Estrela Clássica',
    description: 'Papel de seda resistente e vareta de bambu selecionada.',
    price: 24.9,
    category: 'tradicionais',
    highlight: true,
  },
  {
    id: 'trad-02',
    name: 'Pipa Pentagonal Tradicional',
    description: 'Formato clássico com armação leve e ótimo empinamento.',
    price: 27.9,
    category: 'tradicionais',
  },
  {
    id: 'prof-01',
    name: 'Pipa Profissional Carbono',
    description: 'Vareta em fibra de carbono para máxima resistência ao vento.',
    price: 89.9,
    category: 'profissionais',
    highlight: true,
  },
  {
    id: 'prof-02',
    name: 'Pipa Competição Elite',
    description: 'Acabamento premium, usada por pipeiros de competição.',
    price: 119.9,
    category: 'profissionais',
  },
  {
    id: 'raia-01',
    name: 'Raia Cerol Fino',
    description: 'Corte preciso e alta durabilidade em disputas de linha.',
    price: 34.9,
    category: 'raias',
  },
  {
    id: 'raia-02',
    name: 'Raia Profissional Reforçada',
    description: 'Trançado reforçado para quem não abre mão de vitória.',
    price: 44.9,
    category: 'raias',
    highlight: true,
  },
  {
    id: 'acess-01',
    name: 'Carretilha de Mão',
    description: 'Empunhadura ergonômica para soltar e recolher linha com controle.',
    price: 39.9,
    category: 'acessorios',
  },
  {
    id: 'acess-02',
    name: 'Kit Reparo de Varetas',
    description: 'Fitas, colas e varetas sobressalentes para manutenção rápida.',
    price: 19.9,
    category: 'acessorios',
  },
  {
    id: 'linha-01',
    name: 'Linha de Algodão nº 10',
    description: 'Ideal para iniciantes, ótimo custo-benefício.',
    price: 14.9,
    category: 'linhas',
  },
  {
    id: 'linha-02',
    name: 'Linha Cerol Especial',
    description: 'Alta abrasividade, para quem busca performance em disputas.',
    price: 29.9,
    category: 'linhas',
    highlight: true,
  },
  {
    id: 'rabio-01',
    name: 'Rabiola Longa Colorida',
    description: 'Mais estabilidade em dias de vento forte.',
    price: 9.9,
    category: 'rabiolas',
  },
  {
    id: 'rabio-02',
    name: 'Kit 3 Rabiolas Sortidas',
    description: 'Combine cores e tamanhos para o voo perfeito.',
    price: 24.9,
    category: 'rabiolas',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Eduardo',
    city: 'São Paulo, SP',
    rating: 5,
    comment:
      'Pipas de altíssima qualidade, chegou tudo muito bem embalado e antes do prazo. Já é a terceira compra!',
  },
  {
    id: 't2',
    name: 'Fernanda Souza',
    city: 'Belo Horizonte, MG',
    rating: 5,
    comment:
      'Atendimento pelo WhatsApp foi rapidíssimo e o acabamento das pipas é impecável. Recomendo muito.',
  },
  {
    id: 't3',
    name: 'Rafael Lima',
    city: 'Recife, PE',
    rating: 5,
    comment:
      'Comprei a linha profissional para competição e superou minhas expectativas de resistência.',
  },
  {
    id: 't4',
    name: 'Juliana Alves',
    city: 'Curitiba, PR',
    rating: 5,
    comment:
      'Site muito fácil de navegar e o pedido pelo WhatsApp facilitou demais. Voltarei a comprar!',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq1',
    question: 'Vocês enviam para todo o Brasil?',
    answer:
      'Sim! Enviamos para todos os estados brasileiros através dos Correios e transportadoras parceiras.',
  },
  {
    id: 'faq2',
    question: 'Quanto tempo demora para receber meu pedido?',
    answer:
      'O prazo médio é de 3 a 10 dias úteis, dependendo da sua região e da modalidade de envio escolhida.',
  },
  {
    id: 'faq3',
    question: 'Como faço um pedido?',
    answer:
      'Basta escolher os produtos no catálogo e clicar em "Pedir pelo WhatsApp". Nossa equipe vai confirmar o pedido, calcular o frete e enviar o orçamento.',
  },
  {
    id: 'faq4',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos Pix, cartão de crédito (em até 12x) e boleto bancário. Todo o pagamento é processado de forma segura.',
  },
  {
    id: 'faq5',
    question: 'As pipas têm garantia?',
    answer:
      'Sim, todos os produtos passam por controle de qualidade e possuem garantia contra defeitos de fabricação.',
  },
];

export const stats = [
  { id: 's1', label: 'Clientes satisfeitos', value: 5000, suffix: '+' },
  { id: 's2', label: 'Modelos de pipas', value: 100, suffix: '+' },
  { id: 's3', label: 'Envio para', value: 27, suffix: ' estados' },
  { id: 's4', label: 'Atendimento', value: 100, suffix: '% via WhatsApp' },
];

export const differentials = [
  { id: 'd1', label: 'Produtos de alta qualidade' },
  { id: 'd2', label: 'Atendimento rápido' },
  { id: 'd3', label: 'Envio para todo o Brasil' },
  { id: 'd4', label: 'Pagamento seguro' },
  { id: 'd5', label: 'Embalagem reforçada' },
  { id: 'd6', label: 'Grande variedade' },
];

export const howToBuySteps = [
  { id: 'step1', title: 'Escolha os produtos', description: 'Navegue pelo catálogo e monte sua lista.' },
  { id: 'step2', title: 'Envie sua lista pelo WhatsApp', description: 'Fale com a gente e envie os itens escolhidos.' },
  { id: 'step3', title: 'Receba o orçamento', description: 'Calculamos o valor total com frete incluso.' },
  { id: 'step4', title: 'Efetue o pagamento', description: 'Pix, cartão ou boleto — como preferir.' },
  { id: 'step5', title: 'Receba sua encomenda', description: 'Sua pipa chega embalada e pronta para voar.' },
];

// Galeria — troque `src` pelo caminho da imagem real em /public/images/gallery
export const galleryImages: GalleryImage[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `gallery-${i + 1}`,
  alt: `Foto da Batata Pipas ${i + 1}`,
}));

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
