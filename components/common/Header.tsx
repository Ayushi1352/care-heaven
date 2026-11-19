'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import type { HeaderData, HeaderProps } from '@/types/templates.types';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

/** The red "Donate Now" button: a chevron block, a divider and the label. */
function DonateButton({ header, onClick, className = '' }: { header: HeaderData; onClick?: () => void; className?: string }) {
  return (
    <Link
      href={header.buttonUrl}
      onClick={onClick}
      className={`group shrink-0 items-center overflow-hidden rounded-[0.375rem] border border-[var(--color-donate-border)] bg-[linear-gradient(180deg,var(--color-donate-light)_0%,var(--color-donate)_55%,var(--color-donate-dark)_100%)] text-[var(--color-white)] shadow-[0_4px_10px_var(--color-black-28)] transition-colors duration-300 hover:border-[var(--color-donate)] hover:bg-[var(--color-white)] hover:bg-none hover:text-[var(--color-donate)] xl:rounded-[0.5rem] ${className}`}
    >
      <span className="flex h-full w-38 items-center justify-center border-r border-[var(--color-black-25)] shadow-[1px_0_0_var(--color-white-22)] xl:w-73">
        <Icon name={header.buttonIcon} className="size-18 xl:size-38" />
      </span>
      <span className="px-12 font-alt text-[0.8125rem] leading-none font-medium whitespace-nowrap tracking-[0.01em] uppercase xl:pr-22 xl:pl-14 xl:text-[1.4375rem]">
        {header.buttonText}
      </span>
    </Link>
  );
}

export const Header = ({ data: header }: HeaderProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu when another page opens (also through the browser's back / forward buttons).
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // While the menu is open the page behind it is locked; Escape closes it.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!header) return null;

  return (
    // Zero-height sticky header: it floats over the hero / page banner and stays on top while scrolling.
    <header className="sticky top-0 z-50 h-0">
      <div
        className={`flex items-center justify-between gap-12 px-16 transition-[background-color,box-shadow,padding] duration-300 sm:px-24 xl:pr-36 xl:pl-38 ${
          scrolled ? 'bg-accent py-8 shadow-[0_8px_24px_var(--color-shadow-header)] xl:py-10' : 'py-10 xl:py-17'
        }`}
      >
        <Link
          href={header.logoUrl}
          aria-label={header.logoLabel}
          onClick={() => setOpen(false)}
          className={`flex shrink-0 items-center justify-center rounded-[0.375rem] bg-[var(--color-white)] px-10 transition-[height,width] duration-300 xl:rounded-[0.625rem] xl:px-20 ${
            scrolled ? 'h-48 w-136 xl:h-90 xl:w-254' : 'h-54 w-152 sm:h-62 sm:w-175 xl:h-109 xl:w-307'
          }`}
        >
          <Image
            src={header.logo}
            alt={header.logoAlt}
            width={header.logoWidth}
            height={header.logoHeight}
            preload
            quality={90}
            sizes="(min-width: 1024px) 18vw, 180px"
            className="h-auto w-full"
          />
        </Link>

        <div className="flex items-center gap-14 xl:gap-43">
          <DonateButton header={header} className="hidden h-42 sm:inline-flex xl:h-68 xl:min-w-261" />
          <button
            type="button"
            aria-label={open ? header.closeMenuLabel : header.openMenuLabel}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
            className="group flex w-40 flex-col gap-5 xl:w-72 xl:gap-9"
          >
            {[0, 1, 2].map((bar) => (
              <span
                key={bar}
                className="block h-9 rounded-full border-2 border-[var(--color-white)] transition-[transform] duration-300 group-hover:translate-x-3 xl:h-14 xl:border-[length:0.1625rem] [&:nth-child(2)]:group-hover:-translate-x-3"
              />
            ))}
          </button>
        </div>
      </div>

      {/* Slide-in menu (every screen size: the design shows only the menu button) */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--color-menu-backdrop)] backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="site-menu"
        aria-label={header.menuLabel}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(86vw,360px)] flex-col overflow-y-auto overscroll-contain bg-accent text-[var(--color-white)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:w-480 ${
          open ? 'translate-x-0 shadow-[-12px_0_40px_var(--color-black-30)]' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-white-12)] px-24 py-18 xl:px-40 xl:py-28">
          <Link href={header.logoUrl} aria-label={header.logoLabel} onClick={() => setOpen(false)} className="block w-150 xl:w-230">
            <Image src={header.logoWhite} alt={header.logoWhiteAlt} width={header.logoWhiteWidth} height={header.logoWhiteHeight} quality={90} sizes="230px" className="h-auto w-full" />
          </Link>
          <button
            type="button"
            aria-label={header.closeMenuLabel}
            onClick={() => setOpen(false)}
            className="flex size-40 items-center justify-center rounded-full border border-[var(--color-white-30)] transition-colors hover:border-primary hover:bg-primary xl:size-54"
          >
            <Icon name={header.closeMenuIcon} className="size-20 xl:size-26" />
          </button>
        </div>

        <ul className="flex flex-col px-24 py-12 xl:px-40 xl:py-20">
          {header.navLinks.map((link) => {
            const active = isActive(pathname, link.url);
            return (
              <li key={link.id} className="border-b border-[var(--color-white-10)] last:border-b-0">
                <Link
                  href={link.url}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`group flex items-center justify-between py-13 font-alt text-[1rem] font-medium whitespace-nowrap transition-colors xl:py-18 xl:text-[1.375rem] ${
                    active ? 'text-primary' : 'text-[var(--color-white)] hover:text-primary'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  <Icon name={header.linkIcon} className="size-18 shrink-0 transition-transform duration-300 group-hover:translate-x-4 xl:size-22" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto flex flex-col gap-14 border-t border-[var(--color-white-12)] px-24 py-22 font-main text-[0.875rem] text-[var(--color-white-85)] xl:gap-18 xl:px-40 xl:py-32 xl:text-[length:max(1.125rem,var(--text-min))]">
          <DonateButton header={header} onClick={() => setOpen(false)} className="inline-flex h-44 self-start sm:hidden" />
          <a href={header.phoneUrl} className="flex items-center gap-12 transition-colors hover:text-primary">
            <Icon name={header.phoneIcon} className="size-18 shrink-0 text-primary xl:size-22" />
            {header.phone}
          </a>
          <a href={header.emailUrl} className="flex items-center gap-12 break-all transition-colors hover:text-primary">
            <Icon name={header.emailIcon} className="size-18 shrink-0 text-primary xl:size-22" />
            {header.email}
          </a>
          <p className="flex items-start gap-12">
            <Icon name={header.addressIcon} className="mt-1 size-18 shrink-0 text-primary xl:size-22" />
            <span className="whitespace-pre-line">{header.address}</span>
          </p>
          <ul className="flex gap-10 pt-4">
            {header.socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-38 items-center justify-center rounded-full bg-[var(--color-white-10)] transition-colors hover:bg-primary xl:size-48"
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
};
