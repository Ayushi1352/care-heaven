import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { FaqList } from "@/components/sections/FaqList";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.faqsBreadcrumb?.title, description: commonData.faqsBreadcrumb?.description };

export default function FaqsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      <FaqList data={sectionData.Faq?.variants?.NGOFaq1} />
    </main>
  );
}
