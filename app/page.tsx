import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { AboutNgo } from "@/components/sections/AboutNgo";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.NGOHero1} />
      <HowWeHelp data={sectionData.HowWeHelp?.variants?.NGOHowWeHelp1} />
      <AboutNgo data={sectionData.AboutUs?.variants?.NGOAboutUs1} />
      <Testimonials data={sectionData.Testimonials?.variants?.NGOTestimonials1} ui={commonData.globalUI} />
      <BlogSection data={sectionData.Blogs?.variants?.NGOBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
