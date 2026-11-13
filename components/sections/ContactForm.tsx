"use client";

import { Icon } from "@/components/ui/Icon";
import { Field } from "@/components/ui/Field";
import { SoftLeaves } from "@/components/ui/Decor";
import { useFormSubmit } from "@/components/ui/useFormSubmit";
import { mapUrl } from "@/components/ui/text";
import type { CompanyData, ContactData, GlobalUIData } from "@/types/templates.types";

export const ContactForm = ({ data: contact, company, ui }: { data?: ContactData; company?: CompanyData; ui?: GlobalUIData }) => {
  const { errors, sending, sent, setSent, onSubmit, sendingLabel } = useFormSubmit(contact?.form.fields ?? [], contact?.form.messages);

  if (!contact || !company) return null;
  const { form } = contact;

  return (
    <section className="relative mt-64 flex flex-col gap-24 overflow-hidden rounded-[0.875rem] bg-[var(--color-bg-contact)] p-16 sm:p-24 md:mt-80 lg:flex-row xl:mx-33 xl:mt-100 xl:h-988 xl:gap-0 xl:rounded-[1.0625rem] xl:p-0">
      <SoftLeaves className="pointer-events-none absolute right-0 bottom-0 w-150 rotate-[-20deg] text-[var(--color-contact-form-decor)] xl:right-10 xl:-bottom-10 xl:w-250" />

      <div data-reveal="left" className="relative h-320 overflow-hidden rounded-[0.5rem] border-4 border-[var(--color-white)] shadow-[0_10px_30px_var(--color-black-10)] sm:h-420 lg:h-auto lg:w-[46%] xl:mt-35 xl:mb-31 xl:ml-29 xl:w-735 xl:shrink-0 xl:rounded-[0.625rem] xl:border-[length:0.3125rem]">
        <iframe title={contact.map.label} src={mapUrl(company.mapEmbedUrl, company.address)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0" />
        <a
          href={mapUrl(company.mapOpenUrl, company.address)}
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
            <button type="button" onClick={() => setSent(false)} aria-label={ui?.close} className="text-[var(--color-contact-close-icon)] transition-colors hover:text-tertiary">
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
};
