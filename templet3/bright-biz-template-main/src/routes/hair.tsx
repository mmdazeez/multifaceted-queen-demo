import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Gallery } from "@/components/gallery";
import { PriceList } from "@/components/price-list";
import hair1 from "@/assets/hair-1.jpg";
import hair4 from "@/assets/hair-4.jpg";
import hair5 from "@/assets/hair-5.jpg";
import hair6 from "@/assets/hair-6.jpg";

export const Route = createFileRoute("/hair")({
  head: () => ({
    meta: [
      { title: "Hair Services — Multifaceted Queen" },
      {
        name: "description",
        content:
          "Haircuts, coloring, styling, treatments, and special occasion looks at our warm, welcoming studio.",
      },
    ],
  }),
  component: HairPage,
});

function HairPage() {
  return (
    <>
      <PageHero
        eyebrow="Hair Services"
        title="Cuts, color, and styling — done with care."
        description="From a fresh trim to a full transformation, our stylists work closely with you to bring out a look that feels effortless and entirely yours."
        image={hair1}
        imageAlt="Beautifully styled hair"
      >
        <Link
          to="/contact"
          className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
        >
          Book Appointment
        </Link>
        <a
          href="#pricing"
          className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          See Pricing
        </a>
      </PageHero>

      <Section eyebrow="Pricing guide" title="Our hair services" centered>
        <div id="pricing">
          <PriceList
            items={[
              { name: "Haircut", description: "Wash, cut, and style.", price: "from $45" },
              { name: "Color", description: "Single process, balayage, or highlights.", price: "from $95" },
              { name: "Styling", description: "Blowouts, curls, and finished looks.", price: "from $40" },
              { name: "Treatments", description: "Deep conditioning, gloss, and repair.", price: "from $35" },
              { name: "Special Occasion", description: "Bridal, prom, and event styling.", price: "from $85" },
            ]}
          />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Final pricing depends on hair length, density, and time required.
        </p>
      </Section>

      <Section eyebrow="Gallery" title="Recent looks" centered>
        <Gallery
          images={[
            { src: hair4, alt: "Balayage highlights" },
            { src: hair5, alt: "Precision haircut in progress" },
            { src: hair6, alt: "Color treatment application" },
          ]}
        />
      </Section>
    </>
  );
}