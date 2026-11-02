import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogGrid } from "@/components/sections/BlogGrid";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.blogsBreadcrumb?.title, description: commonData.blogsBreadcrumb?.description };

export default function OurBlogPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <BlogGrid data={sectionData.Blogs?.variants?.NGOBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
