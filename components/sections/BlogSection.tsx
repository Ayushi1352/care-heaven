import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { fill, formatDate } from '@/components/ui/text';
import type { BlogSectionProps } from '@/types/templates.types';

/** "Stories of Change" — the first cards of the blog page, on the home page. */
export const BlogSection = ({ data: blog }: BlogSectionProps) => {
  if (!blog) return null;
  const posts = blog.posts.slice(0, blog.homeCount);

  return (
    <section className="bg-[var(--color-white)] px-20 pt-32 pb-64 sm:px-32 md:pt-40 md:pb-80 xl:px-68 xl:pt-50 xl:pb-100">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-14 font-main text-[0.875rem] font-medium tracking-[0.1em] text-primary uppercase xl:gap-17 xl:text-[1.3125rem]">
          <span className="h-px w-56 bg-primary xl:w-76" />
          {blog.label}
          <span className="h-px w-56 bg-primary xl:w-76" />
        </p>
        <h2 className="mt-10 font-heading font-bold text-[2.125rem] leading-[1.15] text-tertiary-dark sm:text-[2.84375rem] xl:mt-6 xl:text-[4.4375rem] xl:leading-80">
          {blog.title} <span className="text-primary">{blog.titleHighlight}</span>
        </h2>
        <p className="mt-8 font-dm text-[1rem] leading-26 text-[var(--color-text-subtitle)] xl:mt-4 xl:text-[1.375rem]">{blog.description}</p>
      </div>

      <ul data-reveal-stagger className="mt-36 grid gap-24 lg:grid-cols-2 xl:mt-45 xl:gap-34">
        {posts.map((post) => (
          <li key={post.id} className="group flex flex-col gap-24 rounded-[1rem] bg-[var(--color-white)] p-16 shadow-[0_6px_30px_var(--color-shadow-blog-home-card)] sm:flex-row sm:items-center xl:h-378 xl:gap-38 xl:rounded-[1.0625rem] xl:p-18">
            <Link href={blog.detailPageUrl} aria-label={fill(blog.readMoreLabel, { title: post.title })} className="relative block aspect-square shrink-0 overflow-hidden rounded-[0.75rem] sm:w-[44%] xl:w-344 xl:rounded-[0.6875rem]">
              <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
            </Link>
            <div className="min-w-0 flex-1 pb-8 sm:pb-0 xl:pr-10">
              <p className="inline-flex h-34 items-center gap-8 rounded-full bg-[var(--color-bg-subtle)] px-14 font-dm text-[0.875rem] font-medium text-[var(--color-blog-home-tag-text)] xl:h-40 xl:gap-9 xl:px-18 xl:text-[length:max(0.9375rem,var(--text-min))]">
                <Icon name="FaRegCalendarAlt" className="size-15 text-primary xl:size-17" />
                <time dateTime={post.date}>{formatDate(post.date, blog.months)}</time>
              </p>
              <h3 className="mt-14 font-heading font-bold text-[1.25rem] leading-[1.25] text-tertiary-dark xs:text-[1.375rem] sm:text-[1.53125rem] xl:mt-16 xl:max-w-330 xl:text-[2.09375rem] xl:leading-40">
                <Link href={blog.detailPageUrl} className="line-clamp-2 transition-colors hover:text-primary">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-10 font-dm text-[0.9375rem] leading-24 text-[var(--color-blog-card-text)] xl:mt-14 xl:text-[1.21875rem] xl:leading-27">{post.excerpt}</p>
              <Link href={blog.detailPageUrl} className="group/link mt-16 inline-flex items-center gap-14 font-dm text-[1rem] font-bold text-tertiary-dark xl:mt-22 xl:gap-16 xl:text-[1.1875rem]">
                {blog.readMore}
                <span className="flex size-38 items-center justify-center rounded-full bg-[var(--color-bg-subtle)] text-primary transition-colors group-hover/link:bg-primary group-hover/link:text-[var(--color-white)] xl:size-42">
                  <Icon name="FaArrowRight" className="size-16 xl:size-18" />
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
