import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { CauseDetailData } from "@/types/templates.types";

const tones: Record<string, string> = {
  rose: "bg-[var(--color-step-rose-bg)] text-[var(--color-step-rose-icon)]",
  green: "bg-[var(--color-step-green-bg)] text-[var(--color-step-green-icon)]",
};

export const ProgramSteps = ({ data: detail }: { data?: CauseDetailData }) => {
  if (!detail) return null;

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
          <Image src={detail.sideImage.src} alt={detail.sideImage.alt} fill quality={90} sizes="(min-width: 1024px) 26vw, 430px" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>
      </div>
    </section>
  );
};
