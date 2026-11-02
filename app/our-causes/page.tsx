import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, site } from "@/data";
import CauseGrid from "@/components/CauseGrid";

const { title, description } = site.pages.ourCauses;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function OurCausesPage() {
  return (
    <>
      <PageBanner title={title} />
      <CauseGrid />
    </>
  );
}
