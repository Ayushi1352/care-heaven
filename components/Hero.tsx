import Image from "next/image";
import Icon from "@/components/Icon";
import { introHidden } from "@/components/motion";
import { site } from "@/data";

const { hero } = site;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white xl:h-1405">
      {/* Navy backdrop with the slanted bottom edge (a CSS shape, not an image) and the heading. */}
      <div className="bg-navy px-20 pt-108 pb-150 [clip-path:polygon(0_0,100%_0,100%_calc(100%-70px),0_100%)] sm:px-32 sm:pt-128 sm:pb-190 xl:absolute xl:inset-0 xl:p-0 xl:[clip-path:polygon(0_0,100%_0,100%_53.9%,0_70.1%)]">
        <div className="xl:absolute xl:top-216 xl:left-54">
          <p data-intro="up" className={`font-display text-[calc(32*var(--spacing))] leading-[1.2] text-white sm:text-[calc(44*var(--spacing))] xl:text-[calc(61*var(--spacing))] xl:leading-[1.1] ${introHidden}`}>
            {hero.eyebrow}
          </p>
          <h1 className="mt-10 font-display text-[calc(38*var(--spacing))] leading-[1.2] text-white uppercase xs:text-[calc(52*var(--spacing))] sm:text-[calc(68*var(--spacing))] md:text-[calc(82*var(--spacing))] xl:mt-14 xl:text-[calc(121*var(--spacing))] xl:leading-131">
            <span data-intro="up" data-intro-delay="120" className={`block ${introHidden}`}>
              {hero.titleTop}
            </span>
            <span data-intro="up" data-intro-delay="240" className={`block ${introHidden}`}>
              <span className="-ml-6 inline-block rounded-[calc(8*var(--spacing))] bg-white px-8 leading-[1.08] text-orange xl:-ml-13 xl:rounded-[calc(10*var(--spacing))] xl:px-13 xl:leading-109">{hero.titleHighlight}</span>{" "}
              <span className="xl:ml-8">{hero.titleAfter}</span>
            </span>
            <span data-intro="up" data-intro-delay="360" className={`block ${introHidden}`}>
              {hero.titleBottom}
            </span>
          </h1>
        </div>
      </div>

      <div className="relative -mt-120 px-20 pb-0 sm:-mt-150 sm:px-32 xl:static xl:m-0 xl:p-0">
        {/* Photo */}
        <div
          data-intro="up"
          data-intro-delay="300"
          className={`relative aspect-[933/649] overflow-hidden rounded-[calc(10*var(--spacing))] shadow-[0_8px_24px_rgba(0,20,50,0.10)] xl:absolute xl:top-572 xl:left-722 xl:w-933 xl:rounded-[calc(9*var(--spacing))] ${introHidden}`}
        >
          <Image src={hero.image.src} alt={hero.image.alt} fill priority quality={90} sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
        </div>

        {/* Mission */}
        <div data-reveal="up" className="mt-40 xl:absolute xl:top-1066 xl:left-68 xl:mt-0 xl:w-460">
          <h2 className="font-nunito text-[calc(24*var(--spacing))] font-semibold text-[#14142b] xl:text-[calc(28*var(--spacing))] xl:leading-38">{hero.mission.title}</h2>
          <p className="mt-10 max-w-420 font-nunito text-[calc(16*var(--spacing))] leading-28 text-[#5b5b66] xl:mt-12 xl:max-w-none xl:text-[calc(19.5*var(--spacing))] xl:leading-35">{hero.mission.text}</p>
          <ul className="mt-18 flex flex-col gap-12 xl:mt-26 xl:gap-17">
            {hero.mission.points.map((point) => (
              <li key={point} className="flex items-center gap-10 font-nunito text-[calc(16*var(--spacing))] font-bold text-[#17173a] xl:gap-8 xl:text-[calc(19.5*var(--spacing))] xl:leading-30">
                <Icon name="check-circle" className="size-22 shrink-0 text-navy xl:size-24" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
