import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/data";

const { about } = site;

/** "Movement Built Hope and Humanity" — used on the home page and the About Us page. */
export default function AboutNgo({ className = "" }: { className?: string }) {
  const spacing = className || "pt-32 pb-32 md:pt-40 md:pb-40 xl:pt-50 xl:pb-50";
  return (
    <section className={`relative bg-white px-20 sm:px-32 xl:px-0 ${spacing}`}>
      {/* Soft blush band behind the top part of the section */}
      <div className="absolute inset-x-0 top-0 h-full bg-[#fcf7f6] xl:h-758" />

      <div className="relative flex flex-col gap-44 lg:flex-row lg:items-start xl:gap-0">
        <div data-reveal="left" className="relative mx-auto aspect-[731/858] w-full max-w-560 overflow-hidden rounded-[calc(12*var(--spacing))] lg:mx-0 lg:w-[45%] lg:max-w-none xl:ml-81 xl:w-731 xl:shrink-0 xl:rounded-[calc(11*var(--spacing))]">
          <Image src={about.image.src} alt={about.image.alt} fill quality={90} sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>

        <div data-reveal="right" className="min-w-0 flex-1 xl:ml-53 xl:w-768 xl:flex-none">
          <p className="inline-flex h-38 items-center gap-10 rounded-full bg-rose px-16 font-body text-[calc(14*var(--spacing))] font-medium text-maroon xl:h-44 xl:gap-12 xl:px-20 xl:text-[max(calc(17*var(--spacing)),var(--text-min))]">
            <span className="size-6 rounded-full bg-orange xl:size-7" />
            {about.badge}
          </p>
          <h2 className="mt-16 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.15] text-maroon sm:text-[calc(45.5*var(--spacing))] xl:mt-23 xl:text-[calc(70*var(--spacing))] xl:leading-77">
            {about.title} <span className="text-orange">{about.titleHighlight}</span>
            <br />
            {about.titleEnd}
          </h2>
          <p className="mt-16 font-body text-[calc(16*var(--spacing))] leading-27 text-gray-dark xl:mt-18 xl:max-w-722 xl:text-[calc(20.5*var(--spacing))] xl:leading-28">{about.description}</p>

          <div className="mt-28 flex flex-col gap-20 rounded-[calc(14*var(--spacing))] bg-white p-16 shadow-[0_10px_34px_rgba(94,6,41,0.08)] sm:flex-row sm:items-center xl:mt-30 xl:h-235 xl:gap-28 xl:rounded-[calc(16*var(--spacing))] xl:p-0 xl:pr-14 xl:pl-29">
            <div className="min-w-0 flex-1 sm:pl-6 xl:pl-0">
              <span className="flex size-56 items-center justify-center rounded-full bg-rose text-maroon xl:size-68">
                <Icon name="users" className="size-26 xl:size-30" strokeWidth={1.6} />
              </span>
              <h3 className="mt-12 font-body text-[calc(18*var(--spacing))] font-semibold text-maroon xl:mt-14 xl:text-[calc(20*var(--spacing))]">{about.feature.title}</h3>
              <span className="mt-12 block h-px bg-[#e6dfdc] xl:mt-14 xl:w-279" />
              <p className="mt-14 flex gap-12 font-body text-[calc(14*var(--spacing))] leading-22 text-gray-dark xl:mt-18 xl:gap-16 xl:text-[max(calc(16*var(--spacing)),var(--text-min))] xl:leading-22">
                <Icon name="check-circle" className="mt-1 size-22 shrink-0 text-orange xl:size-26" />
                <span className="xl:max-w-285">{about.feature.text}</span>
              </p>
            </div>
            <div className="relative aspect-[311/206] overflow-hidden rounded-[calc(14*var(--spacing))] sm:w-[46%] xl:w-311 xl:shrink-0 xl:rounded-[calc(16*var(--spacing))]">
              <Image src={about.feature.image.src} alt={about.feature.image.alt} fill quality={90} sizes="(min-width: 1024px) 19vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>

          <Link
            href={about.button.href}
            className="group mt-30 inline-flex h-52 items-center gap-14 rounded-full bg-yellow px-30 font-body text-[calc(17*var(--spacing))] font-semibold text-maroon transition-[background-color,color] duration-300 hover:bg-maroon hover:text-white xl:h-58 xl:w-279 xl:justify-center xl:gap-22 xl:px-0 xl:text-[calc(20*var(--spacing))]"
          >
            {about.button.label}
            <Icon name="arrow-right" className="size-18 xl:size-20" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
