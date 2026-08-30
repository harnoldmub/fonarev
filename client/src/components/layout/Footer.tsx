import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#162b3a] text-white">
      <div className="container mx-auto px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 border-b border-white/20 pb-12 md:grid-cols-[1.3fr_.8fr_.9fr]">
          <div><div className="inline-flex bg-white p-2"><img src="/assets/hero/fonarev_logo.png" alt="FONAREV" className="h-10 w-auto" /></div><p className="mt-7 max-w-md text-sm leading-6 text-white/70">Fonds National de Réparation des Victimes de Violences Sexuelles liées aux Conflits et des Victimes des Crimes contre la Paix et la Sécurité de l’Humanité.</p><p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-secondary">République Démocratique du Congo</p></div>
          <div><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">Navigation</h2><ul className="mt-5 space-y-3 text-sm text-white/75"><li><Link href="/about" className="hover:text-white">Le FONAREV</Link></li><li><Link href="/programmes" className="hover:text-white">Missions et réparations</Link></li><li><Link href="/actualites" className="hover:text-white">Actualités</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
          <div><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">Informations</h2><div className="mt-5 space-y-4 text-sm leading-6 text-white/75"><p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-secondary" />Coordonnées institutionnelles à publier.</p><p className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-secondary" />Canal de contact à confirmer.</p><Link href="/contact" className="inline-flex items-center gap-2 text-white hover:text-secondary">Accéder au formulaire <ArrowUpRight className="h-4 w-4" /></Link></div></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/55 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} FONAREV. Tous droits réservés.</p><div className="flex gap-5"><a href="#" className="hover:text-white">Mentions légales</a><a href="#" className="hover:text-white">Politique de confidentialité</a></div></div>
      </div>
    </footer>
  );
}
