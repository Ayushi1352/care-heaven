"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { fill } from "@/components/ui/text";
import type { GalleryData, GlobalUIData } from "@/types/templates.types";

export const GalleryGrid = ({ data: gallery, ui }: { data?: GalleryData; ui?: GlobalUIData }) => {
  const images = gallery?.images ?? [];
  const [open, setOpen] = useState<number | null>(null);
  const step = useCallback((dir: number) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)), [images.length]);

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

  if (!gallery) return null;

  return (
    <section className="bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-69 xl:pb-100 xl:pl-77">
      <div data-reveal="up" className="text-center">
        <span className="mx-auto block h-2 w-40 bg-primary xl:w-48" />
        <p className="mt-12 font-alt text-[1rem] font-semibold text-primary xl:mt-13 xl:text-[1.25rem]">{gallery.label}</p>
        <h2 className="mt-6 font-heading font-bold text-[2.125rem] leading-[1.15] text-[var(--color-gallery-heading)] sm:text-[2.71875rem] xl:mt-4 xl:text-[3.28125rem] xl:leading-64">
          {gallery.title} <span className="text-secondary-dark">{gallery.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-10 max-w-680 font-alt text-[0.9375rem] leading-26 text-[var(--color-text)] xl:mt-12 xl:max-w-980 xl:text-[1.28125rem] xl:leading-[1.96875rem]">{gallery.description}</p>
        <span className="mx-auto mt-14 block h-2 w-40 bg-primary xl:mt-18 xl:w-48" />
      </div>

      <div className="mt-32 xl:mt-30">
        <Paginated ui={ui} rows={gallery.rowsPerPage} columns={3} variant="round" navClassName="mt-40 xl:mt-47" className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-24 xl:gap-y-22">
        {images.map((image, i) => (
          <li key={image.id} className={`relative h-220 overflow-hidden rounded-[0.375rem] sm:h-240 ${i < 3 ? "xl:h-280" : "xl:h-260"}`}>
            <button type="button" aria-label={fill(ui?.openImage, { name: image.alt })} onClick={() => setOpen(i)} className="group block size-full">
              <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              <span className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors duration-500 group-hover:bg-[var(--color-accent-45)]">
                <span className="flex size-52 scale-50 items-center justify-center rounded-full bg-[var(--color-white)] text-primary opacity-0 transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100 xl:size-64">
                  <Icon name="FaPlus" className="size-22 xl:size-26" />
                </span>
              </span>
            </button>
          </li>
        ))}
        </Paginated>
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={images[open].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-lightbox-overlay)] p-16" onClick={() => setOpen(null)}>
          <button type="button" aria-label={ui?.close} onClick={() => setOpen(null)} className="absolute top-16 right-16 flex size-44 items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-primary">
            <Icon name="FaTimes" className="size-22" />
          </button>
          <button type="button" aria-label={ui?.previousImage} onClick={(e) => (e.stopPropagation(), step(-1))} className="absolute left-12 z-10 flex size-44 items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-primary sm:left-24">
            <Icon name="FaChevronLeft" className="size-22" />
          </button>
          <div className="relative h-[70vh] w-full max-w-1100" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open].src} alt={images[open].alt} fill quality={90} sizes="90vw" className="object-contain" />
          </div>
          <button type="button" aria-label={ui?.nextImage} onClick={(e) => (e.stopPropagation(), step(1))} className="absolute right-12 z-10 flex size-44 items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-primary sm:right-24">
            <Icon name="FaChevronRight" className="size-22" />
          </button>
        </div>
      )}
    </section>
  );
};
