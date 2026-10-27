import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'

export default function ProductCard({ product, index }) {
  const mass = product.specs.find((s) => s[0] === 'Weight')?.[1]

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden border border-white/[0.07] bg-navy-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/40 hover:bg-navy-700/70 hover:shadow-card"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#f8fafc,#dfe5ec)]">
        <img
          src={product.image}
          alt={`${product.name} ${product.tagline}`}
          loading="lazy"
          className="h-full w-full object-contain p-7 mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-0 top-0 border-b border-r border-white/10 bg-navy-950/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-steel/85 backdrop-blur">
          {product.family}
        </span>
        <span className="absolute right-3 top-3 font-mono text-[11px] tracking-[0.2em] text-navy-900/25">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand-red transition-transform duration-500 group-hover:scale-x-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl uppercase leading-none tracking-tight text-white">
            {product.name}
            <span className="align-super text-[11px] text-brand-redText">{product.mark}</span>
          </h3>
          <span className="mt-0.5 shrink-0 border border-brand-red/30 bg-brand-red/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-redLight">
            {product.accent}
          </span>
        </div>
        <p className="mt-2 text-[12.5px] font-medium uppercase leading-relaxed tracking-[0.08em] text-brand-steel/70">
          {product.tagline}
        </p>
        <p className="mt-4 line-clamp-3 text-[14px] leading-relaxed text-brand-steel/85">
          {product.summary}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.07] pt-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-steel/65">
            Mass · <span className="text-brand-steel/95">{mass}</span>
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-redText opacity-0 transition-all duration-300 group-hover:opacity-100">
            View <LuArrowUpRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  )
}
