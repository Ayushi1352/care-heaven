import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { AboutUsData } from "@/types/templates.types";

/** "Movement Built Hope and Humanity" — used on the home page and the About Us page. */
export const AboutNgo = ({ data: about, className = "" }: { data?: AboutUsData; className?: string }) => {
  if (!about) return null;

  const spacing = className || "pt-[2rem] pb-[2rem] md:pt-[2.5rem] md:pb-[2.5rem] xl:pt-[3.125rem] xl:pb-[3.125rem]";
  return (
    <section className={`relative bg-[var(--color-white)] px-[1.25rem] sm:px-[2rem] xl:px-0 ${spacing}`}>
      {/* Soft blush band behind the top part of the section */}
      <div className="absolute inset-x-0 top-0 h-full bg-[var(--color-gray-fcf7f6)] xl:h-[47.375rem]" />

      <div className="relative flex flex-col gap-[2.75rem] lg:flex-row lg:items-start xl:gap-0">
        <div data-reveal="left" className="relative mx-auto aspect-[731/858] w-full max-w-[35rem] overflow-hidden rounded-[0.75rem] lg:mx-0 lg:w-[45%] lg:max-w-none xl:ml-[5.0625rem] xl:w-[45.6875rem] xl:shrink-0 xl:rounded-[0.6875rem]">
          <Image src={about.image.src} alt={about.image.alt} fill quality={90} sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>

        <div data-reveal="right" className="min-w-0 flex-1 xl:ml-[3.3125rem] xl:w-[48rem] xl:flex-none">
          <p className="inline-flex h-[2.375rem] items-center gap-[0.625rem] rounded-full bg-[var(--color-rose)] px-[1rem] font-sans text-[0.875rem] font-medium text-[var(--color-maroon)] xl:h-[2.75rem] xl:gap-[0.75rem] xl:px-[1.25rem] xl:text-[length:max(1.0625rem,var(--text-min))]">
            <span className="size-[0.375rem] rounded-full bg-[var(--color-orange)] xl:size-[0.4375rem]" />
            {about.badge}
          </p>
          <h2 className="mt-[1rem] font-heading font-bold text-[2.125rem] leading-[1.15] text-[var(--color-maroon)] sm:text-[2.84375rem] xl:mt-[1.4375rem] xl:text-[4.375rem] xl:leading-[4.8125rem]">
            {about.title} <span className="text-[var(--color-orange)]">{about.titleHighlight}</span>
            <br />
            {about.titleEnd}
          </h2>
          <p className="mt-[1rem] font-sans text-[1rem] leading-[1.6875rem] text-[var(--color-gray-dark)] xl:mt-[1.125rem] xl:max-w-[45.125rem] xl:text-[1.28125rem] xl:leading-[1.75rem]">{about.description}</p>

          <div className="mt-[1.75rem] flex flex-col gap-[1.25rem] rounded-[0.875rem] bg-[var(--color-white)] p-[1rem] shadow-[0_10px_34px_var(--color-shadow-5e0629-8)] sm:flex-row sm:items-center xl:mt-[1.875rem] xl:h-[14.6875rem] xl:gap-[1.75rem] xl:rounded-[1rem] xl:p-0 xl:pr-[0.875rem] xl:pl-[1.8125rem]">
            <div className="min-w-0 flex-1 sm:pl-[0.375rem] xl:pl-0">
              <span className="flex size-[3.5rem] items-center justify-center rounded-full bg-[var(--color-rose)] text-[var(--color-maroon)] xl:size-[4.25rem]">
                <Icon name={about.feature.icon} className="size-[1.625rem] xl:size-[1.875rem]" />
              </span>
              <h3 className="mt-[0.75rem] font-sans text-[1.125rem] font-semibold text-[var(--color-maroon)] xl:mt-[0.875rem] xl:text-[1.25rem]">{about.feature.title}</h3>
              <span className="mt-[0.75rem] block h-px bg-[var(--color-gray-e6dfdc)] xl:mt-[0.875rem] xl:w-[17.4375rem]" />
              <p className="mt-[0.875rem] flex gap-[0.75rem] font-sans text-[0.875rem] leading-[1.375rem] text-[var(--color-gray-dark)] xl:mt-[1.125rem] xl:gap-[1rem] xl:text-[1rem] xl:leading-[1.375rem]">
                <Icon name="FaCheckCircle" className="mt-[0.0625rem] size-[1.375rem] shrink-0 text-[var(--color-orange)] xl:size-[1.625rem]" />
                <span className="xl:max-w-[17.8125rem]">{about.feature.text}</span>
              </p>
            </div>
            <div className="relative aspect-[311/206] overflow-hidden rounded-[0.875rem] sm:w-[46%] xl:w-[19.4375rem] xl:shrink-0 xl:rounded-[1rem]">
              <Image src={about.feature.image.src} alt={about.feature.image.alt} fill quality={90} sizes="(min-width: 1024px) 19vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>

          <Link
            href={about.button.href}
            className="group mt-[1.875rem] inline-flex h-[3.25rem] items-center gap-[0.875rem] rounded-full border border-[var(--color-yellow)] bg-[var(--color-yellow)] px-[1.875rem] font-sans text-[1.0625rem] font-semibold text-[var(--color-maroon)] transition-colors duration-300 hover:border-[var(--color-maroon)] hover:bg-[var(--color-white)] xl:h-[3.625rem] xl:w-[17.4375rem] xl:justify-center xl:gap-[1.375rem] xl:px-0 xl:text-[1.25rem]"
          >
            {about.button.label}
            <Icon name="FaArrowRight" className="size-[1.125rem] xl:size-[1.25rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
