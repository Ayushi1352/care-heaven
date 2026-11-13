import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import type { CompanyData, ContactData, GlobalUIData } from "@/types/templates.types";

export const Contact = ({ data, company, ui }: { data?: ContactData; company?: CompanyData; ui?: GlobalUIData }) => {
  if (!data) return null;
  return (
    <div className="relative overflow-hidden bg-[var(--color-white)] px-20 pt-64 pb-64 sm:px-32 md:pt-80 md:pb-80 xl:px-0 xl:pt-0 xl:pb-100">
      <ContactInfo data={data} company={company} />
      <ContactForm data={data} company={company} ui={ui} />
    </div>
  );
};
