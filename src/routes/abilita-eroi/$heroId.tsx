import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/megaad/SiteFooter";
import { AbilityFAQModal } from "@/components/megaad/AbilityFAQModal";

// ─── Hero Data ─────────────────────────────────────────────
// Ogni eroe ha: nome, immagine(i), e testo descrizione abilità.
// ESEMPIO: Ryker è compilato. Per gli altri eroi, copia la struttura e modifica i dati.
// Le immagini sono nella cartella /abilit/ alla root del progetto.

interface HeroAbility {
  name: string;
  images: string[];        // percorsi relativi alle immagini nella cartella /abilit/
  description: string;     // testo HTML o semplice che descrive l'abilità
}

const heroData: Record<string, HeroAbility> = {
  ryker: {
    name: "Ryker",
    images: ["/abilit/ryker.png"],
    description:
      "Ryker è in range quindi può colpire in maniera diretta Agri, tira il dado, se supera l'agilità di Agri (3) infliggi 5 danni ad Agri e il colpo rimbalza"+
      "In questo caso il colpo rimbalza su Karka e Portium, il giocatore dovrà tirare il dado prima per uno e poi per l'altro per vedere se anche loro subiranno danni, in questo caso 3.",
  },
  montwel: {
    name: "Montwel",
    images: ["/abilit/montwel2.png"],
    description: "Montwel può decidere se attaccare a distanza o ravvicinato, ovviamente vale la regola generale che se si trova un nemico" +
    "davanti dovrà necessariamente essere colpito lui. Se Montwel decide di attaccare a distanza puòp attacare fino a range 4 in tal caso se l'attacco"+
    "va a buon fine l'avversario subirà 3 danni e sarà immobilizzato per un turno. Se Montwel decide di attaccare un bersaglio adiacente infliggerà 6 danni senza immbolizzare.",
  },
  gostrel: {
    name: "Gostrel",
    images: ["/abilit/gostrel.png"],
    description: "Inserisci qui la descrizione delle abilità di Gostrel.",
  },
  zayne: {
    name: "Zayne",
    images: ["/abilit/zayne.png"],
    description: "Inserisci qui la descrizione delle abilità di Zayne.",
  },
  theron: {
    name: "Theron",
    images: ["/abilit/theron.png"],
    description: "Inserisci qui la descrizione delle abilità di Theron.",
  },
  kenji: {
    name: "Kenji",
    images: ["/abilit/kenji1.png", "/abilit/kenji2.png"],
    description: "Inserisci qui la descrizione delle abilità di Kenji.",
  },
  kaelen: {
    name: "Kaelen",
    images: ["/abilit/kaelen1.png"],
    description: "Inserisci qui la descrizione delle abilità di Kaelen.",
  },
  hannya: {
    name: "Hannya",
    images: ["/abilit/hannya1.png", "/abilit/hannya2.png"],
    description: "Inserisci qui la descrizione delle abilità di Hannya.",
  },
  "sir-gideon": {
    name: "Sir Gideon",
    images: ["/abilit/sir.png"],
    description: "Inserisci qui la descrizione delle abilità di Sir Gideon.",
  },
  ollerts: {
    name: "Ollerts",
    images: ["/abilit/ollerts.png"],
    description: "Inserisci qui la descrizione delle abilità di Ollerts.",
  },
  grorn: {
    name: "Grorn",
    images: [],
    description: "Inserisci qui la descrizione delle abilità di Grorn.",
  },
};

export const Route = createFileRoute("/abilita-eroi/$heroId")({
  head: ({ params }) => {
    const hero = heroData[params.heroId];
    const heroName = hero?.name ?? params.heroId;
    return {
      meta: [
        { title: `${heroName} — Abilità | Megaad` },
        {
          name: "description",
          content: `Scopri le abilità speciali di ${heroName} nel gioco da tavolo Megaad.`,
        },
      ],
      links: [
        { rel: "canonical", href: `/abilita-eroi/${params.heroId}` },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Tangerine:wght@400;700&display=swap",
        },
      ],
    };
  },
  component: HeroAbilityPage,
});

function HeroAbilityPage() {
  const { heroId } = Route.useParams();
  const hero = heroData[heroId];

  if (!hero) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-gold-soft mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Eroe non trovato
          </h1>
          <Link
            to="/abilita-eroi"
            className="text-gold/70 hover:text-gold transition-colors duration-300"
          >
            ← Torna alla lista eroi
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <div className="px-6 pt-8 pb-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between gap-4">
          <Link
            to="/abilita-eroi"
            className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span style={{ fontFamily: "var(--font-display)" }}>Torna alla lista eroi</span>
          </Link>

          <AbilityFAQModal variant="button" />
        </div>
      </div>

      {/* Hero Content */}
      <section className="px-6 pt-8 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Hero Title */}
          <div className="text-center mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Abilità Eroe</p>
            <h1
              className="text-5xl md:text-6xl font-bold text-gold-soft"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {hero.name}
            </h1>
            <div className="mx-auto mt-5 h-px w-32 gold-divider" />
          </div>

          {/* Images + Description Layout */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Images Column */}
            <div className="flex flex-col gap-6">
              {hero.images.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg gold-frame bg-navy group"
                >
                  <div className="relative overflow-hidden">
                    {/* Spotlight overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(10,17,40,0.6)_100%)] z-10 pointer-events-none" />
                    <img
                      src={img}
                      alt={`${hero.name} abilità ${i + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}

              {hero.images.length === 0 && (
                <div className="overflow-hidden rounded-lg gold-frame bg-navy flex items-center justify-center aspect-[4/5]">
                  <p className="text-gold/40 text-sm italic">Immagine non ancora disponibile</p>
                </div>
              )}
            </div>

            {/* Description Column */}
            <div className="gold-frame rounded-lg bg-navy/80 p-8 md:p-10">
              <h2
                className="text-2xl font-semibold text-gold-soft mb-6 tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Descrizione Abilità
              </h2>
              <div className="text-foreground/85 leading-relaxed text-base md:text-lg space-y-4">
                <p>{hero.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
