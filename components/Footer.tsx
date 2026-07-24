import { Instagram, Facebook } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import KiteMotif from './KiteMotif';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-night-950 pt-16">
      <div className="container">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold text-sand-100">
              <KiteMotif variant={1} className="h-8 w-8" />
              Batata <span className="text-gradient-gold">Pipas</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wide text-sand-100">
              Links rápidos
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sand-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wide text-sand-100">
              Redes sociais
            </h4>
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sand-300 transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sand-300 transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wide text-sand-100">
              Contato
            </h4>
            <p className="text-sm text-sand-400">{siteConfig.address}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 text-xs text-sand-400 sm:flex-row">
          <p>© {year} Batata Pipas. Todos os direitos reservados.</p>
          <p>Feito com dedicação para quem ama empinar pipa.</p>
        </div>
      </div>
    </footer>
  );
}
