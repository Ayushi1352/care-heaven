import Icon from "@/components/Icon";
import { site } from "@/data";

const { help } = site;

const tones: Record<string, { bg: string; icon: string }> = {
  navy: { bg: "bg-[#033b66]", icon: "text-[#033b66]" },
  orange: { bg: "bg-orange-soft", icon: "text-orange-soft" },
  green: { bg: "bg-green-soft", icon: "text-green-soft" },
};

export default function HowWeHelp() {
  return (
    <section className="bg-white px-20 pt-64 pb-32 sm:px-32 md:pt-80 md:pb-40 xl:px-76 xl:pt-0 xl:pb-50">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-14 font-heading text-[calc(20*var(--spacing))] font-medium text-orange xl:gap-18 xl:text-[calc(26*var(--spacing))] xl:leading-34">
          <span className="h-2 w-40 bg-orange xl:w-54" />
          {help.label}
          <span className="h-2 w-40 bg-orange xl:w-54" />
        </p>
        <h2 className="mx-auto mt-10 max-w-640 font-heading font-bold text-[calc(30.5*var(--spacing))] leading-[1.2] text-navy-deep sm:text-[calc(42*var(--spacing))] xl:mt-10 xl:max-w-900 xl:text-[calc(70*var(--spacing))] xl:leading-77">
          {help.title} <span className="text-orange">{help.titleHighlight}</span>
        </h2>
      </div>

      <ul data-reveal-stagger className="mt-36 grid sm:grid-cols-2 xl:mt-41 xl:grid-cols-4">
        {help.cards.map((card) => {
          const tone = tones[card.tone] ?? tones.navy;
          return (
            <li key={card.title} className={`group relative overflow-hidden px-32 pt-32 pb-40 text-white xl:h-394 xl:px-55 xl:pt-34 xl:pb-0 ${tone.bg}`}>
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-black/10 transition-transform duration-500 group-hover:scale-y-100" />
              <span className="relative flex size-84 items-center justify-center rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35)] transition-colors duration-300 group-hover:bg-yellow xl:size-98 xl:shadow-[0_0_0_calc(7*var(--spacing))_rgba(255,255,255,0.35)]">
                <Icon name={card.icon} className={`size-44 xl:size-56 ${tone.icon}`} strokeWidth={1.7} />
              </span>
              <h3 className="relative mt-24 max-w-240 font-alt text-[calc(24*var(--spacing))] leading-[1.25] font-semibold xl:mt-31 xl:text-[calc(33*var(--spacing))] xl:leading-41">{card.title}</h3>
              <span className="relative mt-16 block h-3 w-44 bg-white transition-[width] duration-500 group-hover:w-80 xl:mt-20" />
              <p className="relative mt-20 max-w-280 font-alt text-[calc(16*var(--spacing))] leading-27 text-white/95 xl:mt-30 xl:text-[calc(21*var(--spacing))] xl:leading-33">{card.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
