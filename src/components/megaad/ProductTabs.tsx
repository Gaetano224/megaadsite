import { useState } from "react";
import { BookOpen, Layers, ClipboardList, Shield, User, Landmark, Palette, Settings } from "lucide-react";
import boxImg from "@/assets/megaad-box.png";

const contentsList = [
  "1 Plancia di gioco",
  "30 Carte Eroe",
  "30 Tasselli Eroe",
  "6 Carte Mappa",
  "8 Segnalini Ostacolo",
  "2 Block notes segnapunti per la gestione del Mana",
  "2 Dadi D6 da combattimento",
];

const specs = [
  { label: "IDEATORE", value: "G. MONGELLI", icon: User },
  { label: "AUTORI", value: "G. MONGELLI, A. MEI", icon: User },
  { label: "ILLUSTRATORE", value: "A. MURTEZANI", icon: Palette },
  { label: "MECCANICHE PRINCIPALI", value: "HERO DRAFT, GESTIONE RISORSE (MANA), TIRI DI DADO (D6), SKIRMISH TATTICO, FANTASY, STRATEGICO COMPETITIVO", icon: Settings },
];

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState<"desc" | "content" | "specs" | "rules">("desc");

  return (
    <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto scroll-mt-20" id="details-hub">
      {/* Tab Navigation */}
      <div className="flex border-b border-gold/20 overflow-x-auto no-scrollbar scroll-smooth">
        <button
          onClick={() => setActiveTab("desc")}
          className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 flex-shrink-0 ${
            activeTab === "desc"
              ? "border-gold text-gold bg-gold/5"
              : "border-transparent text-foreground/60 hover:text-gold-soft"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <BookOpen className="h-4 w-4" />
          Descrizione & Lore
        </button>

        <button
          onClick={() => setActiveTab("content")}
          className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 flex-shrink-0 ${
            activeTab === "content"
              ? "border-gold text-gold bg-gold/5"
              : "border-transparent text-foreground/60 hover:text-gold-soft"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Layers className="h-4 w-4" />
          Contenuto
        </button>

        <button
          onClick={() => setActiveTab("specs")}
          className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 flex-shrink-0 ${
            activeTab === "specs"
              ? "border-gold text-gold bg-gold/5"
              : "border-transparent text-foreground/60 hover:text-gold-soft"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <ClipboardList className="h-4 w-4" />
          Specifiche
        </button>

        <button
          onClick={() => setActiveTab("rules")}
          className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 flex-shrink-0 ${
            activeTab === "rules"
              ? "border-gold text-gold bg-gold/5"
              : "border-transparent text-foreground/60 hover:text-gold-soft"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Settings className="h-4 w-4" />
          Regolamento Tecnico
        </button>
      </div>

      {/* Tab Panels */}
      <div className="mt-8 gold-frame rounded-lg bg-navy/60 p-6 md:p-10 backdrop-blur-sm min-h-[400px] flex flex-col justify-center">
        
        {/* PANEL: DESCRIPTION */}
        {activeTab === "desc" && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-3xl text-gold mb-2 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Il Regno di Megaad ti attende
            </h3>
            <div className="grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-7 space-y-4">
                <p className="text-lg leading-relaxed text-foreground/90 font-serif">
                  Il nome <strong className="text-gold-soft">Megaad</strong> trae le sue radici da una fusione di due termini: <em className="text-gold-soft italic">Metis</em>, termine derivante dal greco che indica la scaltrezza strategica e l'ingegno pratico, e <em className="text-gold-soft">Jugaad</em> ,termine derivante dall'indiano che indica l'arte di trovare soluzioni geniali sfruttando al massimo risorse limitate.
                </p>
                <p className="text-base text-foreground/80 leading-relaxed">
                  In Megaad, non vincerai mai affidandoti solo alla fortuna. Su una griglia che cambierà di partita in partita, sarai chiamato a condurre una squadra di eroi unici, ciascuno dotato di abilità diverse tra loro. La tua mente è la tua risorsa più preziosa: pianifica con cura, gestisci il Mana e sconfiggi gli avversari un passo alla volta.
                </p>
              </div>
              <div className="md:col-span-5 border-l-2 border-gold/40 pl-6 py-2">
                <blockquote 
                  className="text-2xl italic text-gold-soft leading-relaxed" 
                  style={{ fontFamily: "var(--font-script)", fontSize: "2rem", lineHeight: 1.25 }}
                >
                  &ldquo;Nelle terre di Aethel, l'acciaio apre la strada, ma è l'ingegno lucido a incidere il nome dei vincitori nella leggenda.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {/* PANEL: CONTENTS */}
        {activeTab === "content" && (
          <div className="animate-fade-in grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-6 space-y-4">
              <h3 className="text-3xl text-gold mb-4 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                Componenti di Gioco
              </h3>
              <ul className="space-y-3">
                {contentsList.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-gold/10 pb-3 last:border-0">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rotate-45 bg-gold" />
                    <span className="text-foreground/90 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 flex justify-center">
              <div className="gold-frame rounded-lg overflow-hidden bg-navy-deep max-w-[400px] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={boxImg}
                  alt="Scatola del gioco da tavolo Megaad"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {/* PANEL: SPECS */}
        {activeTab === "specs" && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-3xl text-gold mb-6 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Scheda Informativa
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {specs.map(({ label, value, icon: Icon }) => (
                <div key={label} className="p-5 rounded-md bg-navy-deep/60 border border-gold/20 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                      <Icon className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                  </div>
                  <p className="text-lg font-medium text-foreground/90" style={{ fontFamily: label === "IDEATORE" || label === "AUTORI" || label === "ILLUSTRATORE" ? "var(--font-display)" : "inherit" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL: TECHNICAL RULES */}
        {activeTab === "rules" && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-3xl text-gold mb-2 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Compendio di Gioco & Meccaniche
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Megaad è uno scontro skirmish tattico su mappa quadrettata per 2 o 4 giocatori (in squadre da 2). Di seguito viene descritta una panoramica tecnica e sintetica del regolamento ufficiale.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 mt-4">
              <div className="p-5 rounded-md bg-navy-deep/40 border border-gold/10 space-y-3">
                <h4 className="text-lg uppercase tracking-widest text-gold-soft font-semibold">1. Fase di Preparazione (Draft & Mappa)</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  I giocatori scelgono i propri Eroi tramite un sistema di draft. Viene quindi pescata una <strong>Carta Mappa</strong> che definisce le zone di schieramento e la presenza di ostacoli sulla griglia 8×10. Questo assicura che ogni partita offra uno scenario strategico completamente inedito.
                </p>
              </div>

              <div className="p-5 rounded-md bg-navy-deep/40 border border-gold/10 space-y-3">
                <h4 className="text-lg uppercase tracking-widest text-gold-soft font-semibold">2. Flusso del Turno & Gestione Mana</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Ogni Giocatore ha a disposizione una determinata riserva di <strong>Punti Mana</strong> per turno. Il Mana viene speso per compiere azioni: Movimento, Attacchi Base o attivazione di Abilità Speciali.
                </p>
              </div>

              <div className="p-5 rounded-md bg-navy-deep/40 border border-gold/10 space-y-3">
                <h4 className="text-lg uppercase tracking-widest text-gold-soft font-semibold">3. Risoluzione dei Combattimenti</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Gli attacchi avvengono entro la gittata dell'arma o dell'abilità. Si lancia un <strong>Dado D6</strong> da combattimento: se il risultato è maggiore o uguale al Valore Schivata del bersaglio, l'attacco colpisce infliggendo i danni indicati.
                </p>
              </div>

              <div className="p-5 rounded-md bg-navy-deep/40 border border-gold/10 space-y-3">
                <h4 className="text-lg uppercase tracking-widest text-gold-soft font-semibold">4. Condizioni di Vittoria</h4>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  Lo scopo è sconfiggere gli eroi nemici fino ad arrivare a una differenza di 3 giocatori. In una partita 2vs2 si ha vittoria nei casi: <strong>6-3, 5-2, 4-1, 3-1</strong>. La partita finisce in parità in caso di: <strong>2-1, 1-1, 2-2</strong> (nel caso 1vs1 si esclude solo la combinazione 6-3).
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
