"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SoftLeaves } from "@/components/ui/Decor";
import { fillLabel } from "@/components/ui/helpers";
import type { GlobalUIData, TestimonialsData } from "@/types/templates.types";

const AUTOPLAY_MS = 6000;

function Stars({ rating, label, className = "" }: { rating: number; label?: string; className?: string }) {
  return (
    <span role="img" aria-label={label} className={`flex gap-[0.1875rem] text-[var(--color-star)] xl:gap-[0.25rem] ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="FaStar" className={`size-[1rem] xl:size-[1.375rem] ${i < rating ? "" : "opacity-25"}`} />
      ))}
    </span>
  );
}

/** "Review from Our Supporters" slider — home page and About Us page. */
export const Testimonials = ({ data: testimonials, ui, className = "" }: { data?: TestimonialsData; ui?: GlobalUIData; className?: string }) => {
  const items = testimonials?.items ?? [];
  const spacing = className || "pt-[2rem] pb-[2rem] md:pt-[2.5rem] md:pb-[2.5rem] xl:pt-[3.125rem] xl:pb-[3.125rem]";
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

  const arrow = "absolute top-[32%] z-10 flex size-[3rem] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-tertiary-dark)] shadow-[0_8px_24px_var(--color-shadow-testimonial-arrow)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] max-sm:top-auto max-sm:-bottom-[3.6875rem] max-sm:size-[2.5rem] max-sm:translate-y-0 xl:size-[4.375rem]";

  return (
    <section className={`relative overflow-hidden bg-[var(--color-white)] px-[1.25rem] sm:px-[2rem] xl:px-0 ${spacing}`}>
      <SoftLeaves className="pointer-events-none absolute bottom-[1.25rem] -left-[2.5rem] w-[16.25rem] text-[var(--color-testimonial-decor)] xl:bottom-[1.875rem] xl:-left-[1.5rem] xl:w-[18.75rem]" />

      <div data-reveal="up" className="relative text-center">
        <p className="flex items-center justify-center gap-[0.875rem] font-sans text-[0.875rem] font-medium tracking-[0.1em] text-[var(--color-primary)] uppercase xl:gap-[1.0625rem] xl:text-[1.3125rem]">
          <span className="h-px w-[3rem] bg-[var(--color-primary)] xl:w-[4rem]" />
          {testimonials.label}
          <span className="h-px w-[3rem] bg-[var(--color-primary)] xl:w-[4rem]" />
        </p>
        <h2 className="mt-[0.625rem] font-heading font-bold text-[2.03125rem] leading-[1.15] text-[var(--color-tertiary-dark)] sm:text-[2.71875rem] xl:mt-[0.5rem] xl:text-[4.4375rem] xl:leading-[5rem]">
          {testimonials.title} <span className="text-[var(--color-primary)]">{testimonials.titleHighlight}</span>
        </h2>
        <p className="mt-[0.375rem] font-dm text-[1rem] text-[var(--color-text-subtitle)] xl:mt-[0.125rem] xl:text-[1.5625rem]">{testimonials.subtitle}</p>
      </div>

      <div
        className="relative mx-auto mt-[1.75rem] max-w-[86.125rem] xl:mt-[1.375rem]"
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
        <div className="flex items-center justify-center gap-[1rem] xl:gap-[1.375rem]">
          <span className="h-px w-[4.375rem] bg-[var(--color-testimonial-divider)] xl:w-[6.9375rem]" />
          <span className="flex size-[3.25rem] items-center justify-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-tertiary-dark)] xl:size-[4rem]">
            <Icon name="FaQuoteLeft" className="size-[1.25rem] xl:size-[1.5rem]" />
          </span>
          <span className="h-px w-[4.375rem] bg-[var(--color-testimonial-divider)] xl:w-[6.9375rem]" />
        </div>

        {/* All slides share one grid cell, so the box is as tall as the longest quote and never jumps. */}
        <div className="relative grid sm:px-[4rem] xl:px-0">
          <button type="button" aria-label={ui?.previous} onClick={() => go(index - 1)} className={`${arrow} left-0`}>
            <Icon name="FaArrowLeft" className="size-[1.25rem] xl:size-[1.5rem]" />
          </button>
          <button type="button" aria-label={ui?.next} onClick={() => go(index + 1)} className={`${arrow} right-0`}>
            <Icon name="FaArrowRight" className="size-[1.25rem] xl:size-[1.5rem]" />
          </button>

          {items.map((item, i) => (
            <figure
              key={item.id}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 mx-auto flex w-full max-w-[56.25rem] flex-col items-center text-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[0.75rem] opacity-0"
              }`}
            >
              <blockquote className="mt-[1.375rem] font-quote text-[1.3125rem] leading-[1.4] text-[var(--color-tertiary-dark)] sm:text-[1.625rem] xl:mt-[1.125rem] xl:text-[2.3125rem] xl:leading-[2.875rem]">
                <span className="relative -top-[0.2em] mr-[0.25rem] font-heading font-bold text-[1.05em] text-[var(--color-tertiary-dark)]">&ldquo;</span>
                {item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-[1.5rem] flex items-center gap-[1rem] text-left xl:mt-[1.9375rem] xl:gap-[1.375rem]">
                <span className="relative size-[5rem] shrink-0 overflow-hidden rounded-full xl:size-[6.1875rem]">
                  <Image src={item.avatar} alt={item.name} fill quality={90} sizes="100px" className="object-cover" style={{ objectPosition: item.avatarPosition }} />
                </span>
                <span>
                  <span className="block font-dm text-[1.0625rem] font-bold text-[var(--color-tertiary-dark)] xl:text-[1.34375rem]">{item.name}</span>
                  <span className="mt-[0.125rem] block font-dm text-[0.875rem] text-[var(--color-testimonial-role)] xl:text-[length:max(1.0625rem,var(--text-min))]">{item.role}</span>
                  <Stars rating={item.rating} label={fillLabel(ui?.rating, { n: item.rating })} className="mt-[0.5rem] xl:mt-[0.625rem]" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[1.1875rem] flex h-[2.5rem] items-center justify-center gap-[0.875rem] sm:mt-[2rem] sm:h-auto xl:mt-[3.5rem] xl:gap-[0.9375rem]">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={fillLabel(ui?.goToSlide, { n: i + 1 })}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`size-[0.875rem] rounded-full transition-colors xl:size-[1.09375rem] ${i === index ? "bg-[var(--color-primary)]" : "bg-[var(--color-testimonial-dot)] hover:bg-[var(--color-testimonial-dot-hover)]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
