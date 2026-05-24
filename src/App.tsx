import "./styles.css";
import { Hero } from "@/components/megaad/Hero";
import { Lore } from "@/components/megaad/Lore";
import { Heroes } from "@/components/megaad/Heroes";
import { HowToPlay } from "@/components/megaad/HowToPlay";
import { BoxContents } from "@/components/megaad/BoxContents";
import { NewsForm } from "@/components/megaad/NewsForm";
import { SiteFooter } from "@/components/megaad/SiteFooter";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <div className="gold-divider" />
      </div>
      <Lore />
      <Heroes />
      <HowToPlay />
      <BoxContents />
      <NewsForm />
      <SiteFooter />
    </main>
  );
}
