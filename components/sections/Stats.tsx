import { CountUp } from "@/components/ui/CountUp";
import type { StatsData } from "@/types/templates.types";

export const Stats = ({ data: stats }: { data?: StatsData }) => {
  if (!stats) return null;

  return (
    <section className="bg-[var(--color-bg-stats)] px-[1.25rem] py-[2.75rem] sm:px-[2rem] xl:h-[17.375rem] xl:py-[3.0625rem] xl:pr-[7.9375rem] xl:pl-[8.1875rem]">
      <ul data-reveal-stagger className="grid grid-cols-2 gap-y-[2.25rem] lg:grid-cols-4 xl:h-[11.5625rem] xl:gap-0">
        {stats.items.map((item, i) => (
          <li
            key={item.id}
            className={`flex flex-col items-center justify-center text-center text-[var(--color-white)] ${i > 0 ? "lg:border-l lg:border-[var(--color-white-12)]" : ""} ${i % 2 === 1 ? "border-l border-[var(--color-white-12)] lg:border-l" : ""}`}
          >
            <span className="font-heading font-bold text-[2.625rem] leading-none sm:text-[3.3125rem] xl:text-[5.09375rem] xl:leading-[5.625rem]">
              <CountUp value={item.value} suffix={item.suffix} />
            </span>
            <span className="mt-[0.5rem] px-[0.5rem] font-alt text-[0.875rem] font-medium sm:text-[1rem] xl:mt-[0.875rem] xl:text-[1.375rem]">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
