
# Sito Megaad — Landing single-page

Sito vetrina in italiano per presentare il gioco da tavolo Megaad in arrivo, con un unico form di iscrizione per ricevere news (inviato a megaadgame@gmail.com).

## Stile

- Direzione "Fantasy epico scuro": blu navy profondo (#0a1a3a / #142a5c) come base, oro caldo (#c9a14a / #f0d78c) come accento, coerente col logo e con il manuale già caricato.
- Tipografia: display serif/blackletter elegante per titoli (richiama "MEGAAD" e i titoli delle carte), serif pulito per il corpo, corsivo decorativo per la lore (come nel manuale).
- Texture sottili da pergamena/tomo antico, divisori dorati ornati, bagliori discreti dietro al logo. Niente effetti generici "AI slop".

## Struttura della pagina (scroll unico)

1. **Hero**
   - Logo Megaad grande, centrato.
   - Tagline breve dal manuale ("Nel regno di Aethel il potere non sta solo nella forza bruta…").
   - Meta: 2 o 4 giocatori · 12+ · 45–60 min.
   - CTA principale: "Ricevi le news" → scroll al form.

2. **Lore / Ambientazione**
   - Testo completo dal manuale (metis + jugaad, due squadre, campo in mutamento).
   - Layout editoriale con cornice dorata, sfondo navy.

3. **Galleria Eroi (3 carte)**
   - Solo Xelif, Ollerts, Herkaimer (le 3 caricate, per evitare spoiler).
   - Card hover con leggero lift/glow oro, didascalia col nome.

4. **Come si gioca**
   - 3 blocchi sintetici con icone: Schieramento · Combattimento · Vittoria.
   - Punti chiave estratti dal manuale (mana, attacco base vs abilità, tiro D6 vs schivata, condizioni di vittoria 6-3 / 5-2 / 4-1 / 3-1 / 3-0).

5. **Contenuto della scatola**
   - Immagine della scatola Megaad a sinistra.
   - Lista a destra: 1 Plancia 8×10, 30 Carte Eroe (6 per classe), 30 Tasselli Eroe, 6 Carte Mappa, 10 Segnalini Ostacolo, 2 Block notes, 2 D6.

6. **Form interesse (sezione finale + ancora #news)**
   - Campi: Nome (opzionale), Email (obbligatoria), checkbox consenso.
   - Invio → email a **megaadgame@gmail.com** con oggetto "Nuovo interessato Megaad" e i dati inseriti.
   - Conferma a schermo ("Grazie! Ti scriveremo appena ci saranno novità.").
   - Nessun account, nessun database utente esposto.

7. **Footer**
   - Logo piccolo, © Megaad, link mailto a megaadgame@gmail.com, credit illustrazioni "Ill. Murtezani Azret".

## Asset da usare

Copio nel progetto questi upload:
- `Megaad` logo (estratto dalla scatola o ricreato pulito) e immagine scatola (`ChatGPT_Image_19_mag_2026_11_21_58.png`).
- Le 3 carte: `Xelif.png`, `Ollerts_finale.png`, `herkaimer_1.png`.
- Eventuali icone (mirino, fiume, montagna, fossa) le ricreo come SVG semplici in stile coerente per non dipendere dal ritaglio del PDF.

## Dettagli tecnici (per riferimento)

- TanStack Start, route singola `src/routes/index.tsx` (sostituisce il placeholder). SEO via `head()`: title "Megaad — Il gioco da tavolo fantasy strategico", description con tagline, og:image = immagine scatola.
- Design tokens (navy + oro) definiti come variabili `oklch` in `src/styles.css`; niente colori hardcoded nei componenti.
- Componenti riusabili: `Hero`, `LoreSection`, `HeroesGallery`, `HowToPlay`, `BoxContents`, `NewsForm`, `SiteFooter` in `src/components/megaad/`.
- Form: per inviare a `megaadgame@gmail.com` serve Lovable Cloud + dominio email Lovable. Server function `submitInterest` (validazione Zod su nome/email/consenso) che invia l'email di notifica. In assenza di dominio email, partirà il setup guidato come primo step (necessario solo una volta).
- Animazioni leggere (fade/slide on scroll) con Motion, niente animazioni su ogni elemento.
- Responsive mobile-first; menu non necessario (single page con CTA hero che scrolla al form).

## Cosa NON faccio (per restare sullo scope)

- Niente pagine multiple, niente blog, niente shop.
- Niente database visibile lato utente (gli iscritti arrivano via email; opzionalmente li logghiamo lato server se vorrai consultarli in futuro — da decidere dopo).
- Niente spoiler di altri eroi: mostro solo Xelif, Ollerts, Herkaimer.

## Materiale aggiuntivo utile (opzionale, non bloccante)

Posso partire subito con quello che ho. Se vuoi, in seguito potrai darmi:
- Una **data di uscita** o finestra ("Q1 2026", "Autunno 2026").
- Eventuale **prezzo** o link al preorder.
- Link social (Instagram/TikTok/BoardGameGeek) per il footer.
- Un'**immagine della plancia** in alta risoluzione per la sezione Contenuto.

Premi "Approva" per partire.
