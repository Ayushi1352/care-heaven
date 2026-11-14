import rawData from '@/data/templates.json';
import type { NGOTemplateData } from '@/types/templates.types';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowWeHelp } from '@/components/sections/HowWeHelp';
import { AboutUs } from '@/components/sections/AboutUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { BlogSection } from '@/components/sections/BlogSection';

export default function Home() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.NGOHero1} />
      <HowWeHelp data={sectionData.HowWeHelp?.variants?.NGOHowWeHelp1} />
      <AboutUs data={sectionData.AboutUs?.variants?.NGOAboutUs1} />
      <Testimonials data={sectionData.Testimonials?.variants?.NGOTestimonials1} />
      <BlogSection data={sectionData.Blogs?.variants?.NGOBlogs1} />
    </main>
  );
}
