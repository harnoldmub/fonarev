import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Accueil" }, { href: "/about", label: "Le FONAREV" }, { href: "/programmes", label: "Nos missions" },
  { href: "/programmes#parcours", label: "Réparations" }, { href: "/actualites", label: "Actualités" }, { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-white/95 shadow-sm backdrop-blur" : "border-transparent bg-white/90"}`}>
      <div className={`container mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-10 transition-all duration-300 ${scrolled ? "h-16" : "h-[76px]"}`}>
        <Link href="/">
          <span className="flex items-center" aria-label="FONAREV — Accueil">
            <img src="/assets/hero/fonarev_logo.png" alt="FONAREV" className="h-10 w-auto object-contain sm:h-11" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-5" aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-[13px] font-semibold transition-colors hover:text-primary ${location === link.href.split("#")[0]
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <Link href="/programmes#parcours" className="hidden md:inline-flex min-h-10 items-center border border-primary px-4 text-xs font-bold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-primary hover:text-white">Espace victimes</Link>

        {/* Mobile Menu */}
        <div className="xl:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="inline-flex h-10 w-10 items-center justify-center" aria-label="Ouvrir le menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,360px)] border-l-border p-0">
              <SheetTitle className="sr-only">Navigation principale</SheetTitle>
              <SheetDescription className="sr-only">Accédez aux rubriques du site FONAREV.</SheetDescription>
              <div className="flex h-[76px] items-center justify-between border-b px-6"><span className="text-sm font-bold tracking-wide text-primary">NAVIGATION</span><button className="inline-flex h-10 w-10 items-center justify-center" onClick={() => setIsOpen(false)} aria-label="Fermer le menu"><X className="h-5 w-5" /></button></div>
              <nav className="flex flex-col px-6 py-6" aria-label="Navigation mobile">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="border-b border-border py-4 text-lg font-serif font-semibold text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href="/programmes#parcours" onClick={() => setIsOpen(false)} className="mt-7 inline-flex min-h-12 items-center justify-center bg-primary px-5 text-sm font-bold text-white">Espace victimes</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
