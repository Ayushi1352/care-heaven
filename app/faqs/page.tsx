import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.faqsBreadcrumb?.seo };

export default function FaqsPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      <Faq data={sectionData.Faq?.variants?.NGOFaq1} />
    </main>
  );
}
