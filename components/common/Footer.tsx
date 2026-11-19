import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Sparks } from '@/components/ui/Decor';
import { fill, lines } from '@/components/ui/text';
import type { FooterProps } from '@/types/templates.types';

// Tailwind only sees complete class names, so the row count of the two-column menu (half the links, rounded up) is picked from this list.
const menuRows = ['', 'grid-rows-[repeat(1,auto)]', 'grid-rows-[repeat(2,auto)]', 'grid-rows-[repeat(3,auto)]', 'grid-rows-[repeat(4,auto)]', 'grid-rows-[repeat(5,auto)]', 'grid-rows-[repeat(6,auto)]'];

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  'use cache';
  return new Date().getFullYear();
}

export const Footer = async ({ data: footer }: FooterProps) => {
  if (!footer) return null;
  const copyright = fill(footer.copyrightText, { year: await currentYear() });
  const nav = footer.quickLinks.links;
  const rows = menuRows[Math.min(Math.ceil(nav.length / 2), menuRows.length - 1)];

  return (
    <footer className="bg-[var(--color-footer-ring)] text-[var(--color-white)]">
      <div className="px-20 pt-56 sm:px-32 xl:px-72 xl:pt-72">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-44 md:grid-cols-2 xl:grid-cols-[39.4375rem_30.875rem_1fr] xl:gap-0">
          {/* Logo + menu links */}
          <div data-reveal="up" className="xl:pl-48">
            <Link href={footer.logoUrl} aria-label={footer.logoLabel} className="block w-260 max-w-full sm:w-320 xl:w-420">
              <Image src={footer.logo} alt={footer.logoAlt} width={footer.logoWidth} height={footer.logoHeight} quality={90} sizes="(min-width: 1024px) 25vw, 320px" className="h-auto w-full" />
            </Link>
            <p className="mt-32 font-main text-[1.125rem] leading-none font-semibold tracking-[0.01em] uppercase xl:mt-35 xl:ml-19 xl:text-[1.375rem]">{footer.quickLinks.title}</p>
            <span className="mt-12 block h-3 w-52 bg-primary xl:ml-19 xl:w-62" />
            <ul className={`mt-22 grid max-w-420 grid-flow-col grid-cols-2 gap-x-20 gap-y-12 font-main text-[1rem] sm:gap-x-32 xl:mt-26 xl:ml-23 xl:max-w-none xl:grid-flow-col xl:grid-cols-[16.375rem_1fr] xl:gap-y-0 ${rows}`}>
              {nav.map((link) => (
                <li key={link.id} className="xl:h-38">
                  <Link href={link.url} className="group inline-flex items-center gap-12 whitespace-nowrap text-[var(--color-white-90)] transition-colors hover:text-primary xl:gap-20 xl:text-[1.25rem] xl:leading-26">
                    <Icon name={footer.linkIcon} className="size-14 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-3 xl:size-16" />
                    <span className="whitespace-nowrap">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cards */}
          <ul data-reveal="up" className="flex flex-col gap-16 xl:mt-40 xl:gap-24">
            {footer.contactItems.map((card) => {
              const body = lines(card.text).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ));
              return (
                <li key={card.id} className="group flex min-h-104 items-center gap-16 rounded-[0.5rem] bg-[var(--color-white)] px-16 py-18 text-accent-dark transition-transform duration-300 hover:-translate-y-3 xl:min-h-130 xl:gap-0 xl:px-20 xl:py-20">
                  <span className="flex size-64 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-subtle)] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-[var(--color-white)] xl:size-84">
                    <Icon name={card.icon} className="size-26 xl:size-34" />
                  </span>
                  <span className="hidden h-70 w-2 shrink-0 bg-[var(--color-footer-divider)] xl:mx-24 xl:block" />
                  <span className="min-w-0 border-l border-[var(--color-footer-divider)] pl-16 xl:border-l-0 xl:pl-0">
                    <span className="block font-main text-[1.0625rem] font-semibold xl:text-[1.375rem] xl:leading-30">{card.title}</span>
                    {card.url ? (
                      <a href={card.url} className="mt-2 block font-main text-[0.9375rem] break-words text-[var(--color-footer-text)] transition-colors hover:text-primary xl:mt-4 xl:text-[1.1875rem] xl:leading-29">
                        {body}
                      </a>
                    ) : (
                      <span className="mt-2 block font-main text-[0.9375rem] text-[var(--color-footer-text)] xl:mt-4 xl:text-[length:max(1.125rem,var(--text-min))] xl:leading-29">{body}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Contact circle + socials */}
          <div data-reveal="up" className="flex flex-col items-center md:col-span-2 xl:col-span-1 xl:pt-100 xl:pl-36">
            <div className="relative px-8 min-[340px]:px-40 xl:px-46">
              <Sparks className="absolute top-12 left-0 w-44 rotate-[-8deg] text-primary xl:top-14 xl:left-0 xl:w-50" />
              <Sparks className="absolute right-2 bottom-38 w-44 rotate-[150deg] text-primary xl:right-0 xl:bottom-44 xl:w-48" />
              <Link
                href={footer.contactCircle.url}
                className="group relative flex size-220 flex-col items-center justify-center rounded-full border-[3px] border-primary bg-[var(--color-white)] p-6 text-center shadow-[inset_0_0_0_5px_var(--color-footer-ring)] transition-[border-color,box-shadow] duration-300 hover:border-accent-dark hover:shadow-[inset_0_0_0_5px_var(--color-primary)] xl:size-296 xl:border-4 xl:shadow-[inset_0_0_0_0.375rem_var(--color-footer-ring)] xl:hover:shadow-[inset_0_0_0_0.375rem_var(--color-primary)]"
              >
                <span className="absolute inset-8 rounded-full bg-[var(--color-white)]" />
                <span className="relative flex flex-col items-center">
                  <HeartDoodle className="w-56 text-primary xl:w-76" />
                  <span className="mt-6 font-display text-[1.875rem] leading-[1.05] text-accent-dark xl:mt-10 xl:text-[2.5rem]">{footer.contactCircle.top}</span>
                  <span className="font-display text-[1.875rem] leading-[1.15] text-primary xl:text-[2.5rem]">{footer.contactCircle.bottom}</span>
                  <Icon name={footer.contactCircle.icon} className="mt-4 size-22 text-primary xl:mt-8 xl:size-30" />
                </span>
              </Link>
            </div>
            <ul className="mt-28 flex flex-wrap justify-center gap-14 xl:mt-30 xl:gap-16">
              {footer.socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-44 items-center justify-center rounded-full bg-[var(--color-white-14)] transition-colors duration-300 hover:bg-primary xl:size-52"
                  >
                    <Icon name={social.icon} className="size-19 xl:size-24" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-48 border-t border-[var(--color-white-25)] py-24 xl:mt-87 xl:pt-30 xl:pb-46">
          <p className="font-main text-[0.875rem] text-[var(--color-white-90)] xl:pl-20 xl:text-[length:max(1.125rem,var(--text-min))]">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

/** Hand-drawn heart with two little dashes, above "CONTACT US". */
function HeartDoodle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 52" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M30 48C19 37 8 27 9.5 15.5 11 6 22 3.5 28 12.5c2.5-9.5 15-11 17.5-1.5C48 21 39 33 30 48Z" />
      <path d="M30 48c4-7 9-12 16-15" />
      <path d="M56 22.5l9-2.5M57 30.5l8.5.5" />
    </svg>
  );
}
