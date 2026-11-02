import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, site } from "@/data";
import FaqList from "@/components/FaqList";

const { title, description } = site.pages.faqs;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function FaqsPage() {
  return (
    <>
      <PageBanner title={title} />
      <FaqList />
    </>
  );
}
