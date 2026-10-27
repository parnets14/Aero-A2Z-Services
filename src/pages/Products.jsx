import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight, LuArrowRight, LuLayers, LuTable } from 'react-icons/lu'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { products, applications } from '../data/products'
import heroImg from '../assets/products/mhr_scene.jpg'
import waveBg from '../assets/products/cxmhr.jpg'
import appsImg from '../assets/products/achr_b.jpg'

const tabs = [
  { id: 'systems', label: 'Radar Systems', count: products.length },
  { id: 'missions', label: 'Mission Applications', count: applications.length },
]

export default function Products() {
  const [tab, setTab] = useState('systems')

  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title="Hemispheric radar,"
        accent="scaled to the mission."
        crumb="Products"
        image={heroImg}
        subtitle="Five radar systems sharing one architecture — plus ten mission configurations spanning counter-UAS, counter-RAM, vehicle protection, maritime defence and M-SHORAD."
      />

      {/* Tabs */}
      <section className="sticky top-[62px] z-30 border-b border-white/[0.08] bg-navy-900/95 backdrop-blur-xl md:top-[100px]">
        <div className="container-x flex items-center justify-between gap-6 overflow-x-auto">
          <div className="flex">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`relative whitespace-nowrap px-1 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors sm:px-5 ${
                  tab === t.id ? 'text-white' : 'text-brand-steel/70 hover:text-white'
                }`}
              >
                {t.label}
                <span className="ml-2 text-[10px] text-brand-redText">
                  {String(t.count).padStart(2, '0')}
                </span>
                <span
                  className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand-red transition-transform duration-300 ${
                    tab === t.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-steel/55 lg:block">
            Aero A2Z · Radar portfolio
          </span>
        </div>
      </section>

      {/* ============ RADAR SYSTEMS ============ */}
      {tab === 'systems' && (
        <>
          <section className="py-20">
            <div className="container-x">
              <Reveal>
                <SectionHeading
                  eyebrow="The family"
                  title="Five systems,"
                  accent="one architecture."
                  text="Each system delivers 90° azimuth × 90° elevation per unit. Deploy four overlapping units for a full hemisphere. Every model speaks ASTERIX and interfaces over Ethernet."
                />
              </Reveal>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 70}>
                    <ProductCard product={p} index={i} />
                  </Reveal>
                ))}

                <Reveal delay={products.length * 70}>
                  <button
                    type="button"
                    onClick={() => setTab('missions')}
                    className="group relative flex h-full min-h-[320px] w-full flex-col overflow-hidden border border-white/[0.07] bg-navy-800/60 p-0 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/40 hover:bg-navy-700/70 hover:shadow-card"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-navy-950">
                      <img
                        src={appsImg}
                        alt="Radar-equipped vehicles deployed in the field"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/55 to-transparent" />

                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center border border-brand-red/50 bg-navy-950/75 text-brand-red backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                        <LuLayers className="text-base" />
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
                  </button>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="border-y border-white/[0.07] bg-navy-950 py-20">
            <div className="container-x">
              <Reveal>
                <div className="flex items-center gap-3">
                  <LuTable className="text-brand-red" />
                  <p className="eyebrow">Comparison</p>
                </div>
                <h2 className="h2 mt-4">Specification matrix</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-steel/85">
                  Coverage, power, mass and cooling across the family. All units operate from
                  −40 °C to +55 °C with passive cooling.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 overflow-x-auto border border-white/[0.08]">
                  <table className="w-full min-w-[820px] border-collapse text-left">
                    <thead>
                      <tr className="bg-navy-800">
                        <th className="border-b border-white/[0.08] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-steel/65">
                          Parameter
                        </th>
                        {products.map((p) => (
                          <th
                            key={p.slug}
                            className="border-b border-l border-white/[0.08] px-5 py-4 font-display text-lg uppercase tracking-tight text-white"
                          >
                            {p.name}
                            <span className="align-super text-[10px] text-brand-redText">{p.mark}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Class', (p) => p.accent],
                        ['Power', (p) => p.specs.find((s) => s[0] === 'Power consumption')?.[1]],
                        ['Weight', (p) => p.specs.find((s) => s[0] === 'Weight')?.[1]],
                        ['Dimensions', (p) => p.specs.find((s) => s[0] === 'Dimensions')?.[1]],
                        ['Input', (p) => p.specs.find((s) => s[0] === 'Input power')?.[1]],
                      ].map(([label, get]) => (
                        <tr key={label} className="transition-colors hover:bg-white/[0.02]">
                          <td className="border-b border-white/[0.06] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-steel/65">
                            {label}
                          </td>
                          {products.map((p) => (
                            <td
                              key={p.slug}
                              className="border-b border-l border-white/[0.06] px-5 py-4 text-[13px] text-brand-steel"
                            >
                              {get(p)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* ============ MISSION APPLICATIONS ============ */}
      {tab === 'missions' && (
        <>
          <section className="py-20">
            <div className="container-x">
              <Reveal>
                <SectionHeading
                  eyebrow="Configurations"
                  title="One sensor,"
                  accent="ten defended missions."
                  text="The hemispheric architecture adapts to the platform and the threat — fixed site, vehicle, vessel or expeditionary mast."
                />
              </Reveal>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {applications.map((a, i) => (
                  <Reveal key={a.title} delay={i * 50}>
                    <div className="group relative h-full overflow-hidden border border-white/[0.08] bg-navy-800/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:bg-navy-700/60">
                      <span className="absolute right-5 top-5 font-mono text-[11px] tracking-[0.2em] text-white/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-navy-900 text-brand-steel/75 transition-colors group-hover:border-brand-red/40 group-hover:bg-brand-red group-hover:text-white">
                        <Icon name={a.icon} className="text-xl" />
                      </div>
                      <h3 className="mt-6 font-display text-xl uppercase leading-tight tracking-tight text-white">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-brand-steel/85">{a.text}</p>
                      <div className="mt-6 h-px w-full bg-white/[0.06]" />
                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-redText opacity-70 transition-opacity group-hover:opacity-100"
                      >
                        Discuss requirement
                        <LuArrowUpRight className="text-xs" />
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="relative isolate overflow-hidden border-t border-white/[0.07] py-20">
            <div className="absolute inset-0 -z-20">
              <img src={waveBg} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 -z-10 bg-navy-950/95" />
            <div className="container-x">
              <div className="flex items-center gap-3">
                <LuLayers className="text-brand-red" />
                <p className="eyebrow">Integration</p>
              </div>
              <h2 className="h2 mt-4">Designed to fit your</h2>
              <p className="h2 !text-brand-red">command chain.</p>

              <div className="mt-10 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] md:grid-cols-3">
                {[
                  {
                    k: 'Interfaces',
                    v: 'Ethernet and discrete I/O as standard. ASTERIX message output with customer-tailored protocols where required.',
                  },
                  {
                    k: 'Mounting',
                    v: 'Fixed-site masts, mobile trailers, vehicle hardpoints and vessel decks — 90° sectors combined into a full hemisphere.',
                  },
                  {
                    k: 'Support',
                    v: 'Requirement definition, site survey, integration, trials and through-life support from our Gurugram facility.',
                  },
                ].map((it) => (
                  <div key={it.k} className="bg-navy-950/80 p-7 backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-redText">
                      {it.k}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-brand-steel/90">{it.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
