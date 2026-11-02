import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { formatDate, homePosts, label, routes, site } from "@/data";

const { blog } = site;

/** "Stories of Change" — the two latest stories on the home page. */
export default function BlogSection() {
  const posts = homePosts();

  return (
    <section className="bg-white px-20 pt-32 pb-64 sm:px-32 md:pt-40 md:pb-80 xl:px-68 xl:pt-50 xl:pb-100">
      <div data-reveal="up" className="text-center">
        <p className="flex items-center justify-center gap-14 font-body text-[calc(14*var(--spacing))] font-medium tracking-[0.1em] text-orange uppercase xl:gap-17 xl:text-[calc(21*var(--spacing))]">
          <span className="h-px w-56 bg-orange xl:w-76" />
          {blog.label}
          <span className="h-px w-56 bg-orange xl:w-76" />
        </p>
        <h2 className="mt-10 font-heading font-bold text-[calc(34*var(--spacing))] leading-[1.15] text-maroon sm:text-[calc(45.5*var(--spacing))] xl:mt-6 xl:text-[calc(71*var(--spacing))] xl:leading-80">
          {blog.title} <span className="text-orange">{blog.titleHighlight}</span>
        </h2>
        <p className="mt-8 font-dm text-[calc(16*var(--spacing))] leading-26 text-[#5d5d63] xl:mt-4 xl:text-[calc(22*var(--spacing))]">{blog.description}</p>
      </div>

      <ul data-reveal-stagger className="mt-36 grid gap-24 lg:grid-cols-2 xl:mt-45 xl:gap-34">
        {posts.map((post) => (
          <li key={post.title} className="group flex flex-col gap-24 rounded-[calc(16*var(--spacing))] bg-white p-16 shadow-[0_6px_30px_rgba(94,6,41,0.07)] sm:flex-row sm:items-center xl:h-378 xl:gap-38 xl:rounded-[calc(17*var(--spacing))] xl:p-18">
            <Link href={routes.blogDetail} aria-label={label("readMoreAbout", { title: post.title })} className="relative block aspect-square shrink-0 overflow-hidden rounded-[calc(12*var(--spacing))] sm:w-[44%] xl:w-344 xl:rounded-[calc(11*var(--spacing))]">
              <Image src={post.image} alt={post.imageAlt} fill quality={90} sizes="(min-width: 1024px) 21vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-108" />
            </Link>
            <div className="min-w-0 flex-1 pb-8 sm:pb-0 xl:pr-10">
              <p className="inline-flex h-34 items-center gap-8 rounded-full bg-rose px-14 font-dm text-[calc(14*var(--spacing))] font-medium text-[#3a1a22] xl:h-40 xl:gap-9 xl:px-18 xl:text-[max(calc(15*var(--spacing)),var(--text-min))]">
                <Icon name="calendar" className="size-15 text-orange xl:size-17" strokeWidth={1.8} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <h3 className="mt-14 font-heading font-bold text-[calc(24.5*var(--spacing))] leading-[1.22] text-maroon xl:mt-16 xl:max-w-290 xl:text-[calc(34.5*var(--spacing))] xl:leading-40">
                <Link href={routes.blogDetail} className="transition-colors hover:text-orange">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-10 font-dm text-[calc(15*var(--spacing))] leading-24 text-[#66666b] xl:mt-12 xl:text-[max(calc(16.5*var(--spacing)),var(--text-min))] xl:leading-25">{post.excerpt}</p>
              <Link href={routes.blogDetail} className="group/link mt-16 inline-flex items-center gap-14 font-dm text-[calc(16*var(--spacing))] font-bold text-maroon xl:mt-22 xl:gap-16 xl:text-[calc(19*var(--spacing))]">
                {blog.readMore}
                <span className="flex size-38 items-center justify-center rounded-full bg-rose text-orange transition-colors group-hover/link:bg-orange group-hover/link:text-white xl:size-42">
                  <Icon name="arrow-right" className="size-16 xl:size-18" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
