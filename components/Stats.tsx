import { site } from "@/data";
import CountUp from "@/components/CountUp";

const { stats } = site;

export default function Stats() {
  return (
    <section className="bg-[#01365f] px-20 py-44 sm:px-32 xl:h-278 xl:py-49 xl:pr-127 xl:pl-131">
      <ul data-reveal-stagger className="grid grid-cols-2 gap-y-36 lg:grid-cols-4 xl:h-185 xl:gap-0">
        {stats.items.map((item, i) => (
          <li
            key={item.label}
            className={`flex flex-col items-center justify-center text-center text-white ${i > 0 ? "lg:border-l lg:border-white/12" : ""} ${i % 2 === 1 ? "border-l border-white/12 lg:border-l" : ""}`}
          >
            <span className="font-heading font-bold text-[calc(42*var(--spacing))] leading-none sm:text-[calc(53*var(--spacing))] xl:text-[calc(81.5*var(--spacing))] xl:leading-90">
              <CountUp value={item.value} suffix={item.suffix} />
            </span>
            <span className="mt-8 px-8 font-alt text-[calc(14*var(--spacing))] font-medium sm:text-[calc(16*var(--spacing))] xl:mt-14 xl:text-[calc(22*var(--spacing))]">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
