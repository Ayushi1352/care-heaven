import Image from "next/image";
import Link from "next/link";
import { introHidden, kenburnsStart } from "@/components/ui/motion";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";

export const Breadcrumb = ({ data, ui }: { data?: BreadcrumbData; ui?: GlobalUIData }) => {
  if (!data) return null;
  return (
    <section className="relative flex h-300 items-center justify-center overflow-hidden bg-accent px-16 pt-70 sm:h-340 md:h-380 xl:h-478 xl:pt-152">
      {/* The photo is a clean greyscale picture; the blue tint is this overlay, not part of the image. */}
      {ui?.breadcrumbImage && (
        <Image
          src={ui.breadcrumbImage}
          alt=""
          fill
          preload
          quality={90}
          sizes="100vw"
          data-intro="kenburns"
          className={`object-cover object-[50%_30%] ${kenburnsStart}`}
        />
      )}
      <div className="absolute inset-0 bg-[var(--color-banner-overlay)]" />
      <div className="relative flex flex-col items-center text-center">
        <h1 data-intro="up" className={`font-heading font-bold text-[2rem] leading-[1.15] text-[var(--color-white)] xs:text-[2.375rem] sm:text-[3.8125rem] md:text-[4.5rem] xl:text-[7.5rem] xl:leading-none ${introHidden}`}>
          {data.title}
        </h1>
        <nav aria-label={ui?.breadcrumbLabel} data-intro="up" data-intro-delay="200" className={`mt-10 sm:mt-14 md:mt-18 xl:mt-24 ${introHidden}`}>
          <ol className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-alt text-[0.9375rem] font-medium sm:gap-x-14 sm:text-[1.125rem] xl:gap-x-20 xl:text-[1.5rem]">
            {data.paths.map((item, index) =>
              index === 0 ? (
                <li key={item.id}>
                  <Link href={item.url} className="whitespace-nowrap text-[var(--color-white-90)] transition-colors duration-200 hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id} className="flex items-center gap-x-10 sm:gap-x-14 xl:gap-x-20">
                  <span aria-hidden="true" className="text-[var(--color-white-70)] select-none">
                    /
                  </span>
                  {item.url ? (
                    <Link href={item.url} className="whitespace-nowrap text-[var(--color-white-90)] transition-colors duration-200 hover:text-primary">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="whitespace-nowrap font-semibold text-primary">
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
