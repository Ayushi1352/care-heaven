import Image from "next/image";
import Icon from "@/components/Icon";
import { formatDate, site } from "@/data";

const { detail } = site.blog;
const [first, second, third] = detail.sections;

type Section = (typeof detail.sections)[number];

function SectionText({ section, className = "" }: { section: Section; className?: string }) {
  return (
    <div data-reveal="up" className={`min-w-0 ${className}`}>
      <h2 className="font-heading font-bold text-[calc(28.5*var(--spacing))] leading-[1.18] text-[#03162a] sm:text-[calc(36*var(--spacing))] xl:text-[calc(58*var(--spacing))] xl:leading-70 xl:whitespace-nowrap">
        {section.title} {"titleBreak" in section && section.titleBreak && <br className="hidden xl:block" />}<span className="text-green-dark">{section.titleHighlight}</span>
      </h2>
      <span className="mt-14 block h-3 w-60 bg-orange xl:mt-22 xl:h-4 xl:w-78" />
      <p className="mt-18 font-dm text-[calc(16*var(--spacing))] leading-28 text-[#6a6a70] xl:mt-34 xl:text-[calc(27*var(--spacing))] xl:leading-42.5">{section.text}</p>
    </div>
  );
}

function SectionImage({ section, className = "" }: { section: Section; className?: string }) {
  return (
    <div data-reveal="zoom" className={`relative overflow-hidden rounded-[calc(10*var(--spacing))] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${className}`}>
      <Image src={section.image.src} alt={section.image.alt} fill quality={90} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-[1.2s] hover:scale-105" />
    </div>
  );
}

export default function BlogArticle() {
  return (
    <article className="bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-74 xl:pb-100 xl:pl-108">
      <header data-reveal="up" className="flex flex-col items-center text-center">
        <p className="inline-flex h-38 items-center gap-8 rounded-full bg-[#e9f2e2] px-16 font-dm text-[calc(15*var(--spacing))] font-medium text-[#24571a] xl:h-53 xl:gap-12 xl:px-26 xl:text-[calc(22.5*var(--spacing))]">
          <Icon name="calendar" className="size-16 xl:size-24" strokeWidth={1.8} />
          <time dateTime={detail.date}>{formatDate(detail.date)}</time>
        </p>
        <h1 className="mt-16 font-heading font-bold text-[calc(32.5*var(--spacing))] leading-[1.15] text-[#03162a] sm:text-[calc(45.5*var(--spacing))] xl:mt-25 xl:text-[calc(76*var(--spacing))] xl:leading-90">
          {detail.title} <span className="text-green-dark">{detail.titleHighlight}</span>
        </h1>
        <div className="mt-16 flex items-center gap-14 text-left xl:mt-20 xl:gap-25">
          <span className="relative size-64 shrink-0 overflow-hidden rounded-full xl:size-93">
            <Image src={detail.author.avatar} alt={detail.author.name} fill quality={90} sizes="96px" className="object-cover" />
          </span>
          <span>
            <span className="block font-dm text-[calc(16*var(--spacing))] text-[#6a6a70] xl:text-[calc(24*var(--spacing))]">
              {detail.author.prefix} <span className="font-bold text-[#03162a]">{detail.author.name}</span>
            </span>
            <span className="mt-2 block font-dm text-[calc(13*var(--spacing))] text-[#6a6a70] xl:text-[calc(20*var(--spacing))]">{detail.author.role}</span>
          </span>
        </div>
      </header>

      <p data-reveal="up" className="mt-32 font-dm text-[calc(17*var(--spacing))] leading-29 text-[#6a6a70] xl:mt-38 xl:max-w-1440 xl:text-[calc(29.5*var(--spacing))] xl:leading-42">
        {detail.intro}
      </p>

      <div className="mt-36 flex flex-col gap-28 lg:flex-row lg:items-start xl:mt-88 xl:gap-50">
        <SectionImage section={first} className="aspect-[740/505] lg:w-[48%] xl:w-740 xl:shrink-0" />
        <SectionText section={first} className="flex-1 xl:pt-10" />
      </div>

      <figure data-reveal="up" className="mt-40 flex flex-col items-center gap-20 rounded-[calc(10*var(--spacing))] bg-mint px-20 py-28 text-center sm:flex-row sm:text-left xl:mt-51 xl:-ml-13 xl:h-215 xl:gap-0 xl:px-0 xl:py-0 xl:pl-113">
        <span className="flex size-80 shrink-0 items-center justify-center rounded-full bg-green-dark text-white xl:size-125">
          <Icon name="quote" className="size-34 xl:size-54" />
        </span>
        <span className="hidden h-140 w-2 bg-[#d6dccd] sm:mx-24 sm:block xl:mx-58" />
        <blockquote className="font-quote text-[calc(19*var(--spacing))] leading-[1.45] font-semibold text-green-dark italic xl:max-w-none xl:text-[calc(35*var(--spacing))] xl:leading-50 xl:whitespace-pre-line">{detail.quote}</blockquote>
      </figure>

      <div className="mt-40 flex flex-col-reverse gap-28 lg:flex-row lg:items-start xl:mt-62 xl:gap-0">
        <SectionText section={second} className="flex-1 xl:w-708 xl:flex-none xl:pt-6" />
        <SectionImage section={second} className="aspect-[697/376] lg:w-[46%] xl:ml-87 xl:w-697 xl:shrink-0" />
      </div>

      <div className="mt-40 flex flex-col gap-28 lg:flex-row lg:items-start xl:mt-45 xl:gap-60">
        <SectionImage section={third} className="aspect-[717/395] lg:w-[46%] xl:w-717 xl:shrink-0" />
        <SectionText section={third} className="flex-1 xl:pt-28" />
      </div>
    </article>
  );
}
