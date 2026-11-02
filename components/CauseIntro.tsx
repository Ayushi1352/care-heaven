import Image from "next/image";
import { LeafSprig } from "@/components/Decor";
import { site } from "@/data";

const { detail } = site.causes;

export default function CauseIntro() {
  return (
    <section className="relative xl:mr-114 xl:ml-133 xl:h-764">
      <div data-reveal="fade" className="relative aspect-[1439/643] overflow-hidden rounded-[calc(6*var(--spacing))] xl:rounded-none">
        <Image src={detail.image.src} alt={detail.image.alt} fill priority quality={90} sizes="(min-width: 1024px) 86vw, 100vw" className="object-cover" />
      </div>
      <div
        data-reveal="up"
        className="relative z-10 mx-12 -mt-40 rounded-[calc(10*var(--spacing))] bg-[#fbf7f0] px-22 py-24 shadow-[0_14px_40px_rgba(60,30,10,0.12)] sm:mx-40 sm:-mt-64 xl:absolute xl:top-495 xl:right-135 xl:left-129 xl:m-0 xl:h-269 xl:px-67 xl:pt-42 xl:pb-0"
      >
        <LeafSprig className="pointer-events-none absolute right-18 bottom-0 w-56 text-[#ece5d6] xl:right-30 xl:w-80" />
        <p className="font-alt text-[calc(14*var(--spacing))] font-semibold text-orange xl:text-[max(calc(18*var(--spacing)),var(--text-min))]">{detail.label}</p>
        <h1 className="mt-6 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.12] text-[#5c0426] sm:text-[calc(45.5*var(--spacing))] xl:mt-4 xl:text-[calc(77*var(--spacing))] xl:leading-82">
          {detail.title} <span className="text-green-dark">{detail.titleHighlight}</span>
        </h1>
        <p className="mt-10 max-w-820 font-alt text-[calc(16*var(--spacing))] leading-27 text-[#5b5e66] xl:mt-6 xl:text-[calc(23.5*var(--spacing))] xl:leading-35">{detail.intro}</p>
      </div>
    </section>
  );
}
