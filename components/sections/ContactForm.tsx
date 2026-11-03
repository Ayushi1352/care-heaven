"use client";

import { Icon } from "@/components/ui/Icon";
import { FormField } from "@/components/ui/FormField";
import { SoftLeaves } from "@/components/ui/Decor";
import { useFormSubmit } from "@/components/ui/useFormSubmit";
import { companyMap } from "@/components/ui/helpers";
import type { CompanyData, ContactData, GlobalUIData } from "@/types/templates.types";

export const ContactForm = ({ data: contact, company, ui }: { data?: ContactData; company?: CompanyData; ui?: GlobalUIData }) => {
  const { errors, sending, sent, setSent, onSubmit, sendingLabel } = useFormSubmit(contact?.form.fields ?? [], contact?.form.messages);

  if (!contact || !company) return null;
  const { form } = contact;
  const map = companyMap(company.address);

  return (
    <section className="relative mt-[4rem] flex flex-col gap-[1.5rem] overflow-hidden rounded-[0.875rem] bg-[var(--color-bg-contact)] p-[1rem] sm:p-[1.5rem] md:mt-[5rem] lg:flex-row xl:mx-[2.0625rem] xl:mt-[6.25rem] xl:h-[61.75rem] xl:gap-0 xl:rounded-[1.0625rem] xl:p-0">
      <SoftLeaves className="pointer-events-none absolute right-0 bottom-0 w-[9.375rem] rotate-[-20deg] text-[var(--color-contact-form-decor)] xl:right-[0.625rem] xl:-bottom-[0.625rem] xl:w-[15.625rem]" />

      <div data-reveal="left" className="relative h-[20rem] overflow-hidden rounded-[0.5rem] border-4 border-[var(--color-white)] shadow-[0_10px_30px_var(--color-black-10)] sm:h-[26.25rem] lg:h-auto lg:w-[46%] xl:mt-[2.1875rem] xl:mb-[1.9375rem] xl:ml-[1.8125rem] xl:w-[45.9375rem] xl:shrink-0 xl:rounded-[0.625rem] xl:border-[length:0.3125rem]">
        <iframe title={contact.map.label} src={map.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0" />
        <a
          href={map.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[0.625rem] left-[0.625rem] rounded-[0.25rem] bg-[var(--color-white)] px-[0.75rem] py-[0.5rem] font-form text-[0.875rem] font-medium text-[var(--color-map-link)] shadow-[0_2px_8px_var(--color-black-18)] transition-colors hover:bg-[var(--color-map-link-hover)] xl:top-[0.875rem] xl:left-[0.875rem] xl:px-[1.125rem] xl:py-[0.75rem] xl:text-[1.25rem]"
        >
          {contact.map.label}
        </a>
      </div>

      <div data-reveal="right" className="relative min-w-0 flex-1 xl:mr-[1.9375rem] xl:ml-[4.0625rem] xl:pt-[3.75rem]">
        <h2 className="font-heading font-bold text-[2.03125rem] leading-[1.15] text-[var(--color-tertiary)] sm:text-[2.625rem] xl:text-[3.5625rem] xl:leading-[4.375rem]">
          {form.title} <span className="text-[var(--color-primary)]">{form.titleHighlight}</span>
        </h2>
        <span className="mt-[0.875rem] block h-[0.1875rem] w-[3.125rem] bg-[var(--color-primary)] xl:mt-[1.5625rem] xl:w-[3.9375rem]" />

        {sent ? (
          <div role="status" className="mt-[2rem] flex items-start gap-[0.875rem] rounded-[0.625rem] bg-[var(--color-white)] p-[1.25rem] font-form text-[1rem] leading-[1.625rem] text-[var(--color-accent-dark)] shadow-[0_8px_24px_var(--color-black-6)] xl:mt-[2.5rem] xl:gap-[1.25rem] xl:p-[2rem] xl:text-[1.375rem] xl:leading-[2.125rem]">
            <Icon name="FaCheckCircle" className="size-[1.75rem] shrink-0 text-[var(--color-secondary)] xl:size-[2.25rem]" />
            <span className="flex-1">{form.success}</span>
            <button type="button" onClick={() => setSent(false)} aria-label={ui?.close} className="text-[var(--color-contact-close-icon)] transition-colors hover:text-[var(--color-tertiary)]">
              <Icon name="FaTimes" className="size-[1.25rem] xl:size-[1.5rem]" />
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-[1.75rem] grid gap-x-[2.9375rem] gap-y-[1.375rem] sm:grid-cols-2 xl:mt-[2.4375rem] xl:gap-y-[2.375rem]">
            {form.fields.map((field) => (
              <FormField key={field.id} field={field} error={errors[field.name]} />
            ))}
            <div className="sm:col-span-2 xl:mt-[0.25rem]">
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex h-[3.5rem] items-center justify-center gap-[0.75rem] rounded-full border border-[var(--color-tertiary)] bg-[var(--color-tertiary)] px-[2rem] font-form text-[1rem] font-bold text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-white)] hover:text-[var(--color-tertiary)] disabled:opacity-70 xl:h-[4.875rem] xl:w-[21.875rem] xl:gap-[0.875rem] xl:px-0 xl:text-[1.4375rem]"
              >
                {sending ? sendingLabel : form.button}
                <Icon name="FaArrowRight" className="size-[1.125rem] xl:size-[1.5rem]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
