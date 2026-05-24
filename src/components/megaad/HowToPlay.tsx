import { SectionTitle } from "./SectionTitle";
import { Swords, Dices, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Swords,
    title: "Schieramento",
    body: "Scegli i tuoi eroi tramite draft, posizionali sulla plancia 8×10 secondo la mappa estratta e prepara la tua strategia tra ostacoli e terreni speciali.",
  },
  {
    num: "02",
    icon: Dices,
    title: "Combattimento",
    body: "Ogni turno spendi Mana per muovere, attaccare o usare abilità. Tira il D6: se superi la schivata del bersaglio, il colpo va a segno.",
  },
  {
    num: "03",
    icon: Trophy,
    title: "Vittoria",
    body: "Convinci l'avversario che non potrà più batterti: sconfiggi più eroi possibili (6-3, 5-2, 4-1, 3-1, 3-0) e costringilo alla fuga.",
  },
];

export function HowToPlay() {
  return (
    <section className="px-6 py-20 md:py-28 bg-navy-deep/20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Fasi di gioco" title="Come si gioca" />

        <div className="relative mt-12">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-gold/20 -translate-y-1/2 hidden md:block -z-10" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map(({ num, icon: Icon, title, body }, index) => (
              <div
                key={title}
                className="group relative gold-frame rounded-lg bg-navy/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.2)]"
              >
                {/* Stepper Card Connectors (Arrows) */}
                {index < 2 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-gold/30 hover:text-gold hidden md:block">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}

                {/* Styled Number Badge & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/45 bg-navy-deep">
                    <Icon className="h-6 w-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <span 
                    className="text-4xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {num}
                  </span>
                </div>

                {/* Step Title */}
                <h3 
                  className="text-2xl text-gold-soft mb-3 group-hover:text-gold transition-colors duration-300" 
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                
                {/* Step Body */}
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
