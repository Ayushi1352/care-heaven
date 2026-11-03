import { Icon } from "@/components/ui/Icon";
import type { HowWeHelpData } from "@/types/templates.types";

const tones: Record<string, { bg: string; icon: string }> = {
  navy: { bg: "bg-[var(--color-help-navy)]", icon: "text-[var(--color-help-navy)]" },
  orange: { bg: "bg-[var(--color-help-orange)]", icon: "text-[var(--color-help-orange)]" },
  green: { bg: "bg-[var(--color-help-green)]", icon: "text-[var(--color-help-green)]" },
};

export const HowWeHelp = ({ data: help }: { data?: HowWeHelpData }) => {
  if (!help) return null;

  return (
    <section className="bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[2rem] sm:px-[2rem] md:pt-[5rem] md:pb-[2.5rem] xl:px-[4.75rem] xl:pt-[1.9375rem] xl:pb-[3.125rem]">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-[0.875rem] font-heading text-[1.25rem] font-medium text-[var(--color-primary)] xl:gap-[1.125rem] xl:text-[1.625rem] xl:leading-[2.125rem]">
          <span className="h-[0.125rem] w-[2.5rem] bg-[var(--color-primary)] xl:w-[3.375rem]" />
          {help.label}
          <span className="h-[0.125rem] w-[2.5rem] bg-[var(--color-primary)] xl:w-[3.375rem]" />
        </p>
        <h2 className="mx-auto mt-[0.625rem] max-w-[40rem] font-heading font-bold text-[1.90625rem] leading-[1.2] text-[var(--color-heading)] sm:text-[2.625rem] xl:mt-[0.625rem] xl:max-w-[56.25rem] xl:text-[4.375rem] xl:leading-[4.8125rem]">
          {help.title} <span className="text-[var(--color-primary)]">{help.titleHighlight}</span>
        </h2>
      </div>

      <ul data-reveal-stagger className="mt-[2.25rem] grid sm:grid-cols-2 xl:mt-[2.5625rem] xl:grid-cols-4">
        {help.cards.map((card) => {
          const tone = tones[card.tone] ?? tones.navy;
          return (
            <li key={card.id} className={`group relative overflow-hidden px-[2rem] pt-[2rem] pb-[2.5rem] text-[var(--color-white)] xl:h-[24.625rem] xl:px-[3.4375rem] xl:pt-[2.125rem] xl:pb-0 ${tone.bg}`}>
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--color-black-10)] transition-transform duration-500 group-hover:scale-y-100" />
              <span className="relative flex size-[5.25rem] items-center justify-center rounded-full bg-[var(--color-white)] shadow-[0_0_0_6px_var(--color-white-35)] transition-colors duration-300 group-hover:bg-[var(--color-highlight)] xl:size-[6.125rem] xl:shadow-[0_0_0_0.4375rem_var(--color-white-35)]">
                <Icon name={card.icon} className={`size-[2.75rem] xl:size-[3.5rem] ${tone.icon}`} />
              </span>
              <h3 className="relative mt-[1.5rem] max-w-[15rem] font-alt text-[1.5rem] leading-[1.25] font-semibold xl:mt-[1.9375rem] xl:text-[2.0625rem] xl:leading-[2.5625rem]">{card.title}</h3>
              <span className="relative mt-[1rem] block h-[0.1875rem] w-[2.75rem] bg-[var(--color-white)] transition-[width] duration-500 group-hover:w-[5rem] xl:mt-[1.25rem]" />
              <p className="relative mt-[1.25rem] max-w-[17.5rem] font-alt text-[1rem] leading-[1.6875rem] text-[var(--color-white-95)] xl:mt-[1.875rem] xl:text-[1.3125rem] xl:leading-[2.0625rem]">{card.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
