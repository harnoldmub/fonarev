import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/programmes", label: "Réparation & Programmes" },
    { href: "/actualites", label: "Actualités" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 z-50">
            <img
              src="/assets/hero/fonarev_logo.png"
              alt="FONAREV"
              className="h-16 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Desktop Action */}
        <div className="hidden md:block">
          <Link href="/faire-un-don">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-md">
              <Heart className="mr-2 h-4 w-4" />
              Faire un don
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className="text-lg font-medium py-2 px-4 hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <Link href="/faire-un-don">
                  <Button className="w-full mt-4 bg-secondary text-secondary-foreground" onClick={() => setIsOpen(false)}>
                    <Heart className="mr-2 h-4 w-4" />
                    Faire un don
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
