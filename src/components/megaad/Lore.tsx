import { SectionTitle } from "./SectionTitle";

export function Lore() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Ambientazione" title="Il regno di Aethel" />

        <div className="gold-frame rounded-lg bg-navy/60 p-8 md:p-12 backdrop-blur-sm">
          <p
            className="text-center text-xl md:text-2xl leading-relaxed text-gold-soft"
            style={{ fontFamily: "var(--font-script)", fontSize: "1.9rem" }}
          >
            Il nome <em>Megaad</em> nasce da <em>metis</em> (scaltrezza strategica)
            e <em>jugaad</em> (soluzioni brillanti con risorse limitate).
          </p>

          <div className="my-8 h-px gold-divider" />

          <p className="text-center text-base md:text-lg leading-relaxed text-foreground/90">
            Due squadre si affrontano su un campo in continuo mutamento,
            schierando eroi dalle abilità uniche. Vince chi sa adattarsi,
            pianificare e dominare terreno e sorte.
          </p>
        </div>
      </div>
    </section>
  );
}
