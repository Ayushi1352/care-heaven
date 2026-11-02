"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { OliveBranch } from "@/components/ui/Decor";
import type { FaqData } from "@/types/templates.types";

// Icon colour and circle colour of each question (named in templates.json as "tone").
const tones: Record<string, string> = {
  orange: "bg-[var(--color-peach-fde4da)] text-[var(--color-orange-ee4a1c)]",
  green: "bg-[var(--color-green-e2f0d8)] text-[var(--color-green-3d6e1f)]",
  pink: "bg-[var(--color-pink-fde1e7)] text-[var(--color-red-cf1f4f)]",
  blue: "bg-[var(--color-blue-e0ebfb)] text-[var(--color-blue-173f7c)]",
  amber: "bg-[var(--color-peach-fdecd9)] text-[var(--color-orange-f08419)]",
  purple: "bg-[var(--color-purple-ebe5fa)] text-[var(--color-purple-7553c4)]",
  sage: "bg-[var(--color-green-e1efe1)] text-[var(--color-green-3b7139)]",
  sky: "bg-[var(--color-blue-dcebfb)] text-[var(--color-blue-1d5aa8)]",
};

export const FaqList = ({ data: faq }: { data?: FaqData }) => {
  const [open, setOpen] = useState<number | null>(0);

  if (!faq) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[5.875rem] xl:pb-[6.25rem] xl:pl-[6.0625rem]">
      <OliveBranch className="pointer-events-none absolute top-[3.75rem] left-0 w-[6.875rem] xl:top-[4.6875rem] xl:-left-[1.25rem] xl:w-[13.4375rem]" />
      <OliveBranch className="pointer-events-none absolute top-[3.75rem] right-0 hidden w-[7.5rem] -scale-x-100 rotate-[-30deg] sm:block xl:top-[4.375rem] xl:-right-[1.875rem] xl:w-[10rem]" />

      <div data-reveal="up" className="relative text-center">
        <span className="mx-auto block h-[0.1875rem] w-[3.25rem] bg-[var(--color-orange)] xl:w-[4.25rem]" />
        <p className="mt-[1rem] font-alt text-[1.125rem] font-semibold text-[var(--color-orange)] xl:mt-[1.875rem] xl:text-[1.5625rem]">{faq.label}</p>
        <h2 className="mt-[0.375rem] font-heading font-bold text-[2.03125rem] leading-[1.15] text-[var(--color-navy-deep)] sm:text-[2.71875rem] xl:mt-[0.375rem] xl:text-[4.0625rem] xl:leading-[4.875rem]">
          {faq.title} <span className="text-[var(--color-green-dark)]">{faq.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-[0.625rem] max-w-[42.5rem] font-alt text-[0.9375rem] leading-[1.625rem] text-[var(--color-gray)] xl:mt-[1.25rem] xl:max-w-[68.4375rem] xl:text-[1.46875rem] xl:leading-[2.3125rem]">{faq.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-[2.25rem] flex flex-col gap-[0.875rem] xl:mt-[3.5rem] xl:gap-[1.625rem]">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          return (
            <li
              key={item.id}
              className={`overflow-hidden rounded-[0.625rem] border transition-[background-color,border-color,box-shadow] duration-300 xl:rounded-[0.75rem] ${
                isOpen ? "border-[var(--color-peach-f8e3d5)] bg-[linear-gradient(180deg,var(--color-peach-fdf1e9)_0%,var(--color-gray-fdf8f2)_100%)] shadow-[0_8px_28px_var(--color-shadow-f0783c-8)]" : "border-[var(--color-gray-ececec)] bg-[var(--color-gray-fdfdfd)] shadow-[0_4px_18px_var(--color-black-3)] hover:border-[var(--color-peach-f3d9c9)]"
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center gap-[0.875rem] px-[0.875rem] py-[0.75rem] text-left xl:min-h-[7.375rem] xl:gap-0 xl:px-[2.1875rem] xl:py-[0.875rem] ${isOpen ? "border-b border-[var(--color-peach-f6e4d8)]" : ""}`}
                >
                  <span className={`flex size-[3.25rem] shrink-0 items-center justify-center rounded-full xl:size-[6.0625rem] ${tones[item.tone] ?? tones.orange}`}>
                    <Icon name={item.icon} className="size-[1.5rem] xl:size-[2.75rem]" />
                  </span>
                  <span className="min-w-0 flex-1 font-heading font-bold text-[1.0625rem] leading-[1.3] text-[var(--color-blue-042958)] xl:pl-[2.625rem] xl:text-[2.125rem] xl:leading-[2.625rem]">{item.question}</span>
                  <span
                    className={`flex size-[2.25rem] shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 xl:size-[4.1875rem] ${
                      isOpen ? "rotate-180 bg-[var(--color-orange)] text-[var(--color-white)]" : "bg-[var(--color-gray-efefef)] text-[var(--color-navy-ink)]"
                    }`}
                  >
                    <Icon name="FaChevronDown" className="size-[1.125rem] xl:size-[1.875rem]" />
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-[1rem] pt-[0.875rem] pb-[1.25rem] font-alt text-[0.9375rem] leading-[1.625rem] text-[var(--color-gray)] sm:pl-[5rem] xl:pt-[1.6875rem] xl:pr-[5.625rem] xl:pb-[2.375rem] xl:pl-[10.875rem] xl:text-[1.5rem] xl:leading-[2.25rem]">{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
