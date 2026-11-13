import type { CompanyData } from "@/types/templates.types";

// Fills "{n}"-style slots of a label from templates.json (common.globalUI).
export const fill = (template: string | undefined, values: Record<string, string | number>) =>
  template?.replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

// Post dates are stored once as "YYYY-MM-DD" and shown as "12 Oct 2026".
export const formatDate = (iso: string, months: string[] = []) => {
  const [year, month, day] = iso.split("-").map(Number);
  return `${String(day).padStart(2, "0")} ${(months[month - 1] ?? "").slice(0, 3)} ${year}`;
};

// Phone numbers and emails become tel: / mailto: links.
export const contactHref = (type: string | undefined, value: string) =>
  type === "tel" ? `tel:${value.replace(/[^\d+]/g, "")}` : type === "mailto" ? `mailto:${value}` : undefined;

// The lines (and link type) of a company contact field; cards name it with "source" in templates.json.
export const contactField = (company: CompanyData, field: string): { lines: string[]; type?: "tel" | "mailto" } => {
  if (field === "phone") return { lines: [company.phone], type: "tel" };
  if (field === "email") return { lines: [company.email], type: "mailto" };
  return { lines: company.address };
};

// Map links for the company address ("{query}" in the URL templates of templates.json).
export const mapUrl = (template: string, address: string[]) => fill(template, { query: encodeURIComponent(address.join(" ")) }) ?? "";

// Accent colour of a card in a list: orange, green, orange, green ... (the design alternates them).
export const accentAt = (index: number) => (index % 2 === 0 ? "orange" : "green");
