import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, routes, site } from "@/data";
import BlogArticle from "@/components/BlogArticle";

// One common detail page for every post: all blog links point here.
const { title, description } = site.pages.blogDetail;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function BlogDetailPage() {
  return (
    <>
      <PageBanner
        title={title}
        crumbs={[
          { label: site.pages.ourBlog.title, href: routes.ourBlog },
          { label: title },
        ]}
      />
      <BlogArticle />
    </>
  );
}
