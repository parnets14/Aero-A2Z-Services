import { Link } from 'react-router-dom'
import { HiOutlineChevronRight } from 'react-icons/hi2'

export default function PageHero({ eyebrow, title, accent, subtitle, image, crumb }) {
  return (
    <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-navy-950 pt-32 pb-16 md:min-h-[64vh] md:pt-40 md:pb-20">
      {/* full-bleed banner image */}
      {image && (
        <div className="absolute inset-0 -z-20">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </div>
      )}

      {/* scrims — dark behind the text, photo still clearly visible at the edges */}
      <div className="absolute inset-0 -z-10 bg-navy-950/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-950/35 to-navy-900" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_58%_at_50%_48%,rgba(8,12,22,0.82)_0%,rgba(8,12,22,0.5)_55%,rgba(8,12,22,0.12)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-lines bg-[size:64px_64px] opacity-20" />

      <div className="container-x relative text-center text-shadow-hero">
        <nav className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <HiOutlineChevronRight className="text-[11px] text-brand-redText" />
          <span className="text-white/90">{crumb || title}</span>
        </nav>

        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-brand-red/70 sm:w-12" />
          <p className="eyebrow">{eyebrow}</p>
          <span className="h-px w-8 bg-brand-red/70 sm:w-12" />
        </div>

        <h1 className="h1 mx-auto mt-5 max-w-4xl text-balance">
          {title} {accent && <span className="text-brand-red">{accent}</span>}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/85">
            {subtitle}
          </p>
        )}
      </div>

      {/* fade into the page body */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
    </section>
  )
}
