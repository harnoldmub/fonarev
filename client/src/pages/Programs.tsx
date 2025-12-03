import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/shared/Section";
import { ChatWidget } from "@/components/ChatWidget";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Stethoscope, HeartHandshake, Briefcase, Scale, GraduationCap } from "lucide-react";

export function Programs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Réparations & Programmes</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Un processus complet pour accompagner les victimes vers la reconstruction.
            </p>
          </div>
        </div>

        {/* Types of Reparations */}
        <Section>
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Types de Réparations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: "Réparation Médicale", desc: "Prise en charge des soins de santé physique." },
              { icon: HeartHandshake, title: "Aide Psychosociale", desc: "Soutien psychologique et thérapies de groupe." },
              { icon: Briefcase, title: "Redevabilité Économique", desc: "Formation professionnelle et AGR (Activités Génératrices de Revenus)." },
              { icon: Scale, title: "Aide Juridique", desc: "Accompagnement dans les démarches judiciaires." },
              { icon: GraduationCap, title: "Éducation", desc: "Scolarisation des enfants nés du viol et des orphelins." },
              { icon: CheckCircle2, title: "Réhabilitation", desc: "Projets communautaires et mémoriels." },
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-secondary">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section className="bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Le Processus de Réparation</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-ml-px"></div>
              
              {[
                "Identification et orientation des victimes",
                "Enregistrement & évaluation des besoins",
                "Mise en œuvre du plan de réparation",
                "Suivi psychosocial et économique",
                "Réinsertion et accompagnement"
              ].map((step, idx) => (
                <div key={idx} className={`relative flex items-center mb-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold z-10 border-4 border-white shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1 ml-12 md:ml-0 md:px-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h3 className="font-bold text-primary">{step}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">FAQ Victimes</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Qui peut bénéficier de la réparation ?</AccordionTrigger>
                <AccordionContent>
                  Toute victime de violences sexuelles liées aux conflits et de crimes contre la paix et la sécurité de l'humanité en RDC, ainsi que leurs ayants droit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Comment soumettre une demande ?</AccordionTrigger>
                <AccordionContent>
                  Vous pouvez vous rendre dans l'un de nos bureaux provinciaux, contacter notre ligne d'assistance, ou utiliser le formulaire en ligne sécurisé.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Les services sont-ils gratuits ?</AccordionTrigger>
                <AccordionContent>
                  Oui, tous les services offerts par le FONAREV (médical, juridique, psychologique) sont entièrement gratuits pour les victimes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Mes données sont-elles protégées ?</AccordionTrigger>
                <AccordionContent>
                  Absolument. Nous appliquons une politique de confidentialité stricte. Vos informations sont sécurisées et ne sont partagées qu'avec les prestataires de soins nécessaires, avec votre consentement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
