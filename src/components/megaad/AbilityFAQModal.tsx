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
          {/* Mana and Activation */}
          <AccordionItem
            value="item-1"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-gold flex-shrink-0" />
                <span>1. Gestione Mana & Attivazione</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                Durante il proprio turno, ogni giocatore dispone di una riserva di <strong>Punti Mana (PM)</strong>. 
                Ogni abilità speciale riporta un costo specifico in Mana necessario per l'attivazione.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-gold-soft">Attivazione</strong>: Puoi lanciare un'abilità solo nel tuo turno d'azione, dichiarando il bersaglio ed effettuando la spesa di Mana richiesta.
                </li>
                <li>
                  <strong className="text-gold-soft">Limite di Mana</strong>: Non è possibile attivare abilità se i Punti Mana attuali sono inferiori al costo indicato.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Range and Distance */}
          <AccordionItem
            value="item-2"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Sword className="h-5 w-5 text-gold flex-shrink-0" />
                <span>2. Portata e Gittata (Caselle)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                La portata definisce la distanza massima (espressa in caselle della mappa 8×10) a cui l'abilità può fare effetto.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-gold-soft">Calcolo della Distanza</strong>: Si conta il percorso ortogonale e diagonale più breve per raggiungere il bersaglio.
                </li>
                <li>
                  <strong className="text-gold-soft">Abilità a Contatto (Mischia)</strong>: Richiedono che il bersaglio si trovi in una casella adiacente (distanza 1).
                </li>
                <li>
                  <strong className="text-gold-soft">Abilità a Distanza</strong>: Permettono di colpire bersagli lontani (es. Portata 3 o 4), ma sono soggette alle regole di Linea di Vista.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Line of Sight */}
          <AccordionItem
            value="item-3"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-gold flex-shrink-0" />
                <span>3. Linea di Vista (LoS)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                Per bersagliare un'unità nemica con un'abilità a distanza è necessario avere una <strong>linea di vista libera</strong>, tranne nei casi in cui l'abilità dichiari esplicitamente di ignorarla.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-gold-soft">Come si calcola</strong>: Traccia una linea immaginaria dal centro della casella dell'attaccante al centro della casella del difensore.
                </li>
                <li>
                  <strong className="text-gold-soft">Ostruzioni</strong>: Se la linea tocca o attraversa una casella con un ostacolo (es. pilastri, muri) o un altro eroe (nemico o alleato), la linea di vista è ostruita.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Status Effects */}
          <AccordionItem
            value="item-4"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Flame className="h-5 w-5 text-gold flex-shrink-0" />
                <span>4. Stati Alterati e Condizioni</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                Molte abilità lasciano effetti duraturi sui bersagli colpiti. Questi stati alterati vengono risolti all'inizio o alla fine del turno dell'eroe affetto.
              </p>
              <div className="grid gap-3 mt-2 sm:grid-cols-2">
                <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                  <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="h-3.5 w-3.5 text-gold" />
                    Stordito (Stun)
                  </h4>
                  <p className="text-xs text-foreground/85">
                    L'Eroe non può utilizzare abilità speciali né muoversi nel suo prossimo turno. Può solo eseguire attacchi base.
                  </p>
                </div>
                <div className="p-3 bg-navy-deep/60 rounded border border-gold/10">
                  <h4 className="text-gold-soft font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5 text-gold" />
                    Bruciato / Avvelenato
                  </h4>
                  <p className="text-xs text-foreground/85">
                    Subisce danni automatici fissi all'inizio di ogni suo turno di attivazione finché l'effetto non scade o viene curato.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Cooldowns */}
          <AccordionItem
            value="item-5"
            className="border border-gold/15 rounded-md bg-navy-deep/30 px-4 hover:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline text-gold-soft hover:text-gold font-medium py-4 text-base md:text-lg flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Hourglass className="h-5 w-5 text-gold flex-shrink-0" />
                <span>5. Ricarica e Limiti (Cooldown)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-3 pb-4">
              <p>
                Le abilità più devastanti non possono essere lanciate consecutivamente a ogni turno.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-gold-soft">Ricarica (CD)</strong>: Specifica il numero di turni del round che devono trascorrere prima che l'abilità ritorni disponibile.
                </li>
                <li>
                  <strong className="text-gold-soft">Limiti di Utilizzo</strong>: Alcune abilità passive o speciali sono limitate a "una volta per round" o "una volta per partita".
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
