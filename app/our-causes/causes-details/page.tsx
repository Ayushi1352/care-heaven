import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, routes, site } from "@/data";
import CauseIntro from "@/components/CauseIntro";
import ProgramSteps from "@/components/ProgramSteps";
import CauseImpact from "@/components/CauseImpact";

// One common detail page for every cause: all cause links point here.
const { title, description } = site.pages.causesDetails;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function CausesDetailsPage() {
  return (
    <>
      <PageBanner
        title={title}
        crumbs={[
          { label: site.pages.ourCauses.title, href: routes.ourCauses },
          { label: title },
        ]}
      />
      <div className="relative overflow-hidden bg-ivory px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-0 xl:pt-100 xl:pb-100">
        <CauseIntro />
        <ProgramSteps />
        <CauseImpact />
      </div>
    </>
  );
}
