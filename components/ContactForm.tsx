"use client";

import Icon from "@/components/Icon";
import FormField from "@/components/FormField";
import { SoftLeaves } from "@/components/Decor";
import { useFormSubmit } from "@/components/useFormSubmit";
import { companyMap, label, site } from "@/data";

const { contact } = site;
const { form } = contact;

export default function ContactForm() {
  const { errors, sending, sent, setSent, onSubmit, sendingLabel } = useFormSubmit(form.fields);

  return (
    <section className="relative mt-64 flex flex-col gap-24 overflow-hidden rounded-[calc(14*var(--spacing))] bg-blush p-16 sm:p-24 md:mt-80 lg:flex-row xl:mx-33 xl:mt-100 xl:h-988 xl:gap-0 xl:rounded-[calc(17*var(--spacing))] xl:p-0">
      <SoftLeaves className="pointer-events-none absolute right-0 bottom-0 w-150 rotate-[-20deg] text-[#fbe4d6] xl:right-10 xl:-bottom-10 xl:w-250" />

      <div data-reveal="left" className="relative h-320 overflow-hidden rounded-[calc(8*var(--spacing))] border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] sm:h-420 lg:h-auto lg:w-[46%] xl:mt-35 xl:mb-31 xl:ml-29 xl:w-735 xl:shrink-0 xl:rounded-[calc(10*var(--spacing))] xl:border-[length:calc(5*var(--spacing))]">
        <iframe title={contact.map.label} src={companyMap.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0" />
        <a
          href={companyMap.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-10 left-10 rounded-[calc(4*var(--spacing))] bg-white px-12 py-8 font-form text-[calc(14*var(--spacing))] font-medium text-[#1a73e8] shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#f1f6fe] xl:top-14 xl:left-14 xl:px-18 xl:py-12 xl:text-[calc(20*var(--spacing))]"
        >
          {contact.map.label}
        </a>
      </div>

      <div data-reveal="right" className="relative min-w-0 flex-1 xl:mr-31 xl:ml-65 xl:pt-60">
        <h2 className="font-heading font-bold text-[calc(32.5*var(--spacing))] leading-[1.15] text-wine sm:text-[calc(42*var(--spacing))] xl:text-[calc(57*var(--spacing))] xl:leading-70">
          {form.title} <span className="text-orange">{form.titleHighlight}</span>
        </h2>
        <span className="mt-14 block h-3 w-50 bg-orange xl:mt-25 xl:w-63" />

        {sent ? (
          <div role="status" className="mt-32 flex items-start gap-14 rounded-[calc(10*var(--spacing))] bg-white p-20 font-form text-[calc(16*var(--spacing))] leading-26 text-navy-ink shadow-[0_8px_24px_rgba(0,0,0,0.06)] xl:mt-40 xl:gap-20 xl:p-32 xl:text-[calc(22*var(--spacing))] xl:leading-34">
            <Icon name="check-circle" className="size-28 shrink-0 text-green xl:size-36" />
            <span className="flex-1">{form.success}</span>
            <button type="button" onClick={() => setSent(false)} aria-label={label("close")} className="text-[#8a8a90] transition-colors hover:text-wine">
              <Icon name="close" className="size-20 xl:size-24" strokeWidth={2} />
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-28 grid gap-x-47 gap-y-22 sm:grid-cols-2 xl:mt-39 xl:gap-y-38">
            {form.fields.map((field) => (
              <FormField key={field.name} field={field} error={errors[field.name]} />
            ))}
            <div className="sm:col-span-2 xl:mt-4">
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex h-56 items-center justify-center gap-12 rounded-full bg-wine px-32 font-form text-[calc(16*var(--spacing))] font-bold text-white transition-colors duration-300 hover:bg-orange disabled:opacity-70 xl:h-78 xl:w-350 xl:gap-14 xl:px-0 xl:text-[calc(23*var(--spacing))]"
              >
                {sending ? sendingLabel : form.button}
                <Icon name="arrow-right" className="size-18 xl:size-24" strokeWidth={2} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
