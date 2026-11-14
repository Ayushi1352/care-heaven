import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Paginated } from '@/components/ui/Pagination';
import { accentAt, fill } from '@/components/ui/text';
import type { CausesProps } from '@/types/templates.types';

export const Causes = ({ data: causes }: CausesProps) => {
  if (!causes) return null;

  return (
    <section className="bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-64 xl:pb-100 xl:pl-68">
      <Paginated labels={causes} rows={causes.rowsPerPage} columns={3} variant="round" navClassName="mt-40 xl:mt-47" className="grid gap-28 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-36 xl:gap-y-35">
        {causes.items.map((cause, i) => {
          const orange = accentAt(i) === 'orange';
          return (
            <li key={cause.id} className="group flex flex-col overflow-hidden rounded-[0.25rem] bg-[var(--color-white)] shadow-[0_6px_26px_var(--color-shadow-cause-card)]">
              <Link href={causes.detailPageUrl} aria-label={fill(causes.readMoreLabel, { title: cause.title })} className="relative block aspect-[494/283] overflow-hidden">
                <Image src={cause.image} alt={cause.imageAlt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              </Link>
              <div className="flex flex-1 flex-col px-22 pt-22 pb-28 xl:px-31 xl:pt-22 xl:pb-30">
                <h2 className="font-heading font-bold text-[1.6875rem] leading-[1.2] text-[var(--color-cause-card-heading)] xl:text-[2.09375rem] xl:leading-42">
                  <Link href={causes.detailPageUrl} className="transition-colors hover:text-primary">
                    {cause.title}
                  </Link>
                </h2>
                <span className={`mt-14 block h-3 w-52 transition-[width] duration-500 group-hover:w-90 xl:mt-17 xl:w-62 ${orange ? 'bg-primary' : 'bg-secondary'}`} />
                <p className="mt-16 font-alt text-[1rem] leading-27 text-[var(--color-cause-card-text)] xl:mt-18 xl:text-[1.25rem] xl:leading-32">{cause.description}</p>
                <Link
                  href={causes.detailPageUrl}
                  className={`group/btn mt-22 inline-flex h-50 w-fit items-center gap-16 rounded-[0.25rem] border px-24 font-alt text-[1.0625rem] font-semibold text-[var(--color-white)] transition-colors duration-300 xl:mt-22 xl:h-61 xl:w-226 xl:justify-center xl:gap-20 xl:px-0 xl:text-[1.25rem] ${
                    orange ? 'border-primary bg-primary hover:bg-[var(--color-white)] hover:text-primary' : 'border-secondary bg-secondary hover:bg-[var(--color-white)] hover:text-secondary'
                  }`}
                >
                  {causes.readMore}
                  <Icon name="FaArrowRight" className="size-20 xl:size-24" />
                </Link>
              </div>
            </li>
          );
        })}
      </Paginated>
    </section>
  );
};
