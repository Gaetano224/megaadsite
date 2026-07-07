import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/megaad/SectionTitle";
import { SiteFooter } from "@/components/megaad/SiteFooter";

const heroes = [
  { id: "ryker", name: "Ryker" },
  { id: "montwel", name: "Montwel" },
  { id: "gostrel", name: "Gostrel" },
  { id: "zayne", name: "Zayne" },
  { id: "theron", name: "Theron" },
  { id: "kenji", name: "Kenji" },
  { id: "kaelen", name: "Kaelen" },
  { id: "hannya", name: "Hannya" },
  { id: "sir-gideon", name: "Sir Gideon" },
  { id: "ollerts", name: "Ollerts" },
  { id: "grorn", name: "Grorn" },
];

export const Route = createFileRoute("/abilita-eroi/")({
  head: () => ({
    meta: [
      { title: "Abilità Eroi — Megaad" },
      {
        name: "description",
        content:
          "Scopri le abilità speciali di tutti gli eroi di Megaad. Ogni eroe ha un potere unico che può cambiare le sorti della battaglia.",
      },
    ],
    links: [
      { rel: "canonical", href: "/abilita-eroi" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Tangerine:wght@400;700&display=swap",
      },
    ],
  }),
  component: AbilitaEroi,
});

function AbilitaEroi() {
  return (
    <main className="min-h-screen">
      {/* Header / Back navigation */}
      <div className="px-6 pt-8 pb-4">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
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
            <span style={{ fontFamily: "var(--font-display)" }}>Torna alla Home</span>
          </Link>
        </div>
      </div>

      {/* Title Section */}
      <section className="px-6 pt-8 pb-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Poteri & Abilità" title="Abilità degli Eroi" />
          <p className="mx-auto mb-16 max-w-2xl text-center text-foreground/80 text-base md:text-lg">
            Seleziona un eroe per scoprire le sue abilità speciali, i suoi attacchi devastanti
            e le strategie migliori per dominare il campo di battaglia.
          </p>
        </div>
      </section>

      {/* Hero Buttons Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {heroes.map((hero) => (
              <Link
                key={hero.id}
                to="/abilita-eroi/$heroId"
                params={{ heroId: hero.id }}
                className="hero-ability-btn group relative overflow-hidden rounded-lg gold-frame bg-navy px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_-10px_rgba(212,175,55,0.3)] cursor-pointer block no-underline"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hero Name */}
                <span
                  className="relative z-10 text-xl md:text-2xl font-semibold text-gold-soft group-hover:text-gold transition-colors duration-300 tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {hero.name}
                </span>

                {/* Subtitle */}
                <span className="relative z-10 block mt-2 text-[10px] uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold/70 transition-colors duration-300">
                  Scopri abilità →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
