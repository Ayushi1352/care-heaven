import { Icon } from "@/components/ui/Icon";
import type { FormFieldData } from "@/types/templates.types";

interface FormFieldProps {
  field: FormFieldData;
  error?: string;
}

const box =
  "w-full rounded-[0.4375rem] border bg-[var(--color-white)] pr-[1rem] pl-[3rem] font-form text-[0.9375rem] text-[var(--color-navy-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--color-gray-a3a3a8)] focus:border-[var(--color-wine)] focus:shadow-[0_0_0_3px_var(--color-shadow-6c042c-8)] xl:pr-[1.25rem] xl:pl-[5rem] xl:text-[1.3125rem]";

/** A labelled input with an icon on the left (contact form). */
export const FormField = ({ field, error }: FormFieldProps) => {
  const id = `field-${field.name}`;
  const border = error ? "border-[var(--color-red-e0473f)]" : "border-[var(--color-peach-eedfd5)]";

  return (
    <div className={field.type === "textarea" ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="block font-form text-[0.9375rem] font-medium text-[var(--color-navy-ink)] xl:text-[1.375rem]">
        {field.label}
      </label>
      <div className="relative mt-[0.5rem] xl:mt-[0.75rem]">
        <Icon
          name={field.icon}
          className={`pointer-events-none absolute left-[1rem] size-[1.1875rem] text-[var(--color-gray-6f6f75)] xl:left-[2.5rem] xl:size-[1.5rem] ${field.type === "textarea" ? "top-[1rem] xl:top-[1.75rem]" : "top-1/2 -translate-y-1/2"}`}
        />
        {field.type === "textarea" ? (
          <textarea id={id} name={field.name} placeholder={field.placeholder} rows={5} aria-invalid={!!error} className={`${box} ${border} block h-[9.375rem] resize-y pt-[0.875rem] xl:h-[12.5rem] xl:pt-[1.5rem]`} />
        ) : (
          <input
            id={id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            aria-invalid={!!error}
            className={`${box} ${border} h-[3.25rem] xl:h-[4.375rem]`}
          />
        )}
      </div>
      {error && <p className="mt-[0.375rem] font-form text-[0.8125rem] text-[var(--color-red-d6362e)] xl:text-[length:max(1rem,var(--text-min))]">{error}</p>}
    </div>
  );
};
