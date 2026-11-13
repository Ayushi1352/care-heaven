import { Icon } from "@/components/ui/Icon";
import type { FormFieldData } from "@/types/templates.types";

interface FieldProps {
  field: FormFieldData;
  error?: string;
}

const box =
  "w-full rounded-[0.4375rem] border bg-[var(--color-white)] pr-16 pl-48 font-form text-[0.9375rem] text-accent-dark outline-none transition-[border-color,box-shadow] placeholder:text-[var(--color-input-placeholder)] focus:border-tertiary focus:shadow-[0_0_0_3px_var(--color-shadow-input-focus)] xl:pr-20 xl:pl-80 xl:text-[1.3125rem]";

/** A labelled input with an icon on the left (contact form). */
export const Field = ({ field, error }: FieldProps) => {
  const id = `field-${field.name}`;
  const border = error ? "border-[var(--color-input-error-border)]" : "border-[var(--color-input-border)]";

  return (
    <div className={field.type === "textarea" ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="block font-form text-[0.9375rem] font-medium text-accent-dark xl:text-[1.375rem]">
        {field.label}
      </label>
      <div className="relative mt-8 xl:mt-12">
        <Icon
          name={field.icon}
          className={`pointer-events-none absolute left-16 size-19 text-[var(--color-input-icon)] xl:left-40 xl:size-24 ${field.type === "textarea" ? "top-16 xl:top-28" : "top-1/2 -translate-y-1/2"}`}
        />
        {field.type === "textarea" ? (
          <textarea id={id} name={field.name} placeholder={field.placeholder} rows={5} aria-invalid={!!error} className={`${box} ${border} block h-150 resize-y pt-14 xl:h-200 xl:pt-24`} />
        ) : (
          <input
            id={id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            aria-invalid={!!error}
            className={`${box} ${border} h-52 xl:h-70`}
          />
        )}
      </div>
      {error && <p className="mt-6 font-form text-[0.8125rem] text-[var(--color-input-error-text)] xl:text-[length:max(1rem,var(--text-min))]">{error}</p>}
    </div>
  );
};
