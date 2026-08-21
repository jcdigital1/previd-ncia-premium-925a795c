import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const REVIEWS = [
  "https://i.postimg.cc/WpxJMHJ9/IMG-5592.jpg",
  "https://i.postimg.cc/ry7tSPtj/IMG-5591.jpg",
  "https://i.postimg.cc/c1P8Qb8M/IMG-5590.jpg",
  "https://i.postimg.cc/L4GZzbZj/IMG-5589.jpg",
  "https://i.postimg.cc/Vs2bjVbq/IMG-5587.jpg",
  "https://i.postimg.cc/h4XdQBhr/IMG-5586.jpg",
  "https://i.postimg.cc/PfCwvjNQ/IMG-5583.jpg",
  "https://i.postimg.cc/PfCwvjNm/IMG-5582.jpg",
];

export function ReviewsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const pausedUntil = useRef(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    const onPointer = () => {
      pausedUntil.current = Date.now() + 8000;
    };
    embla.on("select", onSelect);
    embla.on("pointerDown", onPointer);
    onSelect();
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      embla.scrollNext();
    }, 4500);
    return () => {
      window.clearInterval(id);
      embla.off("select", onSelect);
      embla.off("pointerDown", onPointer);
    };
  }, [embla]);

  const nav = useCallback(
    (dir: -1 | 1) => {
      if (!embla) return;
      pausedUntil.current = Date.now() + 8000;
      if (dir === 1) embla.scrollNext();
      else embla.scrollPrev();
    },
    [embla],
  );

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {REVIEWS.map((src, i) => (
            <div
              key={src}
              className="min-w-0 shrink-0 grow-0 basis-[86%] px-2 sm:basis-1/2 lg:basis-1/3"
            >
              <div className="surface-card overflow-hidden rounded-2xl p-2">
                <img
                  src={src}
                  alt={`Avaliação de cliente publicada no Google ${i + 1}`}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  width={720}
                  height={900}
                  className="h-[360px] w-full rounded-xl bg-ink object-contain sm:h-[400px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => nav(-1)}
          aria-label="Avaliação anterior"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-accent/40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {REVIEWS.map((src, i) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => nav(1)}
          aria-label="Próxima avaliação"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-accent/40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
