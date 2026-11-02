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

export interface GlobalUIData {
  mainNav: string;
  openMenu: string;
  closeMenu: string;
  breadcrumb: string;
  previous: string;
  next: string;
  goToSlide: string;
  pagination: string;
  previousPage: string;
  nextPage: string;
  page: string;
  openImage: string;
  close: string;
  previousImage: string;
  nextImage: string;
  rating: string;
  readMoreAbout: string;
  months: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  label: string;
}

export interface CompanyData {
  address: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
}

export interface BreadcrumbData {
  title: string;
  description: string;
  bgImage: string;
  bgImageAlt: string;
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

export interface LogoSize {
  width: number;
  height: number;
}

export interface NavLink extends LinkData {
  id: string;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  field: string;
}

export interface ContactCircle {
  top: string;
  bottom: string;
  href: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoSize: LogoSize;
  siteName: string;
  menuTitle: string;
  contactCards: ContactCard[];
  contactCircle: ContactCircle;
  copyright: string;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  company: CompanyData;
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
  logo: string;
  logoWhite: string;
  logoAlt: string;
  logoUrl: string;
  logoSize: LogoSize;
  siteName: string;
  nav: NavLink[];
  button: LinkData;
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
}

export interface BlogsData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  readMore: string;
  homeCount: number;
  rowsPerPage: number;
  posts: BlogPost[];
  detail: BlogDetailData;
  detailPageUrl: string;
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

export interface CausesData {
  readMore: string;
  rowsPerPage: number;
  items: CauseItem[];
  detail: CauseDetailData;
  detailPageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
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

export interface GalleryData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  rowsPerPage: number;
  images: GalleryImage[];
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
  };
  form: ContactFormData;
}

type Section<Variant extends string, Data> = {
  variants?: { [Name in Variant]?: Data };
};

export interface NGOSections {
  Header?: Section<"NGOHeader1", HeaderData>;
  Hero?: Section<"NGOHero1", HeroData>;
  HowWeHelp?: Section<"NGOHowWeHelp1", HowWeHelpData>;
  AboutUs?: Section<"NGOAboutUs1", AboutUsData>;
  Stats?: Section<"NGOStats1", StatsData>;
  WhyChooseUs?: Section<"NGOWhyChooseUs1", WhyChooseUsData>;
  Testimonials?: Section<"NGOTestimonials1", TestimonialsData>;
  Blogs?: Section<"NGOBlogs1", BlogsData>;
  Causes?: Section<"NGOCauses1", CausesData>;
  Team?: Section<"NGOTeam1", TeamData>;
  Gallery?: Section<"NGOGallery1", GalleryData>;
  Faq?: Section<"NGOFaq1", FaqData>;
  Contact?: Section<"NGOContact1", ContactData>;
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponents {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface NGOCategory {
  sections: NGOSections;
  templateComponents: TemplateComponents;
}

export interface NGOTemplateData {
  common: CommonData;
  categories: {
    NGO: NGOCategory;
  };
}
