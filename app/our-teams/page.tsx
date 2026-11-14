import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { NGOTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Team } from '@/components/sections/Team';

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.teamsBreadcrumb?.seo };

export default function OurTeamsPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamsBreadcrumb} ui={commonData.globalUI} />
      <Team data={sectionData.Team?.variants?.NGOTeam1} />
    </main>
  );
}
