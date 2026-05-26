import { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";
import { db } from "@/integrations/firebase/client";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { SectionTitle } from "./SectionTitle";

export function NewsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus("error");
      setErrorMsg("Inserisci un'email valida.");
      return;
    }

    try {
      await addDoc(collection(db, "news_interest"), {
        name: name.trim() || null,
        email: trimmedEmail,
        consent,
        created_at: serverTimestamp(),
      });

      setStatus("ok");
      setName("");
      setEmail("");
      setConsent(false);
    } catch (err) {
      console.error("[newsletter] submit failed", err);
      const errMsg = err instanceof Error ? err.message : "";
      const isNetworkIssue = /failed to fetch|network|offline/i.test(errMsg);
      const isPermissionIssue = /permission-denied|missing-permission/i.test(errMsg);
      
      setStatus("error");
      if (isPermissionIssue) {
        setErrorMsg(
          "Errore di autorizzazione (Permission Denied). Assicurati che le regole di sicurezza di Firestore permettano la scrittura pubblica sulla collection 'news_interest'."
        );
      } else if (isNetworkIssue) {
        setErrorMsg(
          "Problema di connessione al servizio newsletter. Controlla la tua connessione e riprova."
        );
      } else {
        setErrorMsg("Qualcosa è andato storto. Riprova tra poco.");
      }
    }
  }

  return (
    <section id="news" className="px-6 py-24 md:py-32 scroll-mt-12">
      <div className="mx-auto max-w-xl">
        <SectionTitle eyebrow="Resta aggiornato" title="Ricevi le news" />

        <p className="mb-8 text-center text-foreground/85">
          Lasciaci la tua email: ti scriveremo solo per annunci importanti
          sull'uscita di Megaad.
        </p>

        <div className="gold-frame rounded-lg bg-navy/70 p-8 backdrop-blur-sm">
          {status === "ok" ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-navy-deep">
                <Check className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-2xl text-gold-soft mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Grazie!
              </h3>
              <p className="text-foreground/85">
                Ti scriveremo appena ci saranno novità su Megaad.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-widest text-gold-soft">
                  Nome <span className="text-muted-foreground normal-case tracking-normal">(opzionale)</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="w-full rounded-md border border-gold/40 bg-navy-deep px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  placeholder="Come ti chiami?"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-widest text-gold-soft">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  className="w-full rounded-md border border-gold/40 bg-navy-deep px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  placeholder="tu@esempio.it"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-foreground/85 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 cursor-pointer accent-[color:var(--gold)]"
                  required
                />
                <span>
                  Acconsento a ricevere comunicazioni email sul gioco Megaad.
                </span>
              </label>

              {errorMsg && (
                <p className="rounded-md border border-destructive/50 bg-destructive/15 px-4 py-3 text-sm text-destructive-foreground">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !consent}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Invio in corso…
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Iscrivimi
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
