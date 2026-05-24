import { SectionTitle } from "./SectionTitle";
import boxImg from "@/assets/megaad-box.png";

const items = [
  "1 Plancia di gioco (8×10 caselle)",
  "30 Carte Eroe (6 per ciascuna classe)",
  "30 Tasselli Eroe",
  "6 Carte Mappa",
  "10 Segnalini Ostacolo",
  "2 Block notes",
  "2 D6 da combattimento",
];

export function BoxContents() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Nella scatola" title="Contenuto del gioco" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="gold-frame rounded-lg overflow-hidden bg-navy-deep">
            <img
              src={boxImg}
              alt="Scatola del gioco da tavolo Megaad"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-gold/20 pb-4 last:border-0"
              >
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 flex-shrink-0 rotate-45 bg-gold"
                />
                <span className="text-lg text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
