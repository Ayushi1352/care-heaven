import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CauseDetail } from "@/components/sections/CauseDetail";

// One common detail page for every cause: all cause links point here.
export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.causeDetailBreadcrumb?.seo };

export default function CausesDetailsPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.causeDetailBreadcrumb} ui={commonData.globalUI} />
      <CauseDetail data={sectionData.CauseDetail?.variants?.NGOCauseDetail1} />
    </main>
  );
}
