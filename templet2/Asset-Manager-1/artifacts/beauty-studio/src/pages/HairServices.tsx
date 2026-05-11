import { motion } from "framer-motion";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    name: "Precision Cuts",
    desc: "Tailored cuts for every hair type — bobs, layers, textured trims, blunt cuts and more.",
    price: "From $65",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80",
  },
  {
    name: "Color & Highlights",
    desc: "Balayage, full color, ombré, and corrective color using premium, nourishing formulas.",
    price: "From $120",
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=700&q=80",
  },
  {
    name: "Styling & Blowouts",
    desc: "Soft waves, sleek blowouts, and editorial looks for any occasion.",
    price: "From $55",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80",
  },
  {
    name: "Treatments & Masks",
    desc: "Keratin, deep conditioning, and scalp therapies to restore health and shine.",
    price: "From $80",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&q=80",
  },
  {
    name: "Bridal & Event Styling",
    desc: "Trial sessions, updos, and on-location styling for your most important days.",
    price: "From $200",
    img: "https://images.unsplash.com/photo-1595476108010-9cb1ba70a7e8?w=700&q=80",
  },
  {
    name: "Extensions",
    desc: "Tape-in, clip-in, and weft extensions using premium Remy hair for seamless length and volume.",
    price: "From $250",
    img: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=700&q=80",
  },
];

const packages = [
  {
    name: "Signature",
    price: "$95",
    note: "The essentials",
    items: ["Precision cut", "Blowout & finish", "Scalp massage", "Style consultation"],
  },
  {
    name: "Transformation",
    price: "$220",
    note: "Our most popular",
    items: ["Full color or balayage", "Precision cut", "Deep conditioning mask", "Blowout & finish", "Consultation"],
    featured: true,
  },
  {
    name: "Bridal",
    price: "$350",
    note: "For your big day",
    items: ["Bridal trial session", "Day-of styling", "Updo or blowout", "Hair accessories styling", "Touch-up kit"],
  },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend 2 weeks for standard services and 4–6 weeks for bridal packages to secure your preferred date." },
  { q: "Do you offer color consultations?", a: "Yes — all color appointments begin with a complimentary 15-minute consultation to discuss your goals and assess your hair's condition." },
  { q: "What products do you use?", a: "We use professional-grade, cruelty-free products from Olaplex, Redken, and L'Oréal Professionnel, chosen for performance and hair health." },
  { q: "Do you accommodate all hair textures?", a: "Absolutely. Our stylists are trained in all hair types — straight, wavy, curly, coily, and everything in between." },
  { q: "What is your cancellation policy?", a: "We ask for 24 hours' notice. Late cancellations or no-shows may incur a fee of 50% of the service cost." },
];

/* Gallery — all unique hair/beauty images */
const gallery = [
  { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80", alt: "Beautiful hair result" },
  { img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80", alt: "Haircut styling" },
  { img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80", alt: "Salon styling" },
  { img: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&q=80", alt: "Color treatment result" },
  { img: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80", alt: "Hair treatment" },
  { img: "https://images.unsplash.com/photo-1522337360429-a1d459f9e610?w=800&q=80", alt: "Expert hair styling" },
];

/* Feature strip images */
const featureImgs = [
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", label: "Color Artistry" },
  { src: "https://images.unsplash.com/photo-1549351512-c5e12b11e283?w=600&q=80", label: "Bridal Updos" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", label: "Studio Experience" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
      >
        <span className="font-serif text-xl font-light text-foreground">{q}</span>
        <ChevronDown className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          className="pb-5 text-muted-foreground text-[15px] leading-relaxed"
        >
          {a}
        </motion.p>
      )}
    </div>
  );
}

export default function HairServices() {
  return (
    <PageTransition>
      <div className="w-full pt-[72px]">

        {/* ── Hero — split (jontomas.com style) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          <div className="relative overflow-hidden min-h-[50vh] lg:min-h-auto">
            <img
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1000&q=85"
              alt="Hair Services at Multifaceted Queen"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="gradient-warm flex flex-col justify-center px-10 md:px-16 py-20">
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="eyebrow mb-5">Expert Artistry</p>
              <h1 className="font-serif text-6xl md:text-7xl font-light leading-tight mb-6">
                Hair<br />Services
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                Expert styling, vibrant color, and transformative treatments — each appointment is a bespoke experience crafted just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center h-12 px-8 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity"
                  data-testid="hair-hero-book"
                >
                  Book an Appointment
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center h-12 px-8 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Feature strip — 3 images ── */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featureImgs.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <img src={f.src} alt={f.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <p className="absolute bottom-4 left-5 font-serif text-xl text-white font-light">{f.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section id="services" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">The Menu</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">What We Offer</h2>
              <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-[15px] leading-relaxed">
                From everyday refreshes to full transformations — every service is tailored to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card rounded-3xl border border-border overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-card-warm"
                  data-testid={`service-${i}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h3 className="font-serif text-2xl font-light">{s.name}</h3>
                      <span className="text-primary text-sm font-medium flex-shrink-0 mt-1">{s.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Packages ── */}
        <section className="py-28 gradient-warm">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Curated Bundles</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl p-8 flex flex-col ${
                    pkg.featured
                      ? "gradient-primary text-white shadow-terracotta"
                      : "bg-card border border-border shadow-card-warm"
                  }`}
                  data-testid={`package-${pkg.name.toLowerCase()}`}
                >
                  {pkg.featured && <p className="text-[11px] uppercase tracking-[0.2em] text-white/80 mb-4">Most Popular</p>}
                  <p className={`text-[11px] uppercase tracking-[0.2em] mb-2 ${pkg.featured ? "text-white/70" : "eyebrow"}`}>{pkg.note}</p>
                  <h3 className={`font-serif text-3xl font-light mb-1 ${pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.name}</h3>
                  <div className={`text-5xl font-serif font-light mb-8 ${pkg.featured ? "text-white" : "text-primary"}`}>{pkg.price}</div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.items.map(item => (
                      <li key={item} className={`text-sm flex items-center gap-3 ${pkg.featured ? "text-white/85" : "text-muted-foreground"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${pkg.featured ? "bg-white/60" : "bg-primary"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center h-11 rounded-full text-sm font-medium transition-all ${
                      pkg.featured
                        ? "bg-white text-primary hover:bg-white/90"
                        : "border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    Book This Package
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery — editorial grid ── */}
        <section className="py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Portfolio</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Our Work</h2>
            </div>
            <div className="grid grid-cols-12 gap-4 auto-rows-[240px]">
              {gallery.map((item, i) => {
                const spans = [
                  "col-span-12 md:col-span-8 row-span-2",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`${spans[i]} rounded-2xl overflow-hidden`}
                    data-testid={`gallery-hair-${i}`}
                  >
                    <img src={item.img} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 bg-muted">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">FAQ</h2>
            </div>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-foreground text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-primary mb-6">Ready to Glow</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-background mb-6">Book Your Visit</h2>
            <p className="text-background/60 text-lg mb-12">Let's create your most beautiful look yet.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center h-12 px-8 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity" data-testid="hair-cta-book">
                Book an Appointment
              </Link>
              <Link href="/contact" className="inline-flex items-center h-12 px-8 rounded-full border border-background/20 text-background text-sm font-medium hover:bg-background/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
