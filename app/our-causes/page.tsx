import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CauseGrid } from "@/components/sections/CauseGrid";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.causesBreadcrumb?.title, description: commonData.causesBreadcrumb?.description };

export default function OurCausesPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.causesBreadcrumb} ui={commonData.globalUI} />
      <CauseGrid data={sectionData.Causes?.variants?.NGOCauses1} ui={commonData.globalUI} />
    </main>
  );
}
