import { CountUp } from "@/components/ui/CountUp";
import type { StatsData } from "@/types/templates.types";

export const Stats = ({ data: stats }: { data?: StatsData }) => {
  if (!stats) return null;

  return (
    <section className="bg-[var(--color-bg-stats)] px-20 py-44 sm:px-32 xl:h-278 xl:py-49 xl:pr-127 xl:pl-131">
      <ul data-reveal-stagger className="grid grid-cols-2 gap-y-36 lg:grid-cols-4 xl:h-185 xl:gap-0">
        {stats.items.map((item, i) => (
          <li
            key={item.id}
            className={`flex flex-col items-center justify-center text-center text-[var(--color-white)] ${i > 0 ? "lg:border-l lg:border-[var(--color-white-12)]" : ""} ${i % 2 === 1 ? "border-l border-[var(--color-white-12)] lg:border-l" : ""}`}
          >
            <span className="font-heading font-bold text-[2.625rem] leading-none sm:text-[3.3125rem] xl:text-[5.09375rem] xl:leading-90">
              <CountUp value={item.value} suffix={item.suffix} />
            </span>
            <span className="mt-8 px-8 font-alt text-[0.875rem] font-medium sm:text-[1rem] xl:mt-14 xl:text-[1.375rem]">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
