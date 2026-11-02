import Icon from "@/components/Icon";
import { BrushStroke, SoftLeaves } from "@/components/Decor";
import { contactField, contactHref, site } from "@/data";

const { contact } = site;

// Desktop positions of the three cards (design pixels): two stacked on the left, one between them on the right.
const placement = ["xl:top-155 xl:left-862 xl:h-245", "xl:top-320 xl:left-1253 xl:h-210", "xl:top-487 xl:left-862 xl:h-208"];

export default function ContactInfo() {
  return (
    <section className="relative xl:h-695">
      <BrushStroke className="pointer-events-none absolute -top-56 -right-20 w-160 text-[#f8e1d0] xl:top-0 xl:right-0 xl:w-266" />
      <SoftLeaves className="pointer-events-none absolute top-[42%] -left-30 hidden w-150 rotate-[60deg] text-[#fbe3d5] md:block xl:top-625 xl:-left-40 xl:w-250" />

      <div data-reveal="left" className="relative xl:absolute xl:top-238 xl:left-117 xl:w-640">
        <p className="flex items-center gap-14 font-alt text-[calc(14*var(--spacing))] font-medium tracking-[0.08em] text-orange uppercase xl:text-[calc(21.5*var(--spacing))]">
          <span className="h-2 w-44 bg-orange xl:w-62" />
          {contact.label}
        </p>
        <h2 className="mt-10 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.14] text-wine sm:text-[calc(45.5*var(--spacing))] xl:mt-14 xl:text-[calc(73*var(--spacing))] xl:leading-80">
          {contact.title}
          <br />
          <span className="text-orange">{contact.titleHighlight}</span>
        </h2>
        <p className="mt-14 max-w-620 font-alt text-[calc(16*var(--spacing))] leading-27 text-gray-dark xl:mt-20 xl:text-[calc(24*var(--spacing))] xl:leading-37.5">{contact.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-80 grid gap-x-24 gap-y-80 sm:grid-cols-2 xl:static xl:mt-0 xl:block">
        {contact.cards.map((card, i) => {
          const { lines, type } = contactField(card.field);
          const href = contactHref(type, lines[0]);
          const body = lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ));
          return (
            <li key={card.title} className={`group relative flex flex-col items-center rounded-[calc(4*var(--spacing))] bg-blush px-20 pt-76 pb-28 text-center shadow-[0_10px_30px_rgba(240,140,100,0.12)] xl:absolute xl:w-350 xl:px-20 xl:pt-88 xl:pb-0 ${placement[i] ?? ""}`}>
              <span className="absolute -top-56 left-1/2 flex size-112 -translate-x-1/2 items-center justify-center rounded-full bg-[#70052f] text-white shadow-[0_12px_28px_rgba(112,5,47,0.35)] transition-transform duration-500 group-hover:-translate-y-6 xl:-top-55 xl:size-120">
                <Icon name={card.icon === "pin" ? "pin-line" : card.icon === "mail" ? "mail-line" : card.icon} className="size-44 xl:size-48" strokeWidth={1.4} />
              </span>
              <h3 className="font-heading font-bold text-[calc(21*var(--spacing))] text-navy-ink xl:text-[calc(27*var(--spacing))] xl:leading-34">{card.title}</h3>
              {href ? (
                <a href={href} className="mt-8 block font-form text-[calc(16*var(--spacing))] leading-27 break-words text-[#4f4f55] transition-colors hover:text-wine xl:mt-10 xl:text-[calc(21*var(--spacing))] xl:leading-35">
                  {body}
                </a>
              ) : (
                <p className="mt-8 font-form text-[calc(16*var(--spacing))] leading-27 text-[#4f4f55] xl:mt-10 xl:text-[calc(21*var(--spacing))] xl:leading-35">{body}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
