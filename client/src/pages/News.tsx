import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { ChatWidget } from "@/components/ChatWidget";

export function News() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted py-12 text-center">
           <h1 className="text-3xl font-serif font-bold text-primary">Actualités & Médiathèque</h1>
        </div>
        <Section>
          <div className="text-center text-muted-foreground py-12">
            <p>Contenu des actualités à venir...</p>
          </div>
        </Section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
