import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { contactHref } from "@/components/ui/helpers";
import type { CompanyData, WhyChooseUsData } from "@/types/templates.types";

export const WhyChooseUs = ({ data: whyChoose, company }: { data?: WhyChooseUsData; company?: CompanyData }) => {
  if (!whyChoose || !company) return null;

  return (
    <section className="bg-[var(--color-bg-why-choose)] px-[1.25rem] pt-[4rem] pb-[4rem] text-[var(--color-white)] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[5rem] xl:pb-[6.25rem] xl:pl-[6rem]">
      <div data-reveal="up">
        <p className="flex items-center gap-[0.875rem] font-alt text-[0.9375rem] font-medium text-[var(--color-highlight)] xl:gap-[0.9375rem] xl:text-[1.375rem]">
          <span className="h-[0.125rem] w-[2.75rem] bg-[var(--color-highlight)] xl:h-[0.1875rem] xl:w-[3.6875rem]" />
          {whyChoose.label}
        </p>
        <h2 className="mt-[0.625rem] font-heading font-bold text-[1.4375rem] leading-[1.18] uppercase xs:text-[1.75rem] sm:text-[3.09375rem] xl:mt-[0.3125rem] xl:text-[5.03125rem] xl:leading-[5rem]">
          <span className="sm:hidden">
            {whyChoose.titleTop} <span className="text-[var(--color-primary)]">{whyChoose.titleHighlight}</span>
            <br />
            {whyChoose.titleAfter} {whyChoose.titleBottom}
          </span>
          <span className="hidden sm:inline">
            {whyChoose.titleTop}
            <br />
            <span className="text-[var(--color-primary)]">{whyChoose.titleHighlight}</span> {whyChoose.titleAfter}
            <br />
            {whyChoose.titleBottom}
          </span>
        </h2>
      </div>

      <div className="mt-[2rem] flex flex-col gap-[2.5rem] lg:flex-row lg:items-start xl:mt-[1.5rem] xl:gap-[7.8125rem]">
        <div data-reveal="left" className="w-full max-w-[38.125rem] lg:w-[40%] xl:w-[38.125rem] xl:shrink-0">
          <div className="relative aspect-[610/372] overflow-hidden">
            <Image src={whyChoose.image.src} alt={whyChoose.image.alt} fill quality={90} sizes="(min-width: 1024px) 37vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-105" />
          </div>
          <a href={contactHref("tel", company.phone)} className="group flex items-center gap-[1.125rem] bg-[var(--color-highlight-dark)] px-[1.25rem] py-[1.375rem] text-[var(--color-accent-dark)] xl:h-[9.125rem] xl:gap-[1.625rem] xl:px-[1.9375rem] xl:py-0">
            <span className="flex size-[3.75rem] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--color-accent-dark)] transition-[background-color,color] duration-300 group-hover:bg-[var(--color-accent-dark)] group-hover:text-[var(--color-highlight-dark)] xl:size-[5.125rem]">
              <Icon name="FaPhoneAlt" className="size-[1.5rem] xl:size-[2rem]" />
            </span>
            <span>
              <span className="block font-alt text-[0.875rem] xl:text-[1.1875rem]">{whyChoose.call.label}</span>
              <span className="mt-[0.125rem] block whitespace-nowrap font-alt text-[length:min(1.375rem,5.6vw)] font-bold xl:mt-[0.0625rem] xl:text-[1.75rem]">{company.phone}</span>
            </span>
          </a>
        </div>

        <div data-reveal="right" className="min-w-0 flex-1 xl:-mt-[0.4375rem] xl:max-w-[48.125rem]">
          <p className="font-quote text-[1.375rem] leading-[1.3] text-[var(--color-highlight)] sm:text-[1.625rem] xl:text-[2.21875rem] xl:leading-[2.75rem]">{whyChoose.lead}</p>
          <span className="mt-[1.5rem] block h-[0.1875rem] w-[3.25rem] bg-[var(--color-primary)] xl:mt-[2.1875rem] xl:w-[3.8125rem]" />
          <h3 className="mt-[0.875rem] font-heading text-[1.625rem] font-semibold xl:mt-[1rem] xl:text-[2.5625rem] xl:leading-[2.875rem]">{whyChoose.missionTitle}</h3>
          <p className="mt-[0.625rem] max-w-[33.75rem] font-alt text-[0.9375rem] leading-[1.625rem] text-[var(--color-white-95)] xl:mt-[0.375rem] xl:max-w-[32.75rem] xl:text-[1.296875rem] xl:leading-[1.875rem]">{whyChoose.missionText}</p>
          <Link
            href={whyChoose.button.href}
            className="group mt-[1.625rem] inline-flex h-[3.125rem] items-center gap-[0.75rem] rounded-[0.25rem] border border-[var(--color-primary)] bg-[var(--color-primary)] px-[1.5rem] font-alt text-[0.9375rem] font-semibold uppercase transition-colors duration-300 hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] xl:mt-[1.1875rem] xl:rounded-[0.625rem] xl:h-[3.625rem] xl:w-[17.25rem] xl:justify-center xl:gap-[0.875rem] xl:px-0 xl:text-[1.21875rem]"
          >
            {whyChoose.button.label}
            <Icon name="FaArrowRight" className="size-[1.0625rem] xl:size-[1.25rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
