import React from "react";
import { HelpCircle, BookOpen, Sparkles, Sword, Flame, ShieldAlert, Hourglass, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AbilityFAQModalProps {
  variant?: "banner" | "button";
}

export function AbilityFAQModal({ variant = "banner" }: AbilityFAQModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {variant === "banner" ? (
          <button className="w-full text-left group relative overflow-hidden rounded-lg gold-frame bg-navy/90 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.25)] cursor-pointer block border border-gold/30">
            {/* Hover Glow & Corner Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="h-6 w-6 text-gold-soft" />
                </div>
                <div>
                  <h3
                    className="text-lg md:text-xl font-bold text-gold-soft group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Hai dubbi su come funziona un'abilità?
                  </h3>
                  <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
                    Visualizza il Compendio di Gioco per scoprire i costi in Mana, la linea di vista, i cooldown e gli effetti di stato degli eroi.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 self-end md:self-center">
                <span
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold bg-gold/10 hover:bg-gold/20 px-4 py-2.5 rounded border border-gold/40 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Clicca qui per la guida
                </span>
              </div>
            </div>
          </button>
        ) : (
          <button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-soft bg-navy-deep/60 hover:bg-navy border border-gold/40 hover:border-gold px-4 py-2.5 rounded transition-all duration-300 cursor-pointer shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]">
            <HelpCircle className="h-4 w-4 text-gold" />
            <span style={{ fontFamily: "var(--font-display)" }}>Dubbi sulle Abilità?</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="bg-navy/95 border-gold/40 text-foreground gold-frame max-w-2xl max-h-[85vh] overflow-y-auto backdrop-blur-md rounded-lg p-6 md:p-8">
        <DialogHeader className="mb-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-2 justify-center sm:justify-start">
            <BookOpen className="h-6 w-6 text-gold" />
            <DialogTitle
              className="text-2xl md:text-3xl text-gold-soft font-bold tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Compendio delle Abilità
            </DialogTitle>
          </div>
          <DialogDescription className="text-foreground/70 text-sm text-center sm:text-left">
            Tutto quello che c'è da sapere sulle meccaniche e l'uso dei poteri speciali degli eroi di Megaad.
          </DialogDescription>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-4" />
        </DialogHeader>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Mana Management */}
          <AccordionItem
            value="item-1"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-gold flex-shrink-0" />
                <span>1. Gestione Mana</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                In una partita a 2 giocatori per ogni turno avrete a disposizione <strong>20 MANA</strong>, in una partita a 4 avrete a disposizione <strong>15 MANA</strong> per turno.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-gold-soft">Inizio Turno</strong>: All'inizio di ogni turno ogni giocatore dispone di Mana. I Mana non spesi durante il turno vengono persi a fine turno.
                </li>
                <li>
                  <strong className="text-gold-soft">Ordine di Attivazione</strong>: Durante il proprio turno è possibile attivare gli Eroi in qualsiasi ordine.
                </li>
                <li>
                  <strong className="text-gold-soft">Costo delle Azioni</strong>: Ogni giocatore può compiere qualsiasi numero di azioni, purché il costo in Mana venga pagato.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Hero Actions */}
          <AccordionItem
            value="item-2"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Sword className="h-5 w-5 text-gold flex-shrink-0" />
                <span>2. Azioni degli Eroi</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                Ogni eroe durante il turno, oltre a muoversi potrà solo usare attacco base <strong>O</strong> abilità speciale, <strong>MAI</strong> entrambe.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-gold-soft">Movimento</strong>: Sposta l'eroe di quante caselle desideri. Il Costo dello spostamento vale per ogni singola casella.
                </li>
                <li>
                  <strong className="text-gold-soft">Attacco Base</strong>: Procura al nemico danni secondo il valore Danno dell'attacco base indicato sulla carta e ha un proprio costo. Effettua un tiro per colpire contro il Valore Schivata del bersaglio.
                </li>
                <li>
                  <strong className="text-gold-soft">Abilità Speciale</strong>: Ha un proprio costo. Se l'abilità è offensiva, richiede un tiro per colpire contro il Valore Schivata del bersaglio; se è difensiva, non richiede alcun tiro. La lettera <strong>P</strong> indica che l'abilità è sempre attiva e si verifica nelle condizioni specificate nell'abilità stessa.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Useful Terms */}
          <AccordionItem
            value="item-3"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-gold flex-shrink-0" />
                <span>3. Termini Utili</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-4 pb-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                  <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1">
                    Stordire
                  </h4>
                  <p className="text-xs text-foreground/85">
                    Impedire al bersaglio di muoversi e di compiere qualsiasi azione, inclusi gli attacchi.
                  </p>
                </div>
                <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                  <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1">
                    Immobilizzare
                  </h4>
                  <p className="text-xs text-foreground/85">
                    Rendere impossibile il movimento del bersaglio, che può comunque attaccare dalla propria posizione.
                  </p>
                </div>
                <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                  <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1">
                    Adiacenti
                  </h4>
                  <p className="text-xs text-foreground/85">
                    Le caselle immediatamente sopra, sotto, a destra e a sinistra rispetto a un Eroe o punto di riferimento. Le diagonali non contano.
                  </p>
                </div>
                <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                  <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1">
                    Spostare di X Caselle
                  </h4>
                  <p className="text-xs text-foreground/85">
                    Spostare un Eroe in linea retta (orizzontale o verticale) per il numero di caselle indicato.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1">
                  Schivare il colpo
                </h4>
                <p className="text-xs text-foreground/85">
                  Il risultato del dado dell'attaccante è inferiore al Valore Schivata del bersaglio.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Roll to Hit */}
          <AccordionItem
            value="item-4"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Flame className="h-5 w-5 text-gold flex-shrink-0" />
                <span>4. Tiro per Colpire (D6)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-2 pb-4">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Dichiarare tipo di attacco e bersaglio.</li>
                <li>Tirare 1D6.</li>
                <li>Se il risultato è maggiore o uguale al Valore Schivata del bersaglio, l'attacco colpisce. Se il risultato è inferiore, il colpo viene schivato.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          {/* Obstacles and Terrain */}
          <AccordionItem
            value="item-5"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-gold flex-shrink-0" />
                <span>5. Ostacoli e Terreno</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <ul className="space-y-3">
                <li>
                  <strong className="text-gold-soft">MIRINO</strong>: Chi attacca nella colonna o nella riga del Mirino ottiene +1 alla Gittata (solo se la Gittata base è almeno 2). Il bonus non si applica se ci si trova direttamente sulla casella Mirino.
                </li>
                <li>
                  <strong className="text-gold-soft">FIUME</strong>: Chi attacca nella colonna o nella riga del Fiume subisce -1 alla Gittata (solo se la Gittata base è almeno 2). Gli Eroi possono attraversarlo ma non fermarsi sopra.
                </li>
                <li>
                  <strong className="text-gold-soft">MONTAGNA</strong>: Blocca il passaggio e la linea di vista. Non si può attaccare attraverso. Gli Assassini possono attraversarla ma non fermarsi sopra.
                </li>
                <li>
                  <strong className="text-gold-soft">FOSSA</strong>: Nessun Eroe può attraversarla o fermarsi sopra. Si può attaccare attraverso. I Combattenti possono attraversarla ma non fermarsi sopra.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Per ulteriori dettagli sui calcoli del tiro di Dado (D6) e Schivata, fai riferimento al{" "}
            <a href="/" className="text-gold hover:underline font-semibold">
              Regolamento Tecnico
            </a>{" "}
            in Home Page.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
