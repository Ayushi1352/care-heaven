import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { fillLabel, formatDate } from "@/components/ui/helpers";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";

export const BlogGrid = ({ data: blog, ui }: { data?: BlogsData; ui?: GlobalUIData }) => {
  if (!blog) return null;
  const { posts } = blog;

  return (
    <section className="bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pr-[3.125rem] xl:pb-[6.25rem] xl:pl-[3.5625rem]">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-[0.875rem] font-dm text-[0.9375rem] font-semibold tracking-[0.15em] text-[var(--color-primary)] uppercase xl:gap-[1.0625rem] xl:text-[1.3125rem]">
          <span className="h-[0.125rem] w-[3.5rem] bg-[var(--color-primary)] xl:w-[5.1875rem]" />
          {blog.label}
          <span className="h-[0.125rem] w-[3.5rem] bg-[var(--color-primary)] xl:w-[5.1875rem]" />
        </p>
        <h2 className="mt-[0.5rem] font-heading font-bold text-[2.125rem] leading-[1.15] text-[var(--color-blog-heading)] sm:text-[2.84375rem] xl:mt-[0.5rem] xl:text-[4.5rem] xl:leading-[5rem]">
          {blog.title} <span className="text-[var(--color-secondary-dark)]">{blog.titleHighlight}</span>
        </h2>
        <p className="mt-[0.5rem] font-dm text-[1rem] leading-[1.625rem] text-[var(--color-text-subtitle)] xl:mt-[0.25rem] xl:text-[1.375rem]">{blog.description}</p>
      </div>

      <div className="mt-[2.25rem] xl:mt-[3.875rem]">
        <Paginated
          ui={ui}
          rows={blog.rowsPerPage}
          columns={2}
          variant="round"
          navClassName="mt-[2.5rem] xl:mt-[3.5rem]"
          className="grid gap-[1.5rem] lg:grid-cols-2 xl:gap-x-[1.875rem] xl:gap-y-[2.8125rem]"
        >
          {posts.map((post) => (
            <li key={post.id} className="group flex flex-col gap-[1.375rem] rounded-[1rem] bg-[var(--color-white)] p-[1rem] shadow-[0_6px_30px_var(--color-shadow-blog-card)] sm:flex-row sm:items-center xl:h-[24.25rem] xl:gap-[2.75rem] xl:rounded-[1.0625rem] xl:p-[1.1875rem]">
              <Link
                href={blog.detailPageUrl}
                aria-label={fillLabel(ui?.readMoreAbout, { title: post.title })}
                className="relative block aspect-square shrink-0 overflow-hidden rounded-[0.75rem] sm:w-[44%] xl:w-[22.0625rem] xl:rounded-[0.625rem]"
              >
                <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              </Link>
              <div className="min-w-0 flex-1 pb-[0.5rem] sm:pb-0 xl:pr-[1rem]">
                <p className="inline-flex h-[2.125rem] items-center gap-[0.5rem] rounded-full bg-[var(--color-blog-tag-bg)] px-[0.875rem] font-dm text-[0.875rem] font-medium text-[var(--color-blog-tag-text)] xl:h-[2.5rem] xl:gap-[0.5625rem] xl:px-[1.0625rem] xl:text-[length:max(1.125rem,var(--text-min))]">
                  <Icon name="FaRegCalendarAlt" className="size-[0.9375rem] xl:size-[1.125rem]" />
                  <time dateTime={post.date}>{formatDate(post.date, ui?.months)}</time>
                </p>
                <h2 className="mt-[0.875rem] font-heading font-bold text-[1.25rem] leading-[1.25] text-[var(--color-blog-heading)] xs:text-[1.375rem] sm:text-[1.53125rem] xl:mt-[1rem] xl:max-w-[20.625rem] xl:text-[2.09375rem] xl:leading-[2.5rem]">
                  <Link href={blog.detailPageUrl} className="line-clamp-2 transition-colors hover:text-[var(--color-secondary-dark)]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-[0.625rem] font-dm text-[0.9375rem] leading-[1.5rem] text-[var(--color-blog-card-text)] xl:mt-[0.875rem] xl:text-[1.21875rem] xl:leading-[1.6875rem]">{post.excerpt}</p>
                <Link href={blog.detailPageUrl} className="group/link mt-[1rem] inline-flex items-center gap-[0.875rem] font-dm text-[1rem] font-bold text-[var(--color-secondary-dark)] xl:mt-[1.5rem] xl:gap-[1.25rem] xl:text-[1.375rem]">
                  {blog.readMore}
                  <span className="flex size-[2.5rem] items-center justify-center rounded-full bg-[var(--color-blog-tag-bg)] transition-colors group-hover/link:bg-[var(--color-blog-arrow-hover)] group-hover/link:text-[var(--color-white)] xl:size-[3.375rem]">
                    <Icon name="FaArrowRight" className="size-[1.0625rem] xl:size-[1.375rem]" />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </Paginated>
      </div>
    </section>
  );
};
