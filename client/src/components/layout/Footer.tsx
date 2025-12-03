import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white p-2 inline-block rounded-md">
               <img 
                src="/attached_assets/logo-fonarev.0e598c0b_1764796138603.png" 
                alt="FONAREV" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Fonds National de Réparation des Victimes de violences sexuelles et basées sur le genre.
              Justice, Dignité et Réparation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">Accès Rapide</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about"><a className="hover:text-secondary transition-colors">À propos de nous</a></Link></li>
              <li><Link href="/programmes"><a className="hover:text-secondary transition-colors">Nos Programmes</a></Link></li>
              <li><Link href="/actualites"><a className="hover:text-secondary transition-colors">Actualités</a></Link></li>
              <li><Link href="/mediatheque"><a className="hover:text-secondary transition-colors">Médiathèque</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-secondary transition-colors">FAQ Victimes</a></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Kinshasa, RDC<br/>(Adresse complète à ajouter)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+243 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>contact@fonarev.cd</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">Informations Légales</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Transparence financière</a></li>
            </ul>
            <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
              <p className="text-xs italic text-center">
                "Une société où chaque survivant retrouve sa place."
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} FONAREV. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
