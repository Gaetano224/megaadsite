import { useState } from "react";
import { Users, Clock, Sparkles, Languages, Mail, ChevronRight } from "lucide-react";
import boxImg from "@/assets/megaad-box-new.png";
import xelif from "@/assets/hero-xelif.png";
import ollerts from "@/assets/hero-ollerts.png";
import herkaimer from "@/assets/hero-herkaimer.png";

const images = [
  { id: "box", url: boxImg, alt: "Scatola di gioco Megaad" }
];

export function Hero() {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-1/4 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,_var(--gold)_0%,_transparent_65%)] opacity-[0.08] blur-3xl" />
        <div className="absolute right-[20%] bottom-1/4 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,_var(--gold)_0%,_transparent_65%)] opacity-[0.08] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* LEFT: Premium Product Gallery */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Viewport */}
            <div className="relative aspect-[4/5] flex items-center justify-center">
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gold px-3 py-1.5 rounded text-[10px] uppercase font-bold tracking-widest text-primary-foreground shadow-md">
                Prossima Uscita
              </div>
              
              <img
                src={activeImg.url}
                alt={activeImg.alt}
                className="w-full h-full object-contain transition-all duration-500 animate-fade-in"
              />
            </div>
            

          </div>

          {/* RIGHT: Product Description, Specs & CTAs */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <span className="text-sm md:text-base uppercase tracking-[0.3em] text-gold-soft font-semibold mb-2">
              Il Gioco da Tavolo Fantasy Strategico
            </span>
            
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gold tracking-wider text-shadow-deep mb-4"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}
            >
              MEGAAD
            </h1>

            <div className="h-0.5 w-32 bg-gradient-to-r from-gold to-transparent mb-6" />

            <p
              className="text-lg md:text-2xl text-gold-soft mb-8 leading-relaxed italic"
              style={{ fontFamily: "var(--font-script)", fontSize: "1.85rem", lineHeight: 1.25 }}
            >
              Nel regno di Aethel il potere non sta solo nella forza bruta, ma nell'astuzia e nell'ingegno. Due squadre, eroi unici, un campo in continuo mutamento.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
              <Spec icon={<Users className="h-4 w-4" />} title="Giocatori" value="2 o 4" />
              <Spec icon={<Sparkles className="h-4 w-4" />} title="Età consigliata" value="12+" />
              <Spec icon={<Clock className="h-4 w-4" />} title="Durata media" value="45–60 min" />
              <Spec icon={<Languages className="h-4 w-4" />} title="Lingua" value="Italiano" />
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 w-full">
              <a
                href="#news"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:bg-gold-soft hover:shadow-[0_0_30px_-5px_var(--gold)]"
              >
                <Mail className="h-4 w-4" />
                Iscriviti alle News
              </a>
            </div>

            <p className="mt-4 text-xs text-muted-foreground/80">
              * Iscrivendoti riceverai aggiornamenti importanti sull'uscita del gioco. Niente spam.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function Spec({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded bg-navy/60 border border-gold/15 backdrop-blur-sm">
      <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-sm font-semibold text-foreground/90">{value}</div>
      </div>
    </div>
  );
}
