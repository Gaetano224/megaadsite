import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/megaad/SiteFooter";
import { AbilityFAQModal } from "@/components/megaad/AbilityFAQModal";
import { AlertTriangle } from "lucide-react";

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
  agri: {
    name: "Agri",
    images: [],
    description:
      "Sciame Appiccicoso: Infligge 2 danni a un nemico entro gittata e contemporaneamente cura un alleato scelto di 2 Punti Vita. Può anche decidere di non attivare entrambi gli effetti ma se decide di farlo devono essere entrambi nel suo range.",
  },
  aiona: {
    name: "Aiona",
    images: [],
    description:
      "Vortice d'Acciaio: Infligge 4 danni a tutti i nemici presenti nelle caselle adiacenti ad Aiona (nelle caselle immediatamente sopra, sotto, destra e sinistra). Gli alleati non vengono colpiti.",
  },
  azrael: {
    name: "Azrael",
    images: [],
    description:
      "Colpo Consacrato: Infligge 4 danni a un nemico entro gittata. Se il bersaglio viene colpito da almeno un altro attacco entro l'inizio del prossimo turno di Azrael, il bersaglio subirà 2 danni aggiuntivi per ogni attacco ricevuto durante quel periodo.",
  },
  caspiana: {
    name: "Caspiana",
    images: [],
    description:
      "Trappola a Scatto: Infligge 6 danni a un bersaglio entro gittata. Inoltre, fino all'inizio del suo prossimo turno, il costo in Mana necessario al movimento del bersaglio viene raddoppiato.",
  },
  dianthra: {
    name: "Dianthra",
    images: [],
    description:
      "Lama di Mana: Infligge 6 danni a un nemico entro gittata. All'inizio del prossimo turno del giocatore che controlla il bersaglio, quel giocatore avrà 3 Mana in meno da spendere durante il turno.",
  },
  elara: {
    name: "Elara",
    images: [],
    description:
      "Dardo di Ghiaccio: Infligge 4 danni a un nemico entro gittata.  All'inizio del prossimo turno del bersaglio, il costo di movimento aumenta di 3 Mana per ogni casella percorsa.",
  },
  faelan: {
    name: "Faelan",
    images: [],
    description:
      "Tocco Rigenerante: Scegli un alleato. All'inizio dei suoi prossimi due turni, quell'alleato recupera 3 Punti Vita. L'effetto è cumulabile.",
  },
  gostrel: {
    name: "Gostrel",
    images: ["/abilit/gostrel.png"],
    description:
      "Provocazione del Colosso (Passiva): All'inizio del turno avversario, tutti i nemici entro la gittata di Gostrel devono effettuare immediatamente un attacco base contro di lui. Dopo aver eseguito questo attacco, a prescindere dall'esito, quei nemici non possono effettuare ulteriori attacchi durante quel turno.",
  },
  grorn: {
    name: "Grorn",
    images: [],
    description:
      "Carica Travolgente: Grorn si muove di 2 caselle in linea retta. Il primo nemico attraversato o raggiunto durante la carica subisce 4 danni. Lo spostamento termina immediatamente dopo aver colpito un bersaglio.",
  },
  hannya: {
    name: "Hannya",
    images: ["/abilit/hannya1.png", "/abilit/hannya2.png"],
    description:
      "Sguardo Incantatore: Scegli un nemico entro gittata. Il bersaglio viene ammaliato e può essere spostato fino a 3 caselle in direzione scelta dal giocatore che controlla Hannya (orrizontale o verticale). Al termine dello spostamento il bersaglio subisce 1 danno.",
  },
  herkaimer: {
    name: "Herkaimer",
    images: [],
    description:
      "Martello del Potere: Infligge 1 danno a tutti i nemici presenti in una colonna (questa abilità non ha range). Tutti i nemici colpiti diventano inoltre Immobilizzati fino al loro prossimo turno.",
  },
  ioluali: {
    name: "Ioluali",
    images: [],
    description:
      "Pasto Ideale: Scegli un alleato. All'inizio del suo prossimo turno recupererà 4 Punti Vita.",
  },
  istras: {
    name: "Istras",
    images: [],
    description:
      "Freccia Velenosa:  All'inizio dei suoi prossimi due turni (non immediatamente) il bersaglio subirà 3 danni per turno.",
  },
  kaelen: {
    name: "Kaelen",
    images: ["/abilit/kaelen1.png"],
    description:
      "Affondo Perforante: Kaelen colpisce fino a due nemici adiacenti tra loro e disposti in linea retta rispetto alla direzione dell'attacco. Entrambi i bersagli subiscono 4 danni. Se è presente un solo bersaglio valido, l'abilità colpisce soltanto quello.",
  },
  karka: {
    name: "Karka",
    images: [],
    description:
      "Nenia della Forza: Tutti gli alleati della squadra recuperano immediatamente 2 Punti Vita, indipendentemente dalla loro posizione sul campo di battaglia.",
  },
  kenji: {
    name: "Kenji",
    images: ["/abilit/kenji1.png", "/abilit/kenji2.png"],
    description:
      "Pugno di Salvezza: Kenji può scegliere un alleato oppure un nemico entro gittata:\n\n- Se il bersaglio è un alleato, viene spostato di 1 o 2 caselle in una direzione valida scelta dal giocatore che controlla Kenji.\n- Se il bersaglio è un nemico, viene spostato di 1 o 2 caselle, subisce 3 danni e viene inoltre Stordito fino all'inizio del suo prossimo turno. Un eroe stordito non può muoversi, attaccare o utilizzare abilità.",
  },
  kirin: {
    name: "Kirin",
    images: [],
    description:
      "Tiro di Fucile: Infligge 4 danni a un nemico entro gittata e lo Immobilizza fino alla fine del suo turno. Un bersaglio immobilizzato non può muoversi ma può comunque attaccare e utilizzare abilità dalla propria posizione.",
  },
  luver: {
    name: "Luver",
    images: [],
    description:
      "Potenza Suprema: Luver seleziona due nemici qualsiasi sul campo di battaglia, indipendentemente dalla distanza tra loro o dalla propria gittata e li scambia di posto tra di loro. Inoltre i due bersagli subiranno 2 danni",
  },
  montwel: {
    name: "Montwel",
    images: ["/abilit/montwel2.png"],
    description:
      "Mossa Imprevedibile: L'effetto dell'abilità dipende dalla distanza dal bersaglio:\n\n- Se il bersaglio si trova a una distanza compresa tra 2 e 4 caselle, subisce 3 danni e viene Immobilizzato fino all'inizio del suo prossimo turno.\n- Se il bersaglio si trova adiacente subisce invece 5 danni, senza subire immobilizzazione.",
  },
  ollerts: {
    name: "Ollerts",
    images: ["/abilit/ollerts.png"],
    description:
      "Morso del Pipistrello (Passiva): Quando Ollerts colpisce un nemico alle spalle, il suo attacco infligge 7 danni aggiuntivi. Un attacco è considerato \"alle spalle\" quando Ollerts si trova nella casella immediatamente opposta rispetto alla direzione verso cui è rivolto il bersaglio secondo l'orientamento del tassello.\n\n*Definizione ufficiale di \"alle spalle\": Si considera che Ollerts colpisca alle spalle se l'attacco viene effettuato posizionandosi nella casella che si trova alle spalle dell'orientamento del bersaglio (es. opposta alla direzione frontale del tassello dell'eroe bersaglio).*",
  },
  portium: {
    name: "Portium",
    images: [],
    description:
      "Colpo da Maestro: Portium infligge 4 danni a un nemico entro gittata. Questo attacco non richiede un tiro per colpire e non può essere evitato tramite il valore di Schivata del bersaglio.",
  },
  rapdar: {
    name: "Rapdar",
    images: [],
    description:
      "Urlo di Guerra: Scegli un alleato entro gittata. Il suo prossimo attacco base infliggerà 3 danni aggiuntivi. Il bonus viene consumato al primo attacco base effettuato.",
  },
  ryker: {
    name: "Ryker",
    images: ["/abilit/ryker.png"],
    description:
      "Fulmine a Catena: Infligge 5 danni al bersaglio principale scelto entro gittata. Inoltre, tutti i nemici adiacenti al bersaglio principale subiscono 3 danni aggiuntivi. Per ogni bersaglio bisognerà tirare il dado ma se il primo bersaglio schiva l'attacco automaticamente anche i bersagli adiacenti sono salvi. Gli alleati non vengono colpiti dall'effetto secondario.",
  },
  sertor: {
    name: "Sertor",
    images: [],
    description:
      "Vendetta Fredda: Sertor avvelena il bersaglio con un attacco speciale. Il nemico subisce 3 danni all'inizio dei suoi prossimi due turni. Gli effetti del veleno si applicano anche se Sertor viene sconfitto nel frattempo.",
  },
  sindaum: {
    name: "Sindaum",
    images: [],
    description:
      "Protezione Inumana: Sindaum protegge tutti gli alleati adiacenti a lei fino all'inizio del suo prossimo turno. Per ciascun alleato protetto vengono annullati i primi 6 danni subiti durante questo periodo. I danni eccedenti vengono applicati normalmente.",
  },
  "sir-gideon": {
    name: "Sir Gideon",
    images: ["/abilit/sir.png"],
    description:
      "Urto Poderoso: Scegli un nemico entro gittata e spostalo di 2 caselle in linea retta orizzontale o verticale. Al termine dello spostamento il bersaglio subisce 3 danni. Se lo spostamento viene interrotto da un ostacolo, il bersaglio viene fermato nella prima casella disponibile ma subisce comunque danni.",
  },
  theron: {
    name: "Theron",
    images: ["/abilit/theron.png"],
    description:
      "Presa Rampicante: Seleziona un'area 3×3 entro gittata purchè la casella centrale del quadrato 3x3 sia in gittata (può essere anche senza nemici). Tutti i nemici presenti nell'area subiscono 1 danno e diventano Immobilizzati fino all'inizio del loro prossimo turno. Un eroe immobilizzato non può muoversi ma può comunque attaccare e usare abilità.",
  },
  vespyr: {
    name: "Vespyr",
    images: [],
    description:
      "Patto di Sangue: Vespyr fa recuperare immediatamente 7 Punti Vita ad un alleato ma lui stesso subisce 2 danni. L'abilità non può curare un alleato oltre i suoi Punti Vita massimi.",
  },
  xelif: {
    name: "Xelif",
    images: [],
    description:
      "Caramella Appiccicosa: Infligge 3 danni a un nemico entro gittata e lo Immobilizza fino all'inizio del suo prossimo turno.",
  },
  zayne: {
    name: "Zayne",
    images: ["/abilit/zayne.png"],
    description:
      "Passo d'Ombra: Zayne si sposta in linea retta fino a una casella libera adiacente a un alleato scelto. Dopo lo spostamento infligge immediatamente 6 danni a un nemico entro gittata. A prescindere dall'esito dell'attacco zayne resterà in quella casella.",
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

          {/* Warning Banner: Pagina in aggiornamento */}
          <div className="max-w-3xl mx-auto mb-10 flex items-center gap-3 bg-gold/10 border border-gold/40 text-gold-soft px-4 py-3.5 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <AlertTriangle className="h-5 w-5 text-gold flex-shrink-0 animate-pulse" />
            <p className="text-sm font-medium">
              <strong>Pagina in aggiornamento:</strong> stiamo allineando tutte le descrizioni delle abilità degli eroi al regolamento ufficiale.
            </p>
          </div>

          {/* Description + Images Layout */}
          <div className={`grid gap-10 items-start ${hero.images && hero.images.length > 0 ? "md:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"}`}>
            {/* Description Column */}
            <div className="gold-frame rounded-lg bg-navy/80 p-8 md:p-10">
              <h2
                className="text-2xl font-semibold text-gold-soft mb-6 tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Descrizione Abilità
              </h2>
              <div className="text-foreground/85 leading-relaxed text-base md:text-lg space-y-4 whitespace-pre-line">
                <p>{hero.description}</p>
              </div>
            </div>

            {/* Images Column (Rendered only if images exist) */}
            {hero.images && hero.images.length > 0 && (
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
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
