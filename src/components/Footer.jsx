import { Link } from 'react-router-dom'
import { HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'
import { FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import logo from '../assets/logo-mark.png'
import { products } from '../data/products'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-80 w-[560px] rounded-full bg-brand-red/10 blur-[120px]" />

      <div className="container-x relative">
        {/* Main grid */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <img src={logo} alt="Aero A2Z Services" className="h-14 w-auto" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-brand-steel/85">
              Manufacturers of mission critical radar systems. Indian-built hemispheric radar
              technology engineered with DRS RADA Technologies for the modern battlespace.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { Icon: FaLinkedinIn, label: 'LinkedIn' },
                { Icon: FaXTwitter, label: 'X' },
                { Icon: FaYoutube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center border border-white/10 text-brand-steel/85 transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  <Icon className="text-[13.5px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-steel/65">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-[14px] text-brand-steel/95 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-steel/65">
              Radar Systems
            </h4>
            <ul className="mt-5 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group inline-flex items-center gap-2 text-[14px] text-brand-steel/95 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-3" />
                    {p.name}
                    <span className="text-[10px] align-super text-brand-steel/60">{p.mark}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-steel/65">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-brand-steel/90">
              <li className="flex gap-3">
                <HiOutlineMapPin className="mt-0.5 shrink-0 text-brand-red" />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-brand-steel/65">
                    Registered Office
                  </span>
                  A-15/3, First Floor, Vasant Vihar,
                  <br />
                  New Delhi — 110057
                </span>
              </li>
              <li className="flex gap-3">
                <HiOutlineMapPin className="mt-0.5 shrink-0 text-brand-red" />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-brand-steel/65">
                    Works
                  </span>
                  C-600, Ansal Pioneer Industrial Park,
                  <br />
                  Tehsil Manesar, District Gurugram — 122413
                </span>
              </li>
              <li className="flex gap-3">
                <HiOutlineEnvelope className="mt-0.5 shrink-0 text-brand-red" />
                <a href="mailto:info@aeroa2z.com" className="transition-colors hover:text-white">
                  info@aeroa2z.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/[0.08] py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-steel/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aero A2Z Services Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Powered by
            <span className="text-brand-steel/85">DRS RADA Technologies</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-brand-red/80">Make in India</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
