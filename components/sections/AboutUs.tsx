import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { AboutUsProps } from "@/types/templates.types";

/** "Movement Built Hope and Humanity" — used on the home page and the About Us page. */
export const AboutUs = ({ data: about, detailed = false }: AboutUsProps) => {
  if (!about) return null;

  // The About Us page shows this section with more room around it than the home page.
  const spacing = detailed ? "pt-64 pb-64 md:pt-80 md:pb-80 xl:pt-100 xl:pb-100" : "pt-32 pb-32 md:pt-40 md:pb-40 xl:pt-50 xl:pb-50";
  return (
    <section className={`relative bg-[var(--color-white)] px-20 sm:px-32 xl:px-0 ${spacing}`}>
      {/* Soft blush band behind the top part of the section */}
      <div className="absolute inset-x-0 top-0 h-full bg-[var(--color-bg-about)] xl:h-758" />

      <div className="relative flex flex-col gap-44 lg:flex-row lg:items-start xl:gap-0">
        <div data-reveal="left" className="relative mx-auto aspect-[731/858] w-full max-w-560 overflow-hidden rounded-[0.75rem] lg:mx-0 lg:w-[45%] lg:max-w-none xl:ml-81 xl:w-731 xl:shrink-0 xl:rounded-[0.6875rem]">
          <Image src={about.image.src} alt={about.image.alt} fill quality={90} sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>

        <div data-reveal="right" className="min-w-0 flex-1 xl:ml-53 xl:w-768 xl:flex-none">
          <p className="inline-flex h-38 items-center gap-10 rounded-full bg-[var(--color-bg-subtle)] px-16 font-main text-[0.875rem] font-medium text-tertiary-dark xl:h-44 xl:gap-12 xl:px-20 xl:text-[length:max(1.0625rem,var(--text-min))]">
            <span className="size-6 rounded-full bg-primary xl:size-7" />
            {about.badge}
          </p>
          <h2 className="mt-16 font-heading font-bold text-[1.5rem] leading-[1.2] text-tertiary-dark xs:text-[1.75rem] sm:text-[2.84375rem] xl:mt-23 xl:text-[4.375rem] xl:leading-77">
            {about.title} <span className="text-primary">{about.titleHighlight}</span>
            <br />
            {about.titleEnd}
          </h2>
          <p className="mt-16 font-main text-[1rem] leading-27 text-[var(--color-text-dark)] xl:mt-18 xl:max-w-722 xl:text-[1.28125rem] xl:leading-28">{about.description}</p>

          <div className="mt-28 flex flex-col gap-20 rounded-[0.875rem] bg-[var(--color-white)] p-16 shadow-[0_10px_34px_var(--color-shadow-about-card)] sm:flex-row sm:items-center xl:mt-30 xl:h-235 xl:gap-28 xl:rounded-[1rem] xl:p-0 xl:pr-14 xl:pl-29">
            <div className="min-w-0 flex-1 sm:pl-6 xl:pl-0">
              <span className="flex size-56 items-center justify-center rounded-full bg-[var(--color-bg-subtle)] text-tertiary-dark xl:size-68">
                <Icon name={about.feature.icon} className="size-26 xl:size-30" />
              </span>
              <h3 className="mt-12 font-main text-[1.125rem] font-semibold text-tertiary-dark xl:mt-14 xl:text-[1.25rem]">{about.feature.title}</h3>
              <span className="mt-12 block h-px bg-[var(--color-about-divider)] xl:mt-14 xl:w-279" />
              <p className="mt-14 flex gap-12 font-main text-[0.875rem] leading-22 text-[var(--color-text-dark)] xl:mt-18 xl:gap-16 xl:text-[1rem] xl:leading-22">
                <Icon name="FaCheckCircle" className="mt-1 size-22 shrink-0 text-primary xl:size-26" />
                <span className="xl:max-w-285">{about.feature.text}</span>
              </p>
            </div>
            <div className="relative aspect-[311/206] overflow-hidden rounded-[0.875rem] sm:w-[46%] xl:w-311 xl:shrink-0 xl:rounded-[1rem]">
              <Image src={about.feature.image.src} alt={about.feature.image.alt} fill quality={90} sizes="(min-width: 1024px) 19vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>

          <Link
            href={about.button.href}
            className="group mt-30 inline-flex h-52 items-center gap-14 rounded-full border border-highlight bg-highlight px-30 font-main text-[1.0625rem] font-semibold text-tertiary-dark transition-colors duration-300 hover:border-tertiary-dark hover:bg-[var(--color-white)] xl:h-58 xl:w-279 xl:justify-center xl:gap-22 xl:px-0 xl:text-[1.25rem]"
          >
            {about.button.label}
            <Icon name="FaArrowRight" className="size-18 xl:size-20" />
          </Link>
        </div>
      </div>
    </section>
  );
};
