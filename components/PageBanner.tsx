import Image from "next/image";
import Link from "next/link";
import { introHidden, kenburnsStart } from "@/components/motion";
import { label, site as data } from "@/data";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  /** Crumbs after "Home"; defaults to the title. */
  crumbs?: Crumb[];
}

export default function PageBanner({ title, crumbs }: PageBannerProps) {
  const items = crumbs && crumbs.length > 0 ? crumbs : [{ label: title }];

  return (
    <section className="relative flex h-300 items-center justify-center overflow-hidden bg-navy px-16 pt-70 sm:h-340 md:h-380 xl:h-478 xl:pt-152">
      {/* The photo is a clean greyscale picture; the blue tint is this overlay, not part of the image. */}
      <Image
        src={data.pageBanner.image}
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        data-intro="kenburns"
        className={`object-cover object-[50%_30%] ${kenburnsStart}`}
      />
      <div className="absolute inset-0 bg-[#05385e]/80" />
      <div className="relative flex flex-col items-center text-center">
        <h1 data-intro="up" className={`font-heading font-bold text-[calc(43.5*var(--spacing))] leading-[1.1] text-white sm:text-[calc(61*var(--spacing))] md:text-[calc(72*var(--spacing))] xl:text-[calc(120*var(--spacing))] xl:leading-none ${introHidden}`}>
          {title}
        </h1>
        <nav aria-label={label("breadcrumb")} data-intro="up" data-intro-delay="200" className={`mt-10 sm:mt-14 md:mt-18 xl:mt-24 ${introHidden}`}>
          <ol className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-alt text-[calc(15*var(--spacing))] font-medium sm:gap-x-14 sm:text-[calc(18*var(--spacing))] xl:gap-x-20 xl:text-[calc(24*var(--spacing))]">
            <li>
              <Link href="/" className="text-white/90 transition-colors duration-200 hover:text-orange">
                {data.pageBanner.homeLabel}
              </Link>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-x-10 sm:gap-x-14 xl:gap-x-20">
                  <span aria-hidden="true" className="text-white/70 select-none">
                    /
                  </span>
                  {item.href && !isLast ? (
                    <Link href={item.href} className="text-white/90 transition-colors duration-200 hover:text-orange">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-semibold text-orange">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
