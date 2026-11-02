"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { contactHref } from "@/components/ui/helpers";
import type { CompanyData, GlobalUIData, HeaderData, LinkData } from "@/types/templates.types";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** The red "Donate Now" button: a chevron block, a divider and the label. */
function DonateButton({ button, onClick, className = "" }: { button: LinkData; onClick?: () => void; className?: string }) {
  return (
    <Link
      href={button.href}
      onClick={onClick}
      className={`group shrink-0 items-center overflow-hidden rounded-[0.375rem] border border-[var(--color-red-e2474c)] bg-[linear-gradient(180deg,var(--color-red-dc3a40)_0%,var(--color-red)_55%,var(--color-red-b3222a)_100%)] text-[var(--color-white)] shadow-[0_4px_10px_var(--color-black-28)] transition-colors duration-300 hover:border-[var(--color-red)] hover:bg-[var(--color-white)] hover:bg-none hover:text-[var(--color-red)] xl:rounded-[0.5rem] ${className}`}
    >
      <span className="flex h-full w-[2.375rem] items-center justify-center border-r border-[var(--color-black-25)] shadow-[1px_0_0_var(--color-white-22)] xl:w-[4.5625rem]">
        <Icon name="FaChevronRight" className="size-[1.125rem] xl:size-[2.375rem]" />
      </span>
      <span className="px-[0.75rem] font-alt text-[0.8125rem] leading-none font-medium whitespace-nowrap tracking-[0.01em] uppercase xl:pr-[1.375rem] xl:pl-[0.875rem] xl:text-[1.4375rem]">
        {button.label}
      </span>
    </Link>
  );
}

