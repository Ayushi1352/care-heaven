import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import type { CompanyData, ContactData, GlobalUIData } from "@/types/templates.types";

export const Contact = ({ data, company, ui }: { data?: ContactData; company?: CompanyData; ui?: GlobalUIData }) => {
  if (!data) return null;
  return (
    <div className="relative overflow-hidden bg-[var(--color-white)] px-[1.25rem] pt-[4rem] pb-[4rem] sm:px-[2rem] md:pt-[5rem] md:pb-[5rem] xl:px-0 xl:pt-0 xl:pb-[6.25rem]">
      <ContactInfo data={data} company={company} />
      <ContactForm data={data} company={company} ui={ui} />
    </div>
  );
};
