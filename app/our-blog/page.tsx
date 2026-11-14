import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.blogsBreadcrumb?.seo };

export default function OurBlogPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.NGOBlogs1} />
    </main>
  );
}
