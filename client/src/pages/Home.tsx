import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/shared/Section";
import { ChatWidget } from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Shield, Heart, Scale, Megaphone } from "lucide-react";
import { Link } from "wouter";

export function Home() {
  const axes = [
    { icon: Users, title: "Réparation Individuelle", desc: "Soutien direct aux victimes identifiées." },
    { icon: Users, title: "Réparation Collective", desc: "Projets communautaires pour la reconstruction." },
    { icon: Heart, title: "Accompagnement Psychosocial", desc: "Guérison des traumatismes et soutien mental." },
    { icon: Shield, title: "Réhabilitation Communautaire", desc: "Restaurer le tissu social et la sécurité." },
    { icon: Megaphone, title: "Plaidoyer", desc: "Sensibilisation et défense des droits." },
  ];

  const news = [
    { date: "02 Dec 2025", title: "Lancement de la campagne de sensibilisation à Goma", category: "Événement" },
    { date: "28 Nov 2025", title: "Nouveau rapport sur l'impact des réparations collectives", category: "Rapport" },
    { date: "15 Nov 2025", title: "Visite officielle des partenaires internationaux", category: "Institutionnel" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Mission Section */}
        <Section className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Qui sommes-nous ?</h2>
              <div className="h-1 w-20 bg-secondary rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le FONAREV est un établissement public chargé de mettre en œuvre la réparation en faveur des victimes de violences sexuelles et des violations graves des droits humains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous accompagnons les survivantes et survivants en leur offrant un soutien réparateur, psychosocial, économique et juridique. Notre mission est de restaurer la dignité brisée et de permettre une réintégration durable.
              </p>
              <Link href="/about">
                <Button variant="link" className="p-0 text-primary font-semibold hover:text-primary/80 text-lg">
                  En savoir plus sur notre histoire <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] bg-muted rounded-2xl overflow-hidden shadow-xl">
               {/* Placeholder for 'About' image - using a colored gradient block for now or generic styling */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                 <Scale className="h-32 w-32 text-primary/20" />
               </div>
            </div>
          </div>
        </Section>

        {/* Axes d'intervention */}
        <Section className="bg-muted/30">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Nos Axes d'Intervention</h2>
            <p className="text-muted-foreground">
              Une approche holistique pour une réparation complète et durable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {axes.map((axe, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <axe.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{axe.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{axe.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* News Section */}
        <Section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Actualités</h2>
              <p className="text-muted-foreground">Les dernières nouvelles du FONAREV</p>
            </div>
            <Link href="/actualites">
              <Button variant="outline">Voir tout</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  {/* Placeholder image logic */}
                </div>
                <div className="flex items-center gap-2 text-xs text-secondary-foreground/70 font-medium mb-2">
                  <span className="bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full">{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-0">
          <div className="bg-primary rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Votre soutien change des vies
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Chaque contribution aide à restaurer la dignité, soutenir la reconstruction de vies brisées et renforcer la lutte contre les violences sexuelles.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/faire-un-don">
                   <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 h-14">
                    Faire un don maintenant
                  </Button>
                </Link>
                <Link href="/contact">
                   <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14">
                    Devenir partenaire
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
        
        <div className="h-16" /> {/* Spacer */}
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}
