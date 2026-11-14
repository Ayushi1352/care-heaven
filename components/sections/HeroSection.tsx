import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { introHidden } from '@/components/ui/motion';
import type { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data: hero }: HeroSectionProps) => {
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] xl:h-1405">
      {/* Navy backdrop with the slanted bottom edge (a CSS shape, not an image) and the heading. */}
      <div className="bg-accent px-20 pt-108 pb-150 [clip-path:polygon(0_0,100%_0,100%_calc(100%-70px),0_100%)] sm:px-32 sm:pt-128 sm:pb-190 xl:absolute xl:inset-0 xl:p-0 xl:[clip-path:polygon(0_0,100%_0,100%_53.9%,0_70.1%)]">
        <div className="xl:absolute xl:top-216 xl:left-54">
          <p data-intro="up" className={`font-display text-[2rem] leading-[1.2] text-[var(--color-white)] sm:text-[2.75rem] xl:text-[3.8125rem] xl:leading-[1.1] ${introHidden}`}>
            {hero.eyebrow}
          </p>
          <h1 className="mt-10 font-display text-[2.375rem] leading-[1.2] text-[var(--color-white)] uppercase xs:text-[3.25rem] sm:text-[4.25rem] md:text-[5.125rem] xl:mt-14 xl:text-[7.5625rem] xl:leading-131">
            <span data-intro="up" data-intro-delay="120" className={`block ${introHidden}`}>
              {hero.titleTop}
            </span>
            <span data-intro="up" data-intro-delay="240" className={`block ${introHidden}`}>
              <span className="-ml-6 inline-block rounded-[0.5rem] bg-[var(--color-white)] px-8 leading-[1.08] text-primary xl:-ml-13 xl:rounded-[0.625rem] xl:px-13 xl:leading-109">{hero.titleHighlight}</span>{' '}
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
          className={`relative aspect-[933/649] overflow-hidden rounded-[0.625rem] shadow-[0_8px_24px_var(--color-shadow-hero-image)] xl:absolute xl:top-572 xl:left-722 xl:w-933 xl:rounded-[0.5625rem] ${introHidden}`}
        >
          <Image src={hero.image} alt={hero.imageAlt} fill preload quality={90} sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
        </div>

        {/* Mission */}
        <div data-reveal="up" className="mt-40 xl:absolute xl:top-1066 xl:left-68 xl:mt-0 xl:w-460">
          <h2 className="font-nunito text-[1.5rem] font-semibold text-[var(--color-hero-mission-heading)] xl:text-[1.75rem] xl:leading-38">{hero.mission.title}</h2>
          <p className="mt-10 max-w-420 font-nunito text-[1rem] leading-28 text-[var(--color-hero-mission-text)] xl:mt-12 xl:max-w-none xl:text-[1.21875rem] xl:leading-35">{hero.mission.text}</p>
          <ul className="mt-18 flex flex-col gap-12 xl:mt-26 xl:gap-17">
            {hero.mission.points.map((point) => (
              <li key={point} className="flex items-center gap-10 font-nunito text-[1rem] font-bold text-[var(--color-hero-mission-link)] xl:gap-8 xl:text-[1.21875rem] xl:leading-30">
                <Icon name="FaCheckCircle" className="size-22 shrink-0 text-accent xl:size-24" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