export const Header = ({ data: header, company, ui }: { data?: HeaderData; company?: CompanyData; ui?: GlobalUIData }) => {
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

  if (!header || !company) return null;

  return (
    // Zero-height sticky header: it floats over the hero / page banner and stays on top while scrolling.
    <header className="sticky top-0 z-50 h-0">
      <div
        className={`flex items-center justify-between gap-[0.75rem] px-[1rem] transition-[background-color,box-shadow,padding] duration-300 sm:px-[1.5rem] xl:pr-[2.25rem] xl:pl-[2.375rem] ${
          scrolled ? "bg-[var(--color-navy)] py-[0.5rem] shadow-[0_8px_24px_var(--color-shadow-011e3c-35)] xl:py-[0.625rem]" : "py-[0.625rem] xl:py-[1.0625rem]"
        }`}
      >
        <Link
          href={header.logoUrl}
          aria-label={header.siteName}
          onClick={() => setOpen(false)}
          className={`flex shrink-0 items-center justify-center rounded-[0.375rem] bg-[var(--color-white)] px-[0.625rem] transition-[height,width] duration-300 xl:rounded-[0.625rem] xl:px-[1.25rem] ${
            scrolled ? "h-[3rem] w-[8.5rem] xl:h-[5.625rem] xl:w-[15.875rem]" : "h-[3.375rem] w-[9.5rem] sm:h-[3.875rem] sm:w-[10.9375rem] xl:h-[6.8125rem] xl:w-[19.1875rem]"
          }`}
        >
          <Image
            src={header.logo}
            alt={header.logoAlt}
            width={header.logoSize.width}
            height={header.logoSize.height}
            preload
            quality={90}
            sizes="(min-width: 1024px) 18vw, 180px"
            className="h-auto w-full"
          />
        </Link>

        <div className="flex items-center gap-[0.875rem] xl:gap-[2.6875rem]">
          <DonateButton button={header.button} className="hidden h-[2.625rem] sm:inline-flex xl:h-[4.25rem] xl:min-w-[16.3125rem]" />
          <button
            type="button"
            aria-label={open ? ui?.closeMenu : ui?.openMenu}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
            className="group flex w-[2.5rem] flex-col gap-[0.3125rem] xl:w-[4.5rem] xl:gap-[0.5625rem]"
          >
            {[0, 1, 2].map((bar) => (
              <span
                key={bar}
                className="block h-[0.5625rem] rounded-full border-2 border-[var(--color-white)] transition-[transform] duration-300 group-hover:translate-x-[0.1875rem] xl:h-[0.875rem] xl:border-[length:0.1625rem] [&:nth-child(2)]:group-hover:-translate-x-[0.1875rem]"
              />
            ))}
          </button>
        </div>
      </div>

      {/* Slide-in menu (every screen size: the design shows only the menu button) */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--color-blue-011a33-55)] backdrop-blur-[2px] transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="site-menu"
        aria-label={ui?.mainNav}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(86vw,360px)] flex-col overflow-y-auto overscroll-contain bg-[var(--color-navy)] text-[var(--color-white)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:w-[30rem] ${
          open ? "translate-x-0 shadow-[-12px_0_40px_var(--color-black-30)]" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-white-12)] px-[1.5rem] py-[1.125rem] xl:px-[2.5rem] xl:py-[1.75rem]">
          <Link href={header.logoUrl} aria-label={header.siteName} onClick={() => setOpen(false)} className="block w-[9.375rem] xl:w-[14.375rem]">
            <Image src={header.logoWhite} alt={header.logoAlt} width={header.logoSize.width} height={header.logoSize.height} quality={90} sizes="230px" className="h-auto w-full" />
          </Link>
          <button
            type="button"
            aria-label={ui?.closeMenu}
            onClick={() => setOpen(false)}
            className="flex size-[2.5rem] items-center justify-center rounded-full border border-[var(--color-white-30)] transition-colors hover:border-[var(--color-orange)] hover:bg-[var(--color-orange)] xl:size-[3.375rem]"
          >
            <Icon name="FaTimes" className="size-[1.25rem] xl:size-[1.625rem]" />
          </button>
        </div>

        <ul className="flex flex-col px-[1.5rem] py-[0.75rem] xl:px-[2.5rem] xl:py-[1.25rem]">
          {header.nav.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.id} className="border-b border-[var(--color-white-10)] last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-center justify-between py-[0.8125rem] font-alt text-[1rem] font-medium transition-colors xl:py-[1.125rem] xl:text-[1.375rem] ${
                    active ? "text-[var(--color-orange)]" : "text-[var(--color-white)] hover:text-[var(--color-orange)]"
                  }`}
                >
                  {link.label}
                  <Icon name="FaChevronRight" className="size-[1.125rem] transition-transform duration-300 group-hover:translate-x-[0.25rem] xl:size-[1.375rem]" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto flex flex-col gap-[0.875rem] border-t border-[var(--color-white-12)] px-[1.5rem] py-[1.375rem] font-sans text-[0.875rem] text-[var(--color-white-85)] xl:gap-[1.125rem] xl:px-[2.5rem] xl:py-[2rem] xl:text-[length:max(1.125rem,var(--text-min))]">
          <DonateButton button={header.button} onClick={() => setOpen(false)} className="inline-flex h-[2.75rem] self-start sm:hidden" />
          <a href={contactHref("tel", company.phone)} className="flex items-center gap-[0.75rem] transition-colors hover:text-[var(--color-orange)]">
            <Icon name="FaPhoneAlt" className="size-[1.125rem] shrink-0 text-[var(--color-orange)] xl:size-[1.375rem]" />
            {company.phone}
          </a>
          <a href={contactHref("mailto", company.email)} className="flex items-center gap-[0.75rem] break-all transition-colors hover:text-[var(--color-orange)]">
            <Icon name="FaEnvelope" className="size-[1.125rem] shrink-0 text-[var(--color-orange)] xl:size-[1.375rem]" />
            {company.email}
          </a>
          <p className="flex items-start gap-[0.75rem]">
            <Icon name="FaMapMarkerAlt" className="mt-[0.0625rem] size-[1.125rem] shrink-0 text-[var(--color-orange)] xl:size-[1.375rem]" />
            <span className="whitespace-pre-line">{company.address}</span>
          </p>
          <ul className="flex gap-[0.625rem] pt-[0.25rem]">
            {company.socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-[2.375rem] items-center justify-center rounded-full bg-[var(--color-white-10)] transition-colors hover:bg-[var(--color-orange)] xl:size-[3rem]"
                >
                  <Icon name={social.icon} className="size-[1.0625rem] xl:size-[1.375rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
