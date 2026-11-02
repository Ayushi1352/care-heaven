import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { formatDate } from "@/components/ui/helpers";
import type { BlogDetailData, BlogDetailSection, GlobalUIData } from "@/types/templates.types";

// Rule and text sizes differ a little per section in the design, so each section passes its own desktop classes.
function SectionText({
  section,
  className = "",
  ruleClassName = "xl:mt-[1.375rem] xl:w-[4.875rem]",
  textClassName = "xl:mt-[2.125rem] xl:text-[1.6875rem] xl:leading-[2.65625rem]",
}: {
  section: BlogDetailSection;
  className?: string;
  ruleClassName?: string;
  textClassName?: string;
}) {
  return (
    <div data-reveal="up" className={`min-w-0 ${className}`}>
      <h2 className="font-heading font-bold text-[1.78125rem] leading-[1.18] text-[var(--color-blue-03162a)] sm:text-[2.25rem] xl:text-[3.625rem] xl:leading-[4.375rem] xl:whitespace-nowrap">
        {section.title} {section.titleBreak && <br className="hidden xl:block" />}<span className="text-[var(--color-green-dark)]">{section.titleHighlight}</span>
      </h2>
      <span className={`mt-[0.875rem] block h-[0.1875rem] w-[3.75rem] bg-[var(--color-orange)] xl:h-[0.25rem] ${ruleClassName}`} />
      <p className={`mt-[1.125rem] font-dm text-[1rem] leading-[1.75rem] text-[var(--color-gray-6a6a70)] ${textClassName}`}>{section.text}</p>
    </div>
  );
}

function SectionImage({ section, className = "" }: { section: BlogDetailSection; className?: string }) {
  return (
    <div data-reveal="zoom" className={`relative overflow-hidden rounded-[0.625rem] shadow-[0_10px_30px_var(--color-black-8)] ${className}`}>
      <Image src={section.image.src} alt={section.image.alt} fill quality={90} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-105" />
    </div>
  );
}

export const BlogArticle = ({ data: detail, ui }: { data?: BlogDetailData; ui?: GlobalUIData }) => {
  if (!detail) return null;
  const [first, second, third] = detail.sections;

  return (
    <article className="bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[4.625rem] xl:pb-[6.25rem] xl:pl-[6.75rem]">
      <header data-reveal="up" className="flex flex-col items-center text-center">
        <p className="inline-flex h-[2.375rem] items-center gap-[0.5rem] rounded-full bg-[var(--color-green-e9f2e2)] px-[1rem] font-dm text-[0.9375rem] font-medium text-[var(--color-green-24571a)] xl:h-[3.3125rem] xl:gap-[0.75rem] xl:px-[1.625rem] xl:text-[1.40625rem]">
          <Icon name="FaRegCalendarAlt" className="size-[1rem] xl:size-[1.5rem]" />
          <time dateTime={detail.date}>{formatDate(detail.date, ui?.months)}</time>
        </p>
        <h1 className="mt-[1rem] font-heading font-bold text-[2.03125rem] leading-[1.15] text-[var(--color-blue-03162a)] sm:text-[2.84375rem] xl:mt-[1.5625rem] xl:text-[4.75rem] xl:leading-[5.625rem]">
          {detail.title} <span className="text-[var(--color-green-dark)]">{detail.titleHighlight}</span>
        </h1>
        <div className="mt-[1rem] flex items-center gap-[0.875rem] text-left xl:mt-[1.25rem] xl:gap-[1.5625rem]">
          <span className="relative size-[4rem] shrink-0 overflow-hidden rounded-full xl:size-[5.8125rem]">
            <Image src={detail.author.avatar} alt={detail.author.name} fill quality={90} sizes="96px" className="object-cover" />
          </span>
          <span>
            <span className="block font-dm text-[1rem] text-[var(--color-gray-6a6a70)] xl:text-[1.5rem]">
              {detail.author.prefix} <span className="font-bold text-[var(--color-blue-03162a)]">{detail.author.name}</span>
            </span>
            <span className="mt-[0.125rem] block font-dm text-[0.8125rem] text-[var(--color-gray-6a6a70)] xl:text-[1.25rem]">{detail.author.role}</span>
          </span>
        </div>
      </header>

      <p data-reveal="up" className="mt-[2rem] font-dm text-[1.0625rem] leading-[1.8125rem] text-[var(--color-gray-6a6a70)] xl:mt-[2.375rem] xl:max-w-[90rem] xl:text-[1.84375rem] xl:leading-[2.625rem]">
        {detail.intro}
      </p>

      <div className="mt-[2.25rem] flex flex-col gap-[1.75rem] lg:flex-row lg:items-start xl:mt-[5.5rem] xl:gap-[3.125rem]">
        <SectionImage section={first} className="aspect-[740/505] lg:w-[48%] xl:w-[46.25rem] xl:shrink-0" />
        <SectionText section={first} className="flex-1 xl:pt-[0.625rem]" />
      </div>

      <figure data-reveal="up" className="mt-[2.5rem] flex flex-col items-center gap-[1.25rem] rounded-[0.625rem] bg-[var(--color-mint)] px-[1.25rem] py-[1.75rem] text-center sm:flex-row sm:text-left xl:mt-[3.1875rem] xl:-ml-[0.8125rem] xl:h-[13.4375rem] xl:gap-0 xl:px-0 xl:py-0 xl:pl-[7.0625rem]">
        <span className="flex size-[5rem] shrink-0 items-center justify-center rounded-full bg-[var(--color-green-dark)] text-[var(--color-white)] xl:size-[7.8125rem]">
          <Icon name="FaQuoteLeft" className="size-[2.125rem] xl:size-[3.375rem]" />
        </span>
        <span className="hidden h-[8.75rem] w-[0.125rem] bg-[var(--color-green-d6dccd)] sm:mx-[1.5rem] sm:block xl:mx-[3.625rem]" />
        <blockquote className="font-quote text-[1.1875rem] leading-[1.45] font-semibold text-[var(--color-green-dark)] italic xl:max-w-none xl:text-[2.1875rem] xl:leading-[3.125rem] xl:whitespace-pre-line">{detail.quote}</blockquote>
      </figure>

      <div className="mt-[2.5rem] flex flex-col-reverse gap-[1.75rem] lg:flex-row lg:items-start xl:mt-[3.875rem] xl:gap-0">
        <SectionText section={second} className="flex-1 xl:-mt-[0.375rem] xl:w-[44.25rem] xl:flex-none" ruleClassName="xl:mt-[1.375rem] xl:w-[5.5rem]" textClassName="xl:mt-[2.3125rem] xl:text-[1.78125rem] xl:leading-[2.71875rem]" />
        <SectionImage section={second} className="aspect-[697/376] lg:w-[46%] xl:ml-[5.4375rem] xl:w-[43.5625rem] xl:shrink-0" />
      </div>

      <div className="mt-[2.5rem] flex flex-col gap-[1.75rem] lg:flex-row lg:items-start xl:mt-[2.8125rem] xl:gap-[3.75rem]">
        <SectionImage section={third} className="aspect-[717/395] lg:w-[46%] xl:w-[44.8125rem] xl:shrink-0" />
        <SectionText section={third} className="flex-1 xl:pt-[0.6875rem]" ruleClassName="xl:mt-[1.8125rem] xl:w-[5.0625rem]" textClassName="xl:mt-[2.4375rem] xl:text-[1.75rem] xl:leading-[2.625rem]" />
      </div>
    </article>
  );
};
