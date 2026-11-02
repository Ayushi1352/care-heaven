import { Icon } from "@/components/ui/Icon";
import { BrushStroke, SoftLeaves } from "@/components/ui/Decor";
import { contactField, contactHref } from "@/components/ui/helpers";
import type { CompanyData, ContactData } from "@/types/templates.types";

// Desktop positions of the three cards (design pixels): two stacked on the left, one between them on the right.
const placement = ["xl:top-[9.6875rem] xl:left-[53.875rem] xl:h-[15.3125rem]", "xl:top-[20rem] xl:left-[78.3125rem] xl:h-[13.125rem]", "xl:top-[30.4375rem] xl:left-[53.875rem] xl:h-[13rem]"];

export const ContactInfo = ({ data: contact, company }: { data?: ContactData; company?: CompanyData }) => {
  if (!contact || !company) return null;

  return (
    <section className="relative xl:h-[43.4375rem]">
      <BrushStroke className="pointer-events-none absolute -top-[3.5rem] -right-[1.25rem] w-[10rem] text-[var(--color-peach-f8e1d0)] xl:top-0 xl:right-0 xl:w-[16.625rem]" />
      <SoftLeaves className="pointer-events-none absolute top-[42%] -left-[1.875rem] hidden w-[9.375rem] rotate-[60deg] text-[var(--color-peach-fbe3d5)] md:block xl:top-[39.0625rem] xl:-left-[2.5rem] xl:w-[15.625rem]" />

      <div data-reveal="left" className="relative xl:absolute xl:top-[14.875rem] xl:left-[7.3125rem] xl:w-[40rem]">
        <p className="flex items-center gap-[0.875rem] font-alt text-[0.875rem] font-medium tracking-[0.08em] text-[var(--color-orange)] uppercase xl:text-[1.34375rem]">
          <span className="h-[0.125rem] w-[2.75rem] bg-[var(--color-orange)] xl:w-[3.875rem]" />
          {contact.label}
        </p>
        <h2 className="mt-[0.625rem] font-heading font-bold text-[2.125rem] leading-[1.14] text-[var(--color-wine)] sm:text-[2.84375rem] xl:mt-[0.875rem] xl:text-[4.5625rem] xl:leading-[5rem]">
          {contact.title}
          <br />
          <span className="text-[var(--color-orange)]">{contact.titleHighlight}</span>
        </h2>
        <p className="mt-[0.875rem] max-w-[38.75rem] font-alt text-[1rem] leading-[1.6875rem] text-[var(--color-gray-dark)] xl:mt-[1.25rem] xl:text-[1.5rem] xl:leading-[2.34375rem]">{contact.description}</p>
      </div>

      <ul data-reveal-stagger className="relative mt-[5rem] grid gap-x-[1.5rem] gap-y-[5rem] sm:grid-cols-2 xl:static xl:mt-0 xl:block">
        {contact.cards.map((card, i) => {
          const { lines, type } = contactField(company, card.field);
          const href = contactHref(type, lines[0]);
          const body = lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ));
          return (
            <li key={card.id} className={`group relative flex flex-col items-center rounded-[0.25rem] bg-[var(--color-blush)] px-[1.25rem] pt-[4.75rem] pb-[1.75rem] text-center shadow-[0_10px_30px_var(--color-shadow-f08c64-12)] xl:absolute xl:w-[21.875rem] xl:px-[1.25rem] xl:pt-[5.5rem] xl:pb-0 ${placement[i] ?? ""}`}>
              <span className="absolute -top-[3.5rem] left-1/2 flex size-[7rem] -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-purple-70052f)] text-[var(--color-white)] shadow-[0_12px_28px_var(--color-shadow-70052f-35)] transition-transform duration-500 group-hover:-translate-y-[0.375rem] xl:-top-[3.4375rem] xl:size-[7.5rem]">
                <Icon name={card.icon} className="size-[2.75rem] xl:size-[3rem]" />
              </span>
              <h3 className="font-heading font-bold text-[1.3125rem] text-[var(--color-navy-ink)] xl:text-[1.6875rem] xl:leading-[2.125rem]">{card.title}</h3>
              {href ? (
                <a href={href} className="mt-[0.5rem] block font-form text-[1rem] leading-[1.6875rem] break-words text-[var(--color-gray-4f4f55)] transition-colors hover:text-[var(--color-wine)] xl:mt-[0.625rem] xl:text-[1.3125rem] xl:leading-[2.1875rem]">
                  {body}
                </a>
              ) : (
                <p className="mt-[0.5rem] font-form text-[1rem] leading-[1.6875rem] text-[var(--color-gray-4f4f55)] xl:mt-[0.625rem] xl:text-[1.3125rem] xl:leading-[2.1875rem]">{body}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
