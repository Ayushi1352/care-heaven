import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Paginated from "@/components/Pagination";
import { accentAt, label, routes, site } from "@/data";

const { causes } = site;

export default function CauseGrid() {
  return (
    <section className="bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-64 xl:pb-100 xl:pl-68">
      <Paginated perPage={causes.perPage} variant="round" navClassName="mt-40 xl:mt-47" className="grid gap-28 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-36 xl:gap-y-35">
        {causes.items.map((cause, i) => {
          const orange = accentAt(i) === "orange";
          return (
            <li key={cause.title} className="group flex flex-col overflow-hidden rounded-[calc(4*var(--spacing))] bg-white shadow-[0_6px_26px_rgba(3,52,94,0.08)]">
              <Link href={routes.causesDetails} aria-label={label("readMoreAbout", { title: cause.title })} className="relative block aspect-[494/283] overflow-hidden">
                <Image src={cause.image} alt={cause.imageAlt} fill quality={90} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-108" />
              </Link>
              <div className="flex flex-1 flex-col px-22 pt-22 pb-28 xl:px-31 xl:pt-22 xl:pb-30">
                <h2 className="font-heading font-bold text-[calc(27*var(--spacing))] leading-[1.2] text-[#03345e] xl:text-[calc(33.5*var(--spacing))] xl:leading-42">
                  <Link href={routes.causesDetails} className="transition-colors hover:text-orange">
                    {cause.title}
                  </Link>
                </h2>
                <span className={`mt-14 block h-3 w-52 transition-[width] duration-500 group-hover:w-90 xl:mt-17 xl:w-62 ${orange ? "bg-orange" : "bg-green"}`} />
                <p className="mt-16 font-alt text-[calc(16*var(--spacing))] leading-27 text-[#575b64] xl:mt-18 xl:text-[calc(20*var(--spacing))] xl:leading-32">{cause.description}</p>
                <Link
                  href={routes.causesDetails}
                  className={`group/btn mt-22 inline-flex h-50 w-fit items-center gap-16 rounded-[calc(4*var(--spacing))] px-24 font-alt text-[calc(17*var(--spacing))] font-semibold text-white transition-colors duration-300 xl:mt-22 xl:h-61 xl:w-226 xl:justify-center xl:gap-20 xl:px-0 xl:text-[calc(20*var(--spacing))] ${
                    orange ? "bg-orange hover:bg-[#d84000]" : "bg-green hover:bg-[#3f7f10]"
                  }`}
                >
                  {causes.readMore}
                  <Icon name="arrow-right" className="size-20 xl:size-24" strokeWidth={2} />
                </Link>
              </div>
            </li>
          );
        })}
      </Paginated>
    </section>
  );
}
