'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { OliveBranch } from '@/components/ui/Decor';
import type { FaqProps } from '@/types/templates.types';

// Icon colour and circle colour of each question (named in templates.json as "tone").
const tones: Record<string, string> = {
  orange: 'bg-[var(--color-faq-orange-bg)] text-[var(--color-faq-orange-icon)]',
  green: 'bg-[var(--color-faq-green-bg)] text-[var(--color-faq-green-icon)]',
  pink: 'bg-[var(--color-faq-pink-bg)] text-[var(--color-faq-pink-icon)]',
  blue: 'bg-[var(--color-faq-blue-bg)] text-[var(--color-faq-blue-icon)]',
  amber: 'bg-[var(--color-faq-amber-bg)] text-[var(--color-faq-amber-icon)]',
  purple: 'bg-[var(--color-faq-purple-bg)] text-[var(--color-faq-purple-icon)]',
  sage: 'bg-[var(--color-faq-sage-bg)] text-[var(--color-faq-sage-icon)]',
  sky: 'bg-[var(--color-faq-sky-bg)] text-[var(--color-faq-sky-icon)]',
};

export const Faq = ({ data: faq }: FaqProps) => {
  const [open, setOpen] = useState<number | null>(0);

  if (!faq) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-94 xl:pb-100 xl:pl-97">
      <OliveBranch className="pointer-events-none absolute top-60 left-0 w-110 xl:top-75 xl:-left-20 xl:w-215" />
      <OliveBranch className="pointer-events-none absolute top-60 right-0 hidden w-120 -scale-x-100 rotate-[-30deg] sm:block xl:top-70 xl:-right-30 xl:w-160" />

      <div data-reveal="up" className="relative text-center">
        <span className="mx-auto block h-3 w-52 bg-primary xl:w-68" />
        <p className="mt-16 font-alt text-[1.125rem] font-semibold text-primary xl:mt-30 xl:text-[1.5625rem]">{faq.label}</p>
        <h2 className="mt-6 font-heading font-bold text-[1.5rem] leading-[1.2] text-[var(--color-heading)] xs:text-[1.75rem] sm:text-[2.71875rem] xl:mt-6 xl:text-[4.0625rem] xl:leading-78">
          {faq.title} <span className="text-secondary-dark">{faq.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-10 max-w-680 font-alt text-[0.9375rem] leading-26 text-[var(--color-text)] xl:mt-20 xl:max-w-1095 xl:text-[1.46875rem] xl:leading-37">{faq.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-36 flex flex-col gap-14 xl:mt-56 xl:gap-26">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          return (
            <li
              key={item.id}
              className={`overflow-hidden rounded-[0.625rem] border transition-[background-color,border-color,box-shadow] duration-300 xl:rounded-[0.75rem] ${
                isOpen ? 'border-[var(--color-faq-open-border)] bg-[linear-gradient(180deg,var(--color-faq-open-from)_0%,var(--color-faq-open-to)_100%)] shadow-[0_8px_28px_var(--color-shadow-faq-open)]' : 'border-[var(--color-border)] bg-[var(--color-faq-bg)] shadow-[0_4px_18px_var(--color-black-3)] hover:border-[var(--color-faq-hover-border)]'
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center gap-14 px-14 py-12 text-left xl:min-h-118 xl:gap-0 xl:px-35 xl:py-14 ${isOpen ? 'border-b border-[var(--color-faq-divider)]' : ''}`}
                >
                  <span className={`flex size-52 shrink-0 items-center justify-center rounded-full xl:size-97 ${tones[item.tone] ?? tones.orange}`}>
                    <Icon name={item.icon} className="size-24 xl:size-44" />
                  </span>
                  <span className="min-w-0 flex-1 font-heading font-bold text-[1.0625rem] leading-[1.3] text-[var(--color-faq-question)] xl:pl-42 xl:text-[2.125rem] xl:leading-42">{item.question}</span>
                  <span
                    className={`flex size-36 shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 xl:size-67 ${
                      isOpen ? 'rotate-180 bg-primary text-[var(--color-white)]' : 'bg-[var(--color-faq-toggle-bg)] text-accent-dark'
                    }`}
                  >
                    <Icon name="FaChevronDown" className="size-18 xl:size-30" />
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-16 pt-14 pb-20 font-alt text-[0.9375rem] leading-26 text-[var(--color-text)] sm:pl-80 xl:pt-27 xl:pr-90 xl:pb-38 xl:pl-174 xl:text-[1.5rem] xl:leading-36">{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
