import Image from "next/image";
import Link from "next/link";
import { introHidden, kenburnsStart } from "@/components/ui/motion";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";

export const Breadcrumb = ({ data, ui }: { data?: BreadcrumbData; ui?: GlobalUIData }) => {
  if (!data) return null;
  return (
    <section className="relative flex h-[18.75rem] items-center justify-center overflow-hidden bg-[var(--color-accent)] px-[1rem] pt-[4.375rem] sm:h-[21.25rem] md:h-[23.75rem] xl:h-[29.875rem] xl:pt-[9.5rem]">
      {/* The photo is a clean greyscale picture; the blue tint is this overlay, not part of the image. */}
      <Image
        src={data.bgImage}
        alt={data.bgImageAlt}
        fill
        preload
        quality={90}
        sizes="100vw"
        data-intro="kenburns"
        className={`object-cover object-[50%_30%] ${kenburnsStart}`}
      />
      <div className="absolute inset-0 bg-[var(--color-banner-overlay)]" />
      <div className="relative flex flex-col items-center text-center">
        <h1 data-intro="up" className={`font-heading font-bold text-[2.71875rem] leading-[1.1] text-[var(--color-white)] sm:text-[3.8125rem] md:text-[4.5rem] xl:text-[7.5rem] xl:leading-none ${introHidden}`}>
          {data.title}
        </h1>
        <nav aria-label={ui?.breadcrumb} data-intro="up" data-intro-delay="200" className={`mt-[0.625rem] sm:mt-[0.875rem] md:mt-[1.125rem] xl:mt-[1.5rem] ${introHidden}`}>
          <ol className="flex flex-wrap items-center justify-center gap-x-[0.625rem] gap-y-[0.25rem] font-alt text-[0.9375rem] font-medium sm:gap-x-[0.875rem] sm:text-[1.125rem] xl:gap-x-[1.25rem] xl:text-[1.5rem]">
            {data.paths.map((item, index) =>
              index === 0 ? (
                <li key={item.id}>
                  <Link href={item.url} className="text-[var(--color-white-90)] transition-colors duration-200 hover:text-[var(--color-primary)]">
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id} className="flex items-center gap-x-[0.625rem] sm:gap-x-[0.875rem] xl:gap-x-[1.25rem]">
                  <span aria-hidden="true" className="text-[var(--color-white-70)] select-none">
                    /
                  </span>
                  {item.url ? (
                    <Link href={item.url} className="text-[var(--color-white-90)] transition-colors duration-200 hover:text-[var(--color-primary)]">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-semibold text-[var(--color-primary)]">
                      {item.label}
                    </span>
                  )}
                </li>
              ),
            )}
          </ol>
        </nav>
      </div>
    </section>
  );
};
