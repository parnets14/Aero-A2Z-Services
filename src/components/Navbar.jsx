import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineBars3, HiOutlineXMark, HiOutlineEnvelope, HiOutlineArrowUpRight } from 'react-icons/hi2'
import { FiPhone } from 'react-icons/fi'
import logo from '../assets/logo-mark.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)

  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip */}
      <div className="hidden border-b border-white/[0.06] bg-navy-950/95 backdrop-blur md:block">
        <div className="container-x flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-brand-steel/75">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brand-red" />
            Manufacturers of mission critical radar systems
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@aeroa2z.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <HiOutlineEnvelope className="text-[13.5px] text-brand-redText" />
              info@aeroa2z.com
            </a>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-brand-steel/60">New Delhi · Gurugram, India</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-white/[0.08] bg-navy-900/95 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-transparent bg-navy-900/70 backdrop-blur-md'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link to="/" className="group flex shrink-0 items-center py-3.5">
            <img
              src={logo}
              alt="Aero A2Z Services Pvt Ltd — powered by DRS RADA Technologies"
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    isActive ? 'text-white' : 'text-brand-steel/85 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute inset-x-4 -bottom-px h-[2px] origin-left bg-brand-red transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden !px-5 !py-3 md:inline-flex">
              Request Briefing
              <HiOutlineArrowUpRight className="text-sm" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="grid h-11 w-11 place-items-center border border-white/10 text-white transition-colors hover:border-brand-red hover:text-brand-red lg:hidden"
            >
              {open ? <HiOutlineXMark className="text-xl" /> : <HiOutlineBars3 className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-x-0 top-[62px] bottom-0 z-40 origin-top border-t border-white/10 bg-navy-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="container-x flex h-full flex-col justify-between py-8">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-white/[0.07] py-5 font-display text-3xl uppercase tracking-tight transition-colors ${
                    isActive ? 'text-brand-red' : 'text-white/85 hover:text-brand-red'
                  }`
                }
              >
                <span>{l.label}</span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-brand-steel/60">
                  0{i + 1}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="space-y-4">
            <Link to="/contact" className="btn-primary w-full">
              Request Briefing
            </Link>
            <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-steel/75">
              <a href="mailto:info@aeroa2z.com" className="flex items-center gap-2">
                <HiOutlineEnvelope className="text-brand-red" /> info@aeroa2z.com
              </a>
              <p className="flex items-center gap-2">
                <FiPhone className="text-brand-red" /> New Delhi · Gurugram, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
