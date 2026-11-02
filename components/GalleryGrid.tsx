"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { label, site } from "@/data";

const { gallery } = site;
const images = gallery.images;

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const step = useCallback((dir: number) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)), []);

  useEffect(() => {
    if (open === null) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <section className="bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-69 xl:pb-100 xl:pl-77">
      <div data-reveal="up" className="text-center">
        <span className="mx-auto block h-2 w-40 bg-orange xl:w-48" />
        <p className="mt-12 font-alt text-[calc(16*var(--spacing))] font-semibold text-orange xl:mt-13 xl:text-[calc(20*var(--spacing))]">{gallery.label}</p>
        <h2 className="mt-6 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.15] text-[#062942] sm:text-[calc(43.5*var(--spacing))] xl:mt-4 xl:text-[calc(52.5*var(--spacing))] xl:leading-64">
          {gallery.title} <span className="text-green-dark">{gallery.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-10 max-w-680 font-alt text-[calc(15*var(--spacing))] leading-26 text-gray xl:mt-12 xl:max-w-980 xl:text-[calc(20.5*var(--spacing))] xl:leading-31.5">{gallery.description}</p>
        <span className="mx-auto mt-14 block h-2 w-40 bg-orange xl:mt-18 xl:w-48" />
      </div>

      <ul data-reveal-stagger className="mt-32 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:mt-30 xl:gap-x-24 xl:gap-y-22">
        {images.map((image, i) => (
          <li key={image.src} className={`relative h-220 overflow-hidden rounded-[calc(6*var(--spacing))] sm:h-240 ${i < 3 ? "xl:h-280" : "xl:h-260"}`}>
            <button type="button" aria-label={label("openImage", { name: image.alt })} onClick={() => setOpen(i)} className="group block size-full">
              <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-108" />
              <span className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-500 group-hover:bg-navy/45">
                <span className="flex size-52 scale-50 items-center justify-center rounded-full bg-white text-orange opacity-0 transition-[opacity,scale] duration-500 group-hover:scale-100 group-hover:opacity-100 xl:size-64">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" className="size-22 xl:size-26">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={images[open].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-[#01172d]/92 p-16" onClick={() => setOpen(null)}>
          <button type="button" aria-label={label("close")} onClick={() => setOpen(null)} className="absolute top-16 right-16 flex size-44 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange">
            <Icon name="close" className="size-22" strokeWidth={2.2} />
          </button>
          <button type="button" aria-label={label("previousImage")} onClick={(e) => (e.stopPropagation(), step(-1))} className="absolute left-12 z-10 flex size-44 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange sm:left-24">
            <Icon name="chevron-left" className="size-22" strokeWidth={2.4} />
          </button>
          <div className="relative h-[70vh] w-full max-w-1100" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open].src} alt={images[open].alt} fill quality={90} sizes="90vw" className="object-contain" />
          </div>
          <button type="button" aria-label={label("nextImage")} onClick={(e) => (e.stopPropagation(), step(1))} className="absolute right-12 z-10 flex size-44 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange sm:right-24">
            <Icon name="chevron-right" className="size-22" strokeWidth={2.4} />
          </button>
        </div>
      )}
    </section>
  );
}
