interface GalleryProps {
  images: { src: string; alt: string }[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <div
          key={i}
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-card)]"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}