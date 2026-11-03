import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { introHidden } from "@/components/ui/motion";
import type { HeroData } from "@/types/templates.types";

export const HeroSection = ({ data: hero }: { data?: HeroData }) => {
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] xl:h-[87.8125rem]">
      {/* Navy backdrop with the slanted bottom edge (a CSS shape, not an image) and the heading. */}
      <div className="bg-[var(--color-accent)] px-[1.25rem] pt-[6.75rem] pb-[9.375rem] [clip-path:polygon(0_0,100%_0,100%_calc(100%-70px),0_100%)] sm:px-[2rem] sm:pt-[8rem] sm:pb-[11.875rem] xl:absolute xl:inset-0 xl:p-0 xl:[clip-path:polygon(0_0,100%_0,100%_53.9%,0_70.1%)]">
        <div className="xl:absolute xl:top-[13.5rem] xl:left-[3.375rem]">
          <p data-intro="up" className={`font-display text-[2rem] leading-[1.2] text-[var(--color-white)] sm:text-[2.75rem] xl:text-[3.8125rem] xl:leading-[1.1] ${introHidden}`}>
            {hero.eyebrow}
          </p>
          <h1 className="mt-[0.625rem] font-display text-[2.375rem] leading-[1.2] text-[var(--color-white)] uppercase xs:text-[3.25rem] sm:text-[4.25rem] md:text-[5.125rem] xl:mt-[0.875rem] xl:text-[7.5625rem] xl:leading-[8.1875rem]">
            <span data-intro="up" data-intro-delay="120" className={`block ${introHidden}`}>
              {hero.titleTop}
            </span>
            <span data-intro="up" data-intro-delay="240" className={`block ${introHidden}`}>
              <span className="-ml-[0.375rem] inline-block rounded-[0.5rem] bg-[var(--color-white)] px-[0.5rem] leading-[1.08] text-[var(--color-primary)] xl:-ml-[0.8125rem] xl:rounded-[0.625rem] xl:px-[0.8125rem] xl:leading-[6.8125rem]">{hero.titleHighlight}</span>{" "}
              <span className="xl:ml-[0.5rem]">{hero.titleAfter}</span>
            </span>
            <span data-intro="up" data-intro-delay="360" className={`block ${introHidden}`}>
              {hero.titleBottom}
            </span>
          </h1>
        </div>
      </div>

      <div className="relative -mt-[7.5rem] px-[1.25rem] pb-0 sm:-mt-[9.375rem] sm:px-[2rem] xl:static xl:m-0 xl:p-0">
        {/* Photo */}
        <div
          data-intro="up"
          data-intro-delay="300"
          className={`relative aspect-[933/649] overflow-hidden rounded-[0.625rem] shadow-[0_8px_24px_var(--color-shadow-hero-image)] xl:absolute xl:top-[35.75rem] xl:left-[45.125rem] xl:w-[58.3125rem] xl:rounded-[0.5625rem] ${introHidden}`}
        >
          <Image src={hero.image.src} alt={hero.image.alt} fill preload quality={90} sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
        </div>

        {/* Mission */}
        <div data-reveal="up" className="mt-[2.5rem] xl:absolute xl:top-[66.625rem] xl:left-[4.25rem] xl:mt-0 xl:w-[28.75rem]">
          <h2 className="font-nunito text-[1.5rem] font-semibold text-[var(--color-hero-mission-heading)] xl:text-[1.75rem] xl:leading-[2.375rem]">{hero.mission.title}</h2>
          <p className="mt-[0.625rem] max-w-[26.25rem] font-nunito text-[1rem] leading-[1.75rem] text-[var(--color-hero-mission-text)] xl:mt-[0.75rem] xl:max-w-none xl:text-[1.21875rem] xl:leading-[2.1875rem]">{hero.mission.text}</p>
          <ul className="mt-[1.125rem] flex flex-col gap-[0.75rem] xl:mt-[1.625rem] xl:gap-[1.0625rem]">
            {hero.mission.points.map((point) => (
              <li key={point} className="flex items-center gap-[0.625rem] font-nunito text-[1rem] font-bold text-[var(--color-hero-mission-link)] xl:gap-[0.5rem] xl:text-[1.21875rem] xl:leading-[1.875rem]">
                <Icon name="FaCheckCircle" className="size-[1.375rem] shrink-0 text-[var(--color-accent)] xl:size-[1.5rem]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
