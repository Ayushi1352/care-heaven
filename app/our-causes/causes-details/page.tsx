import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CauseDetail } from "@/components/sections/CauseDetail";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

// One common detail page for every cause: all cause links point here.
export const metadata: Metadata = { title: commonData.causeDetailBreadcrumb?.title, description: commonData.causeDetailBreadcrumb?.description };

export default function CausesDetailsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.causeDetailBreadcrumb} ui={commonData.globalUI} />
      <CauseDetail data={sectionData.Causes?.variants?.NGOCauses1?.detail} />
    </main>
  );
}
