import Image from "next/image";
import { BrushStroke } from "@/components/ui/Decor";
import type { CauseDetailData } from "@/types/templates.types";

export const CauseImpact = ({ data: detail }: { data?: CauseDetailData }) => {
  if (!detail) return null;

  return (
    <section className="relative mt-[4rem] md:mt-[5rem] xl:mt-[6.25rem]">
      <ul data-reveal-stagger className="grid gap-[1rem] sm:grid-cols-[670fr_600fr] xl:mr-[11.5rem] xl:ml-[12.9375rem] xl:gap-[1.5625rem]">
        {detail.gallery.map((image) => (
          <li key={image.id} className="relative aspect-[670/382] overflow-hidden sm:aspect-auto sm:h-[16.25rem] md:h-[18.75rem] xl:h-[23.875rem]">
            <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-[1.06]" />
          </li>
        ))}
      </ul>

      <div data-reveal="up" className="relative mt-[2.75rem] xl:mt-[3.9375rem] xl:pl-[17.125rem]">
        <BrushStroke className="pointer-events-none absolute -top-[2.5rem] right-0 hidden w-[10rem] text-[var(--color-cause-impact-decor)] md:block xl:-top-[1.875rem] xl:right-[8.375rem] xl:w-[11.25rem]" />
        <span className="block h-[0.1875rem] w-[3.125rem] bg-[var(--color-primary)] xl:w-[4.125rem]" />
        <h2 className="mt-[0.75rem] font-heading font-bold text-[1.90625rem] leading-[1.15] text-[var(--color-cause-heading)] xl:mt-[1rem] xl:text-[3.4375rem] xl:leading-[3.75rem]">{detail.impactTitle}</h2>
        <p className="mt-[0.75rem] max-w-[51.25rem] font-alt text-[1rem] leading-[1.75rem] text-[var(--color-cause-text)] xl:mt-[0.875rem] xl:text-[1.40625rem] xl:leading-[2.21875rem]">{detail.impactText}</p>
      </div>
    </section>
  );
};
