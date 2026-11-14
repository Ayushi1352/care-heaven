import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { contactHref } from "@/components/ui/text";
import type { WhyChooseUsProps } from "@/types/templates.types";

export const WhyChooseUs = ({ data: whyChoose }: WhyChooseUsProps) => {
  if (!whyChoose) return null;

  return (
    <section className="bg-[var(--color-bg-why-choose)] px-20 pt-64 pb-64 text-[var(--color-white)] sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-80 xl:pb-100 xl:pl-96">
      <div data-reveal="up">
        <p className="flex items-center gap-14 font-alt text-[0.9375rem] font-medium text-highlight xl:gap-15 xl:text-[1.375rem]">
          <span className="h-2 w-44 bg-highlight xl:h-3 xl:w-59" />
          {whyChoose.label}
        </p>
        <h2 className="mt-10 font-heading font-bold text-[1.4375rem] leading-[1.18] uppercase xs:text-[1.75rem] sm:text-[3.09375rem] xl:mt-5 xl:text-[5.03125rem] xl:leading-80">
          <span className="sm:hidden">
            {whyChoose.titleTop} <span className="text-primary">{whyChoose.titleHighlight}</span>
            <br />
            {whyChoose.titleAfter} {whyChoose.titleBottom}
          </span>
          <span className="hidden sm:inline">
            {whyChoose.titleTop}
            <br />
            <span className="text-primary">{whyChoose.titleHighlight}</span> {whyChoose.titleAfter}
            <br />
            {whyChoose.titleBottom}
          </span>
        </h2>
      </div>

      <div className="mt-32 flex flex-col gap-40 lg:flex-row lg:items-start xl:mt-24 xl:gap-125">
        <div data-reveal="left" className="w-full max-w-610 lg:w-[40%] xl:w-610 xl:shrink-0">
          <div className="relative aspect-[610/372] overflow-hidden">
            <Image src={whyChoose.image.src} alt={whyChoose.image.alt} fill quality={90} sizes="(min-width: 1024px) 37vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-105" />
          </div>
          <a href={contactHref("tel", whyChoose.call.phone)} className="group flex items-center gap-18 bg-highlight-dark px-20 py-22 text-accent-dark xl:h-146 xl:gap-26 xl:px-31 xl:py-0">
            <span className="flex size-60 shrink-0 items-center justify-center rounded-full border-[1.5px] border-accent-dark transition-[background-color,color] duration-300 group-hover:bg-accent-dark group-hover:text-highlight-dark xl:size-82">
              <Icon name="FaPhoneAlt" className="size-24 xl:size-32" />
            </span>
            <span>
              <span className="block font-alt text-[0.875rem] xl:text-[1.1875rem]">{whyChoose.call.label}</span>
              <span className="mt-2 block whitespace-nowrap font-alt text-[length:min(1.375rem,5.6vw)] font-bold xl:mt-1 xl:text-[1.75rem]">{whyChoose.call.phone}</span>
            </span>
          </a>
        </div>

        <div data-reveal="right" className="min-w-0 flex-1 xl:-mt-7 xl:max-w-770">
          <p className="font-quote text-[1.375rem] leading-[1.3] text-highlight sm:text-[1.625rem] xl:text-[2.21875rem] xl:leading-44">{whyChoose.lead}</p>
          <span className="mt-24 block h-3 w-52 bg-primary xl:mt-35 xl:w-61" />
          <h3 className="mt-14 font-heading text-[1.625rem] font-semibold xl:mt-16 xl:text-[2.5625rem] xl:leading-46">{whyChoose.missionTitle}</h3>
          <p className="mt-10 max-w-540 font-alt text-[0.9375rem] leading-26 text-[var(--color-white-95)] xl:mt-6 xl:max-w-524 xl:text-[1.296875rem] xl:leading-30">{whyChoose.missionText}</p>
          <Link
            href={whyChoose.button.href}
            className="group mt-26 inline-flex h-50 items-center gap-12 rounded-[0.25rem] border border-primary bg-primary px-24 font-alt text-[0.9375rem] font-semibold uppercase transition-colors duration-300 hover:bg-[var(--color-white)] hover:text-primary xl:mt-19 xl:rounded-[0.625rem] xl:h-58 xl:w-276 xl:justify-center xl:gap-14 xl:px-0 xl:text-[1.21875rem]"
          >
            {whyChoose.button.label}
            <Icon name="FaArrowRight" className="size-17 xl:size-20" />
          </Link>
        </div>
      </div>
    </section>
  );
};
