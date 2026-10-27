import { Link, Navigate, useParams } from 'react-router-dom'
import {
  LuChevronRight,
  LuArrowUpRight,
  LuCircleCheck,
  LuDownload,
} from 'react-icons/lu'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[58vh] items-center overflow-hidden bg-navy-950 pt-32 pb-16 md:min-h-[62vh] md:pt-40 md:pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={product.scene}
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-navy-950/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-950/35 to-navy-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_58%_at_50%_48%,rgba(8,12,22,0.82)_0%,rgba(8,12,22,0.5)_55%,rgba(8,12,22,0.12)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-lines bg-[size:64px_64px] opacity-20" />

        <div className="container-x relative text-center text-shadow-hero">
          <nav className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <LuChevronRight className="text-[11px] text-brand-redText" />
            <Link to="/products" className="transition-colors hover:text-white">
              Products
            </Link>
            <LuChevronRight className="text-[11px] text-brand-redText" />
            <span className="text-white/90">{product.name}</span>
          </nav>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="chip !border-brand-red/30 !bg-brand-red/10 !text-brand-redLight">
              {product.family}
            </span>
            <span className="chip">{product.accent}</span>
          </div>

          <h1 className="h1 mx-auto mt-5">
            {product.name}
            <sup className="ml-1 align-super text-xl text-brand-red">{product.mark}</sup>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl font-display text-xl uppercase tracking-[0.02em] text-white/85 sm:text-2xl">
            {product.tagline}
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Visual */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="relative border border-white/10 bg-gradient-to-br from-[#eef1f4] to-[#d2d9e1] p-10">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.tagline}`}
                  className="mx-auto h-[380px] w-auto object-contain mix-blend-multiply"
                />
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-navy-900/40">
                  Aero A2Z · {product.name}
                </span>
              </div>

              <div className="mt-4 overflow-hidden border border-white/10 bg-navy-800/40">
                <img
                  src={product.scene}
                  alt={`${product.name} deployed`}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/70">
                    In service
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/45">
                    {product.name}
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="border border-white/10 bg-navy-800/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/65">
                    Coverage
                  </p>
                  <p className="mt-1.5 font-display text-2xl leading-none text-white">90°×90°</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-steel/60">
                    per radar
                  </p>
                </div>
                <div className="border border-white/10 bg-navy-800/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/65">
                    Hemisphere
                  </p>
                  <p className="mt-1.5 font-display text-2xl leading-none text-white">4×</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-steel/60">
                    overlapping units
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal delay={80}>
              <p className="text-[15.5px] leading-[1.85] text-brand-steel">{product.summary}</p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-red" />
                  <p className="eyebrow">Key features</p>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 border-b border-white/[0.06] pb-3 text-[13.5px] leading-relaxed text-brand-steel/95"
                    >
                      <LuCircleCheck className="mt-0.5 shrink-0 text-brand-red" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-brand-red" />
                    <p className="eyebrow">Radar specifications</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/55">
                    Rev. 5.2
                  </span>
                </div>

                <div className="mt-6 border-t border-white/[0.08]">
                  {product.specs.map(([k, v]) => (
                    <div key={k} className="spec-row">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-steel/70">
                        {k}
                      </span>
                      <span className="text-right text-brand-steel sm:text-left">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Request datasheet
                  <LuDownload className="text-sm" />
                </Link>
                <Link to="/products" className="btn-ghost">
                  Back to products
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/[0.07] bg-navy-950 py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Also in the family</p>
              <h2 className="h2 mt-4">Other radar systems</h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-steel/85 transition-colors hover:text-white"
            >
              View all
              <LuArrowUpRight className="text-sm text-brand-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
