import { ArrowRight, FileText, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";

const missions = [
  ["01", "Identification et orientation", "Faire connaître les mécanismes d’accès et orienter les personnes vers les services compétents."],
  ["02", "Accompagnement", "Prendre en compte les besoins des victimes tout au long de leur parcours."],
  ["03", "Réparation", "Mettre en œuvre les formes de réparation prévues par le mandat du FONAREV."],
  ["04", "Mémoire et reconstruction", "Contribuer à une reconstruction qui reconnaît les préjudices et protège la dignité."],
];

const steps = ["Identification", "Enregistrement", "Évaluation", "Accompagnement", "Réparation", "Suivi"];

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />

        <section className="border-b border-border bg-white py-20 sm:py-28">
          <div className="container mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-10">
            <p className="section-label">01 / MISSION DU FONAREV</p>
            <div>
              <h2 className="max-w-4xl text-4xl font-serif font-semibold leading-[1.08] text-foreground sm:text-5xl">Placer les victimes au cœur du processus de réparation et de reconstruction.</h2>
              <div className="mt-9 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
                <p className="text-base leading-7 text-muted-foreground">Le FONAREV est un établissement public chargé de mettre en œuvre la réparation en faveur des victimes de violences sexuelles et des violations graves des droits humains.</p>
                <Link href="/about" className="group inline-flex items-center gap-3 self-start text-sm font-bold text-primary">Comprendre notre mandat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="missions" className="bg-[#f5f7f6] py-20 sm:py-28">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-label">02 / NOS MISSIONS</p><h2 className="mt-4 text-4xl font-serif font-semibold sm:text-5xl">Agir avec méthode,<br />écouter avec attention.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Les actions présentées ici traduisent les domaines d’intervention déjà établis dans les contenus du projet.</p></div>
            <div className="grid border-t border-foreground/20 md:grid-cols-2">
              {missions.map(([number, title, description]) => <article key={number} className="group border-b border-foreground/20 py-7 md:px-7 md:even:border-l"><div className="flex gap-5"><span className="pt-1 text-xs font-bold text-primary">{number}</span><div><h3 className="text-2xl font-serif font-semibold">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{description}</p></div></div></article>)}
            </div>
          </div>
        </section>

        <section id="parcours" className="bg-primary py-20 text-white sm:py-28">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><p className="section-label text-white/70">03 / PARCOURS DE LA VICTIME</p><h2 className="mt-4 text-4xl font-serif font-semibold leading-tight sm:text-5xl">Une information claire à chaque étape.</h2><p className="mt-6 max-w-md text-base leading-7 text-white/75">Cette architecture présente le parcours d’orientation. Les modalités précises et les services disponibles doivent être confirmés avec les informations officielles.</p><Link href="/programmes" className="mt-8 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-bold">Consulter les informations disponibles <ArrowRight className="h-4 w-4" /></Link></div><ol className="grid content-end gap-0 sm:grid-cols-2 lg:grid-cols-3">{steps.map((step, index) => <li key={step} className="border-t border-white/30 px-0 py-5 sm:px-5 sm:even:border-l lg:px-4"><span className="text-xs font-bold text-secondary">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 text-xl font-serif font-semibold">{step}</p></li>)}</ol></div></div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="container mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10"><div className="relative min-h-[340px] overflow-hidden bg-muted"><img src="/assets/images/mission_about.png" alt="Personnes participant à une activité communautaire" className="absolute inset-0 h-full w-full object-cover" loading="lazy" /><div className="absolute inset-x-0 bottom-0 bg-foreground/80 p-5 text-xs font-bold uppercase tracking-[0.14em] text-white">Action sur le territoire</div></div><div className="lg:py-7"><p className="section-label">04 / DIMENSION NATIONALE</p><h2 className="mt-4 text-4xl font-serif font-semibold leading-tight sm:text-5xl">Une présence à rendre lisible, sans la simplifier.</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Les données territoriales vérifiées pourront être intégrées ici sous la forme d’une cartographie sobre des zones d’intervention et des services disponibles.</p><div className="mt-10 flex items-start gap-4 border-t border-border pt-6"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" /><p className="text-sm leading-6 text-foreground/75">Les informations de couverture géographique seront publiées à partir des données institutionnelles validées.</p></div></div></div>
        </section>

        <section id="ressources" className="border-y border-border bg-[#f5f7f6] py-20 sm:py-28"><div className="container mx-auto px-5 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="section-label">05 / RESSOURCES</p><h2 className="mt-4 text-4xl font-serif font-semibold sm:text-5xl">Une information publique, accessible.</h2></div><div className="border-t border-foreground/20">{[["Rapports et publications", "Documents de référence et rapports institutionnels."], ["Communiqués", "Informations officielles du FONAREV."], ["Appels et opportunités", "Avis et opportunités destinés aux publics concernés."]].map(([title, text]) => <article key={title} className="flex gap-5 border-b border-foreground/20 py-6"><FileText className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><h3 className="text-xl font-serif font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></div></div></section>

        <section className="bg-white py-20 sm:py-28"><div className="container mx-auto px-5 sm:px-8 lg:px-10"><div className="border border-foreground/20 p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:p-14"><div><p className="section-label">BESOIN D’INFORMATION ?</p><h2 className="mt-4 max-w-2xl text-4xl font-serif font-semibold leading-tight sm:text-5xl">Trouver le bon interlocuteur, avec confidentialité et respect.</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Victimes, associations, partenaires, médias et institutions peuvent accéder aux canaux d’information du FONAREV.</p></div><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-primary px-6 text-sm font-bold text-white lg:mt-0">Contacter le FONAREV <ArrowRight className="h-4 w-4" /></Link></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
