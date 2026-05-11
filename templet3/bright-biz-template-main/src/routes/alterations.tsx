import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Gallery } from "@/components/gallery";
import { PriceList } from "@/components/price-list";
import alter2 from "@/assets/alter-2.jpg";
import alter4 from "@/assets/alter-4.jpg";
import alter5 from "@/assets/alter-5.jpg";
import alter6 from "@/assets/alter-6.jpg";

export const Route = createFileRoute("/alterations")({
  head: () => ({
    meta: [
      { title: "Alterations — Multifaceted Queen" },
      {
        name: "description",
        content:
          "Hemming, resizing, zipper repair, dress alterations, sleeve adjustments, and custom fitting.",
      },
    ],
  }),
  component: AlterationsPage,
});

function AlterationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Alterations"
        title="A perfect fit, every time."
        description="From everyday hems to wedding-day fittings, we tailor each garment with precision so it feels like it was made just for you."
        image={alter2}
        imageAlt="Wedding dress on a tailor's mannequin"
      >
        <Link
          to="/contact"
          className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
        >
          Book a Fitting
        </Link>
        <a
          href="#pricing"
          className="rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          View Pricing
        </a>
      </PageHero>

      <Section eyebrow="Pricing guide" title="Common alterations" centered>
        <div id="pricing">
          <PriceList
            items={[
              { name: "Hemming", description: "Pants, skirts, and dresses.", price: "from $20" },
              { name: "Resizing", description: "Take in or let out the waist, bust, or hips.", price: "from $30" },
              { name: "Zipper repair", description: "Replace or repair zippers.", price: "from $25" },
              { name: "Dress alterations", description: "Bridal and formal wear specialist.", price: "from $80" },
              { name: "Sleeve adjustments", description: "Shorten, lengthen, or restructure.", price: "from $35" },
              { name: "Custom fitting", description: "Multi-point tailoring for the perfect fit.", price: "from $90" },
            ]}
          />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Final pricing depends on fabric, garment construction, and complexity.
        </p>
      </Section>

      <Section eyebrow="Before & after" title="Our work" centered>
        <Gallery
          images={[
            { src: alter4, alt: "Tailor pinning trouser hem on mannequin" },
            { src: alter5, alt: "Zipper repair on a jacket" },
            { src: alter6, alt: "Bridal gown alterations" },
          ]}
        />
      </Section>
    </>
  );
}