import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.galleryBreadcrumb?.title, description: commonData.galleryBreadcrumb?.description };

export default function OurGalleryPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <GalleryGrid data={sectionData.Gallery?.variants?.NGOGallery1} ui={commonData.globalUI} />
    </main>
  );
}
