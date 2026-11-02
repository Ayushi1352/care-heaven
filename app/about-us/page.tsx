import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutNgo from "@/components/AboutNgo";
import Testimonials from "@/components/Testimonials";
import { pageTitle, site } from "@/data";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";

const { title, description } = site.pages.aboutUs;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <AboutNgo className="pt-64 pb-64 md:pt-80 md:pb-80 xl:pt-100 xl:pb-100" />
      <Stats />
      <WhyChooseUs />
      <Testimonials className="pt-64 pb-64 md:pt-80 md:pb-80 xl:pt-100 xl:pb-100" />
    </>
  );
}
