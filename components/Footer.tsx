import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Sparks } from "@/components/Decor";
import { contactField, contactHref, label, site as data, socialLinks } from "@/data";

const { site, header, footer } = data;
const socials = socialLinks(footer.socials);
const half = Math.ceil(header.nav.length / 2);

export default function Footer() {
  return (
    <footer className="bg-[#0a3559] text-white">
      <div className="px-20 pt-56 sm:px-32 xl:px-72 xl:pt-72">
        <div className="grid gap-44 md:grid-cols-2 xl:grid-cols-[calc(631*var(--spacing))_calc(494*var(--spacing))_1fr] xl:gap-0">
          {/* Logo + menu links */}
          <div data-reveal="up" className="xl:pl-48">
            <Link href="/" aria-label={site.name} className="block w-260 sm:w-320 xl:w-420">
              <Image src={site.logoWhite} alt={site.logoAlt} width={site.logoSize.width} height={site.logoSize.height} quality={90} sizes="(min-width: 1024px) 25vw, 320px" className="h-auto w-full" />
            </Link>
            <p className="mt-32 font-body text-[calc(18*var(--spacing))] leading-none font-semibold tracking-[0.01em] uppercase xl:mt-35 xl:ml-19 xl:text-[calc(22*var(--spacing))]">{footer.menuTitle}</p>
            <span className="mt-12 block h-3 w-52 bg-orange xl:ml-19 xl:w-62" />
            <ul className="mt-22 grid max-w-420 grid-flow-col grid-cols-2 gap-y-12 font-body text-[calc(16*var(--spacing))] xl:mt-26 xl:ml-23 xl:max-w-none xl:grid-flow-col xl:grid-cols-[calc(262*var(--spacing))_1fr] xl:gap-y-0" style={{ gridTemplateRows: `repeat(${half}, auto)` }}>
              {header.nav.map((link) => (
                <li key={link.label} className="xl:h-38">
                  <Link href={link.href} className="group inline-flex items-center gap-12 text-white/90 transition-colors hover:text-orange xl:gap-20 xl:text-[calc(20*var(--spacing))] xl:leading-26">
                    <Icon name="chevron-right" className="size-14 text-orange transition-transform duration-300 group-hover:translate-x-3 xl:size-16" strokeWidth={3} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cards */}
          <ul data-reveal="up" className="flex flex-col gap-16 xl:mt-40 xl:gap-24">
            {footer.contactCards.map((card) => {
              const { lines, type } = contactField(card.field);
              const href = contactHref(type, lines[0]);
              const body = lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ));
              return (
                <li key={card.title} className="group flex min-h-104 items-center gap-16 rounded-[calc(8*var(--spacing))] bg-white px-16 py-18 text-navy-ink transition-transform duration-300 hover:-translate-y-3 xl:min-h-130 xl:gap-0 xl:px-20 xl:py-20">
                  <span className="flex size-64 shrink-0 items-center justify-center rounded-full bg-rose text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white xl:size-84">
                    <Icon name={card.icon} className="size-26 xl:size-34" strokeWidth={2} />
                  </span>
                  <span className="hidden h-70 w-2 shrink-0 bg-[#d9d4d0] xl:mx-24 xl:block" />
                  <span className="min-w-0 border-l border-[#d9d4d0] pl-16 xl:border-l-0 xl:pl-0">
                    <span className="block font-body text-[calc(17*var(--spacing))] font-semibold xl:text-[calc(22*var(--spacing))] xl:leading-30">{card.title}</span>
                    {href ? (
                      <a href={href} className="mt-2 block font-body text-[calc(15*var(--spacing))] break-words text-[#6a6a6a] transition-colors hover:text-orange xl:mt-4 xl:text-[calc(19*var(--spacing))] xl:leading-29">
                        {body}
                      </a>
                    ) : (
                      <span className="mt-2 block font-body text-[calc(15*var(--spacing))] text-[#6a6a6a] xl:mt-4 xl:text-[max(calc(18*var(--spacing)),var(--text-min))] xl:leading-29">{body}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Contact circle + socials */}
          <div data-reveal="up" className="flex flex-col items-center md:col-span-2 xl:col-span-1 xl:pt-100 xl:pl-36">
            <div className="relative px-40 xl:px-46">
              <Sparks className="absolute top-12 left-0 w-44 rotate-[-8deg] text-orange xl:top-14 xl:left-0 xl:w-50" />
              <Sparks className="absolute right-2 bottom-38 w-44 rotate-[150deg] text-orange xl:right-0 xl:bottom-44 xl:w-48" />
              <Link
                href={footer.contactCircle.href}
                className="group relative flex size-220 flex-col items-center justify-center rounded-full border-3 border-orange bg-white p-6 text-center shadow-[inset_0_0_0_5px_#0a3559] transition-[border-color,box-shadow] duration-300 hover:border-navy-ink hover:shadow-[inset_0_0_0_5px_#fb4c05] xl:size-296 xl:border-4 xl:shadow-[inset_0_0_0_calc(6*var(--spacing))_#0a3559] xl:hover:shadow-[inset_0_0_0_calc(6*var(--spacing))_#fb4c05]"
              >
                <span className="absolute inset-[calc(8*var(--spacing))] rounded-full bg-white" />
                <span className="relative flex flex-col items-center">
                  <HeartDoodle className="w-56 text-orange xl:w-76" />
                  <span className="mt-6 font-display text-[calc(30*var(--spacing))] leading-[1.05] text-navy-ink xl:mt-10 xl:text-[calc(40*var(--spacing))]">{footer.contactCircle.top}</span>
                  <span className="font-display text-[calc(30*var(--spacing))] leading-[1.15] text-orange xl:text-[calc(40*var(--spacing))]">{footer.contactCircle.bottom}</span>
                  <Icon name="arrow-right" className="mt-4 size-22 text-orange xl:mt-8 xl:size-30" strokeWidth={1.6} />
                </span>
              </Link>
            </div>
            <ul className="mt-28 flex gap-14 xl:mt-30 xl:gap-16">
              {socials.map((social) => (
                <li key={social.icon}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label("socialProfile", { network: social.name })}
                    className="flex size-44 items-center justify-center rounded-full bg-white/14 transition-colors duration-300 hover:bg-orange xl:size-52"
                  >
                    <Icon name={social.icon} className="size-19 xl:size-24" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-48 border-t border-white/25 py-24 xl:mt-87 xl:pt-30 xl:pb-46">
          <p className="font-body text-[calc(14*var(--spacing))] text-white/90 xl:pl-20 xl:text-[max(calc(18*var(--spacing)),var(--text-min))]">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

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
