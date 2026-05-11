import { motion } from "framer-motion";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";

const services = [
  { title: "Hemming", desc: "Perfect hems — blind-stitched, rolled, or topstitched — on trousers, skirts, dresses, and coats.", price: "From $18" },
  { title: "Resizing", desc: "Take in or let out seams on any garment for a fit that feels custom-made.", price: "From $35" },
  { title: "Dress Alterations", desc: "Formal wear, bridesmaid gowns, and prom dresses handled with care and precision.", price: "From $85" },
  { title: "Zipper Repair", desc: "Broken or stuck zippers on any garment — repaired or fully replaced with quality hardware.", price: "From $22" },
  { title: "Sleeve Adjustments", desc: "Shorten or lengthen sleeves on jackets, shirts, blouses, and coats with invisible finishing.", price: "From $28" },
  { title: "Custom Fitting", desc: "Full-body fitting sessions to tailor a garment completely to your measurements.", price: "From $120" },
  { title: "Waistband Work", desc: "Add elastic, take in, or let out waistbands on trousers, skirts, and jeans.", price: "From $30" },
  { title: "Repairs & Mending", desc: "Buttons, split seams, worn patches — restored with care so your favorite pieces last longer.", price: "From $12" },
];

const process = [
  { step: "1", title: "Book a Fitting", desc: "Schedule online or by phone. Bring your garment and the shoes you'll wear with it." },
  { step: "2", title: "In-Studio Fitting", desc: "We assess the garment, mark alterations, and confirm scope and turnaround." },
  { step: "3", title: "Expert Tailoring", desc: "Our seamstresses work carefully on every stitch, using quality thread and hardware." },
  { step: "4", title: "Final Pickup", desc: "Try on your altered garment — walk out wearing something that truly fits." },
];

const pricing = [
  { cat: "Hemming", rows: ["Trousers / jeans: $18–$28", "Skirts: $20–$35", "Dresses: $28–$65", "Coats: $35–$55"] },
  { cat: "Resizing", rows: ["Take in jacket: $45–$85", "Resize dress: $35–$75", "Taper trousers: $35–$50"] },
  { cat: "Zippers", rows: ["Replace dress zip: $22–$45", "Replace jacket zip: $35–$65", "Repair zipper: $15–$25"] },
  { cat: "Formal Wear", rows: ["Bridal gown: $85–$400+", "Evening gown: $75–$250", "Suit jacket: $65–$150"] },
];

/* Gallery — unique fashion/tailoring images */
const galleryImages = [
  { label: "Bridal Gown", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80" },
  { label: "Evening Wear", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80" },
  { label: "Tailored Suit", img: "https://images.unsplash.com/photo-1617952236317-0bd127407984?w=700&q=80" },
  { label: "Dress Fitting", img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=700&q=80" },
  { label: "Clothing Rack", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=700&q=80" },
  { label: "Fashion Detail", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80" },
];

/* Feature images for trust strip area */
const featureImages = [
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", label: "Elegant Fashion" },
  { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80", label: "Precision Work" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", label: "Fine Details" },
];

export default function Alterations() {
  return (
    <PageTransition>
      <div className="w-full pt-[72px]">

        {/* ── Hero — full-bleed (ushaalteration.com reference) ── */}
        <section className="relative min-h-[92vh] flex items-end pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=85"
              alt="Clothing alterations — fashion"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <p className="eyebrow text-primary mb-6">Expert Tailoring</p>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.92] mb-6">
                Clothing<br />Alterations
              </h1>
              <p className="text-white/75 text-xl font-light leading-relaxed mb-10">
                The personal attention you require and the quality you demand. Every garment altered with precision and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center h-12 px-8 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity"
                  data-testid="alt-hero-book"
                >
                  Schedule a Fitting
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center h-12 px-8 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Trust strip ── */}
        <section className="bg-secondary border-b border-border py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-wrap justify-center gap-10 text-center">
              {["Same-week turnaround", "All fabric types", "Bridal specialists", "Free fitting consultation"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature images ── */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featureImages.map((f, i) => (
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

        {/* ── Services grid ── */}
        <section id="services" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">What We Offer</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Alteration Services</h2>
              <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-[15px] leading-relaxed">
                No garment is beyond saving. From a quick hem to a complete re-fit, we handle it all with care and skill.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-card-warm"
                  data-testid={`alt-service-${i}`}
                >
                  <h3 className="font-serif text-xl font-light mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-primary text-sm font-medium">{s.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery — 6 images ── */}
        <section className="py-28 gradient-warm">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Portfolio</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Our Work</h2>
              <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-[15px]">The difference a proper fit makes is extraordinary.</p>
            </div>
            <div className="grid grid-cols-12 gap-4 auto-rows-[260px]">
              {galleryImages.map((item, i) => {
                const spans = [
                  "col-span-12 md:col-span-5 row-span-2",
                  "col-span-6 md:col-span-7 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-3 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`${spans[i]} group rounded-2xl overflow-hidden relative shadow-card-warm`}
                    data-testid={`alt-gallery-${i}`}
                  >
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    <p className="absolute bottom-4 left-4 font-serif text-white text-lg font-light">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing guide ── */}
        <section className="py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Transparent Pricing</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Pricing Guide</h2>
              <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-[15px]">
                No surprises — final costs are always confirmed at your fitting.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {pricing.map((group, i) => (
                <motion.div
                  key={group.cat}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-card-warm"
                  data-testid={`pricing-${i}`}
                >
                  <h3 className="font-serif text-xl font-light border-b border-border pb-3 mb-4 text-primary">{group.cat}</h3>
                  <ul className="space-y-2">
                    {group.rows.map(row => (
                      <li key={row} className="text-sm text-muted-foreground flex gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {row}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">Prices vary based on fabric type, complexity, and turnaround time.</p>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-28 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Simple Steps</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {process.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-50%] h-px bg-border" />
                  )}
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 shadow-terracotta">
                    <span className="font-serif text-2xl text-white font-light">{s.step}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-foreground text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-6">
            <p className="eyebrow text-primary mb-6">Book a Fitting</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-background mb-6">The Perfect Fit Awaits</h2>
            <p className="text-background/60 text-lg mb-12">Bring your garment in and let our tailors work their magic.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center h-12 px-8 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity" data-testid="alt-cta-book">
                Schedule a Fitting
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
