import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutNgo } from "@/components/sections/AboutNgo";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.aboutBreadcrumb?.title, description: commonData.aboutBreadcrumb?.description };

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutNgo data={sectionData.AboutUs?.variants?.NGOAboutUs1} className="pt-[4rem] pb-[4rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pb-[6.25rem]" />
      <Stats data={sectionData.Stats?.variants?.NGOStats1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.NGOWhyChooseUs1} company={commonData.company} />
      <Testimonials data={sectionData.Testimonials?.variants?.NGOTestimonials1} ui={commonData.globalUI} className="pt-[4rem] pb-[4rem] md:pt-[5rem] md:pb-[5rem] xl:pt-[6.25rem] xl:pb-[6.25rem]" />
    </main>
  );
}
