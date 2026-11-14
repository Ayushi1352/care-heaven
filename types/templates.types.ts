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

/** Screen-reader labels for the page numbers under a paged list; "{n}" is the page number. */
export interface PaginationLabels {
  paginationLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pageLabel: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  label: string;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
}

/** Page title and description for the browser tab and search results (spread into a page's metadata). */
export interface SeoData {
  title: string;
  description: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
  /** Banner photo behind the title */
  bgImage?: string;
  paths: BreadcrumbPath[];
}

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface LinkData {
  label: string;
  href: string;
}

export interface NavLink extends LinkData {
  id: string;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  /** "tel" or "mailto" makes the first line a phone / email link */
  type?: string;
}

export interface ContactCircle {
  top: string;
  bottom: string;
  href: string;
}

export interface FooterData {
  logo: ImageData;
  logoUrl: string;
  logoLabel: string;
  menuTitle: string;
  links: NavLink[];
  contactCards: ContactCard[];
  contactCircle: ContactCircle;
  copyright: string;
  poweredBy?: string;
  socialLinks: SocialLink[];
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  aboutBreadcrumb?: BreadcrumbData;
  causesBreadcrumb?: BreadcrumbData;
  causeDetailBreadcrumb?: BreadcrumbData;
  teamsBreadcrumb?: BreadcrumbData;
  galleryBreadcrumb?: BreadcrumbData;
  blogsBreadcrumb?: BreadcrumbData;
  blogDetailBreadcrumb?: BreadcrumbData;
  faqsBreadcrumb?: BreadcrumbData;
  contactBreadcrumb?: BreadcrumbData;
  Footer?: FooterData;
}

export interface HeaderData {
  logo: ImageData;
  /** Logo in the slide-in menu */
  logoWhite: ImageData;
  logoUrl: string;
  logoLabel: string;
  nav: NavLink[];
  button: LinkData;
  phone: string;
  email: string;
  address: string[];
  socialLinks: SocialLink[];
  menuLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeroData {
  eyebrow: string;
  titleTop: string;
  titleHighlight: string;
  titleAfter: string;
  titleBottom: string;
  image: ImageData;
  mission: {
    title: string;
    text: string;
    points: string[];
  };
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

export interface AboutUsData {
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  image: ImageData;
  feature: {
    icon: string;
    title: string;
    text: string;
    image: ImageData;
  };
  button: LinkData;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface StatsData {
  items: StatItem[];
}

export interface WhyChooseUsData {
  label: string;
  titleTop: string;
  titleHighlight: string;
  titleAfter: string;
  titleBottom: string;
  image: ImageData;
  call: {
    label: string;
    phone: string;
  };
  lead: string;
  missionTitle: string;
  missionText: string;
  button: LinkData;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  avatarPosition: string;
}

export interface TestimonialsData {
  label: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: TestimonialItem[];
  /** "{n}" is the star rating */
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  /** "{n}" is the slide number */
  slideLabel: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailSection {
  id: string;
  title: string;
  titleHighlight: string;
  text: string;
  image: ImageData;
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
  };
  intro: string;
  sections: BlogDetailSection[];
  quote: string;
  /** Month names for the post date */
  months: string[];
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

export interface CauseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CauseStep {
  id: string;
  icon: string;
  title: string;
  text: string;
  tone: string;
}

export interface CauseGalleryImage extends ImageData {
  id: string;
}

export interface CauseDetailData {
  image: ImageData;
  label: string;
  title: string;
  titleHighlight: string;
  intro: string;
  howTitle: string;
  howText: string;
  steps: CauseStep[];
  sideImage: ImageData;
  gallery: CauseGalleryImage[];
  impactTitle: string;
  impactText: string;
}

export interface CausesData extends PaginationLabels {
  readMore: string;
  rowsPerPage: number;
  items: CauseItem[];
  detailPageUrl: string;
  /** "{title}" is the cause title */
  readMoreLabel: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamData extends PaginationLabels {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  rowsPerPage: number;
  members: TeamMember[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface GalleryData extends PaginationLabels {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  rowsPerPage: number;
  images: GalleryImage[];
  /** "{name}" is the image's alt text */
  openImageLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
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

// ── Component props ──

export interface HeaderProps {
  data?: HeaderData;
}

export interface FooterProps {
  data?: FooterData;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface HowWeHelpProps {
  data?: HowWeHelpData;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** The About Us page shows the section with more room around it */
  detailed?: boolean;
}

export interface StatsProps {
  data?: StatsData;
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
  /** The About Us page shows the section with more room around it */
  detailed?: boolean;
}

export interface BlogSectionProps {
  data?: BlogsData;
}

export interface BlogsProps {
  data?: BlogsData;
}

export interface BlogDetailProps {
  data?: BlogDetailData;
}

export interface CausesProps {
  data?: CausesData;
}

export interface CauseDetailProps {
  data?: CauseDetailData;
}

export interface TeamProps {
  data?: TeamData;
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface FaqProps {
  data?: FaqData;
}

export interface ContactProps {
  data?: ContactData;
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

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface NGOTemplateData {
  common: CommonData;
  categories: {
    NGO: {
      sections: NGOSections;
      templateComponents?: TemplateComponentsData;
    };
  };
}
