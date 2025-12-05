import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/hero/hero_bg_women.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Fonds National de Réparation des Victimes
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Justice, Dignité <br />
            <span className="text-secondary italic">et Réparation.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Nous œuvrons pour la justice et la reconstruction des vies des victimes de violences sexuelles et basées sur le genre en République Démocratique du Congo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/about">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-14 px-8 text-base">
                Découvrir notre mission
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold h-14 px-8 text-base">
                Vous avez besoin d'aide ?
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}
