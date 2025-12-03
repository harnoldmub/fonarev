import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { ChatWidget } from "@/components/ChatWidget";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">À Propos du FONAREV</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre engagement pour la justice, la dignité et la réparation.
            </p>
          </div>
        </div>

        <Section>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Mission */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Notre Mission</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Assurer la réparation des victimes de violences sexuelles et de violations des droits humains, en leur offrant justice, dignité et réintégration socio-économique.
                </p>
              </div>
            </div>

            <Separator />

            {/* Vision */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Notre Vision</h2>
              <div className="bg-secondary/10 p-8 rounded-xl border border-secondary/20">
                <p className="text-xl font-serif italic text-primary">
                  "Une société congolaise où chaque survivant retrouve sa place, sa dignité et son avenir."
                </p>
              </div>
            </div>

            <Separator />

            {/* Values */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Nos Valeurs</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Intégrité", "Respect de la dignité", "Transparence", "Humanité", "Justice"].map((val) => (
                  <Card key={val} className="bg-background border-muted hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="font-semibold text-foreground">{val}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

             <Separator />

             {/* Governance Placeholder */}
             <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Gouvernance</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le FONAREV est dirigé par un comité directeur et une coordination nationale qui veillent à la mise en œuvre transparente et efficace des programmes de réparation.
                </p>
                {/* Add Organigram placeholder here if needed */}
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center border border-dashed">
                  <span className="text-sm text-muted-foreground">Organigramme et Comité Directeur</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
