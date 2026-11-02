import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { contactHref, site } from "@/data";

const { whyChoose, company } = site;

export default function WhyChooseUs() {
  return (
    <section className="bg-[#003966] px-20 pt-64 pb-64 text-white sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-80 xl:pb-100 xl:pl-96">
      <div data-reveal="up">
        <p className="flex items-center gap-14 font-alt text-[calc(15*var(--spacing))] font-medium text-yellow xl:gap-17 xl:text-[calc(19*var(--spacing))]">
          <span className="h-2 w-44 bg-yellow xl:w-56" />
          {whyChoose.label}
        </p>
        <h2 className="mt-10 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.12] uppercase sm:text-[calc(49.5*var(--spacing))] xl:mt-6 xl:text-[calc(80.5*var(--spacing))] xl:leading-88">
          {whyChoose.titleTop}
          <br />
          <span className="text-orange">{whyChoose.titleHighlight}</span> {whyChoose.titleAfter}
          <br />
          {whyChoose.titleBottom}
        </h2>
      </div>

      <div className="mt-32 flex flex-col gap-40 lg:flex-row lg:items-start xl:mt-34 xl:gap-125">
        <div data-reveal="left" className="w-full max-w-610 lg:w-[40%] xl:w-610 xl:shrink-0">
          <div className="relative aspect-[610/372] overflow-hidden">
            <Image src={whyChoose.image.src} alt={whyChoose.image.alt} fill quality={90} sizes="(min-width: 1024px) 37vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-105" />
          </div>
          <a href={contactHref("tel", company.phone)} className="group flex items-center gap-18 bg-[#fec423] px-20 py-22 text-navy-ink xl:h-146 xl:gap-26 xl:px-31 xl:py-0">
            <span className="flex size-60 shrink-0 items-center justify-center rounded-full border-[1.5px] border-navy-ink transition-[background-color,color] duration-300 group-hover:bg-navy-ink group-hover:text-[#fec423] xl:size-82">
              <Icon name="phone" className="size-24 xl:size-32" />
            </span>
            <span>
              <span className="block font-alt text-[calc(14*var(--spacing))] xl:text-[max(calc(17.5*var(--spacing)),var(--text-min))]">{whyChoose.call.label}</span>
              <span className="mt-2 block font-alt text-[calc(22*var(--spacing))] font-bold xl:mt-4 xl:text-[calc(30*var(--spacing))]">{company.phone}</span>
            </span>
          </a>
        </div>

        <div data-reveal="right" className="min-w-0 flex-1 xl:-mt-10 xl:max-w-770">
          <p className="font-quote text-[calc(22*var(--spacing))] leading-[1.3] text-yellow sm:text-[calc(26*var(--spacing))] xl:text-[calc(39*var(--spacing))] xl:leading-51">{whyChoose.lead}</p>
          <span className="mt-24 block h-3 w-52 bg-orange xl:mt-30 xl:w-61" />
          <h3 className="mt-14 font-heading text-[calc(26*var(--spacing))] font-semibold xl:mt-18 xl:text-[calc(41*var(--spacing))] xl:leading-46">{whyChoose.missionTitle}</h3>
          <p className="mt-10 max-w-540 font-alt text-[calc(15*var(--spacing))] leading-26 text-white/95 xl:mt-10 xl:text-[calc(21.5*var(--spacing))] xl:leading-30">{whyChoose.missionText}</p>
          <Link
            href={whyChoose.button.href}
            className="group mt-26 inline-flex h-50 items-center gap-12 rounded-[calc(4*var(--spacing))] bg-orange px-24 font-alt text-[calc(15*var(--spacing))] font-semibold uppercase transition-colors duration-300 hover:bg-[#d84000] xl:mt-28 xl:h-58 xl:w-276 xl:justify-center xl:gap-14 xl:px-0 xl:text-[max(calc(18*var(--spacing)),var(--text-min))]"
          >
            {whyChoose.button.label}
            <Icon name="arrow-right" className="size-17 xl:size-20" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
