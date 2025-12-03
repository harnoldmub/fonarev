import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { ChatWidget } from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary py-12 text-center">
           <h1 className="text-3xl font-serif font-bold text-white">Contactez-nous</h1>
        </div>

        <Section>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Nos Coordonnées</h2>
              <p className="text-muted-foreground mb-8">
                Pour toute question, demande d'information ou besoin d'assistance, nos équipes sont à votre écoute.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Siège Social</h3>
                    <p className="text-muted-foreground">
                      Boulevard du 30 Juin, Kinshasa/Gombe<br />
                      République Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Téléphone</h3>
                    <p className="text-muted-foreground">+243 000 000 000</p>
                    <p className="text-sm text-muted-foreground">(Lundi - Vendredi, 8h - 17h)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg text-secondary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contact@fonarev.cd</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-muted h-64 rounded-xl w-full flex items-center justify-center border">
                <span className="text-muted-foreground flex items-center gap-2"><MapPin /> Google Maps Integration</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card shadow-lg rounded-xl p-8 border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Envoyez-nous un message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Objet de votre message" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" className="min-h-[150px]" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
