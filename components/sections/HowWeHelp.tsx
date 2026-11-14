import { Icon } from "@/components/ui/Icon";
import type { HowWeHelpProps } from "@/types/templates.types";

const tones: Record<string, { bg: string; icon: string }> = {
  navy: { bg: "bg-[var(--color-help-navy)]", icon: "text-[var(--color-help-navy)]" },
  orange: { bg: "bg-[var(--color-help-orange)]", icon: "text-[var(--color-help-orange)]" },
  green: { bg: "bg-[var(--color-help-green)]", icon: "text-[var(--color-help-green)]" },
};

export const HowWeHelp = ({ data: help }: HowWeHelpProps) => {
  if (!help) return null;

  return (
    <section className="bg-[var(--color-white)] px-20 pt-64 pb-32 sm:px-32 md:pt-80 md:pb-40 xl:px-76 xl:pt-31 xl:pb-50">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-14 font-heading text-[1.25rem] font-medium text-primary xl:gap-18 xl:text-[1.625rem] xl:leading-34">
          <span className="h-2 w-40 bg-primary xl:w-54" />
          {help.label}
          <span className="h-2 w-40 bg-primary xl:w-54" />
        </p>
        <h2 className="mx-auto mt-10 max-w-352 font-heading font-bold text-[1.4375rem] leading-[1.25] text-[var(--color-heading)] xs:max-w-416 xs:text-[1.625rem] sm:max-w-640 sm:text-[2.625rem] xl:mt-10 xl:max-w-900 xl:text-[4.375rem] xl:leading-77">
          {help.title} <span className="text-primary">{help.titleHighlight}</span>
        </h2>
      </div>

      <ul data-reveal-stagger className="mt-36 grid sm:grid-cols-2 xl:mt-41 xl:grid-cols-4">
        {help.cards.map((card) => {
          const tone = tones[card.tone] ?? tones.navy;
          return (
            <li key={card.id} className={`group relative overflow-hidden px-32 pt-32 pb-40 text-[var(--color-white)] xl:h-394 xl:px-55 xl:pt-34 xl:pb-0 ${tone.bg}`}>
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--color-black-10)] transition-transform duration-500 group-hover:scale-y-100" />
              <span className="relative flex size-84 items-center justify-center rounded-full bg-[var(--color-white)] shadow-[0_0_0_6px_var(--color-white-35)] transition-colors duration-300 group-hover:bg-highlight xl:size-98 xl:shadow-[0_0_0_0.4375rem_var(--color-white-35)]">
                <Icon name={card.icon} className={`size-44 xl:size-56 ${tone.icon}`} />
              </span>
              <h3 className="relative mt-24 max-w-240 font-alt text-[1.5rem] leading-[1.25] font-semibold xl:mt-31 xl:text-[2.0625rem] xl:leading-41">{card.title}</h3>
              <span className="relative mt-16 block h-3 w-44 bg-[var(--color-white)] transition-[width] duration-500 group-hover:w-80 xl:mt-20" />
              <p className="relative mt-20 max-w-280 font-alt text-[1rem] leading-27 text-[var(--color-white-95)] xl:mt-30 xl:text-[1.3125rem] xl:leading-33">{card.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
