import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Section } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Multifaceted Queen" },
      {
        name: "description",
        content:
          "Get in touch to book an appointment, request a quote, or stop by our studio.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Let's chat"
        description="Book an appointment, ask a question, or share an idea — we love hearing from you."
        centered
      >
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-2xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)] lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Phone (optional)" name="phone" />
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Service of interest</label>
              <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2">
                <option>Hair Services</option>
                <option>Custom Crafting Project</option>
                <option>Alterations</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us a bit about what you're looking for."
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={Phone} title="Phone" lines={["(555) 000-0000"]} />
            <InfoCard icon={Mail} title="Email" lines={["hello@multifacetedqueen.example"]} />
            <InfoCard
              icon={MapPin}
              title="Studio"
              lines={["123 Studio Lane", "Your City, ST 00000"]}
            />
            <InfoCard
              icon={Clock}
              title="Hours"
              lines={["Tue – Fri: 9 AM – 6 PM", "Saturday: 10 AM – 4 PM", "Sun – Mon: Closed"]}
            />
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-sm font-semibold text-foreground">Follow along</p>
              <div className="flex gap-3">
                <Social icon={Instagram} />
                <Social icon={Facebook} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
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
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring focus:ring-2"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

function Social({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition-opacity hover:opacity-80"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}