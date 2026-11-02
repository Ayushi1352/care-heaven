import siteData from "./site.json";

// ── Root schema types ──
export type RawSiteData = typeof siteData;
export type CareHavenSchema = typeof siteData.CareHaven;
export type CareHavenSections = CareHavenSchema["sections"];

const sec = siteData.CareHaven.sections;

const site = {
  // Colours and fonts; app/layout.tsx and scripts/fonts.mjs read them.
  theme: siteData.CareHaven.theme,
  site: sec.Header.variants.CareHavenHeader1.site,
  company: sec.Company.variants.CareHavenCompany1,
  header: sec.Header.variants.CareHavenHeader1,
  footer: sec.Footer.variants.CareHavenFooter1,
  pageBanner: sec.PageBanner.variants.CareHavenPageBanner1,
  pages: sec.PageBanner.variants.CareHavenPageBanner1.pages,
  hero: sec.Banner.variants.CareHavenBanner1,
  help: sec.Help.variants.CareHavenHelp1,
  about: sec.About.variants.CareHavenAbout1,
  stats: sec.CompanyStatistics.variants.CareHavenStats1,
  whyChoose: sec.WhyChooseUs.variants.CareHavenWhyChooseUs1,
  testimonials: sec.Testimonial.variants.CareHavenTestimonial1,
  blog: sec.Blog.variants.CareHavenBlog1,
  causes: sec.Causes.variants.CareHavenCauses1,
  team: sec.Team.variants.CareHavenTeam1,
  gallery: sec.Gallery.variants.CareHavenGallery1,
  faq: sec.Faq.variants.CareHavenFaq1,
  contact: sec.Contact.variants.CareHavenContact1,
  formOptions: sec.FormOptions.variants.CareHavenFormOptions1,
};

// ── Item-level types ──
export type NavLink = (typeof site.header.nav)[number];
export type BlogPost = (typeof site.blog.posts)[number];
export type CauseItem = (typeof site.causes.items)[number];
export type TeamMember = (typeof site.team.members)[number];
export type Testimonial = (typeof site.testimonials.items)[number];
export type FormField = (typeof site.contact.form.fields)[number];

// ── Fixed routes. Each page's banner title and breadcrumb come from site.json (PageBanner.pages). ──
export const routes = {
  home: "/",
  aboutUs: "/about-us",
  ourCauses: "/our-causes",
  causesDetails: "/our-causes/causes-details",
  ourTeams: "/our-teams",
  ourGallery: "/our-gallery",
  ourBlog: "/our-blog",
  blogDetail: "/our-blog/blog-detail",
  faqs: "/faqs",
  contactUs: "/contact-us",
} as const;

// ── Screen-reader labels from site.json; "{n}"-style slots are filled from `values`. ──
export type LabelKey = keyof typeof siteData.CareHaven.labels;
export const label = (key: LabelKey, values: Record<string, string | number> = {}) =>
  siteData.CareHaven.labels[key].replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

// Browser tab title: "<page> | <site name>"
export const pageTitle = (title: string) => `${title} | ${site.site.name}`;

// Post dates are stored once as "YYYY-MM-DD" and shown as "12 Oct 2026". Month names come from site.json.
export const formatDate = (iso: string) => {
  const [year, month, day] = iso.split("-").map(Number);
  return `${String(day).padStart(2, "0")} ${site.site.months[month - 1].slice(0, 3)} ${year}`;
};

// Phone numbers and emails become tel: / mailto: links.
export const contactHref = (type: string | undefined, value: string) =>
  type === "tel" ? `tel:${value.replace(/[^\d+]/g, "")}` : type === "mailto" ? `mailto:${value}` : undefined;

// The lines (and link type) of a company contact field; sections name the field in site.json.
const { company } = site;
export const contactField = (field: string): { lines: string[]; type?: "tel" | "mailto" } => {
  if (field === "phone") return { lines: [company.phone], type: "tel" };
  if (field === "email") return { lines: [company.email], type: "mailto" };
  return { lines: company.address.split("\n") };
};

// Social links by icon name, in the order a section lists them.
export const socialLinks = (icons: string[]) => icons.flatMap((icon) => company.social.filter((social) => social.icon === icon));

const mapQuery = encodeURIComponent(company.address.replace(/\s*\n\s*/g, " "));
export const companyMap = {
  href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  embed: `https://maps.google.com/maps?q=${mapQuery}&z=12&output=embed`,
};

// Accent colour of a card in a list: orange, green, orange, green ... (the design alternates them).
export const accentAt = (index: number) => (index % 2 === 0 ? "orange" : "green");

// The two blog posts shown on the home page (marked "home" in site.json, else the first two).
export const homePosts = () => {
  const marked = site.blog.posts.filter((post) => "home" in post && post.home);
  return (marked.length ? marked : site.blog.posts).slice(0, site.blog.homeCount);
};

// The blog page lists every post that is not only a home teaser.
export const listedPosts = () => site.blog.posts.filter((post) => !("home" in post && post.home));

export type SiteData = typeof site;
export { site };
export default siteData;
