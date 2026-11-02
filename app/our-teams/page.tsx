import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, site } from "@/data";
import TeamGrid from "@/components/TeamGrid";

const { title, description } = site.pages.ourTeams;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function OurTeamsPage() {
  return (
    <>
      <PageBanner title={title} />
      <TeamGrid />
    </>
  );
}
