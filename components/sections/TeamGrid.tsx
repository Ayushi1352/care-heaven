import Image from "next/image";
import { Paginated } from "@/components/ui/Pagination";
import { HeartLine, LeafSpray, Sparks } from "@/components/ui/Decor";
import { accentAt } from "@/components/ui/helpers";
import type { GlobalUIData, TeamData } from "@/types/templates.types";

export const TeamGrid = ({ data: team, ui }: { data?: TeamData; ui?: GlobalUIData }) => {
  if (!team) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:px-[6.875rem] xl:pt-[6.25rem] xl:pb-[6.25rem]">
      <LeafSpray className="pointer-events-none absolute top-[1.875rem] left-0 w-[7.5rem] opacity-90 sm:w-[10rem] xl:top-[2.75rem] xl:w-[15rem]" />
      <HeartLine className="pointer-events-none absolute top-[2.5rem] right-0 hidden w-[12.5rem] text-[var(--color-team-decor)] md:block xl:top-[3rem] xl:w-[20.625rem]" />

      <div data-reveal="up" className="relative text-center">
        <p className="flex items-center justify-center gap-[0.875rem] font-sans text-[1.25rem] text-[var(--color-primary)] xl:gap-[1.125rem] xl:text-[1.875rem] xl:leading-[2.25rem]">
          <span className="h-[0.125rem] w-[2.75rem] bg-[var(--color-primary)] xl:w-[3.6875rem]" />
          {team.label}
        </p>
        <h2 className="mt-[0.5rem] font-heading font-bold text-[2.125rem] leading-[1.12] text-[var(--color-heading)] sm:text-[3.09375rem] xl:mt-[0.625rem] xl:text-[5.09375rem] xl:leading-[5.9375rem]">
          {team.title} <span className="text-[var(--color-primary)]">{team.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-[0.75rem] max-w-[40rem] font-sans text-[1rem] leading-[1.6875rem] text-[var(--color-text)] xl:mt-[1.125rem] xl:max-w-[56.25rem] xl:text-[1.53125rem] xl:leading-[2.5625rem] xl:text-[var(--color-team-description)]">{team.description}</p>
      </div>

      <div className="relative mt-[2.5rem] xl:mt-[3.625rem]">
        <Sparks className="pointer-events-none absolute -top-[3.75rem] right-0 hidden w-[3.125rem] text-[var(--color-primary)] xl:-top-[4.125rem] xl:-right-[3.625rem] xl:block xl:w-[4.875rem]" />
        <Paginated ui={ui} rows={team.rowsPerPage} columns={3} className="grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[2rem] xl:gap-y-[2.375rem]">
          {team.members.map((member, i) => (
            <li key={member.id} className="group overflow-hidden rounded-[0.5rem] bg-[var(--color-bg-team-card)] shadow-[0_10px_30px_var(--color-shadow-team-card)] xl:rounded-[0.4375rem]">
              <div className={`relative aspect-[467/465] overflow-hidden ${i < 3 ? "" : i < 6 ? "xl:aspect-[467/453]" : "xl:aspect-[467/421]"}`}>
                <Image src={member.image} alt={member.name} fill quality={90} sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
              </div>
              <div className="flex flex-col items-center px-[1rem] pt-[1.25rem] pb-[1.375rem] text-center xl:h-[9.375rem] xl:px-[1.25rem] xl:pt-[1.5rem] xl:pb-0">
                <h3 className="font-dm text-[1.3125rem] font-bold text-[var(--color-accent-dark)] xl:text-[1.78125rem] xl:leading-[1.875rem]">{member.name}</h3>
                <span className={`mt-[0.75rem] block h-[0.25rem] w-[3.25rem] rounded-full transition-[width] duration-500 group-hover:w-[5.625rem] xl:mt-[1.125rem] xl:w-[3.75rem] ${accentAt(i) === "orange" ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"}`} />
                <p className="mt-[0.75rem] font-dm text-[1rem] text-[var(--color-team-role)] xl:mt-[1rem] xl:text-[1.5625rem] xl:leading-[1.75rem]">{member.role}</p>
              </div>
            </li>
          ))}
        </Paginated>
      </div>
    </section>
  );
};
