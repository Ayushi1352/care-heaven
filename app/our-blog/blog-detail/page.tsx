import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogArticle } from "@/components/sections/BlogArticle";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

// One common detail page for every post: all blog links point here.
export const metadata: Metadata = { title: commonData.blogDetailBreadcrumb?.title, description: commonData.blogDetailBreadcrumb?.description };

export default function BlogDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogArticle data={sectionData.Blogs?.variants?.NGOBlogs1?.detail} ui={commonData.globalUI} />
    </main>
  );
}
