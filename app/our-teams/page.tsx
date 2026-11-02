import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TeamGrid } from "@/components/sections/TeamGrid";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.teamsBreadcrumb?.title, description: commonData.teamsBreadcrumb?.description };

export default function OurTeamsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamsBreadcrumb} ui={commonData.globalUI} />
      <TeamGrid data={sectionData.Team?.variants?.NGOTeam1} ui={commonData.globalUI} />
    </main>
  );
}
