import { BlogCard } from '@/components/ui/BlogCard';
import { Paginated } from '@/components/ui/Pagination';
import type { BlogsData, BlogsProps } from '@/types/templates.types';

// The posts of a list, in the order of its ids; an id missing from templates.json is skipped.
const pick = (blog: BlogsData, ids: string[]) => ids.flatMap((id) => blog.posts.filter((post) => post.id === id));

/** "Stories of Change" on the home page: the cards of homePostIds. */
const BlogHome = ({ blog }: { blog: BlogsData }) => {
  const posts = pick(blog, blog.homePostIds);

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
          <BlogCard key={post.id} post={post} blog={blog} />
        ))}
      </ul>
    </section>
  );
};

/** The Our Blog page: every post of listingPostIds, a few rows per page. */
const BlogListing = ({ blog }: { blog: BlogsData }) => {
  const posts = pick(blog, blog.listingPostIds);

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
          data={blog.pagination}
          rows={blog.rowsPerPage}
          columns={2}
          variant="round"
          navClassName="mt-40 xl:mt-56"
          className="grid gap-24 lg:grid-cols-2 xl:gap-x-30 xl:gap-y-45"
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} blog={blog} listing />
          ))}
        </Paginated>
      </div>
    </section>
  );
};

/** "Stories of Change": the home cards, or with showAll the paged list of the Our Blog page. */
export const Blogs = ({ data: blog, showAll = false }: BlogsProps) => {
  if (!blog) return null;
  return showAll ? <BlogListing blog={blog} /> : <BlogHome blog={blog} />;
};
