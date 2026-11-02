"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { SoftLeaves } from "@/components/Decor";
import { label, site } from "@/data";

const { testimonials } = site;
const items = testimonials.items;
const AUTOPLAY_MS = 6000;

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span role="img" aria-label={label("rating", { n: rating })} className={`flex gap-3 text-[#f6a823] xl:gap-4 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={`size-16 xl:size-22 ${i < rating ? "" : "opacity-25"}`} />
      ))}
    </span>
  );
}

/** "Review from Our Supporters" slider — home page and About Us page. */
export default function Testimonials({ className = "" }: { className?: string }) {
  const spacing = className || "pt-32 pb-32 md:pt-40 md:pb-40 xl:pt-50 xl:pb-50";
  // Starts on the middle slide, as in the design (second dot active).
  const [index, setIndex] = useState(items.length > 1 ? 1 : 0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => setIndex((next + items.length) % items.length), []);

  useEffect(() => {
    if (paused || items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, go]);

  const arrow = "absolute top-[32%] z-10 flex size-48 -translate-y-1/2 items-center justify-center rounded-full bg-white text-maroon shadow-[0_8px_24px_rgba(240,90,60,0.16)] transition-colors hover:bg-orange hover:text-white max-sm:top-auto max-sm:-bottom-59 max-sm:size-40 max-sm:translate-y-0 xl:size-70";

  return (
    <section className={`relative overflow-hidden bg-white px-20 sm:px-32 xl:px-0 ${spacing}`}>
      <SoftLeaves className="pointer-events-none absolute bottom-20 -left-40 w-260 text-[#fdeee9] xl:bottom-30 xl:-left-24 xl:w-300" />

      <div data-reveal="up" className="relative text-center">
        <p className="flex items-center justify-center gap-14 font-body text-[calc(14*var(--spacing))] font-medium tracking-[0.1em] text-orange uppercase xl:gap-17 xl:text-[calc(21*var(--spacing))]">
          <span className="h-px w-48 bg-orange xl:w-64" />
          {testimonials.label}
          <span className="h-px w-48 bg-orange xl:w-64" />
        </p>
        <h2 className="mt-10 font-heading font-bold text-[calc(32.5*var(--spacing))] leading-[1.15] text-maroon sm:text-[calc(43.5*var(--spacing))] xl:mt-8 xl:text-[calc(71*var(--spacing))] xl:leading-80">
          {testimonials.title} <span className="text-orange">{testimonials.titleHighlight}</span>
        </h2>
        <p className="mt-6 font-dm text-[calc(16*var(--spacing))] text-[#5d5d63] xl:mt-2 xl:text-[calc(25*var(--spacing))]">{testimonials.subtitle}</p>
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
          <span className="h-px w-70 bg-[#f6d3ca] xl:w-111" />
          <span className="flex size-52 items-center justify-center rounded-full bg-rose text-maroon xl:size-64">
            <Icon name="quote" className="size-20 xl:size-24" />
          </span>
          <span className="h-px w-70 bg-[#f6d3ca] xl:w-111" />
        </div>

        {/* All slides share one grid cell, so the box is as tall as the longest quote and never jumps. */}
        <div className="relative grid sm:px-64 xl:px-0">
          <button type="button" aria-label={label("previous")} onClick={() => go(index - 1)} className={`${arrow} left-0`}>
            <Icon name="arrow-left" className="size-20 xl:size-24" strokeWidth={2} />
          </button>
          <button type="button" aria-label={label("next")} onClick={() => go(index + 1)} className={`${arrow} right-0`}>
            <Icon name="arrow-right" className="size-20 xl:size-24" strokeWidth={2} />
          </button>


          {items.map((item, i) => (
            <figure
              key={item.name}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 mx-auto flex w-full max-w-900 flex-col items-center text-center transition-[opacity,translate] duration-700 ease-out ${
                i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0"
              }`}
            >
              <blockquote className="mt-22 font-quote text-[calc(21*var(--spacing))] leading-[1.4] text-maroon sm:text-[calc(26*var(--spacing))] xl:mt-18 xl:text-[calc(37*var(--spacing))] xl:leading-46">
                <span className="relative -top-[0.2em] mr-4 font-heading font-bold text-[1.05em] text-maroon">&ldquo;</span>
                {item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-24 flex items-center gap-16 text-left xl:mt-31 xl:gap-22">
                <span className="relative size-80 shrink-0 overflow-hidden rounded-full xl:size-99">
                  <Image src={item.avatar} alt={item.name} fill quality={90} sizes="100px" className="object-cover" style={{ objectPosition: item.avatarPosition }} />
                </span>
                <span>
                  <span className="block font-dm text-[calc(17*var(--spacing))] font-bold text-maroon xl:text-[calc(21.5*var(--spacing))]">{item.name}</span>
                  <span className="mt-2 block font-dm text-[calc(14*var(--spacing))] text-[#55555a] xl:text-[max(calc(17*var(--spacing)),var(--text-min))]">{item.role}</span>
                  <Stars rating={item.rating} className="mt-8 xl:mt-10" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-32 flex justify-center gap-14 xl:mt-56 xl:gap-15">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={label("goToSlide", { n: i + 1 })}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`size-14 rounded-full transition-colors xl:size-17.5 ${i === index ? "bg-orange" : "bg-[#fbdcd3] hover:bg-[#f7b7a6]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
