import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, site } from "@/data";
import BlogGrid from "@/components/BlogGrid";

const { title, description } = site.pages.ourBlog;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function OurBlogPage() {
  return (
    <>
      <PageBanner title={title} />
      <BlogGrid />
    </>
  );
}
