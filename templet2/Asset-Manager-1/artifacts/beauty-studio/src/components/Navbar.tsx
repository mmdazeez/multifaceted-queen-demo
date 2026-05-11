import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hair-services", label: "Hair Services" },
  { href: "/crafting", label: "Crafting" },
  { href: "/alterations", label: "Alterations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/96 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-xl font-medium tracking-tight transition-colors ${
            transparent ? "text-white" : "text-foreground"
          }`}
          data-testid="nav-logo"
        >
          Multifaceted Queen
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    transparent
                      ? location === link.href
                        ? "text-white/90"
                        : "text-white/70 hover:text-white"
                      : location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`inline-flex items-center h-10 px-6 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 ${
              transparent
                ? "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-terracotta"
            }`}
            data-testid="nav-book-now"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  transparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
                }`}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-border pt-12">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <Link href="/" className="font-serif text-xl font-medium mb-10" onClick={() => setOpen(false)}>
                  Multifaceted Queen
                </Link>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        location === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pb-4">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center w-full h-12 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors"
                    data-testid="mobile-book-now"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
