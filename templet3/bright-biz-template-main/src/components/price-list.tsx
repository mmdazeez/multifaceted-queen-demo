interface PriceItem {
  name: string;
  description?: string;
  price: string;
}

export function PriceList({ items }: { items: PriceItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
      <ul className="divide-y divide-border/60">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-serif text-lg text-foreground">{item.name}</p>
              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              )}
            </div>
            <span className="shrink-0 text-base font-semibold text-primary">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}