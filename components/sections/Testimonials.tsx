"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SoftLeaves } from "@/components/ui/Decor";
import { fill } from "@/components/ui/text";
import type { GlobalUIData, TestimonialsData } from "@/types/templates.types";

const AUTOPLAY_MS = 6000;

function Stars({ rating, label, className = "" }: { rating: number; label?: string; className?: string }) {
  return (
    <span role="img" aria-label={label} className={`flex gap-3 text-star xl:gap-4 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="FaStar" className={`size-16 xl:size-22 ${i < rating ? "" : "opacity-25"}`} />
      ))}
    </span>
  );
}

/** "Review from Our Supporters" slider — home page and About Us page. */
export const Testimonials = ({ data: testimonials, ui, detailed = false }: { data?: TestimonialsData; ui?: GlobalUIData; detailed?: boolean }) => {
  const items = testimonials?.items ?? [];
  // The About Us page shows this section with more room around it than the home page.
  const spacing = detailed ? "pt-64 pb-64 md:pt-80 md:pb-80 xl:pt-100 xl:pb-100" : "pt-32 pb-32 md:pt-40 md:pb-40 xl:pt-50 xl:pb-50";
  // Starts on the middle slide, as in the design (second dot active).
  const [index, setIndex] = useState(items.length > 1 ? 1 : 0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => setIndex((next + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (paused || items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, go, items.length]);

  if (!testimonials) return null;

  const arrow = "absolute top-[32%] z-10 flex size-48 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white)] text-tertiary-dark shadow-[0_8px_24px_var(--color-shadow-testimonial-arrow)] transition-colors hover:bg-primary hover:text-[var(--color-white)] max-sm:top-auto max-sm:-bottom-59 max-sm:size-40 max-sm:translate-y-0 xl:size-70";

  return (
    <section className={`relative overflow-hidden bg-[var(--color-white)] px-20 sm:px-32 xl:px-0 ${spacing}`}>
      <SoftLeaves className="pointer-events-none absolute bottom-20 -left-40 w-260 text-[var(--color-testimonial-decor)] xl:bottom-30 xl:-left-24 xl:w-300" />

      <div data-reveal="up" className="relative text-center">
        <p className="flex items-center justify-center gap-14 font-main text-[0.875rem] font-medium tracking-[0.1em] text-primary uppercase xl:gap-17 xl:text-[1.3125rem]">
          <span className="h-px w-48 bg-primary xl:w-64" />
          {testimonials.label}
          <span className="h-px w-48 bg-primary xl:w-64" />
        </p>
        <h2 className="mt-10 font-heading font-bold text-[1.5rem] leading-[1.2] text-tertiary-dark xs:text-[1.75rem] sm:text-[2.71875rem] xl:mt-8 xl:text-[4.4375rem] xl:leading-80">
          {testimonials.title} <span className="text-primary">{testimonials.titleHighlight}</span>
        </h2>
        <p className="mt-6 font-dm text-[1rem] text-[var(--color-text-subtitle)] xl:mt-2 xl:text-[1.5625rem]">{testimonials.subtitle}</p>
      </div>

      <div
        className="relative mx-auto mt-28 max-w-1378 xl:mt-22"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          setPaused(false);
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        <div className="flex items-center justify-center gap-16 xl:gap-22">
          <span className="h-px w-70 bg-[var(--color-testimonial-divider)] xl:w-111" />
          <span className="flex size-52 items-center justify-center rounded-full bg-[var(--color-bg-subtle)] text-tertiary-dark xl:size-64">
            <Icon name="FaQuoteLeft" className="size-20 xl:size-24" />
          </span>
          <span className="h-px w-70 bg-[var(--color-testimonial-divider)] xl:w-111" />
        </div>

        {/* All slides share one grid cell, so the box is as tall as the longest quote and never jumps. */}
        <div className="relative grid sm:px-64 xl:px-0">
          <button type="button" aria-label={ui?.previousSlide} onClick={() => go(index - 1)} className={`${arrow} left-0`}>
            <Icon name="FaArrowLeft" className="size-20 xl:size-24" />
          </button>
          <button type="button" aria-label={ui?.nextSlide} onClick={() => go(index + 1)} className={`${arrow} right-0`}>
            <Icon name="FaArrowRight" className="size-20 xl:size-24" />
          </button>

          {items.map((item, i) => (
            <figure
              key={item.id}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 mx-auto flex w-full max-w-900 flex-col items-center text-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0"
              }`}
            >
              <blockquote className="mt-22 font-quote text-[1.3125rem] leading-[1.4] text-tertiary-dark sm:text-[1.625rem] xl:mt-18 xl:text-[2.3125rem] xl:leading-46">
                <span className="relative -top-[0.2em] mr-4 font-heading font-bold text-[1.05em] text-tertiary-dark">&ldquo;</span>
                {item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-24 flex items-center gap-16 text-left xl:mt-31 xl:gap-22">
                <span className="relative size-80 shrink-0 overflow-hidden rounded-full xl:size-99">
                  <Image src={item.avatar} alt={item.name} fill quality={90} sizes="100px" className={`object-cover ${item.avatarPosition}`} />
                </span>
                <span>
                  <span className="block font-dm text-[1.0625rem] font-bold text-tertiary-dark xl:text-[1.34375rem]">{item.name}</span>
                  <span className="mt-2 block font-dm text-[0.875rem] text-[var(--color-testimonial-role)] xl:text-[length:max(1.0625rem,var(--text-min))]">{item.role}</span>
                  <Stars rating={item.rating} label={fill(ui?.rating, { n: item.rating })} className="mt-8 xl:mt-10" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-19 flex h-40 items-center justify-center gap-14 sm:mt-32 sm:h-auto xl:mt-56 xl:gap-15">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={fill(ui?.goToSlide, { n: i + 1 })}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`size-14 rounded-full transition-colors xl:size-[1.09375rem] ${i === index ? "bg-primary" : "bg-[var(--color-testimonial-dot)] hover:bg-[var(--color-testimonial-dot-hover)]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
