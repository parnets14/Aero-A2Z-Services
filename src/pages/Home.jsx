import { Link } from 'react-router-dom'
import {
  LuArrowRight,
  LuArrowUpRight,
  LuShieldCheck,
  LuRadar,
  LuAntenna,
  LuActivity,
  LuLock,
  LuZap,
} from 'react-icons/lu'
import { HiOutlineCheckCircle } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'
import { products, applications, capabilities } from '../data/products'
import heroBg from '../assets/products/exmhr.jpg'
import heroPanel from '../assets/products/nmhr_field.jpg'
import aboutImg from '../assets/products/iemhr_b.jpg'
import waveBg from '../assets/products/cxmhr.jpg'
import makeInIndia from '../assets/products/p1_e.jpg'
import appsImg from '../assets/products/achr_b.jpg'

const stats = [
  { value: '05', label: 'Radar systems in family' },
  { value: '360°', label: 'Hemispheric coverage' },
  { value: '−40/+55', label: '°C operating range' },
  { value: '100%', label: 'Designed & built in India' },
]

const capIcons = { aesa: LuAntenna, gan: LuZap, doppler: LuActivity, eccm: LuLock }

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-950 pt-28 pb-16 md:pt-32">
        <div className="absolute inset-0 -z-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover object-center opacity-25" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900 via-transparent to-navy-950/80" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-lines bg-[size:72px_72px] opacity-[0.35]" />

        {/* radar sweep rings */}
        <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 hidden -translate-y-1/2 lg:block">
          <div className="relative h-[620px] w-[620px]">
            {[1, 0.78, 0.56, 0.34].map((s, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-red/15"
                style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red" />
            <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-brand-red/60 to-transparent" />
          </div>
        </div>

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="animate-rise">
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip !border-brand-red/30 !bg-brand-red/10 !text-brand-redLight">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
                Powered by DRS RADA Technologies
              </span>
              <span className="chip">Make in India</span>
            </div>

            <h1 className="h1 mt-7">
              Mission critical
              <br />
              <span className="text-brand-red">radar systems</span>
              <br />
              engineered in India.
            </h1>

            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-brand-steel/95">
              Aero A2Z Services designs and manufactures hemispheric radar systems for
              counter-UAS, counter-RAM, vehicle and maritime protection — built on AESA
              architecture, GaN switching and software-defined signal processing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/products" className="btn-primary">
                Explore radar systems
                <LuArrowRight className="text-sm" />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Request a briefing
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl leading-none text-white">{s.value}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-brand-steel/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative hidden animate-rise lg:block" style={{ animationDelay: '150ms' }}>
            <div className="relative border border-white/10 bg-navy-800/40 p-3 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img
                  src={heroPanel}
                  alt="nMHR hemispheric radar deployed in the field"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/25" />
                <div className="absolute left-4 top-4 flex items-center gap-2 bg-navy-950/85 px-2.5 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
                    System active
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent p-5 pt-20">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-redText">
                    Flagship platform
                  </p>
                  <p className="mt-1 font-display text-3xl uppercase leading-none text-white">
                    nMHR<sup className="text-xs text-brand-redText">®</sup>
                  </p>
                  <p className="mt-1.5 text-[13px] uppercase tracking-[0.1em] text-brand-steel">
                    Next-gen multi-mission hemispheric radar
                  </p>
                </div>
              </div>

              {/* corner brackets */}
              <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-brand-red" />
              <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-brand-red" />
              <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-brand-red" />
              <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-brand-red" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {['AESA', 'GaN', '90° × 90°'].map((t) => (
                <div
                  key={t}
                  className="border border-white/10 bg-navy-800/60 px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-brand-steel/85"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y border-white/[0.07] bg-navy-950">
        <div className="container-x flex flex-col items-start justify-between gap-5 py-6 md:flex-row md:items-center md:gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-steel/60">
            Trusted engineering partnership
          </p>
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:w-auto md:flex-wrap md:items-center md:justify-end md:gap-x-9 md:gap-y-3">
            {[
              'DRS RADA Technologies',
              'Make in India',
              'MIL-STD-1275E',
              'ASTERIX',
              'RMF Cyber Ready',
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-steel/75"
              >
                <LuShieldCheck className="text-brand-red/80" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT TEASER ================= */}
      <section className="relative overflow-hidden py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden border border-white/10">
                <img
                  src={aboutImg}
                  alt="Radar sensor deployed on a mobile mast"
                  className="h-[440px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden w-48 overflow-hidden border border-white/15 bg-navy-950 p-2 sm:block">
                <img src={makeInIndia} alt="Make in India" className="w-full object-cover" />
              </div>
              <div className="absolute -left-4 top-8 hidden border border-brand-red/40 bg-navy-950/90 px-4 py-3 backdrop-blur sm:block">
                <p className="font-display text-2xl leading-none text-white">New Delhi</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/70">
                  Registered office
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Who we are"
              title="A radar house built for"
              accent="the modern threat."
              text="Aero A2Z Services Pvt Ltd manufactures mission critical radar systems from its facility at Ansal Pioneer Industrial Park, Gurugram. Working alongside DRS RADA Technologies, we deliver hemispheric radar that detects, classifies and cues — from small unmanned systems to ballistic threats."
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'AESA arrays with no moving parts',
                'Passive cooling across the family',
                'Software-defined, ASTERIX native',
                'Cyber Certification (RMF) ready',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] text-brand-steel/95">
                  <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-brand-red" />
                  {t}
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 border-b border-brand-red/40 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:border-brand-red"
            >
              About the company
              <LuArrowUpRight className="text-sm text-brand-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="relative border-y border-white/[0.07] bg-navy-950 py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Radar systems"
                title="One family."
                accent="Every mission profile."
                text="From compact vehicle-mounted sensors to 2,500 W wide-area surveillance radars — a common architecture, a common interface, scalable coverage."
              />
            </Reveal>
            <Reveal delay={100}>
              <Link to="/products" className="btn-ghost shrink-0">
                All products
                <LuArrowRight className="text-sm" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}

            <Reveal delay={products.length * 70}>
              <Link
                to="/products"
                className="group relative flex h-full min-h-[320px] flex-col overflow-hidden border border-white/[0.07] bg-navy-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/40 hover:bg-navy-700/70 hover:shadow-card"
              >
                {/* photo panel — matches the product-card rhythm */}
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-navy-950">
                  <img
                    src={appsImg}
                    alt="Radar-equipped vehicles deployed in the field"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/55 to-transparent" />

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center border border-brand-red/50 bg-navy-950/75 text-brand-red backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                    <LuRadar className="text-base" />
                  </div>

                  <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                    In the field
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand-red transition-transform duration-500 group-hover:scale-x-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-2xl uppercase leading-[1.05] text-white">
                    Mission
                    <br />
                    applications
                  </p>

                  <ul className="mt-4 grid gap-2 border-t border-white/[0.08] pt-4">
                    {applications.slice(0, 5).map((a) => (
                      <li
                        key={a.title}
                        className="flex items-start gap-2.5 text-[12px] uppercase leading-snug tracking-[0.05em] text-brand-steel"
                      >
                        <span className="mt-[7px] h-px w-2.5 shrink-0 bg-brand-red" />
                        {a.title}
                      </li>
                    ))}
                    <li className="flex items-start gap-2.5 text-[12px] uppercase tracking-[0.05em] text-brand-steel/60">
                      <span className="mt-[7px] h-px w-2.5 shrink-0 bg-white/25" />
                      + five more
                    </li>
                  </ul>

                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-redText">
                    View applications
                    <LuArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES (wave bg) ================= */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-20">
          <img src={waveBg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-navy-950/90" />

        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Technology"
              title="Engineering that survives"
              accent="the edge of the envelope."
              align="center"
              text="Every design decision in the family is driven by one requirement: detect first, classify correctly, and keep operating where other sensors stop."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => {
              const Cmp = capIcons[c.icon] || LuAntenna
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="group h-full border border-white/10 bg-navy-900/70 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:bg-navy-800/80">
                    <div className="flex h-12 w-12 items-center justify-center border border-brand-red/30 bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                      <Cmp className="text-xl" />
                    </div>
                    <h3 className="mt-6 font-display text-xl uppercase leading-tight tracking-tight text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-brand-steel/85">{c.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="border-y border-white/[0.07] bg-navy-950 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Mission applications"
              title="One sensor. Ten"
              accent="defended missions."
              text="The same hemispheric architecture is configured across air defence, vehicle survivability, maritime and force protection roles."
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={i * 40}>
                <div className="group h-full bg-navy-900 p-6 transition-colors duration-300 hover:bg-navy-700">
                  <Icon
                    name={a.icon}
                    className="text-2xl text-brand-steel/60 transition-colors group-hover:text-brand-red"
                  />
                  <h3 className="mt-5 text-[14.5px] font-semibold uppercase leading-snug tracking-[0.04em] text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-brand-steel/75">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-20">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/80" />

        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-10 border border-white/10 bg-navy-900/60 p-9 backdrop-blur-md md:flex-row md:items-center md:p-14">
            <div className="max-w-xl">
              <p className="eyebrow">Next step</p>
              <h2 className="h2 mt-4">
                Bring us your
                <br />
                <span className="text-brand-red">threat profile.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-brand-steel/90">
                Share your detection, coverage and platform constraints — our engineering team will
                map the right radar configuration and integration path.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto">
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Contact our team
                <LuArrowUpRight className="text-sm" />
              </Link>
              <a href="mailto:info@aeroa2z.com" className="btn-ghost whitespace-nowrap">
                info@aeroa2z.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
