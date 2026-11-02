import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { CauseDetailData } from "@/types/templates.types";

const tones: Record<string, string> = {
  rose: "bg-[var(--color-peach-fde3d9)] text-[var(--color-purple-7a0a32)]",
  green: "bg-[var(--color-green-e3f0d8)] text-[var(--color-green-284f17)]",
};

export const ProgramSteps = ({ data: detail }: { data?: CauseDetailData }) => {
  if (!detail) return null;

  return (
    <section className="mt-[4rem] flex flex-col gap-[3rem] md:mt-[5rem] lg:flex-row lg:items-start xl:mt-[6.25rem] xl:gap-0 xl:pl-[17rem]">
      <div data-reveal="up" className="min-w-0 flex-1 xl:w-[45rem] xl:flex-none">
        <span className="block h-[0.1875rem] w-[3.125rem] bg-[var(--color-orange)] xl:w-[4.125rem]" />
        <h2 className="mt-[0.75rem] font-heading font-bold text-[1.90625rem] leading-[1.15] text-[var(--color-purple-5c0426)] xl:mt-[1rem] xl:text-[3.4375rem] xl:leading-[3.75rem]">{detail.howTitle}</h2>
        <p className="mt-[0.75rem] font-alt text-[1rem] leading-[1.75rem] text-[var(--color-gray-5b5e66)] xl:mt-[0.75rem] xl:text-[1.34375rem] xl:leading-[2.21875rem]">{detail.howText}</p>
        <ul className="mt-[1.75rem] flex flex-col gap-[1.5rem] xl:mt-[2.3125rem] xl:gap-[2.125rem]">
          {detail.steps.map((step) => (
            <li key={step.id} className="group flex items-center gap-[1.125rem] xl:gap-[1.5625rem]">
              <span className={`flex size-[5.25rem] shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 xl:size-[7.0625rem] ${tones[step.tone] ?? tones.rose}`}>
                <Icon name={step.icon} className="size-[2rem] xl:size-[2.625rem]" />
              </span>
              <span>
                <span className="block font-heading font-bold text-[1.3125rem] leading-[1.2] text-[var(--color-purple-5c0426)] xl:text-[1.75rem] xl:leading-[2.125rem]">{step.title}</span>
                <span className="mt-[0.25rem] block font-alt text-[0.9375rem] leading-[1.5625rem] text-[var(--color-gray-5b5e66)] xl:mt-[0.25rem] xl:max-w-[33.75rem] xl:text-[1.28125rem] xl:leading-[2.03125rem]">{step.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="right" className="relative mx-auto w-full max-w-[26.875rem] pt-[1.75rem] pr-[1.75rem] lg:mx-0 lg:w-[34%] xl:mt-[1.875rem] xl:ml-[3.125rem] xl:w-[29.125rem] xl:max-w-none xl:pt-[2.5rem] xl:pr-[2.375rem]">
        <span className="absolute top-0 right-0 bottom-[3.125rem] left-[27%] bg-[var(--color-purple-6b0a33)] xl:left-[7.25rem]" />
        <div className="relative aspect-[428/647] overflow-hidden">
          <Image src={detail.sideImage.src} alt={detail.sideImage.alt} fill quality={90} sizes="(min-width: 1024px) 26vw, 430px" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>
      </div>
    </section>
  );
};
