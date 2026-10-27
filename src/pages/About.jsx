import { Link } from 'react-router-dom'
import {
  LuArrowUpRight,
  LuTarget,
  LuShieldCheck,
  LuFactory,
  LuCpu,
  LuGlobe,
  LuCheck,
} from 'react-icons/lu'
import { HiOutlineCheckCircle } from 'react-icons/hi2'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import heroImg from '../assets/products/exmhr.jpg'
import facilityImg from '../assets/products/nmhr_field.jpg'
import makeInIndia from '../assets/products/p1_e.jpg'
import renderImg from '../assets/products/mhr.jpg'

const pillars = [
  {
    icon: LuTarget,
    title: 'Mission first',
    text: 'Every programme starts with the threat set, the platform and the rules of engagement — not with a catalogue number.',
  },
  {
    icon: LuCpu,
    title: 'Software-defined',
    text: 'AESA apertures with direct RF sampling and digital beam forming let capability be added in software, not hardware.',
  },
  {
    icon: LuShieldCheck,
    title: 'Survivable design',
    text: 'Passive cooling, sealed enclosures and −40 °C to +55 °C operation across the family. No moving parts to fail.',
  },
  {
    icon: LuGlobe,
    title: 'Built in India',
    text: 'Design, integration and manufacturing executed at our Gurugram facility under the Make in India programme.',
  },
]

const compliance = [
  'MIL-STD-1275E input power',
  'MIL-STD-1275B (aCHR)',
  'ASTERIX interface protocol',
  'Cyber Certification (RMF) ready',
  'Passive cooling architecture',
  'Customer-tailored interfaces',
]

const addresses = [
  {
    label: 'Registered Office',
    title: 'New Delhi',
    lines: ['A-15/3, First Floor', 'Vasant Vihar', 'New Delhi — 110057'],
    icon: LuTarget,
  },
  {
    label: 'Works & Manufacturing',
    title: 'Gurugram',
    lines: ['C-600, Ansal Pioneer Industrial Park', 'Tehsil Manesar', 'District Gurugram — 122413'],
    icon: LuFactory,
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Aero A2Z Services"
        title="We manufacture mission critical"
        accent="radar systems."
        crumb="About Us"
        image={heroImg}
        subtitle="An Indian radar house delivering hemispheric sensing for counter-UAS, counter-RAM, vehicle and maritime protection — in partnership with DRS RADA Technologies."
      />

      {/* Intro */}
      <section className="py-24">
        <div className="container-x grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="The company"
              title="Radar, engineered end to end"
              accent="in India."
            />
            <div className="mt-7 space-y-5 text-[15px] leading-[1.85] text-brand-steel/95">
              <p>
                Aero A2Z Services Pvt Ltd is a manufacturer of mission critical radar systems.
                Operating from Ansal Pioneer Industrial Park in Manesar, Gurugram, the company
                builds hemispheric radar sensors that provide persistent, gap-free coverage around
                the asset they protect.
              </p>
              <p>
                Our product family spans five systems — nMHR, aCHR, MHR, ieMHR and exMHR — each
                sharing a common AESA architecture, common interfaces and a common software
                baseline. A single radar covers 90° in azimuth and 90° in elevation; four
                overlapping radars complete a full hemisphere.
              </p>
              <p>
                The engineering is delivered in partnership with{' '}
                <span className="text-white">DRS RADA Technologies</span>, whose combat-proven
                hemispheric radar heritage underpins the family. Manufacturing, integration and
                support are executed in India under the Make in India programme.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {compliance.map((c) => (
                <span key={c} className="chip">
                  <LuCheck className="text-[11px] text-brand-redText" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="border border-white/10 bg-navy-800/50 p-3">
                <img
                  src={facilityImg}
                  alt="nMHR radar system deployed in the field"
                  className="h-[320px] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="border border-white/10 bg-navy-800/40 p-5">
                  <p className="font-display text-4xl leading-none text-white">05</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/70">
                    Radar systems
                  </p>
                </div>
                <div className="border border-white/10 bg-navy-800/40 p-5">
                  <p className="font-display text-4xl leading-none text-white">90°×90°</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-steel/70">
                    Per radar sector
                  </p>
                </div>
              </div>
              <div className="mt-4 overflow-hidden border border-white/10 bg-[#f00000]">
                <img
                  src={makeInIndia}
                  alt="Make in India"
                  className="h-20 w-full object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-white/[0.07] bg-navy-950 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Four principles behind"
              accent="every system."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group h-full border border-white/[0.08] bg-navy-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40">
                  <div className="flex h-12 w-12 items-center justify-center border border-brand-red/30 bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                    <p.icon className="text-xl" />
                  </div>
                  <h3 className="mt-6 font-display text-xl uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-brand-steel/85">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="relative overflow-hidden py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Technology partnership"
              title="Powered by"
              accent="DRS RADA Technologies."
              text="Our hemispheric radar family is built on the DRS RADA Technologies architecture — a design lineage proven across counter-UAS, counter-RAM and manoeuvre force protection programmes."
            />
            <div className="mt-8 space-y-4">
              {[
                'Shared AESA and GaN transmit-chain design heritage',
                'Common ASTERIX-native software baseline',
                'Full-hemisphere coverage from four overlapping sectors',
                'Technology transfer and Indian manufacturing',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 border-b border-white/[0.06] pb-4">
                  <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-brand-red" />
                  <span className="text-[14px] text-brand-steel/95">{t}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className="btn-primary mt-9">
              See the radar family
              <LuArrowUpRight className="text-sm" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative border border-white/15 bg-gradient-to-br from-[#e9eef3] to-[#ccd4de] p-10">
              <img
                src={renderImg}
                alt="MHR hemispheric radar render"
                className="mx-auto h-[360px] w-auto object-contain mix-blend-multiply"
              />
              <div className="absolute bottom-5 left-5 border border-navy-900/15 bg-white/85 px-3 py-2 backdrop-blur">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy-900/80">
                  MHR<sup>®</sup> · 320 W · &lt; 30 kg
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="border-y border-white/[0.07] bg-navy-950 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Facilities"
              title="Where the systems"
              accent="are built."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {addresses.map((a, i) => (
              <Reveal key={a.label} delay={i * 100}>
                <div className="group relative h-full overflow-hidden border border-white/[0.08] bg-navy-900 p-8 transition-colors hover:border-brand-red/40">
                  <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(208,38,34,0.16),transparent_65%)]" />
                  <a.icon className="text-2xl text-brand-red" />
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-steel/65">
                    {a.label}
                  </p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-tight text-white">
                    {a.title}
                  </h3>
                  <div className="mt-4 space-y-1 text-[14.5px] leading-relaxed text-brand-steel/90">
                    {a.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
