import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { fill } from '@/components/ui/text';
import type { BlogCardProps } from '@/types/templates.types';

// The home card and the slightly larger, differently coloured card of the Our Blog page.
const styles = {
  home: {
    card: 'group flex flex-col gap-24 rounded-[1rem] bg-[var(--color-white)] p-16 shadow-[0_6px_30px_var(--color-shadow-blog-home-card)] sm:flex-row sm:items-center xl:h-378 xl:gap-38 xl:rounded-[1.0625rem] xl:p-18',
    image: 'relative block aspect-square shrink-0 overflow-hidden rounded-[0.75rem] sm:w-[44%] xl:w-344 xl:rounded-[0.6875rem]',
    body: 'min-w-0 flex-1 pb-8 sm:pb-0 xl:pr-10',
    date: 'inline-flex h-34 items-center gap-8 rounded-full bg-[var(--color-bg-subtle)] px-14 font-dm text-[0.875rem] font-medium text-[var(--color-blog-home-tag-text)] xl:h-40 xl:gap-9 xl:px-18 xl:text-[length:max(0.9375rem,var(--text-min))]',
    dateIcon: 'size-15 text-primary xl:size-17',
    title: 'mt-14 font-heading font-bold text-[1.25rem] leading-[1.25] text-tertiary-dark xs:text-[1.375rem] sm:text-[1.53125rem] xl:mt-16 xl:max-w-330 xl:text-[2.09375rem] xl:leading-40',
    titleLink: 'line-clamp-2 transition-colors hover:text-primary',
    readMore: 'group/link mt-16 inline-flex items-center gap-14 font-dm text-[1rem] font-bold text-tertiary-dark xl:mt-22 xl:gap-16 xl:text-[1.1875rem]',
    arrow: 'flex size-38 items-center justify-center rounded-full bg-[var(--color-bg-subtle)] text-primary transition-colors group-hover/link:bg-primary group-hover/link:text-[var(--color-white)] xl:size-42',
    arrowIcon: 'size-16 xl:size-18',
  },
  listing: {
    card: 'group flex flex-col gap-22 rounded-[1rem] bg-[var(--color-white)] p-16 shadow-[0_6px_30px_var(--color-shadow-blog-card)] sm:flex-row sm:items-center xl:h-388 xl:gap-44 xl:rounded-[1.0625rem] xl:p-19',
    image: 'relative block aspect-square shrink-0 overflow-hidden rounded-[0.75rem] sm:w-[44%] xl:w-353 xl:rounded-[0.625rem]',
    body: 'min-w-0 flex-1 pb-8 sm:pb-0 xl:pr-16',
    date: 'inline-flex h-34 items-center gap-8 rounded-full bg-[var(--color-blog-tag-bg)] px-14 font-dm text-[0.875rem] font-medium text-[var(--color-blog-tag-text)] xl:h-40 xl:gap-9 xl:px-17 xl:text-[length:max(1.125rem,var(--text-min))]',
    dateIcon: 'size-15 xl:size-18',
    title: 'mt-14 font-heading font-bold text-[1.25rem] leading-[1.25] text-[var(--color-blog-heading)] xs:text-[1.375rem] sm:text-[1.53125rem] xl:mt-16 xl:max-w-330 xl:text-[2.09375rem] xl:leading-40',
    titleLink: 'line-clamp-2 transition-colors hover:text-secondary-dark',
    readMore: 'group/link mt-16 inline-flex items-center gap-14 font-dm text-[1rem] font-bold text-secondary-dark xl:mt-24 xl:gap-20 xl:text-[1.375rem]',
    arrow: 'flex size-40 items-center justify-center rounded-full bg-[var(--color-blog-tag-bg)] transition-colors group-hover/link:bg-[var(--color-blog-arrow-hover)] group-hover/link:text-[var(--color-white)] xl:size-54',
    arrowIcon: 'size-17 xl:size-22',
  },
};

/** Horizontal post card of the home page and (with `listing`) the Our Blog page; every card opens the common detail page. */
export const BlogCard = ({ post, blog, listing = false }: BlogCardProps) => {
  const style = listing ? styles.listing : styles.home;
  // Card titles are h3 on the home page and h2 on the Our Blog page.
  const Title = listing ? 'h2' : 'h3';
  const title = `${post.title} ${post.titleHighlight}`;

  return (
    <li className={style.card}>
      <Link href={blog.detailPageUrl} aria-label={fill(blog.readMoreLabel, { title })} className={style.image}>
        <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
      </Link>
      <div className={style.body}>
        <p className={style.date}>
          <Icon name={blog.dateIcon} className={style.dateIcon} />
          <time>{post.date}</time>
        </p>
        <Title className={style.title}>
          <Link href={blog.detailPageUrl} className={style.titleLink}>
            {title}
          </Link>
        </Title>
        <p className="mt-10 font-dm text-[0.9375rem] leading-24 text-[var(--color-blog-card-text)] xl:mt-14 xl:text-[1.21875rem] xl:leading-27">{post.excerpt}</p>
        <Link href={blog.detailPageUrl} className={style.readMore}>
          {blog.readMore}
          <span className={style.arrow}>
            <Icon name={blog.readMoreIcon} className={style.arrowIcon} />
          </span>
        </Link>
      </div>
    </li>
  );
};
