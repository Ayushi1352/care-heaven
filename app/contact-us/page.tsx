import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { NGOTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.NGOContact1} />
    </main>
  );
}
