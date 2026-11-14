import type { CSSProperties } from 'react';

// Types for data/templates.json. Keep them in step when the JSON changes.

// ── Shared pieces ──

/** Page title and description for the browser tab and search results (spread into a page's metadata). */
export interface SeoData {
  title: string;
  description: string;
}

/** A picture with its alt text (stored flat elsewhere as `image` + `imageAlt`). */
export interface ImageItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface LinkData {
  label: string;
  url: string;
}

export interface NavLink extends LinkData {
  id: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

/** Screen-reader labels for the page numbers under a paged list; "{n}" is the page number. */
export interface PaginationLabels {
  paginationLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pageLabel: string;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  /** tel: / mailto: link for the first line; cards without it are plain text */
  url?: string;
}

// ── Common ──

export interface ThemeFonts {
  primary: string;
  heading: string;
  display: string;
  quote: string;
  alt: string;
  dm: string;
  form: string;
  nunito: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

/** CSS variables layout.tsx sets on <html> from common.theme.fonts. */
export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-heading': string;
  '--font-display': string;
  '--font-quote': string;
  '--font-alt': string;
  '--font-dm': string;
  '--font-form': string;
  '--font-nunito-face': string;
};

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

/** Only the breadcrumb reads these; every section keeps its own labels in its data. */
export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbSeparator: string;
}

