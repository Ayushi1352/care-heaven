"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { fillLabel } from "@/components/ui/helpers";
import type { GlobalUIData } from "@/types/templates.types";

interface PaginatedProps {
  children: ReactNode;
  /** Rows of cards per page. */
  rows: number;
  /** Columns of the grid on desktop, used until the real grid has been measured. */
  columns: number;
  /** Grid classes for the list. */
  className: string;
  /** "boxed": square page buttons (Our Teams). "round": plain numbers, round active page (Our Causes). */
  variant?: "boxed" | "round";
  /** Classes for the pagination row (spacing above it). */
  navClassName?: string;
  ui?: GlobalUIData;
}

// Page numbers to show: all of them when there are few, else 1 2 3 … last (around the current page).
function pageList(current: number, count: number): (number | "gap")[] {
  if (count <= 5) return Array.from({ length: count }, (_, i) => i);
  const pages = new Set([0, 1, 2, current - 1, current, current + 1, count - 1].filter((p) => p >= 0 && p < count));
  const sorted = [...pages].sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? ["gap" as const, p] : [p]));
}

// Shows `rows` rows of its children at a time, on every screen size, with numbered page buttons below (the row shows even with one page, as in the design).
export const Paginated = ({ children, rows, columns, className, variant = "boxed", navClassName = "mt-[3rem] xl:mt-[5.3125rem]", ui }: PaginatedProps) => {
  const items = Children.toArray(children);
  const [gridColumns, setGridColumns] = useState(columns);
  const perPage = rows * gridColumns;
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const top = useRef<HTMLDivElement>(null);
  const current = Math.min(page, pageCount - 1);

  // The grid's columns change with the screen width, so the cards per page follow them.
  useEffect(() => {
    const wrapper = top.current;
    if (!wrapper) return;
    const observer = new ResizeObserver(() => {
      const grid = wrapper.querySelector("ul");
      if (grid) setGridColumns(getComputedStyle(grid).gridTemplateColumns.split(" ").length);
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  const go = (next: number) => {
    if (next < 0 || next >= pageCount || next === current) return;
    setPage(next);
    const el = top.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
  };

  const boxed = variant === "boxed";
  const arrow = boxed
    ? "size-[2.375rem] shrink-0 rounded-[0.375rem] bg-[var(--color-pagination-boxed-bg)] text-[var(--color-accent-dark)] sm:size-[2.875rem] xl:h-[4.125rem] xl:w-[4.25rem]"
    : "size-[2.375rem] shrink-0 rounded-[0.375rem] bg-[var(--color-pagination-bg)] text-[var(--color-pagination-text)] sm:size-[2.75rem] xl:h-[3rem] xl:w-[3.125rem]";

  return (
    <div ref={top} className="scroll-mt-[7.5rem]">
      <ul key={current} data-reveal-stagger className={className}>
        {items.slice(current * perPage, current * perPage + perPage)}
      </ul>
      <nav aria-label={ui?.pagination} className={`flex items-center justify-center ${boxed ? "gap-[0.375rem] sm:gap-[0.5rem] xl:gap-[0.75rem]" : "gap-[0.375rem] sm:gap-[0.625rem] xl:gap-[1.25rem]"} ${navClassName}`}>
        <button type="button" aria-label={ui?.previousPage} disabled={current === 0} onClick={() => go(current - 1)} className={`flex items-center justify-center transition-colors enabled:hover:bg-[var(--color-primary)] enabled:hover:text-[var(--color-white)] disabled:opacity-60 ${arrow}`}>
          <Icon name="FaChevronLeft" className="size-[1rem] sm:size-[1.25rem] xl:size-[1.625rem]" />
        </button>
        {pageList(current, pageCount).map((p, i) =>
          p === "gap" ? (
            <span key={`gap-${i}`} className="px-[0.125rem] font-dm text-[1rem] font-bold text-[var(--color-accent-dark)] xl:text-[1.25rem]">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-label={fillLabel(ui?.page, { n: p + 1 })}
              aria-current={p === current ? "page" : undefined}
              onClick={() => go(p)}
              className={
                boxed
                  ? `flex size-[2.375rem] shrink-0 items-center justify-center rounded-[0.375rem] font-dm text-[0.9375rem] font-semibold transition-colors sm:size-[2.875rem] sm:text-[1.125rem] xl:h-[4.125rem] xl:w-[4.25rem] xl:text-[1.625rem] ${p === current ? "bg-[var(--color-primary)] text-[var(--color-white)]" : "bg-[var(--color-pagination-boxed-bg)] text-[var(--color-accent-dark)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"}`
                  : `flex size-[2.375rem] shrink-0 items-center justify-center rounded-full font-alt text-[0.9375rem] font-medium transition-colors sm:size-[3rem] sm:text-[1.0625rem] xl:size-[4.125rem] xl:text-[1.3125rem] ${p === current ? "bg-[var(--color-primary)] text-[var(--color-white)]" : "text-[var(--color-pagination-text)] hover:bg-[var(--color-pagination-bg)]"}`
              }
            >
              {String(p + 1).padStart(2, "0")}
            </button>
          ),
        )}
        <button type="button" aria-label={ui?.nextPage} disabled={current === pageCount - 1} onClick={() => go(current + 1)} className={`flex items-center justify-center transition-colors enabled:hover:bg-[var(--color-primary)] enabled:hover:text-[var(--color-white)] disabled:opacity-60 ${arrow}`}>
          <Icon name="FaChevronRight" className="size-[1rem] sm:size-[1.25rem] xl:size-[1.625rem]" />
        </button>
      </nav>
    </div>
  );
};
