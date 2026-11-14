"use client";

import { Icon } from "@/components/ui/Icon";
import { Field } from "@/components/ui/Field";
import { BrushStroke, SoftLeaves } from "@/components/ui/Decor";
import { useFormSubmit } from "@/components/ui/useFormSubmit";
import { contactHref } from "@/components/ui/text";
import type { ContactData, ContactProps } from "@/types/templates.types";

// Desktop positions of the three cards (design pixels): two stacked on the left, one between them on the right.
const placement = ["xl:top-155 xl:left-862 xl:h-245", "xl:top-320 xl:left-1253 xl:h-210", "xl:top-487 xl:left-862 xl:h-208"];

function ContactInfo({ contact }: { contact: ContactData }) {
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
          const href = contactHref(card.type, card.lines[0]);
          const body = card.lines.map((line) => (
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
}

function ContactForm({ contact }: { contact: ContactData }) {
  const { form } = contact;
  const { errors, sending, sent, setSent, onSubmit, sendingLabel } = useFormSubmit(form.fields, form.messages);

  return (
    <section className="relative mt-64 flex flex-col gap-24 overflow-hidden rounded-[0.875rem] bg-[var(--color-bg-contact)] p-16 sm:p-24 md:mt-80 lg:flex-row xl:mx-33 xl:mt-100 xl:h-988 xl:gap-0 xl:rounded-[1.0625rem] xl:p-0">
      <SoftLeaves className="pointer-events-none absolute right-0 bottom-0 w-150 rotate-[-20deg] text-[var(--color-contact-form-decor)] xl:right-10 xl:-bottom-10 xl:w-250" />

      <div data-reveal="left" className="relative h-320 overflow-hidden rounded-[0.5rem] border-4 border-[var(--color-white)] shadow-[0_10px_30px_var(--color-black-10)] sm:h-420 lg:h-auto lg:w-[46%] xl:mt-35 xl:mb-31 xl:ml-29 xl:w-735 xl:shrink-0 xl:rounded-[0.625rem] xl:border-[length:0.3125rem]">
        <iframe title={contact.map.label} src={contact.map.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0" />
        <a
          href={contact.map.openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-10 left-10 rounded-[0.25rem] bg-[var(--color-white)] px-12 py-8 font-form text-[0.875rem] font-medium text-[var(--color-map-link)] shadow-[0_2px_8px_var(--color-black-18)] transition-colors hover:bg-[var(--color-map-link-hover)] xl:top-14 xl:left-14 xl:px-18 xl:py-12 xl:text-[1.25rem]"
        >
          {contact.map.label}
        </a>
      </div>

      <div data-reveal="right" className="relative min-w-0 flex-1 xl:mr-31 xl:ml-65 xl:pt-60">
        <h2 className="font-heading font-bold text-[2.03125rem] leading-[1.15] text-tertiary sm:text-[2.625rem] xl:text-[3.5625rem] xl:leading-70">
          {form.title} <span className="text-primary">{form.titleHighlight}</span>
        </h2>
        <span className="mt-14 block h-3 w-50 bg-primary xl:mt-25 xl:w-63" />

        {sent ? (
          <div role="status" className="mt-32 flex items-start gap-14 rounded-[0.625rem] bg-[var(--color-white)] p-20 font-form text-[1rem] leading-26 text-accent-dark shadow-[0_8px_24px_var(--color-black-6)] xl:mt-40 xl:gap-20 xl:p-32 xl:text-[1.375rem] xl:leading-34">
            <Icon name="FaCheckCircle" className="size-28 shrink-0 text-secondary xl:size-36" />
            <span className="flex-1">{form.success}</span>
            <button type="button" onClick={() => setSent(false)} aria-label={contact.closeLabel} className="text-[var(--color-contact-close-icon)] transition-colors hover:text-tertiary">
              <Icon name="FaTimes" className="size-20 xl:size-24" />
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-28 grid gap-x-47 gap-y-22 sm:grid-cols-2 xl:mt-39 xl:gap-y-38">
            {form.fields.map((field) => (
              <Field key={field.id} field={field} error={errors[field.name]} />
            ))}
            <div className="sm:col-span-2 xl:mt-4">
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex h-56 items-center justify-center gap-12 rounded-full border border-tertiary bg-tertiary px-32 font-form text-[1rem] font-bold text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-white)] hover:text-tertiary disabled:opacity-70 xl:h-78 xl:w-350 xl:gap-14 xl:px-0 xl:text-[1.4375rem]"
              >
                {sending ? sendingLabel : form.button}
                <Icon name="FaArrowRight" className="size-18 xl:size-24" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export const Contact = ({ data }: ContactProps) => {
  if (!data) return null;
  return (
    <div className="relative overflow-hidden bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-0 xl:pt-0 xl:pb-100">
      <ContactInfo contact={data} />
      <ContactForm contact={data} />
    </div>
  );
};
