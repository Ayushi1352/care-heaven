import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Causes } from "@/components/sections/Causes";

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.causesBreadcrumb?.seo };

export default function OurCausesPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.causesBreadcrumb} ui={commonData.globalUI} />
      <Causes data={sectionData.Causes?.variants?.NGOCauses1} />
    </main>
  );
}
