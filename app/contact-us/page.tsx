import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { pageTitle, site } from "@/data";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

const { title, description } = site.pages.contactUs;

export const metadata: Metadata = { title: pageTitle(title), description };

export default function ContactUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <div className="relative overflow-hidden bg-white px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-0 xl:pt-0 xl:pb-100">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}
