import { useState } from 'react'
import {
  LuMail,
  LuMapPin,
  LuArrowUpRight,
  LuCircleCheck,
  LuPhone,
  LuClock,
} from 'react-icons/lu'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { products, applications } from '../data/products'
import heroImg from '../assets/products/achr_c.jpg'

const cards = [
  {
    icon: LuMail,
    label: 'Email',
    value: 'info@aeroa2z.com',
    href: 'mailto:info@aeroa2z.com',
    note: 'Programme and technical enquiries',
  },
  {
    icon: LuClock,
    label: 'Response',
    value: 'Within 2 working days',
    note: 'Monday to Friday, IST',
  },
]

const offices = [
  {
    label: 'Registered Office',
    city: 'New Delhi',
    lines: ['A-15/3, First Floor', 'Vasant Vihar', 'New Delhi — 110057'],
  },
  {
    label: 'Works & Manufacturing',
    city: 'Gurugram',
    lines: ['C-600, Ansal Pioneer Industrial Park', 'Tehsil Manesar', 'District Gurugram — 122413'],
  },
]

const initial = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const mailto = `mailto:info@aeroa2z.com?subject=${encodeURIComponent(
    `Website enquiry — ${form.interest || 'Radar systems'}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nOrganisation: ${form.organisation}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\n${form.message}`
  )}`

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) next.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address'
    if (!form.message.trim()) next.message = 'Tell us briefly what you need'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team that"
        accent="builds the radar."
        crumb="Contact Us"
        image={heroImg}
        subtitle="Programme enquiries, technical discussions, trials and integration support — reach our engineering and business development team in New Delhi and Gurugram."
      />

      {/* Contact cards */}
      <section className="py-16">
        <div className="container-x grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Wrapper = c.href ? 'a' : 'div'
            return (
              <Reveal key={c.label} delay={i * 80}>
                <Wrapper
                  {...(c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
                  className="group flex h-full flex-col border border-white/[0.08] bg-navy-800/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:bg-navy-700/60"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-brand-red/30 bg-brand-red/10 text-brand-red">
                      <c.icon className="text-lg" />
                    </div>
                    {c.href && (
                      <LuArrowUpRight className="text-brand-steel/55 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-red" />
                    )}
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-steel/65">
                    {c.label}
                  </p>
                  <p className="mt-2 font-display text-xl uppercase tracking-tight text-white">
                    {c.value}
                  </p>
                  <p className="mt-2 text-[13px] text-brand-steel/75">{c.note}</p>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Form + offices */}
      <section className="pb-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <Reveal>
            <div className="border border-white/[0.08] bg-navy-950 p-7 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-red" />
                <p className="eyebrow">Enquiry form</p>
              </div>
              <h2 className="h2 mt-4">Request a briefing</h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-brand-steel/85">
                Share your requirement and our team will respond with the appropriate radar
                configuration, datasheet and next steps.
              </p>

              {sent ? (
                <div className="mt-9 border border-brand-red/30 bg-brand-red/[0.07] p-8 text-center">
                  <LuCircleCheck className="mx-auto text-3xl text-brand-red" />
                  <p className="mt-4 font-display text-2xl uppercase tracking-tight text-white">
                    Enquiry ready
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-brand-steel/90">
                    Thanks, {form.name.split(' ')[0] || 'there'}. Your details are prepared — send
                    them to our team by email to complete the request.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a href={mailto} className="btn-primary">
                      Open in email client
                      <LuMail className="text-sm" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false)
                        setForm(initial)
                      }}
                      className="btn-ghost"
                    >
                      New enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                        className="input"
                      />
                    </Field>
                    <Field label="Organisation">
                      <input
                        type="text"
                        value={form.organisation}
                        onChange={update('organisation')}
                        placeholder="Company / unit"
                        className="input"
                      />
                    </Field>
                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="name@organisation.com"
                        className="input"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91"
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="Area of interest">
                    <select value={form.interest} onChange={update('interest')} className="input">
                      <option value="">Select a system or application</option>
                      <optgroup label="Radar systems">
                        {products.map((p) => (
                          <option key={p.slug} value={`${p.name} — ${p.tagline}`}>
                            {p.name} — {p.tagline}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Mission applications">
                        {applications.map((a) => (
                          <option key={a.title} value={a.title}>
                            {a.title}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </Field>

                  <Field label="Requirement" required error={errors.message}>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Asset to be protected, threat set, platform, coverage and timeline…"
                      className="input resize-none"
                    />
                  </Field>

                  <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-brand-steel/60">
                      Your details are used only to respond to this enquiry.
                    </p>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Submit enquiry
                      <LuArrowUpRight className="text-sm" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Offices */}
          <div className="space-y-5">
            <Reveal delay={100}>
              <SectionHeading eyebrow="Locations" title="Two sites," accent="one team." />
            </Reveal>

            {offices.map((o, i) => (
              <Reveal key={o.label} delay={140 + i * 80}>
                <div className="group relative overflow-hidden border border-white/[0.08] bg-navy-800/50 p-7 transition-colors hover:border-brand-red/40">
                  <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(208,38,34,0.16),transparent_65%)]" />
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-steel/65">
                        {o.label}
                      </p>
                      <h3 className="mt-2 font-display text-2xl uppercase tracking-tight text-white">
                        {o.city}
                      </h3>
                    </div>
                    <LuMapPin className="text-xl text-brand-red" />
                  </div>
                  <div className="mt-4 space-y-1 text-[14px] leading-relaxed text-brand-steel/90">
                    {o.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="border border-white/10 bg-navy-950 p-7">
                <div className="flex items-center gap-3">
                  <LuPhone className="text-brand-red" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-steel/70">
                    Prefer a direct conversation?
                  </p>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-brand-steel/85">
                  Write to us with a short summary of your requirement and the right engineer will
                  call you back.
                </p>
                <a
                  href="mailto:info@aeroa2z.com"
                  className="group mt-5 inline-flex items-center gap-2 border-b border-brand-red/40 pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-brand-red"
                >
                  info@aeroa2z.com
                  <LuArrowUpRight className="text-sm text-brand-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-steel/75">
        {label}
        {required && <span className="text-brand-red">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[11px] text-brand-redLight">{error}</span>}
    </label>
  )
}
