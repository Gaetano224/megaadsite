import { SectionTitle } from "./SectionTitle";
import xelif from "@/assets/hero-xelif.png";
import ollerts from "@/assets/hero-ollerts.png";
import herkaimer from "@/assets/hero-herkaimer.png";

const heroes = [
  { name: "Xelif", role: "Mago Pasticcere", img: xelif },
  { name: "Ollerts", role: "Assassino dell'Ombra", img: ollerts },
  { name: "Herkaimer", role: "Guerriero delle Rune", img: herkaimer },
];

export function Heroes() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Eroi" title="Conosci gli sfidanti" />

        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/80">
          Ogni eroe ha statistiche, attacco base e abilità speciale uniche.
          Ecco solo un assaggio del roster &mdash; il resto lo scoprirai nella scatola.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {heroes.map((h) => (
            <figure
              key={h.name}
              className="group relative overflow-hidden rounded-lg gold-frame bg-navy transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[5/7] overflow-hidden">
                <img
                  src={h.img}
                  alt={`Carta eroe ${h.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="border-t border-gold/30 bg-navy-deep/80 px-5 py-4 text-center">
                <div className="text-lg font-semibold text-gold-soft tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
                  {h.name}
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                  {h.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
