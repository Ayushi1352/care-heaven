// Decorative shapes drawn in code (no images): sparks, leaves, the heart line and brush strokes.

type DecorProps = { className?: string };

/** Three short orange strokes radiating from a point (around the footer circle and team grid). */
export function Sparks({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M8 4l2 16M30 10l-9 13M44 30l-17 2" />
    </svg>
  );
}

/** Soft leaf spray in the top-left corner of the team section (one grey, two peach leaves). */
export function LeafSpray({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 240 390" fill="none" aria-hidden="true" className={className}>
      <path d="M8 330C-6 230 28 120 126 46c18 98-22 210-118 284Z" fill="var(--color-border)" />
      <path d="M126 46C88 150 50 240 8 330" stroke="var(--color-white)" strokeWidth="3" />
      <path d="M4 360c18-92 72-160 164-196-6 96-68 170-164 196Z" fill="var(--color-decor-leaf)" />
      <path d="M168 164C110 228 54 300 4 360" stroke="var(--color-white)" strokeWidth="3" />
      <path d="M0 384c58-64 132-92 238-80-46 62-124 92-238 80Z" fill="var(--color-decor-leaf-light)" />
      <path d="M238 304C160 320 76 350 0 384" stroke="var(--color-white)" strokeWidth="3" />
    </svg>
  );
}

/** Thin peach heart drawn as one looping line (top-right of the team section). */
export function HeartLine({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 330 290" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M4 284c70-10 132-44 178-96 34-38 48-86 30-120-14-26-46-26-62-4-10 14-14 30-24 28-12-2-14-26-36-34-26-10-50 10-42 42 12 46 70 82 112 116 34 28 78 48 120 52 18 2 34 0 48-4" />
    </svg>
  );
}

/** Light green olive branch (FAQ section corners). */
export function OliveBranch({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 200 230" fill="none" aria-hidden="true" className={className}>
      <path d="M6 222C46 170 92 108 172 20" stroke="var(--color-decor-stem)" strokeWidth="4" strokeLinecap="round" />
      <g fill="var(--color-decor-dots)">
        <path d="M150 44c-6-24 6-40 34-44-2 24-14 40-34 44Z" />
        <path d="M152 48c22-10 40-4 48 18-22 6-38 0-48-18Z" />
        <path d="M116 84c-10-24 0-44 26-52 2 26-8 44-26 52Z" />
        <path d="M120 88c22-12 42-8 54 12-22 10-40 6-54-12Z" />
        <path d="M82 124c-10-24-2-44 24-54 4 26-6 44-24 54Z" />
        <path d="M86 128c22-10 42-6 54 14-24 10-42 6-54-14Z" />
        <path d="M48 166c-12-22-6-44 20-56 6 26-2 46-20 56Z" />
        <path d="M52 170c22-8 42-2 52 18-24 8-42 2-52-18Z" />
        <path d="M18 206c-12-20-8-40 14-52 8 22 2 42-14 52Z" />
      </g>
    </svg>
  );
}

/** Peach leaves (contact page corners, testimonial background). */
export function SoftLeaves({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 220 200" fill="none" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <path d="M100 196C70 150 70 92 110 40c26 52 22 108-10 156Z" />
        <path d="M96 196C74 160 40 140 4 140c14 36 48 56 92 56Z" />
        <path d="M104 196c24-38 60-60 110-62-16 40-56 62-110 62Z" />
        <path d="M100 194c-34-26-58-66-60-112 40 18 60 60 60 112Z" opacity=".75" />
        <path d="M104 194c32-30 50-72 46-116-38 22-52 66-46 116Z" opacity=".75" />
      </g>
    </svg>
  );
}

/** Dry-brush stroke texture (contact page top-right corner). */
export function BrushStroke({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 260 200" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M40 190C90 130 160 70 250 6" strokeWidth="16" opacity=".55" />
      <path d="M70 196C120 140 180 92 258 40" strokeWidth="10" opacity=".45" />
      <path d="M20 170C70 110 120 60 200 4" strokeWidth="7" opacity=".4" />
      <path d="M110 198c40-40 90-76 148-106" strokeWidth="5" opacity=".35" />
      <path d="M96 150c40-40 80-70 130-100" strokeWidth="3" opacity=".35" />
    </svg>
  );
}

/** A single veined leaf (bottom-right of the cause title card). */
export function LeafSprig({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 80 110" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M40 108C30 80 34 40 52 4c14 34 10 74-12 104Z" />
      <path d="M38 108C28 92 14 84 0 84c4 18 18 26 38 24Z" />
      <path d="M42 108c8-22 22-34 38-36-2 20-16 32-38 36Z" />
      <path d="M38 100c-14-12-22-30-22-52 18 10 26 28 22 52Z" opacity=".8" />
    </svg>
  );
}
