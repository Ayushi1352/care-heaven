import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { fillLabel, formatDate } from "@/components/ui/helpers";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";

/** "Stories of Change" — the first cards of the blog page, on the home page. */
export const BlogSection = ({ data: blog, ui }: { data?: BlogsData; ui?: GlobalUIData }) => {
  if (!blog) return null;
  const posts = blog.posts.slice(0, blog.homeCount);

  return (
    <section className="bg-[var(--color-white)] px-[1.25rem] pt-[2rem] pb-[4rem] sm:px-[2rem] md:pt-[2.5rem] md:pb-[5rem] xl:px-[4.25rem] xl:pt-[3.125rem] xl:pb-[6.25rem]">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-[0.875rem] font-sans text-[0.875rem] font-medium tracking-[0.1em] text-[var(--color-orange)] uppercase xl:gap-[1.0625rem] xl:text-[1.3125rem]">
          <span className="h-px w-[3.5rem] bg-[var(--color-orange)] xl:w-[4.75rem]" />
          {blog.label}
          <span className="h-px w-[3.5rem] bg-[var(--color-orange)] xl:w-[4.75rem]" />
        </p>
        <h2 className="mt-[0.625rem] font-heading font-bold text-[2.125rem] leading-[1.15] text-[var(--color-maroon)] sm:text-[2.84375rem] xl:mt-[0.375rem] xl:text-[4.4375rem] xl:leading-[5rem]">
          {blog.title} <span className="text-[var(--color-orange)]">{blog.titleHighlight}</span>
        </h2>
        <p className="mt-[0.5rem] font-dm text-[1rem] leading-[1.625rem] text-[var(--color-gray-5d5d63)] xl:mt-[0.25rem] xl:text-[1.375rem]">{blog.description}</p>
      </div>

      <ul data-reveal-stagger className="mt-[2.25rem] grid gap-[1.5rem] lg:grid-cols-2 xl:mt-[2.8125rem] xl:gap-[2.125rem]">
        {posts.map((post) => (
          <li key={post.id} className="group flex flex-col gap-[1.5rem] rounded-[1rem] bg-[var(--color-white)] p-[1rem] shadow-[0_6px_30px_var(--color-shadow-5e0629-7)] sm:flex-row sm:items-center xl:h-[23.625rem] xl:gap-[2.375rem] xl:rounded-[1.0625rem] xl:p-[1.125rem]">
            <Link href={blog.detailPageUrl} aria-label={fillLabel(ui?.readMoreAbout, { title: post.title })} className="relative block aspect-square shrink-0 overflow-hidden rounded-[0.75rem] sm:w-[44%] xl:w-[21.5rem] xl:rounded-[0.6875rem]">
              <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
            </Link>
            <div className="min-w-0 flex-1 pb-[0.5rem] sm:pb-0 xl:pr-[0.625rem]">
              <p className="inline-flex h-[2.125rem] items-center gap-[0.5rem] rounded-full bg-[var(--color-rose)] px-[0.875rem] font-dm text-[0.875rem] font-medium text-[var(--color-red-3a1a22)] xl:h-[2.5rem] xl:gap-[0.5625rem] xl:px-[1.125rem] xl:text-[length:max(0.9375rem,var(--text-min))]">
                <Icon name="FaRegCalendarAlt" className="size-[0.9375rem] text-[var(--color-orange)] xl:size-[1.0625rem]" />
                <time dateTime={post.date}>{formatDate(post.date, ui?.months)}</time>
              </p>
              <h3 className="mt-[0.875rem] font-heading font-bold text-[1.53125rem] leading-[1.22] text-[var(--color-maroon)] xl:mt-[1rem] xl:max-w-[20.625rem] xl:text-[2.09375rem] xl:leading-[2.5rem]">
                <Link href={blog.detailPageUrl} className="transition-colors hover:text-[var(--color-orange)]">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-[0.625rem] font-dm text-[0.9375rem] leading-[1.5rem] text-[var(--color-gray-66666b)] xl:mt-[0.875rem] xl:text-[1.21875rem] xl:leading-[1.6875rem]">{post.excerpt}</p>
              <Link href={blog.detailPageUrl} className="group/link mt-[1rem] inline-flex items-center gap-[0.875rem] font-dm text-[1rem] font-bold text-[var(--color-maroon)] xl:mt-[1.375rem] xl:gap-[1rem] xl:text-[1.1875rem]">
                {blog.readMore}
                <span className="flex size-[2.375rem] items-center justify-center rounded-full bg-[var(--color-rose)] text-[var(--color-orange)] transition-colors group-hover/link:bg-[var(--color-orange)] group-hover/link:text-[var(--color-white)] xl:size-[2.625rem]">
                  <Icon name="FaArrowRight" className="size-[1rem] xl:size-[1.125rem]" />
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
