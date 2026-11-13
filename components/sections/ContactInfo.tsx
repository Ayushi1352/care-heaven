import { Icon } from "@/components/ui/Icon";
import { BrushStroke, SoftLeaves } from "@/components/ui/Decor";
import { contactField, contactHref } from "@/components/ui/text";
import type { CompanyData, ContactData } from "@/types/templates.types";

// Desktop positions of the three cards (design pixels): two stacked on the left, one between them on the right.
const placement = ["xl:top-155 xl:left-862 xl:h-245", "xl:top-320 xl:left-1253 xl:h-210", "xl:top-487 xl:left-862 xl:h-208"];

export const ContactInfo = ({ data: contact, company }: { data?: ContactData; company?: CompanyData }) => {
  if (!contact || !company) return null;

  return (
    <section className="relative xl:h-695">
      <BrushStroke className="pointer-events-none absolute -top-56 -right-20 w-160 text-[var(--color-contact-decor)] xl:top-0 xl:right-0 xl:w-266" />
      <SoftLeaves className="pointer-events-none absolute top-[42%] -left-30 hidden w-150 rotate-[60deg] text-[var(--color-contact-decor-alt)] md:block xl:top-625 xl:-left-40 xl:w-250" />

      <div data-reveal="left" className="relative xl:absolute xl:top-238 xl:left-117 xl:w-640">
        <p className="flex items-center gap-14 font-alt text-[0.875rem] font-medium tracking-[0.08em] text-primary uppercase xl:text-[1.34375rem]">
          <span className="h-2 w-44 bg-primary xl:w-62" />
          {contact.label}
        </p>
        <h2 className="mt-10 font-heading font-bold text-[1.5rem] leading-[1.2] text-tertiary xs:text-[1.75rem] sm:text-[2.84375rem] xl:mt-14 xl:text-[4.5625rem] xl:leading-80">
          {contact.title}
          <br />
          <span className="text-primary">{contact.titleHighlight}</span>
        </h2>
        <p className="mt-14 max-w-620 font-alt text-[1rem] leading-27 text-[var(--color-text-dark)] xl:mt-20 xl:text-[1.5rem] xl:leading-[2.34375rem]">{contact.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-80 grid gap-x-24 gap-y-80 sm:grid-cols-2 xl:static xl:mt-0 xl:block">
        {contact.cards.map((card, i) => {
          const { lines, type } = contactField(company, card.source);
          const href = contactHref(type, lines[0]);
          const body = lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ));
          return (
            <li key={card.id} className={`group relative flex flex-col items-center rounded-[0.25rem] bg-[var(--color-bg-contact)] px-20 pt-76 pb-28 text-center shadow-[0_10px_30px_var(--color-shadow-contact-card)] xl:absolute xl:w-350 xl:px-20 xl:pt-88 xl:pb-0 ${placement[i] ?? ""}`}>
              <span className="absolute -top-56 left-1/2 flex size-112 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-contact-icon-bg)] text-[var(--color-white)] shadow-[0_12px_28px_var(--color-shadow-contact-icon)] transition-transform duration-500 group-hover:-translate-y-6 xl:-top-55 xl:size-120">
                <Icon name={card.icon} className="size-44 xl:size-48" />
              </span>
              <h3 className="font-heading font-bold text-[1.3125rem] text-accent-dark xl:text-[1.6875rem] xl:leading-34">{card.title}</h3>
              {href ? (
                <a href={href} className="mt-8 block font-form text-[1rem] leading-27 break-words text-[var(--color-contact-text)] transition-colors hover:text-tertiary xl:mt-10 xl:text-[1.3125rem] xl:leading-35">
                  {body}
                </a>
              ) : (
                <p className="mt-8 font-form text-[1rem] leading-27 text-[var(--color-contact-text)] xl:mt-10 xl:text-[1.3125rem] xl:leading-35">{body}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
