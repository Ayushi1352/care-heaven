import Image from "next/image";
import { LeafSprig } from "@/components/ui/Decor";
import type { CauseDetailData } from "@/types/templates.types";

export const CauseIntro = ({ data: detail }: { data?: CauseDetailData }) => {
  if (!detail) return null;

  return (
    <section className="relative xl:mr-[7.125rem] xl:ml-[8.3125rem] xl:h-[47.75rem]">
      <div data-reveal="fade" className="relative aspect-[1439/643] overflow-hidden rounded-[0.375rem] xl:rounded-none">
        <Image src={detail.image.src} alt={detail.image.alt} fill preload quality={90} sizes="(min-width: 1024px) 86vw, 100vw" className="object-cover" />
      </div>
      <div
        data-reveal="up"
        className="relative z-10 mx-[0.75rem] -mt-[2.5rem] rounded-[0.625rem] bg-[var(--color-bg-cause-intro)] px-[1.375rem] py-[1.5rem] shadow-[0_14px_40px_var(--color-shadow-cause-intro)] sm:mx-[2.5rem] sm:-mt-[4rem] xl:absolute xl:top-[30.9375rem] xl:right-[8.4375rem] xl:left-[8.0625rem] xl:m-0 xl:h-[16.8125rem] xl:px-[4.1875rem] xl:pt-[2.625rem] xl:pb-0"
      >
        <LeafSprig className="pointer-events-none absolute right-[1.125rem] bottom-0 w-[3.5rem] text-[var(--color-cause-intro-decor)] xl:right-[1.875rem] xl:w-[5rem]" />
        <p className="font-alt text-[0.875rem] font-semibold text-[var(--color-primary)] xl:text-[length:max(1.125rem,var(--text-min))]">{detail.label}</p>
        <h1 className="mt-[0.375rem] font-heading font-bold text-[2.125rem] leading-[1.12] text-[var(--color-cause-heading)] sm:text-[2.84375rem] xl:mt-[0.25rem] xl:text-[4.8125rem] xl:leading-[5.125rem]">
          {detail.title} <span className="text-[var(--color-secondary-dark)]">{detail.titleHighlight}</span>
        </h1>
        <p className="mt-[0.625rem] max-w-[51.25rem] font-alt text-[1rem] leading-[1.6875rem] text-[var(--color-cause-text)] xl:mt-[0.375rem] xl:text-[1.46875rem] xl:leading-[2.1875rem]">{detail.intro}</p>
      </div>
    </section>
  );
};
