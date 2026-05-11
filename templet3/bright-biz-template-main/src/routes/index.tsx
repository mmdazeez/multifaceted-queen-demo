import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Sparkles, Ruler, Heart, Clock, Award } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import hair1 from "@/assets/hair-1.jpg";
import hair3 from "@/assets/hair-3.jpg";
import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";
import alter2 from "@/assets/alter-2.jpg";
import alter3 from "@/assets/alter-3.jpg";
import { Section } from "@/components/section";
import { Gallery } from "@/components/gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Multifaceted Queen — Hair, Crafting & Alterations" },
      {
        name: "description",
        content:
          "Welcome to a warm, creative space offering hair services, custom crafting, and expert alterations. Book your appointment today.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    to: "/hair" as const,
    icon: Scissors,
    title: "Hair Services",
    description:
      "Cuts, color, styling, and treatments tailored to bring out your best look.",
    image: hair1,
  },
  {
    to: "/crafting" as const,
    icon: Sparkles,
    title: "Custom Crafting Projects",
    description:
      "One-of-a-kind handmade pieces designed and built to your vision.",
    image: craft2,
  },
  {
    to: "/alterations" as const,
    icon: Ruler,
    title: "Alterations",
    description:
      "Hemming, resizing, and custom fitting so every garment feels made for you.",
    image: alter2,
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-warm)]">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Multifaceted Queen
            </span>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Crafted with care,<br />
              <span className="text-primary italic">styled</span> with love.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              From a fresh haircut to a perfectly fitted dress to a one-of-a-kind handmade
              piece — our studio is where your ideas come to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
              >
                Book an Appointment
              </Link>
              <Link
                to="/hair"
                className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={heroImg}
                alt="Warm and inviting studio interior"
                className="h-full w-full object-cover"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="What we offer"
        title="Three studios, one warm space"
        description="Whether you're refreshing your look, dreaming up a custom piece, or perfecting the fit of a favorite garment — we've got you."
        centered
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              A studio that feels like home
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Personal touch",
                text: "Every appointment is unhurried, attentive, and tailored to you.",
              },
              {
                icon: Award,
                title: "Years of craft",
                text: "Decades of combined experience in hair, sewing, and design.",
              },
              {
                icon: Clock,
                title: "Flexible scheduling",
                text: "Easy booking and rush options when life can't wait.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <Section
        eyebrow="Featured work"
        title="A peek into our studio"
        description="A small selection of recent looks, projects, and finishing touches."
        centered
      >
        <Gallery
          images={[
            { src: hair3, alt: "Bridal updo with flowers" },
            { src: craft1, alt: "Hand-embroidered floral piece" },
            { src: alter3, alt: "Sewing machine stitching fabric" },
          ]}
        />
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="border-t border-border/60 bg-[var(--gradient-warm)]">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 md:py-20">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Stop by, send us a note, or book online. We'd love to hear what you have in mind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Link>
            <a
              href="tel:5550000000"
              className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Call (555) 000-0000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
