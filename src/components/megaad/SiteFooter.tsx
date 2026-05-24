export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 px-6 py-10 text-center">
      <div className="mx-auto max-w-4xl space-y-3">
        <div
          className="text-2xl tracking-widest text-gold-soft"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MEGAAD
        </div>
        <div className="text-sm text-muted-foreground">
          <a
            href="mailto:megaadgame@gmail.com"
            className="text-gold hover:text-gold-soft transition"
          >
            megaadgame@gmail.com
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          Ill. Murtezani Azret &middot; © {new Date().getFullYear()} Megaad. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
