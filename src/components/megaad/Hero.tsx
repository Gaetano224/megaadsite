import { Users, Clock, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--gold)_0%,_transparent_60%)] opacity-15 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-gold tracking-wider text-shadow-deep"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MEGAAD
        </h1>

        <div className="my-6 h-px w-48 gold-divider" />

        <p
          className="text-xl md:text-2xl text-gold-soft max-w-2xl"
          style={{ fontFamily: "var(--font-script)", fontSize: "1.9rem", lineHeight: 1.3 }}
        >
          Nel regno di Aethel il potere non sta solo nella forza bruta,
          ma nell'astuzia e nell'ingegno.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gold-soft/90">
          <Meta icon={<Users className="h-5 w-5" />} label="2 o 4 giocatori" />
          <Meta icon={<Sparkles className="h-5 w-5" />} label="Età 12+" />
          <Meta icon={<Clock className="h-5 w-5" />} label="45–60 min" />
        </div>

        <a
          href="#news"
          className="mt-12 inline-flex items-center justify-center rounded-md border border-gold/60 bg-gold px-8 py-4 text-base font-semibold uppercase tracking-widest text-primary-foreground transition hover:bg-gold-soft hover:shadow-[0_0_40px_-5px_var(--gold)]"
        >
          Ricevi le news
        </a>

        <p className="mt-4 text-sm text-muted-foreground">
          Un solo email per restare aggiornato sull'uscita.
        </p>
      </div>
    </section>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em]">
      <span className="text-gold">{icon}</span>
      {label}
    </span>
  );
}