/** One step of the breadcrumb trail; the last step is the current page (no url). */
export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  seo: SeoData;
  /** Banner photo behind the title */
  bgImage?: string;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface ContactCircle {
  top: string;
  bottom: string;
  url: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoUrl: string;
  logoLabel: string;
  menuTitle: string;
  links: NavLink[];
  contactCards: ContactCard[];
  contactCircle: ContactCircle;
  copyrightText: string;
  poweredBy?: string;
  socialLinks: SocialLink[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  aboutBreadcrumb: BreadcrumbData;
  causesBreadcrumb: BreadcrumbData;
  causeDetailBreadcrumb: BreadcrumbData;
  teamsBreadcrumb: BreadcrumbData;
  galleryBreadcrumb: BreadcrumbData;
  blogsBreadcrumb: BreadcrumbData;
  blogDetailBreadcrumb: BreadcrumbData;
  faqsBreadcrumb: BreadcrumbData;
  contactBreadcrumb: BreadcrumbData;
  Footer: FooterData;
}

// ── Sections ──

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  /** Logo in the slide-in menu */
  logoWhite: string;
  logoWhiteAlt: string;
  logoWhiteWidth: number;
  logoWhiteHeight: number;
  logoUrl: string;
  logoLabel: string;
  navLinks: NavLink[];
  button: LinkData;
  phone: string;
  phoneUrl: string;
  email: string;
  emailUrl: string;
  address: string[];
  socialLinks: SocialLink[];
  menuLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  eyebrow: string;
  titleTop: string;
  titleHighlight: string;
  titleAfter: string;
  titleBottom: string;
  image: string;
  imageAlt: string;
  mission: {
    title: string;
    text: string;
    points: string[];
  };
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface HelpCard {
  id: string;
  icon: string;
  title: string;
  text: string;
  tone: string;
}

export interface HowWeHelpData {
  label: string;
  title: string;
  titleHighlight: string;
  cards: HelpCard[];
}

export interface HowWeHelpProps {
  data?: HowWeHelpData;
}

export interface AboutUsData {
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  image: string;
  imageAlt: string;
  feature: {
    icon: string;
    title: string;
    text: string;
    image: string;
    imageAlt: string;
  };
  button: LinkData;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** The About Us page shows the section with more room around it */
  detailed?: boolean;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface StatsData {
  /** How long each number takes to count up */
  counterDurationMs: number;
  items: StatItem[];
}

export interface StatsProps {
  data?: StatsData;
}

export interface WhyChooseUsData {
  label: string;
  titleTop: string;
  titleHighlight: string;
  titleAfter: string;
  titleBottom: string;
  image: string;
  imageAlt: string;
  call: {
    label: string;
    phone: string;
    phoneUrl: string;
  };
  lead: string;
  missionTitle: string;
  missionText: string;
  button: LinkData;
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  avatarAlt: string;
  avatarPosition: string;
}

export interface TestimonialsData {
  label: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: TestimonialItem[];
  /** Time each slide stays before the next one slides in */
  sliderIntervalMs: number;
  /** "{n}" is the star rating */
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  /** "{n}" is the slide number */
  slideLabel: string;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
  /** The About Us page shows the section with more room around it */
  detailed?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export interface BlogsData extends PaginationLabels {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  readMore: string;
  homeCount: number;
  rowsPerPage: number;
  posts: BlogPost[];
  detailPageUrl: string;
  /** Month names for the post dates */
  months: string[];
  /** "{title}" is the post title */
  readMoreLabel: string;
}

export interface BlogSectionProps {
  data?: BlogsData;
}

export interface BlogsProps {
  data?: BlogsData;
}

export interface BlogDetailSection {
  id: string;
  title: string;
  titleHighlight: string;
  text: string;
  image: string;
  imageAlt: string;
  titleBreak?: boolean;
}

export interface BlogDetailData {
  date: string;
  title: string;
  titleHighlight: string;
  author: {
    prefix: string;
    name: string;
    role: string;
    avatar: string;
    avatarAlt: string;
  };
  intro: string;
  sections: BlogDetailSection[];
  quote: string;
  /** Month names for the post date */
  months: string[];
}

export interface BlogDetailProps {
  data?: BlogDetailData;
}

export interface CauseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CausesData extends PaginationLabels {
  readMore: string;
  rowsPerPage: number;
  items: CauseItem[];
  detailPageUrl: string;
  /** "{title}" is the cause title */
  readMoreLabel: string;
}

export interface CausesProps {
  data?: CausesData;
}

export interface CauseStep {
  id: string;
  icon: string;
  title: string;
  text: string;
  tone: string;
}

export interface CauseDetailData {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  titleHighlight: string;
  intro: string;
  howTitle: string;
  howText: string;
  steps: CauseStep[];
  sideImage: string;
  sideImageAlt: string;
  gallery: ImageItem[];
  impactTitle: string;
  impactText: string;
}

export interface CauseDetailProps {
  data?: CauseDetailData;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface TeamData extends PaginationLabels {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  rowsPerPage: number;
  members: TeamMember[];
}

export interface TeamProps {
  data?: TeamData;
}

export interface GalleryData extends PaginationLabels {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  rowsPerPage: number;
  images: ImageItem[];
  /** "{name}" is the image's alt text */
  openImageLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface FaqItem {
  id: string;
  icon: string;
  tone: string;
  question: string;
  answer: string;
}

export interface FaqData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface FormFieldData {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  icon: string;
}

export interface FormMessages {
  requiredError: string;
  emailError: string;
  phoneError: string;
  sending: string;
}

export interface ContactFormData {
  title: string;
  titleHighlight: string;
  fields: FormFieldData[];
  button: string;
  success: string;
  messages: FormMessages;
}

export interface ContactData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  cards: ContactCard[];
  map: {
    label: string;
    embedUrl: string;
    openUrl: string;
  };
  form: ContactFormData;
  /** Closes the thank-you message */
  closeLabel: string;
}

export interface ContactProps {
  data?: ContactData;
}

// ── Page layout (templateComponents) ──

export interface TemplateComponentsShared {
  Header: string;
  Footer: string;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplatePage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsPages {
  home: TemplatePage;
  'about-us': TemplatePage;
  'our-causes': TemplatePage;
  'causes-details': TemplatePage;
  'our-teams': TemplatePage;
  'our-gallery': TemplatePage;
  'our-blog': TemplatePage;
  'blog-detail': TemplatePage;
  faqs: TemplatePage;
  'contact-us': TemplatePage;
}

export interface TemplateComponentsData {
  shared: TemplateComponentsShared;
  pages: TemplateComponentsPages;
}

export interface NGOSections {
  Header?: { variants?: { NGOHeader1?: HeaderData } };
  Hero?: { variants?: { NGOHero1?: HeroData } };
  HowWeHelp?: { variants?: { NGOHowWeHelp1?: HowWeHelpData } };
  AboutUs?: { variants?: { NGOAboutUs1?: AboutUsData } };
  Stats?: { variants?: { NGOStats1?: StatsData } };
  WhyChooseUs?: { variants?: { NGOWhyChooseUs1?: WhyChooseUsData } };
  Testimonials?: { variants?: { NGOTestimonials1?: TestimonialsData } };
  Blogs?: { variants?: { NGOBlogs1?: BlogsData } };
  BlogDetail?: { variants?: { NGOBlogDetail1?: BlogDetailData } };
  Causes?: { variants?: { NGOCauses1?: CausesData } };
  CauseDetail?: { variants?: { NGOCauseDetail1?: CauseDetailData } };
  Team?: { variants?: { NGOTeam1?: TeamData } };
  Gallery?: { variants?: { NGOGallery1?: GalleryData } };
  Faq?: { variants?: { NGOFaq1?: FaqData } };
  Contact?: { variants?: { NGOContact1?: ContactData } };
}

export interface NGOTemplateData {
  common: CommonData;
  categories: {
    NGO: {
      sections: NGOSections;
      templateComponents: TemplateComponentsData;
    };
  };
}
