import { ArrowDownRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f7f6]" aria-labelledby="hero-title">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <img src="/assets/hero/hero_bg_women.jpg" alt="Une communauté réunie dans un moment de partage" className="h-full w-full object-cover grayscale-[12%]" />
        <div className="absolute inset-0 bg-primary/15" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
      <div className="container relative mx-auto grid min-h-[640px] items-end px-5 pb-14 pt-36 sm:px-8 lg:grid-cols-[1.12fr_.88fr] lg:px-10 lg:pb-20 lg:pt-40">
        <div className="max-w-3xl">
          <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">République Démocratique du Congo</p>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70">FONAREV</p>
          <h1 id="hero-title" className="max-w-2xl text-[clamp(3.2rem,7vw,6.5rem)] font-serif font-semibold leading-[0.92] text-foreground">Réparer.<br />Reconnaître.<br /><span className="text-primary">Reconstruire.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Le Fonds National de Réparation des Victimes œuvre pour que les victimes de violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de l’humanité soient placées au cœur du processus de réparation.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Découvrir le FONAREV <ArrowDownRight className="h-4 w-4" /></Link>
            <a href="#parcours" className="inline-flex min-h-12 items-center justify-center border border-foreground/25 px-6 text-sm font-bold text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Comprendre le parcours</a>
          </div>
          <div className="relative mt-10 h-56 overflow-hidden sm:h-72 lg:hidden">
            <img src="/assets/hero/hero_bg_women.jpg" alt="Une communauté réunie dans un moment de partage" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
        <div className="mt-12 border-l border-primary/35 pl-5 lg:mb-1 lg:mt-0 lg:ml-12 lg:max-w-xs"><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">Notre mandat</p><p className="mt-3 font-serif text-xl leading-snug text-foreground">Une réponse publique fondée sur la dignité, la justice et la mémoire.</p></div>
      </div>
    </section>
  );
}
