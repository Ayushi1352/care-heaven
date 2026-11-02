import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, site } from "@/data";
import GalleryGrid from "@/components/GalleryGrid";

const { title, description } = site.pages.ourGallery;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function OurGalleryPage() {
  return (
    <>
      <PageBanner title={title} />
      <GalleryGrid />
    </>
  );
}
