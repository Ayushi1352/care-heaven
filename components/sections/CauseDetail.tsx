import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { BrushStroke, LeafSprig } from '@/components/ui/Decor';
import type { CauseDetailData, CauseDetailProps } from '@/types/templates.types';

const tones: Record<string, string> = {
  rose: 'bg-[var(--color-step-rose-bg)] text-[var(--color-step-rose-icon)]',
  green: 'bg-[var(--color-step-green-bg)] text-[var(--color-step-green-icon)]',
};

function CauseIntro({ detail }: { detail: CauseDetailData }) {
  return (
    <section className="relative xl:mr-114 xl:ml-133 xl:h-764">
      <div data-reveal="fade" className="relative aspect-[1439/643] overflow-hidden rounded-[0.375rem] xl:rounded-none">
        <Image src={detail.image} alt={detail.imageAlt} fill preload quality={90} sizes="(min-width: 1024px) 86vw, 100vw" className="object-cover" />
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
}

function ProgramSteps({ detail }: { detail: CauseDetailData }) {
  return (
    <section className="mt-64 flex flex-col gap-48 md:mt-80 lg:flex-row lg:items-start xl:mt-100 xl:gap-0 xl:pl-272">
      <div data-reveal="up" className="min-w-0 flex-1 xl:w-720 xl:flex-none">
        <span className="block h-3 w-50 bg-primary xl:w-66" />
        <h2 className="mt-12 font-heading font-bold text-[1.90625rem] leading-[1.15] text-[var(--color-cause-heading)] xl:mt-16 xl:text-[3.4375rem] xl:leading-60">{detail.howTitle}</h2>
        <p className="mt-12 font-alt text-[1rem] leading-28 text-[var(--color-cause-text)] xl:mt-12 xl:text-[1.34375rem] xl:leading-[2.21875rem]">{detail.howText}</p>
        <ul className="mt-28 flex flex-col gap-24 xl:mt-37 xl:gap-34">
          {detail.steps.map((step) => (
            <li key={step.id} className="group flex items-center gap-18 xl:gap-25">
              <span className={`flex size-84 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 xl:size-113 ${tones[step.tone] ?? tones.rose}`}>
                <Icon name={step.icon} className="size-32 xl:size-42" />
              </span>
              <span>
                <span className="block font-heading font-bold text-[1.3125rem] leading-[1.2] text-[var(--color-cause-heading)] xl:text-[1.75rem] xl:leading-34">{step.title}</span>
                <span className="mt-4 block font-alt text-[0.9375rem] leading-25 text-[var(--color-cause-text)] xl:mt-4 xl:max-w-540 xl:text-[1.28125rem] xl:leading-[2.03125rem]">{step.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="right" className="relative mx-auto w-full max-w-430 pt-28 pr-28 lg:mx-0 lg:w-[34%] xl:mt-30 xl:ml-50 xl:w-466 xl:max-w-none xl:pt-40 xl:pr-38">
        <span className="absolute top-0 right-0 bottom-50 left-[27%] bg-[var(--color-step-panel-bg)] xl:left-116" />
        <div className="relative aspect-[428/647] overflow-hidden">
          <Image src={detail.sideImage} alt={detail.sideImageAlt} fill quality={90} sizes="(min-width: 1024px) 26vw, 430px" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>
      </div>
    </section>
  );
}

function CauseImpact({ detail }: { detail: CauseDetailData }) {
  return (
    <section className="relative mt-64 md:mt-80 xl:mt-100">
      <ul data-reveal-stagger className="grid gap-16 sm:grid-cols-[670fr_600fr] xl:mr-184 xl:ml-207 xl:gap-25">
        {detail.gallery.map((item) => (
          <li key={item.id} className="relative aspect-[670/382] overflow-hidden sm:aspect-auto sm:h-260 md:h-300 xl:h-382">
            <Image src={item.image} alt={item.imageAlt} fill quality={90} sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-[1.06]" />
          </li>
        ))}
      </ul>

      <div data-reveal="up" className="relative mt-44 xl:mt-63 xl:pl-274">
        <BrushStroke className="pointer-events-none absolute -top-40 right-0 hidden w-160 text-[var(--color-cause-impact-decor)] md:block xl:-top-30 xl:right-134 xl:w-180" />
        <span className="block h-3 w-50 bg-primary xl:w-66" />
        <h2 className="mt-12 font-heading font-bold text-[1.90625rem] leading-[1.15] text-[var(--color-cause-heading)] xl:mt-16 xl:text-[3.4375rem] xl:leading-60">{detail.impactTitle}</h2>
        <p className="mt-12 max-w-820 font-alt text-[1rem] leading-28 text-[var(--color-cause-text)] xl:mt-14 xl:text-[1.40625rem] xl:leading-[2.21875rem]">{detail.impactText}</p>
      </div>
    </section>
  );
}

export const CauseDetail = ({ data }: CauseDetailProps) => {
  if (!data) return null;
  return (
    <div className="relative overflow-hidden bg-[var(--color-bg-cause-detail)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-0 xl:pt-100 xl:pb-100">
      <CauseIntro detail={data} />
      <ProgramSteps detail={data} />
      <CauseImpact detail={data} />
    </div>
  );
};
