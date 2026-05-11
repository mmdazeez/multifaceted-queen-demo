import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function Section({ eyebrow, title, description, children, className, centered }: SectionProps) {
  return (
    <section className={`container mx-auto px-4 py-16 sm:px-6 md:py-24 ${className ?? ""}`}>
      {(eyebrow || title || description) && (
        <div className={`mb-12 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{title}</h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}