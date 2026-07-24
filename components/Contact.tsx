import { Clock, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <section id="contato" className="relative bg-night-950 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Fale com a gente"
          title="Contato"
          description="Estamos prontos para tirar suas dúvidas e fechar seu pedido."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-2xl border border-white/5 shadow-card">
              <iframe
                title="Localização Batata Pipas"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert-[92%] contrast-[90%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/5 bg-night-800/60 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-gold-400" size={20} />
                <div>
                  <p className="font-semibold text-sand-100">Endereço</p>
                  <p className="text-sm text-sand-400">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-night-800/60 p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 shrink-0 text-gold-400" size={20} />
                <div className="w-full">
                  <p className="mb-2 font-semibold text-sand-100">Horário de funcionamento</p>
                  <ul className="space-y-1 text-sm text-sand-400">
                    {siteConfig.openingHours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="text-sand-300">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sand-300 transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sand-300 transition-colors hover:border-gold-400/50 hover:text-gold-400"
              >
                <Facebook size={20} />
              </a>
            </div>

            <a
              href={buildWhatsAppLink('Olá! Vim pelo site e gostaria de mais informações.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-base font-bold text-night-950 shadow-gold transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
