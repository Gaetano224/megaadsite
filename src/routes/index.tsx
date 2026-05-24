import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/megaad/Hero";
import { ProductTabs } from "@/components/megaad/ProductTabs";
import { Heroes } from "@/components/megaad/Heroes";
import { HowToPlay } from "@/components/megaad/HowToPlay";
import { NewsForm } from "@/components/megaad/NewsForm";
import { SiteFooter } from "@/components/megaad/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Megaad — Il gioco da tavolo fantasy strategico" },
      {
        name: "description",
        content:
          "Megaad: gioco da tavolo fantasy per 2 o 4 giocatori. Schiera i tuoi eroi, domina il campo di Aethel e iscriviti per ricevere le news sull'uscita.",
      },
      { property: "og:title", content: "Megaad — Il gioco da tavolo fantasy strategico" },
      {
        property: "og:description",
        content:
          "Due squadre, eroi unici, un campo in continuo mutamento. Iscriviti per ricevere le news sull'uscita di Megaad.",
      },
      { property: "og:type", content: "website" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Tangerine:wght@400;700&display=swap",
      },
    ],
  }),
  component: Index,
});

// Premium board game showcase inspired by Cranio Creations
function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <div className="gold-divider" />
      </div>
      <ProductTabs />
      <Heroes />
      <HowToPlay />
      <NewsForm />
      <SiteFooter />
    </main>
  );
}
