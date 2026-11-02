import Icon from "@/components/Icon";

export interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  icon: string;
}

interface FormFieldProps {
  field: FieldConfig;
  error?: string;
  /** Options of a "select" field. */
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const box =
  "w-full rounded-[calc(7*var(--spacing))] border bg-white pr-16 pl-48 font-form text-[calc(15*var(--spacing))] text-navy-ink outline-none transition-[border-color,box-shadow] placeholder:text-[#a3a3a8] focus:border-wine focus:shadow-[0_0_0_3px_rgba(108,4,44,0.08)] xl:pr-20 xl:pl-80 xl:text-[calc(21*var(--spacing))]";
// Number inputs without the browser's up/down spinners.
const noSpinner = "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

/** A labelled input with an icon on the left (contact form). */
export default function FormField({ field, error, options, value, onChange }: FormFieldProps) {
  const id = `field-${field.name}`;
  const border = error ? "border-[#e0473f]" : "border-[#eedfd5]";
  const controlled = value !== undefined ? { value, onChange: (e: { target: { value: string } }) => onChange?.(e.target.value) } : {};

  return (
    <div className={field.type === "textarea" ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="block font-form text-[calc(15*var(--spacing))] font-medium text-navy-ink xl:text-[calc(22*var(--spacing))]">
        {field.label}
      </label>
      <div className="relative mt-8 xl:mt-12">
        <Icon
          name={field.icon}
          className={`pointer-events-none absolute left-16 size-19 text-[#6f6f75] xl:left-40 xl:size-24 ${field.type === "textarea" ? "top-16 xl:top-28" : "top-1/2 -translate-y-1/2"}`}
          strokeWidth={1.5}
        />
        {field.type === "textarea" ? (
          <textarea id={id} name={field.name} placeholder={field.placeholder} rows={5} aria-invalid={!!error} className={`${box} ${border} block h-150 resize-y pt-14 xl:h-200 xl:pt-24`} {...controlled} />
        ) : field.type === "select" ? (
          <select id={id} name={field.name} aria-invalid={!!error} defaultValue={value === undefined ? "" : undefined} className={`${box} ${border} h-52 appearance-none xl:h-70`} {...controlled}>
            <option value="" disabled>
              {field.placeholder}
            </option>
            {options?.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            aria-invalid={!!error}
            inputMode={field.type === "number" ? "numeric" : undefined}
            min={field.type === "number" ? 1 : undefined}
            className={`${box} ${border} h-52 xl:h-70 ${field.type === "number" ? noSpinner : ""}`}
            {...controlled}
          />
        )}
        {field.type === "select" && <Icon name="chevron-down" className="pointer-events-none absolute top-1/2 right-16 size-18 -translate-y-1/2 text-[#6f6f75] xl:right-24 xl:size-22" />}
      </div>
      {error && <p className="mt-6 font-form text-[calc(13*var(--spacing))] text-[#d6362e] xl:text-[max(calc(16*var(--spacing)),var(--text-min))]">{error}</p>}
    </div>
  );
}
