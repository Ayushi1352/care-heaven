"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { fillLabel } from "@/components/ui/helpers";
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
    <section className="bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[4.3125rem] xl:pb-[6.25rem] xl:pl-[4.8125rem]">
      <div data-reveal="up" className="text-center">
        <span className="mx-auto block h-[0.125rem] w-[2.5rem] bg-[var(--color-orange)] xl:w-[3rem]" />
        <p className="mt-[0.75rem] font-alt text-[1rem] font-semibold text-[var(--color-orange)] xl:mt-[0.8125rem] xl:text-[1.25rem]">{gallery.label}</p>
        <h2 className="mt-[0.375rem] font-heading font-bold text-[2.125rem] leading-[1.15] text-[var(--color-blue-062942)] sm:text-[2.71875rem] xl:mt-[0.25rem] xl:text-[3.28125rem] xl:leading-[4rem]">
          {gallery.title} <span className="text-[var(--color-green-dark)]">{gallery.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-[0.625rem] max-w-[42.5rem] font-alt text-[0.9375rem] leading-[1.625rem] text-[var(--color-gray)] xl:mt-[0.75rem] xl:max-w-[61.25rem] xl:text-[1.28125rem] xl:leading-[1.96875rem]">{gallery.description}</p>
        <span className="mx-auto mt-[0.875rem] block h-[0.125rem] w-[2.5rem] bg-[var(--color-orange)] xl:mt-[1.125rem] xl:w-[3rem]" />
      </div>

      <div className="mt-[2rem] xl:mt-[1.875rem]">
        <Paginated ui={ui} rows={gallery.rowsPerPage} columns={3} variant="round" navClassName="mt-[2.5rem] xl:mt-[2.9375rem]" className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[1.5rem] xl:gap-y-[1.375rem]">
        {images.map((image, i) => (
          <li key={image.id} className={`relative h-[13.75rem] overflow-hidden rounded-[0.375rem] sm:h-[15rem] ${i < 3 ? "xl:h-[17.5rem]" : "xl:h-[16.25rem]"}`}>
            <button type="button" aria-label={fillLabel(ui?.openImage, { name: image.alt })} onClick={() => setOpen(i)} className="group block size-full">
              <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              <span className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors duration-500 group-hover:bg-[var(--color-navy-45)]">
                <span className="flex size-[3.25rem] scale-50 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-orange)] opacity-0 transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100 xl:size-[4rem]">
                  <Icon name="FaPlus" className="size-[1.375rem] xl:size-[1.625rem]" />
                </span>
              </span>
            </button>
          </li>
        ))}
        </Paginated>
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={images[open].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-blue-01172d-92)] p-[1rem]" onClick={() => setOpen(null)}>
          <button type="button" aria-label={ui?.close} onClick={() => setOpen(null)} className="absolute top-[1rem] right-[1rem] flex size-[2.75rem] items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-[var(--color-orange)]">
            <Icon name="FaTimes" className="size-[1.375rem]" />
          </button>
          <button type="button" aria-label={ui?.previousImage} onClick={(e) => (e.stopPropagation(), step(-1))} className="absolute left-[0.75rem] z-10 flex size-[2.75rem] items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-[var(--color-orange)] sm:left-[1.5rem]">
            <Icon name="FaChevronLeft" className="size-[1.375rem]" />
          </button>
          <div className="relative h-[70vh] w-full max-w-[68.75rem]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open].src} alt={images[open].alt} fill quality={90} sizes="90vw" className="object-contain" />
          </div>
          <button type="button" aria-label={ui?.nextImage} onClick={(e) => (e.stopPropagation(), step(1))} className="absolute right-[0.75rem] z-10 flex size-[2.75rem] items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-[var(--color-orange)] sm:right-[1.5rem]">
            <Icon name="FaChevronRight" className="size-[1.375rem]" />
          </button>
        </div>
      )}
    </section>
  );
};
