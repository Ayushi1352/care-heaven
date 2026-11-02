"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { OliveBranch } from "@/components/Decor";
import { site } from "@/data";

const { faq } = site;

// Icon colour and circle colour of each question (named in site.json as "tone").
const tones: Record<string, string> = {
  orange: "bg-[#fde4da] text-[#ee4a1c]",
  green: "bg-[#e2f0d8] text-[#3d6e1f]",
  pink: "bg-[#fde1e7] text-[#cf1f4f]",
  blue: "bg-[#e0ebfb] text-[#173f7c]",
  amber: "bg-[#fdecd9] text-[#f08419]",
  purple: "bg-[#ebe5fa] text-[#7553c4]",
  sage: "bg-[#e1efe1] text-[#3b7139]",
  sky: "bg-[#dcebfb] text-[#1d5aa8]",
};

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-94 xl:pb-100 xl:pl-97">
      <OliveBranch className="pointer-events-none absolute top-60 left-0 w-110 xl:top-75 xl:-left-20 xl:w-215" />
      <OliveBranch className="pointer-events-none absolute top-60 right-0 hidden w-120 -scale-x-100 rotate-[-30deg] sm:block xl:top-70 xl:-right-30 xl:w-160" />

      <div data-reveal="up" className="relative text-center">
        <span className="mx-auto block h-3 w-52 bg-orange xl:w-68" />
        <p className="mt-16 font-alt text-[calc(18*var(--spacing))] font-semibold text-orange xl:mt-30 xl:text-[calc(25*var(--spacing))]">{faq.label}</p>
        <h2 className="mt-6 font-heading font-bold text-[calc(32.5*var(--spacing))] leading-[1.15] text-navy-deep sm:text-[calc(43.5*var(--spacing))] xl:mt-6 xl:text-[calc(65*var(--spacing))] xl:leading-78">
          {faq.title} <span className="text-green-dark">{faq.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-10 max-w-680 font-alt text-[calc(15*var(--spacing))] leading-26 text-gray xl:mt-20 xl:max-w-1095 xl:text-[calc(23.5*var(--spacing))] xl:leading-37">{faq.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-36 flex flex-col gap-14 xl:mt-56 xl:gap-26">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          return (
            <li
              key={item.question}
              className={`overflow-hidden rounded-[calc(10*var(--spacing))] border transition-[background-color,border-color,box-shadow] duration-300 xl:rounded-[calc(12*var(--spacing))] ${
                isOpen ? "border-[#f8e3d5] bg-[linear-gradient(180deg,#fdf1e9_0%,#fdf8f2_100%)] shadow-[0_8px_28px_rgba(240,120,60,0.08)]" : "border-[#ececec] bg-[#fdfdfd] shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:border-[#f3d9c9]"
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center gap-14 px-14 py-12 text-left xl:min-h-118 xl:gap-0 xl:px-35 xl:py-14 ${isOpen ? "border-b border-[#f6e4d8]" : ""}`}
                >
                  <span className={`flex size-52 shrink-0 items-center justify-center rounded-full xl:size-97 ${tones[item.tone] ?? tones.orange}`}>
                    <Icon name={item.icon} className="size-24 xl:size-44" />
                  </span>
                  <span className="min-w-0 flex-1 font-heading font-bold text-[calc(17*var(--spacing))] leading-[1.3] text-[#042958] xl:pl-42 xl:text-[calc(34*var(--spacing))] xl:leading-42">{item.question}</span>
                  <span
                    className={`flex size-36 shrink-0 items-center justify-center rounded-full transition-[background-color,color,rotate] duration-300 xl:size-67 ${
                      isOpen ? "rotate-180 bg-orange text-white" : "bg-[#efefef] text-navy-ink"
                    }`}
                  >
                    <Icon name="chevron-down" className="size-18 xl:size-30" strokeWidth={2.2} />
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-16 pt-14 pb-20 font-alt text-[calc(15*var(--spacing))] leading-26 text-gray sm:pl-80 xl:pt-27 xl:pr-90 xl:pb-38 xl:pl-174 xl:text-[calc(24*var(--spacing))] xl:leading-36">{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
