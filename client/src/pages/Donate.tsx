import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { ChatWidget } from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, Lock } from "lucide-react";

export function Donate() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Faire un Don</h1>
           <p className="text-lg opacity-90">Votre générosité restaure la dignité.</p>
        </div>

        <Section>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Pourquoi donner ?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chaque contribution au FONAREV aide directement à financer les soins médicaux, l'accompagnement psychologique et la réinsertion socio-économique des survivantes et survivants. Ensemble, nous pouvons reconstruire des vies.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                 <Card>
                   <CardHeader><CardTitle className="text-lg text-primary">Impact Direct</CardTitle></CardHeader>
                   <CardContent className="text-sm text-muted-foreground">
                     100% de votre don est affecté aux programmes de réparation.
                   </CardContent>
                 </Card>
                 <Card>
                   <CardHeader><CardTitle className="text-lg text-primary">Transparence</CardTitle></CardHeader>
                   <CardContent className="text-sm text-muted-foreground">
                     Nos rapports financiers sont publics et audités chaque année.
                   </CardContent>
                 </Card>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Nos engagements</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Traçabilité complète des fonds</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Paiements sécurisés</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Confidentialité des donateurs</span>
                </li>
              </ul>
            </div>

            {/* Donation Form Simulation */}
            <div className="bg-card border shadow-xl rounded-xl p-6">
              <div className="flex items-center gap-2 text-primary mb-6 justify-center">
                <Lock className="h-5 w-5" />
                <span className="font-semibold text-sm">Paiement 100% Sécurisé</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {['10$', '25$', '50$', '100$', '500$', 'Autre'].map((amount) => (
                  <Button key={amount} variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                    {amount}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 text-lg">
                  Donner par Carte Bancaire
                </Button>
                <Button variant="outline" className="w-full h-12">
                  Mobile Money (M-Pesa, Airtel)
                </Button>
                <Button variant="outline" className="w-full h-12">
                  Virement Bancaire
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-6">
                En cliquant sur "Donner", vous acceptez nos conditions générales d'utilisation.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
