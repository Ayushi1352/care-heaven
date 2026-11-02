import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { accentAt, fillLabel } from "@/components/ui/helpers";
import type { CausesData, GlobalUIData } from "@/types/templates.types";

export const CauseGrid = ({ data: causes, ui }: { data?: CausesData; ui?: GlobalUIData }) => {
  if (!causes) return null;

  return (
    <section className="bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[4rem] xl:pb-[6.25rem] xl:pl-[4.25rem]">
      <Paginated ui={ui} rows={causes.rowsPerPage} columns={3} variant="round" navClassName="mt-[2.5rem] xl:mt-[2.9375rem]" className="grid gap-[1.75rem] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[2.25rem] xl:gap-y-[2.1875rem]">
        {causes.items.map((cause, i) => {
          const orange = accentAt(i) === "orange";
          return (
            <li key={cause.id} className="group flex flex-col overflow-hidden rounded-[0.25rem] bg-[var(--color-white)] shadow-[0_6px_26px_var(--color-shadow-03345e-8)]">
              <Link href={causes.detailPageUrl} aria-label={fillLabel(ui?.readMoreAbout, { title: cause.title })} className="relative block aspect-[494/283] overflow-hidden">
                <Image src={cause.image} alt={cause.imageAlt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              </Link>
              <div className="flex flex-1 flex-col px-[1.375rem] pt-[1.375rem] pb-[1.75rem] xl:px-[1.9375rem] xl:pt-[1.375rem] xl:pb-[1.875rem]">
                <h2 className="font-heading font-bold text-[1.6875rem] leading-[1.2] text-[var(--color-blue-03345e)] xl:text-[2.09375rem] xl:leading-[2.625rem]">
                  <Link href={causes.detailPageUrl} className="transition-colors hover:text-[var(--color-orange)]">
                    {cause.title}
                  </Link>
                </h2>
                <span className={`mt-[0.875rem] block h-[0.1875rem] w-[3.25rem] transition-[width] duration-500 group-hover:w-[5.625rem] xl:mt-[1.0625rem] xl:w-[3.875rem] ${orange ? "bg-[var(--color-orange)]" : "bg-[var(--color-green)]"}`} />
                <p className="mt-[1rem] font-alt text-[1rem] leading-[1.6875rem] text-[var(--color-gray-575b64)] xl:mt-[1.125rem] xl:text-[1.25rem] xl:leading-[2rem]">{cause.description}</p>
                <Link
                  href={causes.detailPageUrl}
                  className={`group/btn mt-[1.375rem] inline-flex h-[3.125rem] w-fit items-center gap-[1rem] rounded-[0.25rem] border px-[1.5rem] font-alt text-[1.0625rem] font-semibold text-[var(--color-white)] transition-colors duration-300 xl:mt-[1.375rem] xl:h-[3.8125rem] xl:w-[14.125rem] xl:justify-center xl:gap-[1.25rem] xl:px-0 xl:text-[1.25rem] ${
                    orange ? "border-[var(--color-orange)] bg-[var(--color-orange)] hover:bg-[var(--color-white)] hover:text-[var(--color-orange)]" : "border-[var(--color-green)] bg-[var(--color-green)] hover:bg-[var(--color-white)] hover:text-[var(--color-green)]"
                  }`}
                >
                  {causes.readMore}
                  <Icon name="FaArrowRight" className="size-[1.25rem] xl:size-[1.5rem]" />
                </Link>
              </div>
            </li>
          );
        })}
      </Paginated>
    </section>
  );
};
