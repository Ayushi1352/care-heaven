import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { DM_Sans, Gilda_Display, Montserrat, Newsreader, Nunito, Poppins, Roboto, Source_Serif_4 } from "next/font/google";
import rawData from "@/data/templates.json";
import type { NGOTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["400", "500", "600", "700"], fallback: ["Georgia", "serif"], variable: "--font-newsreader" });
const gildaDisplay = Gilda_Display({ subsets: ["latin"], weight: ["400"], fallback: ["Georgia", "serif"], variable: "--font-gilda-display" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], fallback: ["Georgia", "serif"], variable: "--font-source-serif" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], fallback: ["Arial", "sans-serif"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-dm-sans" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-roboto" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-nunito" });
const fontClasses = [newsreader, gildaDisplay, sourceSerif, poppins, montserrat, dmSans, roboto, nunito].map((font) => font.variable).join(" ");

const templateData: NGOTemplateData = rawData;
const sectionData = templateData.categories.NGO.sections;
const commonData = templateData.common;
const headerData = sectionData.Header?.variants?.NGOHeader1;

const { fonts } = commonData.theme;
const fontVariables = {
  "--font-primary": fonts.primary,
  "--font-heading": fonts.heading,
  "--font-display": fonts.display,
  "--font-quote": fonts.quote,
  "--font-alt": fonts.alt,
  "--font-dm": fonts.dm,
  "--font-form": fonts.form,
  "--font-nunito-face": fonts.nunito,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // --text-min is the smallest desktop text size. Root font size: 16px, and from 1024px up it follows the 1686px design (1 design px = 1/1686 of the
      // screen), stopping at 1920px. Everything clickable gets the pointer (disabled buttons show not-allowed). With reduced motion turned on nothing transitions.
      className={`${fontClasses} scroll-smooth antialiased [--text-min:11px] [font-size:16px] xl:[font-size:min(calc(1920px/105.375),calc(100vw/105.375))] [&_:where(a[href],button:not(:disabled),select,summary,[role=button],[role=tab],label:has(input[type=checkbox]),input[type=checkbox],input[type=submit])]:cursor-pointer [&_button:disabled]:cursor-not-allowed motion-reduce:scroll-auto motion-reduce:[&_*]:!transition-none`}
    >
      <body>
        <ScrollReveal />
        {/*
          The site never grows wider than 1920px (105.375rem once the root font size stops growing),
          so on wide screens or when zoomed out it stays centred instead of stretching.
        */}
        <div className="relative mx-auto flex min-h-screen w-full max-w-[105.375rem] flex-col overflow-x-clip bg-[var(--color-white)]">
          <Header data={headerData} company={commonData.company} ui={commonData.globalUI} />
          <ScrollToTop>{children}</ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} links={headerData?.nav} />
        </div>
      </body>
    </html>
  );
}
