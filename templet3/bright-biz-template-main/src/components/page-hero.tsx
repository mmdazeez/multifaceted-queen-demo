import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[var(--gradient-warm)]">
      <div className="container mx-auto grid gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          {eyebrow && (
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div className="relative">
          <div
            className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
          >
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}