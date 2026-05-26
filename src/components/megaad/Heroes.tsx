import { SectionTitle } from "./SectionTitle";
import xelif from "@/assets/hero-xelif.png";
import ollerts from "@/assets/hero-ollerts.png";
import herkaimer from "@/assets/hero-herkaimer.png";

const heroes = [
  { name: "Xelif",img: xelif },
  { name: "Ollerts",img: ollerts },
  { name: "Herkaimer", img: herkaimer },
];

export function Heroes() {
  return (
    <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-transparent to-navy/10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Il Roster" title="Conosci alcuni degli eroi" />

        <p className="mx-auto mb-16 max-w-2xl text-center text-foreground/80 text-base md:text-lg">
          Ogni eroe possiede statistiche uniche, un attacco base caratteristico e una devastante abilità speciale. Scegli saggiamente chi schierare. Potrai conoscerne tanti altri entrando nel fantastico mondo di Megaad
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {heroes.map((h) => (
            <figure
              key={h.name}
              className="group relative overflow-hidden rounded-lg gold-frame bg-navy transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.25)] flex flex-col"
            >
              {/* Image Viewport */}
              <div className="aspect-[5/7] overflow-hidden relative">
                {/* Spotlight Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(10,17,40,0.85)_100%)] z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                
                <img
                  src={h.img}
                  alt={`Carta eroe ${h.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              
              {/* Card Figcaption */}
              <figcaption className="border-t border-gold/20 bg-navy-deep/90 px-6 py-4 text-center">
                <div 
                  className="text-2xl font-bold text-gold-soft tracking-wider group-hover:text-gold transition-colors duration-300" 
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {h.name}
                </div>
                
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold/60 mt-1 font-semibold">
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
