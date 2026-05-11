import { motion } from "framer-motion";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

const services = [
  {
    eyebrow: "Expert Artistry",
    title: "Hair Services",
    desc: "Precision cuts, vibrant color, and transformative treatments tailored to your unique features and lifestyle.",
    img: "https://images.unsplash.com/photo-1522337360429-a1d459f9e610?w=800&q=80",
    href: "/hair-services",
    cta: "View Services",
  },
  {
    eyebrow: "Handcrafted",
    title: "Crafting Studio",
    desc: "Custom accessories, home decor, and bespoke gifts made by hand with intention and artisan skill.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    href: "/crafting",
    cta: "Explore Projects",
  },
  {
    eyebrow: "Perfect Fit",
    title: "Alterations",
    desc: "Precision tailoring and clothing alterations so every garment feels like it was made just for you.",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
    href: "/alterations",
    cta: "Our Services",
  },
];

const testimonials = [
  {
    quote: "I came in for a simple trim and left with the most beautiful color I've ever had. The care and attention here is unlike anywhere else.",
    name: "Amara T.",
    role: "Hair Services Client",
  },
  {
    quote: "They turned my late grandmother's fabric into the most stunning clutch. I cried when I saw it. Pure magic.",
    name: "Rachel M.",
    role: "Custom Crafting Client",
  },
  {
    quote: "My wedding dress fit perfectly thanks to their alterations. They took it in and it looked like it was made for my body.",
    name: "Priya K.",
    role: "Alterations Client",
  },
];

const stats = [
  { value: "8+", label: "Years in Business" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "3", label: "Signature Services" },
  { value: "5★", label: "Average Rating" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="w-full">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=85"
              alt="Multifaceted Queen Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1108]/85 via-[#1a1108]/35 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.14 } } }}
            >
              <motion.p variants={fadeUp} className="eyebrow text-white/70 mb-5">
                Charleston, SC — Est. 2016
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-white font-serif text-6xl md:text-8xl lg:text-9xl font-light leading-[0.92] tracking-tight mb-8 max-w-5xl"
              >
                Multifaceted<br />Queen
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed"
              >
                Beauty, creativity, and perfect fit — all under one roof.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center h-13 px-8 rounded-full gradient-primary text-white text-sm font-medium tracking-wide shadow-terracotta hover:opacity-90 transition-opacity"
                  data-testid="hero-book"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/hair-services"
                  className="inline-flex items-center h-13 px-8 rounded-full border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                  data-testid="hero-explore"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="bg-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/20">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-6 py-4 text-center"
                >
                  <div className="font-serif text-4xl font-light text-primary-foreground mb-1">{s.value}</div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-[0.15em]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="eyebrow mb-4"
              >
                What We Do
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-serif text-5xl md:text-6xl font-light text-foreground"
              >
                Three Studios,<br />One Destination
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link href={s.href} className="block">
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-card-warm">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="eyebrow text-white/70 mb-2">{s.eyebrow}</p>
                        <h3 className="font-serif text-3xl font-light text-white">{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      {s.cta} <span>→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-28 gradient-warm overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-terracotta">
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100d293?w=900&q=85"
                    alt="Multifaceted Queen studio owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-lg hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1582095133179-bfd08e2585d3?w=400&q=80"
                    alt="Studio detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="eyebrow mb-5">Our Story</p>
                <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 leading-tight">
                  An Atelier<br />Built on Craft
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Multifaceted Queen was born from a simple conviction: that personal style isn't just about hair or clothes individually — it's how everything comes together to express who you are.
                  </p>
                  <p>
                    We've built a sun-drenched sanctuary where you can relax, converse, and collaborate with experts dedicated to your aesthetic. Whether you're here for a transformative color session, a perfectly fitted garment, or a one-of-a-kind handcrafted piece.
                  </p>
                  <p className="font-serif text-xl text-foreground italic">
                    "Every detail is intentional. Every queen is unique."
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center h-12 px-7 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity"
                  >
                    Visit the Studio
                  </Link>
                  <Link
                    href="/hair-services"
                    className="inline-flex items-center h-12 px-7 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Client Love</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">What They Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-3xl p-8 border border-border shadow-card-warm flex flex-col"
                  data-testid={`testimonial-${i}`}
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-primary text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6 text-[15px]">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80"
              alt="Multifaceted Queen studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/75" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <p className="eyebrow text-primary mb-6">Get Started</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">
                Ready for a Transformation?
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Book a consultation and let's bring your vision to life together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center h-13 px-9 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity"
                  data-testid="cta-book"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center h-13 px-9 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
