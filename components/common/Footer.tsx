import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Sparks } from "@/components/ui/Decor";
import { contactField, contactHref } from "@/components/ui/helpers";
import type { CompanyData, FooterData, NavLink } from "@/types/templates.types";

export const Footer = ({ data: footer, company, links }: { data?: FooterData; company?: CompanyData; links?: NavLink[] }) => {
  if (!footer || !company) return null;
  const nav = links ?? [];
  const half = Math.ceil(nav.length / 2);

  return (
    <footer className="bg-[var(--color-blue-0a3559)] text-[var(--color-white)]">
      <div className="px-[1.25rem] pt-[3.5rem] sm:px-[2rem] xl:px-[4.5rem] xl:pt-[4.5rem]">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-[2.75rem] md:grid-cols-2 xl:grid-cols-[39.4375rem_30.875rem_1fr] xl:gap-0">
          {/* Logo + menu links */}
          <div data-reveal="up" className="xl:pl-[3rem]">
            <Link href={footer.logoUrl} aria-label={footer.siteName} className="block w-[16.25rem] max-w-full sm:w-[20rem] xl:w-[26.25rem]">
              <Image src={footer.logo} alt={footer.logoAlt} width={footer.logoSize.width} height={footer.logoSize.height} quality={90} sizes="(min-width: 1024px) 25vw, 320px" className="h-auto w-full" />
            </Link>
            <p className="mt-[2rem] font-sans text-[1.125rem] leading-none font-semibold tracking-[0.01em] uppercase xl:mt-[2.1875rem] xl:ml-[1.1875rem] xl:text-[1.375rem]">{footer.menuTitle}</p>
            <span className="mt-[0.75rem] block h-[0.1875rem] w-[3.25rem] bg-[var(--color-orange)] xl:ml-[1.1875rem] xl:w-[3.875rem]" />
            <ul className="mt-[1.375rem] grid max-w-[26.25rem] grid-flow-col grid-cols-2 gap-y-[0.75rem] font-sans text-[1rem] xl:mt-[1.625rem] xl:ml-[1.4375rem] xl:max-w-none xl:grid-flow-col xl:grid-cols-[16.375rem_1fr] xl:gap-y-0" style={{ gridTemplateRows: `repeat(${half}, auto)` }}>
              {nav.map((link) => (
                <li key={link.id} className="xl:h-[2.375rem]">
                  <Link href={link.href} className="group inline-flex items-center gap-[0.75rem] text-[var(--color-white-90)] transition-colors hover:text-[var(--color-orange)] xl:gap-[1.25rem] xl:text-[1.25rem] xl:leading-[1.625rem]">
                    <Icon name="FaChevronRight" className="size-[0.875rem] text-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-[0.1875rem] xl:size-[1rem]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cards */}
          <ul data-reveal="up" className="flex flex-col gap-[1rem] xl:mt-[2.5rem] xl:gap-[1.5rem]">
            {footer.contactCards.map((card) => {
              const { lines, type } = contactField(company, card.field);
              const href = contactHref(type, lines[0]);
              const body = lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ));
              return (
                <li key={card.id} className="group flex min-h-[6.5rem] items-center gap-[1rem] rounded-[0.5rem] bg-[var(--color-white)] px-[1rem] py-[1.125rem] text-[var(--color-navy-ink)] transition-transform duration-300 hover:-translate-y-[0.1875rem] xl:min-h-[8.125rem] xl:gap-0 xl:px-[1.25rem] xl:py-[1.25rem]">
                  <span className="flex size-[4rem] shrink-0 items-center justify-center rounded-full bg-[var(--color-rose)] text-[var(--color-orange)] transition-colors duration-300 group-hover:bg-[var(--color-orange)] group-hover:text-[var(--color-white)] xl:size-[5.25rem]">
                    <Icon name={card.icon} className="size-[1.625rem] xl:size-[2.125rem]" />
                  </span>
                  <span className="hidden h-[4.375rem] w-[0.125rem] shrink-0 bg-[var(--color-gray-d9d4d0)] xl:mx-[1.5rem] xl:block" />
                  <span className="min-w-0 border-l border-[var(--color-gray-d9d4d0)] pl-[1rem] xl:border-l-0 xl:pl-0">
                    <span className="block font-sans text-[1.0625rem] font-semibold xl:text-[1.375rem] xl:leading-[1.875rem]">{card.title}</span>
                    {href ? (
                      <a href={href} className="mt-[0.125rem] block font-sans text-[0.9375rem] break-words text-[var(--color-gray-6a6a6a)] transition-colors hover:text-[var(--color-orange)] xl:mt-[0.25rem] xl:text-[1.1875rem] xl:leading-[1.8125rem]">
                        {body}
                      </a>
                    ) : (
                      <span className="mt-[0.125rem] block font-sans text-[0.9375rem] text-[var(--color-gray-6a6a6a)] xl:mt-[0.25rem] xl:text-[length:max(1.125rem,var(--text-min))] xl:leading-[1.8125rem]">{body}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Contact circle + socials */}
          <div data-reveal="up" className="flex flex-col items-center md:col-span-2 xl:col-span-1 xl:pt-[6.25rem] xl:pl-[2.25rem]">
            <div className="relative px-[0.5rem] min-[340px]:px-[2.5rem] xl:px-[2.875rem]">
              <Sparks className="absolute top-[0.75rem] left-0 w-[2.75rem] rotate-[-8deg] text-[var(--color-orange)] xl:top-[0.875rem] xl:left-0 xl:w-[3.125rem]" />
              <Sparks className="absolute right-[0.125rem] bottom-[2.375rem] w-[2.75rem] rotate-[150deg] text-[var(--color-orange)] xl:right-0 xl:bottom-[2.75rem] xl:w-[3rem]" />
              <Link
                href={footer.contactCircle.href}
                className="group relative flex size-[13.75rem] flex-col items-center justify-center rounded-full border-[3px] border-[var(--color-orange)] bg-[var(--color-white)] p-[0.375rem] text-center shadow-[inset_0_0_0_5px_var(--color-blue-0a3559)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--color-navy-ink)] hover:shadow-[inset_0_0_0_5px_var(--color-orange)] xl:size-[18.5rem] xl:border-4 xl:shadow-[inset_0_0_0_0.375rem_var(--color-blue-0a3559)] xl:hover:shadow-[inset_0_0_0_0.375rem_var(--color-orange)]"
              >
                <span className="absolute inset-[0.5rem] rounded-full bg-[var(--color-white)]" />
                <span className="relative flex flex-col items-center">
                  <HeartDoodle className="w-[3.5rem] text-[var(--color-orange)] xl:w-[4.75rem]" />
                  <span className="mt-[0.375rem] font-display text-[1.875rem] leading-[1.05] text-[var(--color-navy-ink)] xl:mt-[0.625rem] xl:text-[2.5rem]">{footer.contactCircle.top}</span>
                  <span className="font-display text-[1.875rem] leading-[1.15] text-[var(--color-orange)] xl:text-[2.5rem]">{footer.contactCircle.bottom}</span>
                  <Icon name="FaArrowRight" className="mt-[0.25rem] size-[1.375rem] text-[var(--color-orange)] xl:mt-[0.5rem] xl:size-[1.875rem]" />
                </span>
              </Link>
            </div>
            <ul className="mt-[1.75rem] flex flex-wrap justify-center gap-[0.875rem] xl:mt-[1.875rem] xl:gap-[1rem]">
              {company.socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-[2.75rem] items-center justify-center rounded-full bg-[var(--color-white-14)] transition-colors duration-300 hover:bg-[var(--color-orange)] xl:size-[3.25rem]"
                  >
                    <Icon name={social.icon} className="size-[1.1875rem] xl:size-[1.5rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[3rem] border-t border-[var(--color-white-25)] py-[1.5rem] xl:mt-[5.4375rem] xl:pt-[1.875rem] xl:pb-[2.875rem]">
          <p className="font-sans text-[0.875rem] text-[var(--color-white-90)] xl:pl-[1.25rem] xl:text-[length:max(1.125rem,var(--text-min))]">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

/** Hand-drawn heart with two little dashes, above "CONTACT US". */
function HeartDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 52" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M30 48C19 37 8 27 9.5 15.5 11 6 22 3.5 28 12.5c2.5-9.5 15-11 17.5-1.5C48 21 39 33 30 48Z" />
      <path d="M30 48c4-7 9-12 16-15" />
      <path d="M56 22.5l9-2.5M57 30.5l8.5.5" />
    </svg>
  );
}
