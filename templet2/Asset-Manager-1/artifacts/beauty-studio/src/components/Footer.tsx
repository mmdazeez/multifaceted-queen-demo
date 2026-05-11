import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiPinterest } from "react-icons/si";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-background/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-background text-xl font-medium tracking-tight inline-block mb-4">
              Multifaceted Queen
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-background/60 max-w-56">
              Beauty, creativity, and perfect fit — a boutique atelier in the heart of Charleston.
            </p>
            <div className="flex items-center gap-5">
              {[
                { icon: <SiInstagram className="w-4 h-4" />, href: "https://instagram.com", label: "Instagram" },
                { icon: <SiFacebook className="w-4 h-4" />, href: "https://facebook.com", label: "Facebook" },
                { icon: <SiPinterest className="w-4 h-4" />, href: "https://pinterest.com", label: "Pinterest" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-5">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-background/60">
              {[
                { label: "Hair Styling", href: "/hair-services" },
                { label: "Color & Highlights", href: "/hair-services" },
                { label: "Bridal Packages", href: "/hair-services" },
                { label: "Custom Crafting", href: "/crafting" },
                { label: "Clothing Alterations", href: "/alterations" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3 text-sm text-background/60">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-primary transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary font-medium mb-5">Find Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-background/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
                <span>142 Magnolia Lane, Suite 4<br/>Charleston, SC 29403</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary/70" />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary/70" />
                <span>hello@multifacetedqueen.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
                <span>Mon–Sat: 9am – 6pm<br/>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} Multifaceted Queen. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-primary/60 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-primary/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hair Services", href: "/hair-services" },
  { label: "Crafting", href: "/crafting" },
  { label: "Alterations", href: "/alterations" },
  { label: "Contact", href: "/contact" },
];
