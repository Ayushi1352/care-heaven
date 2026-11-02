import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Paginated from "@/components/Pagination";
import { formatDate, label, listedPosts, routes, site } from "@/data";

const { blog } = site;

export default function BlogGrid() {
  const posts = listedPosts();

  return (
    <section className="bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:pt-100 xl:pr-50 xl:pb-100 xl:pl-57">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-14 font-dm text-[calc(15*var(--spacing))] font-semibold tracking-[0.15em] text-orange uppercase xl:gap-17 xl:text-[calc(21*var(--spacing))]">
          <span className="h-2 w-56 bg-orange xl:w-83" />
          {blog.label}
          <span className="h-2 w-56 bg-orange xl:w-83" />
        </p>
        <h2 className="mt-8 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.15] text-[#03162a] sm:text-[calc(45.5*var(--spacing))] xl:mt-8 xl:text-[calc(72*var(--spacing))] xl:leading-80">
          {blog.title} <span className="text-green-dark">{blog.titleHighlight}</span>
        </h2>
        <p className="mt-8 font-dm text-[calc(16*var(--spacing))] leading-26 text-[#5d5d63] xl:mt-4 xl:text-[calc(22*var(--spacing))]">{blog.description}</p>
      </div>

      <div className="mt-36 xl:mt-62">
        <Paginated
          perPage={blog.perPage}
          variant="round"
          navClassName={posts.length > blog.perPage ? "mt-40 xl:mt-56" : "hidden"}
          className="grid gap-24 lg:grid-cols-2 xl:gap-x-30 xl:gap-y-45"
        >
          {posts.map((post) => (
            <li key={post.title} className="group flex flex-col gap-22 rounded-[calc(16*var(--spacing))] bg-white p-16 shadow-[0_6px_30px_rgba(3,22,42,0.07)] sm:flex-row sm:items-center xl:h-388 xl:gap-44 xl:rounded-[calc(17*var(--spacing))] xl:p-19">
              <Link
                href={routes.blogDetail}
                aria-label={label("readMoreAbout", { title: post.title })}
                className="relative block aspect-square shrink-0 overflow-hidden rounded-[calc(12*var(--spacing))] sm:w-[44%] xl:w-353 xl:rounded-[calc(10*var(--spacing))]"
              >
                <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-108" />
              </Link>
              <div className="min-w-0 flex-1 pb-8 sm:pb-0 xl:pr-16">
                <p className="inline-flex h-34 items-center gap-8 rounded-full bg-[#e7f2e3] px-14 font-dm text-[calc(14*var(--spacing))] font-medium text-[#24571a] xl:h-40 xl:gap-9 xl:px-17 xl:text-[max(calc(18*var(--spacing)),var(--text-min))]">
                  <Icon name="calendar" className="size-15 xl:size-18" strokeWidth={1.8} />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h2 className="mt-14 font-heading font-bold text-[calc(24.5*var(--spacing))] leading-[1.22] text-[#03162a] xl:mt-16 xl:max-w-330 xl:text-[calc(33.5*var(--spacing))] xl:leading-40">
                  <Link href={routes.blogDetail} className="transition-colors hover:text-green-dark">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-10 font-dm text-[calc(15*var(--spacing))] leading-24 text-[#66666b] xl:mt-14 xl:text-[calc(19.5*var(--spacing))] xl:leading-27">{post.excerpt}</p>
                <Link href={routes.blogDetail} className="group/link mt-16 inline-flex items-center gap-14 font-dm text-[calc(16*var(--spacing))] font-bold text-green-dark xl:mt-24 xl:gap-20 xl:text-[calc(22*var(--spacing))]">
                  {blog.readMore}
                  <span className="flex size-40 items-center justify-center rounded-full bg-[#e7f2e3] transition-colors group-hover/link:bg-[#2b6a1a] group-hover/link:text-white xl:size-54">
                    <Icon name="arrow-right" className="size-17 xl:size-22" strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </Paginated>
      </div>
    </section>
  );
}
