import Image from "next/image";
import { Paginated } from "@/components/ui/Pagination";
import { HeartLine, LeafSpray, Sparks } from "@/components/ui/Decor";
import { accentAt } from "@/components/ui/text";
import type { GlobalUIData, TeamData } from "@/types/templates.types";

export const TeamGrid = ({ data: team, ui }: { data?: TeamData; ui?: GlobalUIData }) => {
  if (!team) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-110 xl:pt-100 xl:pb-100">
      <LeafSpray className="pointer-events-none absolute top-30 left-0 w-120 opacity-90 sm:w-160 xl:top-44 xl:w-240" />
      <HeartLine className="pointer-events-none absolute top-40 right-0 hidden w-200 text-[var(--color-team-decor)] md:block xl:top-48 xl:w-330" />

      <div data-reveal="up" className="relative text-center">
        <p className="flex items-center justify-center gap-14 font-main text-[1.25rem] text-primary xl:gap-18 xl:text-[1.875rem] xl:leading-36">
          <span className="h-2 w-44 bg-primary xl:w-59" />
          {team.label}
        </p>
        <h2 className="mt-8 font-heading font-bold text-[1.5rem] leading-[1.2] text-[var(--color-heading)] xs:text-[1.75rem] sm:text-[3.09375rem] xl:mt-10 xl:text-[5.09375rem] xl:leading-95">
          {team.title} <span className="text-primary">{team.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-12 max-w-640 font-main text-[1rem] leading-27 text-[var(--color-text)] xl:mt-18 xl:max-w-900 xl:text-[1.53125rem] xl:leading-41 xl:text-[var(--color-team-description)]">{team.description}</p>
      </div>

      <div className="relative mt-40 xl:mt-58">
        <Sparks className="pointer-events-none absolute -top-60 right-0 hidden w-50 text-primary xl:-top-66 xl:-right-58 xl:block xl:w-78" />
        <Paginated ui={ui} rows={team.rowsPerPage} columns={3} className="grid gap-24 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-32 xl:gap-y-38">
          {team.members.map((member, i) => (
            <li key={member.id} className="group overflow-hidden rounded-[0.5rem] bg-[var(--color-bg-team-card)] shadow-[0_10px_30px_var(--color-shadow-team-card)] xl:rounded-[0.4375rem]">
              <div className={`relative aspect-[467/465] overflow-hidden ${i < 3 ? "" : i < 6 ? "xl:aspect-[467/453]" : "xl:aspect-[467/421]"}`}>
                <Image src={member.image} alt={member.name} fill quality={90} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
              </div>
              <div className="flex flex-col items-center px-16 pt-20 pb-22 text-center xl:h-150 xl:px-20 xl:pt-24 xl:pb-0">
                <h3 className="font-dm text-[1.3125rem] font-bold text-accent-dark xl:text-[1.78125rem] xl:leading-30">{member.name}</h3>
                <span className={`mt-12 block h-4 w-52 rounded-full transition-[width] duration-500 group-hover:w-90 xl:mt-18 xl:w-60 ${accentAt(i) === "orange" ? "bg-primary" : "bg-secondary"}`} />
                <p className="mt-12 font-dm text-[1rem] text-[var(--color-team-role)] xl:mt-16 xl:text-[1.5625rem] xl:leading-28">{member.role}</p>
              </div>
            </li>
          ))}
        </Paginated>
      </div>
    </section>
  );
};
