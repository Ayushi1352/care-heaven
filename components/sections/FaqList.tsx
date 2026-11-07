"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { OliveBranch } from "@/components/ui/Decor";
import type { FaqData } from "@/types/templates.types";

// Icon colour and circle colour of each question (named in templates.json as "tone").
const tones: Record<string, string> = {
  orange: "bg-[var(--color-faq-orange-bg)] text-[var(--color-faq-orange-icon)]",
  green: "bg-[var(--color-faq-green-bg)] text-[var(--color-faq-green-icon)]",
  pink: "bg-[var(--color-faq-pink-bg)] text-[var(--color-faq-pink-icon)]",
  blue: "bg-[var(--color-faq-blue-bg)] text-[var(--color-faq-blue-icon)]",
  amber: "bg-[var(--color-faq-amber-bg)] text-[var(--color-faq-amber-icon)]",
  purple: "bg-[var(--color-faq-purple-bg)] text-[var(--color-faq-purple-icon)]",
  sage: "bg-[var(--color-faq-sage-bg)] text-[var(--color-faq-sage-icon)]",
  sky: "bg-[var(--color-faq-sky-bg)] text-[var(--color-faq-sky-icon)]",
};

export const FaqList = ({ data: faq }: { data?: FaqData }) => {
  const [open, setOpen] = useState<number | null>(0);

  if (!faq) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[5.875rem] xl:pb-[6.25rem] xl:pl-[6.0625rem]">
      <OliveBranch className="pointer-events-none absolute top-[3.75rem] left-0 w-[6.875rem] xl:top-[4.6875rem] xl:-left-[1.25rem] xl:w-[13.4375rem]" />
      <OliveBranch className="pointer-events-none absolute top-[3.75rem] right-0 hidden w-[7.5rem] -scale-x-100 rotate-[-30deg] sm:block xl:top-[4.375rem] xl:-right-[1.875rem] xl:w-[10rem]" />

      <div data-reveal="up" className="relative text-center">
        <span className="mx-auto block h-[0.1875rem] w-[3.25rem] bg-[var(--color-primary)] xl:w-[4.25rem]" />
        <p className="mt-[1rem] font-alt text-[1.125rem] font-semibold text-[var(--color-primary)] xl:mt-[1.875rem] xl:text-[1.5625rem]">{faq.label}</p>
        <h2 className="mt-[0.375rem] font-heading font-bold text-[1.5rem] leading-[1.2] text-[var(--color-heading)] xs:text-[1.75rem] sm:text-[2.71875rem] xl:mt-[0.375rem] xl:text-[4.0625rem] xl:leading-[4.875rem]">
          {faq.title} <span className="text-[var(--color-secondary-dark)]">{faq.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-[0.625rem] max-w-[42.5rem] font-alt text-[0.9375rem] leading-[1.625rem] text-[var(--color-text)] xl:mt-[1.25rem] xl:max-w-[68.4375rem] xl:text-[1.46875rem] xl:leading-[2.3125rem]">{faq.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-[2.25rem] flex flex-col gap-[0.875rem] xl:mt-[3.5rem] xl:gap-[1.625rem]">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          return (
            <li
              key={item.id}
              className={`overflow-hidden rounded-[0.625rem] border transition-[background-color,border-color,box-shadow] duration-300 xl:rounded-[0.75rem] ${
                isOpen ? "border-[var(--color-faq-open-border)] bg-[linear-gradient(180deg,var(--color-faq-open-from)_0%,var(--color-faq-open-to)_100%)] shadow-[0_8px_28px_var(--color-shadow-faq-open)]" : "border-[var(--color-border)] bg-[var(--color-faq-bg)] shadow-[0_4px_18px_var(--color-black-3)] hover:border-[var(--color-faq-hover-border)]"
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center gap-[0.875rem] px-[0.875rem] py-[0.75rem] text-left xl:min-h-[7.375rem] xl:gap-0 xl:px-[2.1875rem] xl:py-[0.875rem] ${isOpen ? "border-b border-[var(--color-faq-divider)]" : ""}`}
                >
                  <span className={`flex size-[3.25rem] shrink-0 items-center justify-center rounded-full xl:size-[6.0625rem] ${tones[item.tone] ?? tones.orange}`}>
                    <Icon name={item.icon} className="size-[1.5rem] xl:size-[2.75rem]" />
                  </span>
                  <span className="min-w-0 flex-1 font-heading font-bold text-[1.0625rem] leading-[1.3] text-[var(--color-faq-question)] xl:pl-[2.625rem] xl:text-[2.125rem] xl:leading-[2.625rem]">{item.question}</span>
                  <span
                    className={`flex size-[2.25rem] shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 xl:size-[4.1875rem] ${
                      isOpen ? "rotate-180 bg-[var(--color-primary)] text-[var(--color-white)]" : "bg-[var(--color-faq-toggle-bg)] text-[var(--color-accent-dark)]"
                    }`}
                  >
                    <Icon name="FaChevronDown" className="size-[1.125rem] xl:size-[1.875rem]" />
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-[1rem] pt-[0.875rem] pb-[1.25rem] font-alt text-[0.9375rem] leading-[1.625rem] text-[var(--color-text)] sm:pl-[5rem] xl:pt-[1.6875rem] xl:pr-[5.625rem] xl:pb-[2.375rem] xl:pl-[10.875rem] xl:text-[1.5rem] xl:leading-[2.25rem]">{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
