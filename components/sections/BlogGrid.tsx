import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { fill, formatDate } from "@/components/ui/text";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";

export const BlogGrid = ({ data: blog, ui }: { data?: BlogsData; ui?: GlobalUIData }) => {
  if (!blog) return null;
  const { posts } = blog;

  return (
    <section className="bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-50 xl:pb-100 xl:pl-57">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-14 font-dm text-[0.9375rem] font-semibold tracking-[0.15em] text-primary uppercase xl:gap-17 xl:text-[1.3125rem]">
          <span className="h-2 w-56 bg-primary xl:w-83" />
          {blog.label}
          <span className="h-2 w-56 bg-primary xl:w-83" />
        </p>
        <h2 className="mt-8 font-heading font-bold text-[2.125rem] leading-[1.15] text-[var(--color-blog-heading)] sm:text-[2.84375rem] xl:mt-8 xl:text-[4.5rem] xl:leading-80">
          {blog.title} <span className="text-secondary-dark">{blog.titleHighlight}</span>
        </h2>
        <p className="mt-8 font-dm text-[1rem] leading-26 text-[var(--color-text-subtitle)] xl:mt-4 xl:text-[1.375rem]">{blog.description}</p>
      </div>

      <div className="mt-36 xl:mt-62">
        <Paginated
          ui={ui}
          rows={blog.rowsPerPage}
          columns={2}
          variant="round"
          navClassName="mt-40 xl:mt-56"
          className="grid gap-24 lg:grid-cols-2 xl:gap-x-30 xl:gap-y-45"
        >
          {posts.map((post) => (
            <li key={post.id} className="group flex flex-col gap-22 rounded-[1rem] bg-[var(--color-white)] p-16 shadow-[0_6px_30px_var(--color-shadow-blog-card)] sm:flex-row sm:items-center xl:h-388 xl:gap-44 xl:rounded-[1.0625rem] xl:p-19">
              <Link
                href={blog.detailPageUrl}
                aria-label={fill(ui?.readMoreAbout, { title: post.title })}
                className="relative block aspect-square shrink-0 overflow-hidden rounded-[0.75rem] sm:w-[44%] xl:w-353 xl:rounded-[0.625rem]"
              >
                <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              </Link>
              <div className="min-w-0 flex-1 pb-8 sm:pb-0 xl:pr-16">
                <p className="inline-flex h-34 items-center gap-8 rounded-full bg-[var(--color-blog-tag-bg)] px-14 font-dm text-[0.875rem] font-medium text-[var(--color-blog-tag-text)] xl:h-40 xl:gap-9 xl:px-17 xl:text-[length:max(1.125rem,var(--text-min))]">
                  <Icon name="FaRegCalendarAlt" className="size-15 xl:size-18" />
                  <time dateTime={post.date}>{formatDate(post.date, ui?.months)}</time>
                </p>
                <h2 className="mt-14 font-heading font-bold text-[1.25rem] leading-[1.25] text-[var(--color-blog-heading)] xs:text-[1.375rem] sm:text-[1.53125rem] xl:mt-16 xl:max-w-330 xl:text-[2.09375rem] xl:leading-40">
                  <Link href={blog.detailPageUrl} className="line-clamp-2 transition-colors hover:text-secondary-dark">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-10 font-dm text-[0.9375rem] leading-24 text-[var(--color-blog-card-text)] xl:mt-14 xl:text-[1.21875rem] xl:leading-27">{post.excerpt}</p>
                <Link href={blog.detailPageUrl} className="group/link mt-16 inline-flex items-center gap-14 font-dm text-[1rem] font-bold text-secondary-dark xl:mt-24 xl:gap-20 xl:text-[1.375rem]">
                  {blog.readMore}
                  <span className="flex size-40 items-center justify-center rounded-full bg-[var(--color-blog-tag-bg)] transition-colors group-hover/link:bg-[var(--color-blog-arrow-hover)] group-hover/link:text-[var(--color-white)] xl:size-54">
                    <Icon name="FaArrowRight" className="size-17 xl:size-22" />
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
