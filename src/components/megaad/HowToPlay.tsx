import { SectionTitle } from "./SectionTitle";
import { Swords, Dices, Trophy } from "lucide-react";

const steps = [
  {
    icon: Swords,
    title: "Schieramento",
    body: "Scegli i tuoi eroi tramite draft, posizionali sulla plancia 8×10 secondo la mappa estratta e prepara la tua strategia tra ostacoli e terreni speciali.",
  },
  {
    icon: Dices,
    title: "Combattimento",
    body: "Ogni turno spendi Mana per muovere, attaccare o usare abilità. Tira il D6: se superi la schivata del bersaglio, il colpo va a segno.",
  },
  {
    icon: Trophy,
    title: "Vittoria",
    body: "Convinci l'avversario che non potrà più batterti: sconfiggi più eroi possibili (6-3, 5-2, 4-1, 3-1, 3-0) e costringilo alla fuga.",
  },
];

export function HowToPlay() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Regole" title="Come si gioca" />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="gold-frame rounded-lg bg-navy/70 p-8 backdrop-blur-sm"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-navy-deep">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl text-gold-soft mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {title}
              </h3>
              <p className="text-foreground/85 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
