import Image from "next/image";
import Paginated from "@/components/Pagination";
import { HeartLine, LeafSpray, Sparks } from "@/components/Decor";
import { accentAt, site } from "@/data";

const { team } = site;

export default function TeamGrid() {
  return (
    <section className="relative overflow-hidden bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-110 xl:pt-100 xl:pb-100">
      <LeafSpray className="pointer-events-none absolute top-30 left-0 w-120 opacity-90 sm:w-160 xl:top-44 xl:w-240" />
      <HeartLine className="pointer-events-none absolute top-40 right-0 hidden w-200 text-[#fde3d6] md:block xl:top-48 xl:w-330" />

      <div data-reveal="up" className="relative text-center">
        <p className="flex items-center justify-center gap-14 font-body text-[calc(20*var(--spacing))] text-orange xl:gap-18 xl:text-[calc(30*var(--spacing))] xl:leading-36">
          <span className="h-2 w-44 bg-orange xl:w-59" />
          {team.label}
        </p>
        <h2 className="mt-8 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.12] text-navy-deep sm:text-[calc(49.5*var(--spacing))] xl:mt-10 xl:text-[calc(81.5*var(--spacing))] xl:leading-95">
          {team.title} <span className="text-orange">{team.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-12 max-w-640 font-body text-[calc(16*var(--spacing))] leading-27 text-gray xl:mt-18 xl:max-w-900 xl:text-[calc(24.5*var(--spacing))] xl:leading-41 xl:text-[#6c6c70]">{team.description}</p>
      </div>

      <div className="relative mt-40 xl:mt-58">
        <Sparks className="pointer-events-none absolute -top-60 right-0 hidden w-50 text-orange xl:-top-66 xl:-right-58 xl:block xl:w-78" />
        <Paginated perPage={team.perPage} className="grid gap-24 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-32 xl:gap-y-38">
          {team.members.map((member, i) => (
            <li key={member.name} className="group overflow-hidden rounded-[calc(8*var(--spacing))] bg-cream shadow-[0_10px_30px_rgba(4,33,74,0.09)] xl:rounded-[calc(7*var(--spacing))]">
              <div className={`relative aspect-[467/465] overflow-hidden ${i < 3 ? "" : i < 6 ? "xl:aspect-[467/453]" : "xl:aspect-[467/421]"}`}>
                <Image src={member.image} alt={member.name} fill quality={90} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-106" />
              </div>
              <div className="flex flex-col items-center px-16 pt-20 pb-22 text-center xl:h-150 xl:px-20 xl:pt-24 xl:pb-0">
                <h3 className="font-dm text-[calc(21*var(--spacing))] font-bold text-navy-ink xl:text-[calc(28.5*var(--spacing))] xl:leading-30">{member.name}</h3>
                <span className={`mt-12 block h-4 w-52 rounded-full transition-[width] duration-500 group-hover:w-90 xl:mt-18 xl:w-60 ${accentAt(i) === "orange" ? "bg-orange" : "bg-green"}`} />
                <p className="mt-12 font-dm text-[calc(16*var(--spacing))] text-[#6d6d70] xl:mt-16 xl:text-[calc(25*var(--spacing))] xl:leading-28">{member.role}</p>
              </div>
            </li>
          ))}
        </Paginated>
      </div>
    </section>
  );
}
