import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutUs } from "@/components/sections/AboutUs";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.NGOAboutUs1} detailed />
      <Stats data={sectionData.Stats?.variants?.NGOStats1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.NGOWhyChooseUs1} />
      <Testimonials data={sectionData.Testimonials?.variants?.NGOTestimonials1} detailed />
    </main>
  );
}
