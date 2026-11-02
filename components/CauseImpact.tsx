import Image from "next/image";
import { BrushStroke } from "@/components/Decor";
import { site } from "@/data";

const { detail } = site.causes;

export default function CauseImpact() {
  return (
    <section className="relative mt-64 md:mt-80 xl:mt-100">
      <ul data-reveal-stagger className="grid gap-16 sm:grid-cols-[670fr_600fr] xl:mr-184 xl:ml-207 xl:gap-25">
        {detail.gallery.map((image) => (
          <li key={image.src} className="relative aspect-[670/382] overflow-hidden sm:aspect-auto sm:h-260 md:h-300 xl:h-382">
            <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-106" />
          </li>
        ))}
      </ul>

      <div data-reveal="up" className="relative mt-44 xl:mt-63 xl:pl-274">
        <BrushStroke className="pointer-events-none absolute -top-40 right-0 hidden w-160 text-[#f6e1d2] md:block xl:-top-30 xl:right-134 xl:w-180" />
        <span className="block h-3 w-50 bg-orange xl:w-66" />
        <h2 className="mt-12 font-heading font-bold text-[calc(30.5*var(--spacing))] leading-[1.15] text-[#5c0426] xl:mt-16 xl:text-[calc(55*var(--spacing))] xl:leading-60">{detail.impactTitle}</h2>
        <p className="mt-12 max-w-820 font-alt text-[calc(16*var(--spacing))] leading-28 text-[#5b5e66] xl:mt-14 xl:text-[calc(22.5*var(--spacing))] xl:leading-35.5">{detail.impactText}</p>
      </div>
    </section>
  );
}
