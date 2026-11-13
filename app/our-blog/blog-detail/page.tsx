import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogArticle } from "@/components/sections/BlogArticle";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

// One common detail page for every post: all blog links point here.
export const metadata: Metadata = { ...commonData.blogDetailBreadcrumb?.seo };

export default function BlogDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogArticle data={sectionData.BlogDetail?.variants?.NGOBlogDetail1} ui={commonData.globalUI} />
    </main>
  );
}
