import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'pipas',
    'pipa profissional',
    'raia',
    'linha cerol',
    'rabiola',
    'loja de pipas',
    'batata pipas',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-night-900 font-body text-sand-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
