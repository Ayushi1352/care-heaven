import Image from "next/image";
import { LeafSprig } from "@/components/ui/Decor";
import type { CauseDetailData } from "@/types/templates.types";

export const CauseIntro = ({ data: detail }: { data?: CauseDetailData }) => {
  if (!detail) return null;

  return (
    <section className="relative xl:mr-114 xl:ml-133 xl:h-764">
      <div data-reveal="fade" className="relative aspect-[1439/643] overflow-hidden rounded-[0.375rem] xl:rounded-none">
        <Image src={detail.image.src} alt={detail.image.alt} fill preload quality={90} sizes="(min-width: 1024px) 86vw, 100vw" className="object-cover" />
      </div>
      <div
        data-reveal="up"
        className="relative z-10 mx-12 -mt-40 rounded-[0.625rem] bg-[var(--color-bg-cause-intro)] px-22 py-24 shadow-[0_14px_40px_var(--color-shadow-cause-intro)] sm:mx-40 sm:-mt-64 xl:absolute xl:top-495 xl:right-135 xl:left-129 xl:m-0 xl:h-269 xl:px-67 xl:pt-42 xl:pb-0"
      >
        <LeafSprig className="pointer-events-none absolute right-18 bottom-0 w-56 text-[var(--color-cause-intro-decor)] xl:right-30 xl:w-80" />
        <p className="font-alt text-[0.875rem] font-semibold text-primary xl:text-[length:max(1.125rem,var(--text-min))]">{detail.label}</p>
        <h1 className="mt-6 font-heading font-bold text-[2.125rem] leading-[1.12] text-[var(--color-cause-heading)] sm:text-[2.84375rem] xl:mt-4 xl:text-[4.8125rem] xl:leading-82">
          {detail.title} <span className="text-secondary-dark">{detail.titleHighlight}</span>
        </h1>
        <p className="mt-10 max-w-820 font-alt text-[1rem] leading-27 text-[var(--color-cause-text)] xl:mt-6 xl:text-[1.46875rem] xl:leading-35">{detail.intro}</p>
      </div>
    </section>
  );
};
