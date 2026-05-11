import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Gallery } from "@/components/gallery";
import craft2 from "@/assets/craft-2.jpg";
import craft4 from "@/assets/craft-4.jpg";
import craft5 from "@/assets/craft-5.jpg";
import craft6 from "@/assets/craft-6.jpg";

export const Route = createFileRoute("/crafting")({
  head: () => ({
    meta: [
      { title: "Custom Crafting Projects — Multifaceted Queen" },
      {
        name: "description",
        content:
          "One-of-a-kind handmade pieces — embroidery, leather goods, quilts, and bespoke commissions.",
      },
    ],
  }),
  component: CraftingPage,
});

function CraftingPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Crafting Projects"
        title="Heirloom-quality pieces, made just for you."
        description="Bring us an idea, a sketch, or just an inspiration — and we'll handcraft a piece you'll treasure for years."
        image={craft2}
        imageAlt="Custom handcrafted leather bag"
      >
        <Link
          to="/contact"
          className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
        >
          Book a Consultation
        </Link>
        <a
          href="#inquiry"
          className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Request a Quote
        </a>
      </PageHero>

      <Section eyebrow="How pricing works" title="Every project is unique" centered>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {[
            { title: "Materials", text: "Fabric, leather, threads, and finishing details all influence the final cost." },
            { title: "Size & scale", text: "Larger or more detailed projects naturally take more time and material." },
            { title: "Complexity", text: "Custom patterns, embroidery, and intricate work add to the craftsmanship." },
            { title: "Time", text: "Standard turnaround is 2–6 weeks; rush options are available." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-serif text-xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Most custom projects start at <span className="font-semibold text-primary">$150</span>. Get a personalized quote below.
        </p>
      </Section>

      <Section eyebrow="Past work" title="Recent projects" centered>
        <Gallery
          images={[
            { src: craft4, alt: "Macrame wall hanging" },
            { src: craft5, alt: "Hand-stitched leather wallet" },
            { src: craft6, alt: "Hand-painted ceramic mugs" },
          ]}
        />
      </Section>

      {/* Inquiry */}
      <section id="inquiry" className="border-y border-border/60 bg-muted/40">
        <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Custom Project Inquiry
            </span>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Tell us about your idea
            </h2>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-2xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Project type" name="type" placeholder="e.g. Quilt, leather bag, embroidery" />
            <Field label="Estimated budget" name="budget" placeholder="Optional" />
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Project description
              </label>
              <textarea
                rows={5}
                placeholder="Share dimensions, materials, deadlines, and any inspiration."
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
      />
    </div>
  );
}