import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { formatDate } from "@/components/ui/text";
import type { BlogDetailProps, BlogDetailSection } from "@/types/templates.types";

// Rule and text sizes differ a little per section in the design, so each section passes its own desktop classes.
function SectionText({
  section,
  className = "",
  ruleClassName = "xl:mt-22 xl:w-78",
  textClassName = "xl:mt-34 xl:text-[1.6875rem] xl:leading-[2.65625rem]",
}: {
  section: BlogDetailSection;
  className?: string;
  ruleClassName?: string;
  textClassName?: string;
}) {
  return (
    <div data-reveal="up" className={`min-w-0 ${className}`}>
      <h2 className="font-heading font-bold text-[1.3125rem] leading-[1.22] text-[var(--color-blog-heading)] xs:text-[1.5rem] sm:text-[2.25rem] xl:text-[3.625rem] xl:leading-70 xl:whitespace-nowrap">
        {section.title} {section.titleBreak && <br className="hidden xl:block" />}<span className="text-secondary-dark">{section.titleHighlight}</span>
      </h2>
      <span className={`mt-14 block h-3 w-60 bg-primary xl:h-4 ${ruleClassName}`} />
      <p className={`mt-18 font-dm text-[1rem] leading-28 text-[var(--color-blog-detail-text)] ${textClassName}`}>{section.text}</p>
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

export const BlogDetail = ({ data: detail }: BlogDetailProps) => {
  if (!detail) return null;
  const [first, second, third] = detail.sections;

  return (
    <article className="bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-74 xl:pb-100 xl:pl-108">
      <header data-reveal="up" className="flex flex-col items-center text-center">
        <p className="inline-flex h-38 items-center gap-8 rounded-full bg-[var(--color-blog-detail-tag-bg)] px-16 font-dm text-[0.9375rem] font-medium text-[var(--color-blog-tag-text)] xl:h-53 xl:gap-12 xl:px-26 xl:text-[1.40625rem]">
          <Icon name="FaRegCalendarAlt" className="size-16 xl:size-24" />
          <time dateTime={detail.date}>{formatDate(detail.date, detail.months)}</time>
        </p>
        <h1 className="mt-16 font-heading font-bold text-[1.5rem] leading-[1.2] text-[var(--color-blog-heading)] xs:text-[1.75rem] sm:text-[2.84375rem] xl:mt-25 xl:text-[4.75rem] xl:leading-90">
          {detail.title} <span className="text-secondary-dark">{detail.titleHighlight}</span>
        </h1>
        <div className="mt-16 flex items-center gap-14 text-left xl:mt-20 xl:gap-25">
          <span className="relative size-64 shrink-0 overflow-hidden rounded-full xl:size-93">
            <Image src={detail.author.avatar} alt={detail.author.name} fill quality={90} sizes="96px" className="object-cover" />
          </span>
          <span>
            <span className="block font-dm text-[1rem] text-[var(--color-blog-detail-text)] xl:text-[1.5rem]">
              {detail.author.prefix} <span className="font-bold text-[var(--color-blog-heading)]">{detail.author.name}</span>
            </span>
            <span className="mt-2 block font-dm text-[0.8125rem] text-[var(--color-blog-detail-text)] xl:text-[1.25rem]">{detail.author.role}</span>
          </span>
        </div>
      </header>

      <p data-reveal="up" className="mt-32 font-dm text-[1.0625rem] leading-29 text-[var(--color-blog-detail-text)] xl:mt-38 xl:max-w-1440 xl:text-[1.84375rem] xl:leading-42">
        {detail.intro}
      </p>

      <div className="mt-36 flex flex-col gap-28 lg:flex-row lg:items-start xl:mt-88 xl:gap-50">
        <SectionImage section={first} className="aspect-[740/505] lg:w-[48%] xl:w-740 xl:shrink-0" />
        <SectionText section={first} className="flex-1 xl:pt-10" />
      </div>

      <figure data-reveal="up" className="mt-40 flex flex-col items-center gap-20 rounded-[0.625rem] bg-[var(--color-bg-blog-quote)] px-20 py-28 text-center sm:flex-row sm:text-left xl:mt-51 xl:-ml-13 xl:h-215 xl:gap-0 xl:px-0 xl:py-0 xl:pl-113">
        <span className="flex size-80 shrink-0 items-center justify-center rounded-full bg-secondary-dark text-[var(--color-white)] xl:size-125">
          <Icon name="FaQuoteLeft" className="size-34 xl:size-54" />
        </span>
        <span className="hidden h-140 w-2 bg-[var(--color-blog-quote-divider)] sm:mx-24 sm:block xl:mx-58" />
        <blockquote className="font-quote text-[1.1875rem] leading-[1.45] font-semibold text-secondary-dark italic xl:max-w-none xl:text-[2.1875rem] xl:leading-50 xl:whitespace-pre-line">{detail.quote}</blockquote>
      </figure>

      <div className="mt-40 flex flex-col-reverse gap-28 lg:flex-row lg:items-start xl:mt-62 xl:gap-0">
        <SectionText section={second} className="flex-1 xl:-mt-6 xl:w-708 xl:flex-none" ruleClassName="xl:mt-22 xl:w-88" textClassName="xl:mt-37 xl:text-[1.78125rem] xl:leading-[2.71875rem]" />
        <SectionImage section={second} className="aspect-[697/376] lg:w-[46%] xl:ml-87 xl:w-697 xl:shrink-0" />
      </div>

      <div className="mt-40 flex flex-col gap-28 lg:flex-row lg:items-start xl:mt-45 xl:gap-60">
        <SectionImage section={third} className="aspect-[717/395] lg:w-[46%] xl:w-717 xl:shrink-0" />
        <SectionText section={third} className="flex-1 xl:pt-11" ruleClassName="xl:mt-29 xl:w-81" textClassName="xl:mt-39 xl:text-[1.75rem] xl:leading-42" />
      </div>
    </article>
  );
};
