"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import Icon from "@/components/Icon";
import { label } from "@/data";

interface PaginatedProps {
  children: ReactNode;
  /** Cards per page. */
  perPage: number;
  /** Grid classes for the list. */
  className: string;
  /** "boxed": square page buttons (Our Teams). "round": plain numbers, round active page (Our Causes). */
  variant?: "boxed" | "round";
  /** Classes for the pagination row (spacing above it). */
  navClassName?: string;
}

// Page numbers to show: all of them when there are few, else 1 2 3 … last (around the current page).
function pageList(current: number, count: number): (number | "gap")[] {
  if (count <= 5) return Array.from({ length: count }, (_, i) => i);
  const pages = new Set([0, 1, 2, current - 1, current, current + 1, count - 1].filter((p) => p >= 0 && p < count));
  const sorted = [...pages].sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? ["gap" as const, p] : [p]));
}

// Shows `perPage` of its children at a time with numbered page buttons below (the row shows even with one page, as in the design).
export default function Paginated({ children, perPage, className, variant = "boxed", navClassName = "mt-48 xl:mt-85" }: PaginatedProps) {
  const items = Children.toArray(children);
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const top = useRef<HTMLDivElement>(null);
  const current = Math.min(page, pageCount - 1);

  const go = (next: number) => {
    if (next < 0 || next >= pageCount || next === current) return;
    setPage(next);
    const el = top.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
  };

  const boxed = variant === "boxed";
  const arrow = boxed
    ? "size-46 rounded-[calc(6*var(--spacing))] bg-[#eceef1] text-navy-ink xl:h-66 xl:w-68"
    : "size-44 rounded-[calc(6*var(--spacing))] bg-[#edf2f7] text-[#1f5c99] xl:h-48 xl:w-50";

  return (
    <div ref={top} className="scroll-mt-120">
      <ul key={current} data-reveal-stagger className={className}>
        {items.slice(current * perPage, current * perPage + perPage)}
      </ul>
      <nav aria-label={label("pagination")} className={`flex flex-wrap items-center justify-center ${boxed ? "gap-8 xl:gap-12" : "gap-10 xl:gap-20"} ${navClassName}`}>
        <button type="button" aria-label={label("previousPage")} disabled={current === 0} onClick={() => go(current - 1)} className={`flex items-center justify-center transition-colors enabled:hover:bg-orange enabled:hover:text-white disabled:opacity-60 ${arrow}`}>
          <Icon name="chevron-left" className="size-20 xl:size-26" strokeWidth={2.6} />
        </button>
        {pageList(current, pageCount).map((p, i) =>
          p === "gap" ? (
            <span key={`gap-${i}`} className="px-2 font-dm text-[calc(18*var(--spacing))] font-bold text-navy-ink xl:text-[calc(20*var(--spacing))]">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-label={label("page", { n: p + 1 })}
              aria-current={p === current ? "page" : undefined}
              onClick={() => go(p)}
              className={
                boxed
                  ? `flex size-46 items-center justify-center rounded-[calc(6*var(--spacing))] font-dm text-[calc(18*var(--spacing))] font-semibold transition-colors xl:h-66 xl:w-68 xl:text-[calc(26*var(--spacing))] ${p === current ? "bg-orange text-white" : "bg-[#eceef1] text-navy-ink hover:bg-orange hover:text-white"}`
                  : `flex size-48 items-center justify-center rounded-full font-alt text-[calc(17*var(--spacing))] font-medium transition-colors xl:size-66 xl:text-[calc(21*var(--spacing))] ${p === current ? "bg-orange text-white" : "text-[#1f5c99] hover:bg-[#edf2f7]"}`
              }
            >
              {String(p + 1).padStart(2, "0")}
            </button>
          ),
        )}
        <button type="button" aria-label={label("nextPage")} disabled={current === pageCount - 1} onClick={() => go(current + 1)} className={`flex items-center justify-center transition-colors enabled:hover:bg-orange enabled:hover:text-white disabled:opacity-60 ${arrow}`}>
          <Icon name="chevron-right" className="size-20 xl:size-26" strokeWidth={2.6} />
        </button>
      </nav>
    </div>
  );
}
