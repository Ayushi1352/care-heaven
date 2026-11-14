import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.galleryBreadcrumb?.seo };

export default function OurGalleryPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <Gallery data={sectionData.Gallery?.variants?.NGOGallery1} />
    </main>
  );
}
