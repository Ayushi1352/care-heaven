import Image from "next/image";
import Icon from "@/components/Icon";
import { site } from "@/data";

const { detail } = site.causes;

const tones: Record<string, string> = {
  rose: "bg-[#fde3d9] text-[#7a0a32]",
  green: "bg-[#e3f0d8] text-[#284f17]",
};

export default function ProgramSteps() {
  return (
    <section className="mt-64 flex flex-col gap-48 md:mt-80 lg:flex-row lg:items-start xl:mt-100 xl:gap-0 xl:pl-272">
      <div data-reveal="up" className="min-w-0 flex-1 xl:w-720 xl:flex-none">
        <span className="block h-3 w-50 bg-orange xl:w-66" />
        <h2 className="mt-12 font-heading font-bold text-[calc(30.5*var(--spacing))] leading-[1.15] text-[#5c0426] xl:mt-16 xl:text-[calc(55*var(--spacing))] xl:leading-60">{detail.howTitle}</h2>
        <p className="mt-12 font-alt text-[calc(16*var(--spacing))] leading-28 text-[#5b5e66] xl:mt-12 xl:text-[calc(21.5*var(--spacing))] xl:leading-35.5">{detail.howText}</p>
        <ul className="mt-28 flex flex-col gap-24 xl:mt-37 xl:gap-34">
          {detail.steps.map((step) => (
            <li key={step.title} className="group flex items-center gap-18 xl:gap-25">
              <span className={`flex size-84 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 xl:size-113 ${tones[step.tone] ?? tones.rose}`}>
                <Icon name={step.icon} className="size-32 xl:size-42" />
              </span>
              <span>
                <span className="block font-heading font-bold text-[calc(21*var(--spacing))] leading-[1.2] text-[#5c0426] xl:text-[calc(28*var(--spacing))] xl:leading-34">{step.title}</span>
                <span className="mt-4 block font-alt text-[calc(15*var(--spacing))] leading-25 text-[#5b5e66] xl:mt-4 xl:max-w-540 xl:text-[calc(20.5*var(--spacing))] xl:leading-32.5">{step.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="right" className="relative mx-auto w-full max-w-430 pt-28 pr-28 lg:mx-0 lg:w-[34%] xl:mt-30 xl:ml-50 xl:w-466 xl:max-w-none xl:pt-40 xl:pr-38">
        <span className="absolute top-0 right-0 bottom-50 left-[27%] bg-[#6b0a33] xl:left-116" />
        <div className="relative aspect-[428/647] overflow-hidden">
          <Image src={detail.sideImage.src} alt={detail.sideImage.alt} fill quality={90} sizes="(min-width: 1024px) 26vw, 430px" className="object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
