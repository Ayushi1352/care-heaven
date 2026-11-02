"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { contactHref, label, site as data, socialLinks } from "@/data";

const { site, header, company, footer } = data;
const socials = socialLinks(footer.socials);

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** The red "Donate Now" button: a chevron block, a divider and the label. */
function DonateButton({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      href={header.button.href}
      onClick={onClick}
      className={`group shrink-0 items-center overflow-hidden rounded-[calc(6*var(--spacing))] border border-[#e2474c] bg-[linear-gradient(180deg,#dc3a40_0%,#c4282f_55%,#b3222a_100%)] text-white shadow-[0_4px_10px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:border-orange hover:bg-orange hover:bg-none xl:rounded-[calc(8*var(--spacing))] ${className}`}
    >
      <span className="flex h-full w-38 items-center justify-center border-r border-black/25 shadow-[1px_0_0_rgba(255,255,255,0.22)] xl:w-73">
        <Icon name="chevron-solid" className="size-18 xl:size-38" />
      </span>
      <span className="px-12 font-alt text-[calc(13*var(--spacing))] leading-none font-medium whitespace-nowrap tracking-[0.01em] uppercase xl:pr-22 xl:pl-14 xl:text-[calc(23*var(--spacing))]">
        {header.button.label}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open the page behind it is locked; Escape closes it.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // Zero-height sticky header: it floats over the hero / page banner and stays on top while scrolling.
    <header className="sticky top-0 z-50 h-0">
      <div
        className={`flex items-center justify-between gap-12 px-16 transition-[background-color,box-shadow,padding] duration-300 sm:px-24 xl:pr-36 xl:pl-38 ${
          scrolled ? "bg-navy py-8 shadow-[0_8px_24px_rgba(1,30,60,0.35)] xl:py-10" : "py-10 xl:py-17"
        }`}
      >
        <Link
          href="/"
          aria-label={site.name}
          onClick={() => setOpen(false)}
          className={`flex shrink-0 items-center justify-center rounded-[calc(6*var(--spacing))] bg-white px-10 transition-[height,width] duration-300 xl:rounded-[calc(10*var(--spacing))] xl:px-20 ${
            scrolled ? "h-48 w-136 xl:h-90 xl:w-254" : "h-54 w-152 sm:h-62 sm:w-175 xl:h-109 xl:w-307"
          }`}
        >
          <Image
            src={site.logo}
            alt={site.logoAlt}
            width={site.logoSize.width}
            height={site.logoSize.height}
            priority
            quality={90}
            sizes="(min-width: 1024px) 18vw, 180px"
            className="h-auto w-full"
          />
        </Link>

        <div className="flex items-center gap-14 xl:gap-43">
          <DonateButton className="hidden h-42 sm:inline-flex xl:h-68 xl:min-w-261" />
          <button
            type="button"
            aria-label={label(open ? "closeMenu" : "openMenu")}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
            className="group flex w-40 flex-col gap-5 xl:w-72 xl:gap-9"
          >
            {[0, 1, 2].map((bar) => (
              <span
                key={bar}
                className="block h-9 rounded-full border-2 border-white transition-[translate] duration-300 group-hover:translate-x-3 xl:h-14 xl:border-[length:calc(2.6*var(--spacing))] [&:nth-child(2)]:group-hover:-translate-x-3"
              />
            ))}
          </button>
        </div>
      </div>

      {/* Slide-in menu (every screen size: the design shows only the menu button) */}
      <div
        className={`fixed inset-0 z-50 bg-[#011a33]/55 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="site-menu"
        aria-label={label("mainNav")}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(86vw,360px)] flex-col overflow-y-auto overscroll-contain bg-navy text-white transition-[translate,box-shadow] duration-500 ease-out xl:w-480 ${
          open ? "translate-x-0 shadow-[-12px_0_40px_rgba(0,0,0,0.3)]" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/12 px-24 py-18 xl:px-40 xl:py-28">
          <Link href="/" aria-label={site.name} onClick={() => setOpen(false)} className="block w-150 xl:w-230">
            <Image src={site.logoWhite} alt={site.logoAlt} width={site.logoSize.width} height={site.logoSize.height} quality={90} sizes="230px" className="h-auto w-full" />
          </Link>
          <button
            type="button"
            aria-label={label("closeMenu")}
            onClick={() => setOpen(false)}
            className="flex size-40 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-orange hover:bg-orange xl:size-54"
          >
            <Icon name="close" className="size-20 xl:size-26" strokeWidth={2.2} />
          </button>
        </div>

        <ul className="flex flex-col px-24 py-12 xl:px-40 xl:py-20">
          {header.nav.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href} className="border-b border-white/10 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-center justify-between py-13 font-alt text-[calc(16*var(--spacing))] font-medium transition-colors xl:py-18 xl:text-[calc(22*var(--spacing))] ${
                    active ? "text-orange" : "text-white hover:text-orange"
                  }`}
                >
                  {link.label}
                  <Icon name="chevron-right" className="size-18 transition-transform duration-300 group-hover:translate-x-4 xl:size-22" strokeWidth={2.2} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto flex flex-col gap-14 border-t border-white/12 px-24 py-22 font-body text-[calc(14*var(--spacing))] text-white/85 xl:gap-18 xl:px-40 xl:py-32 xl:text-[max(calc(18*var(--spacing)),var(--text-min))]">
          <DonateButton onClick={() => setOpen(false)} className="inline-flex h-44 self-start sm:hidden" />
          <a href={contactHref("tel", company.phone)} className="flex items-center gap-12 transition-colors hover:text-orange">
            <Icon name="phone" className="size-18 shrink-0 text-orange xl:size-22" />
            {company.phone}
          </a>
          <a href={contactHref("mailto", company.email)} className="flex items-center gap-12 break-all transition-colors hover:text-orange">
            <Icon name="mail" className="size-18 shrink-0 text-orange xl:size-22" />
            {company.email}
          </a>
          <p className="flex items-start gap-12">
            <Icon name="pin" className="mt-1 size-18 shrink-0 text-orange xl:size-22" />
            <span className="whitespace-pre-line">{company.address}</span>
          </p>
          <ul className="flex gap-10 pt-4">
            {socials.map((social) => (
              <li key={social.icon}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label("socialProfile", { network: social.name })}
                  className="flex size-38 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange xl:size-48"
                >
                  <Icon name={social.icon} className="size-17 xl:size-22" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
