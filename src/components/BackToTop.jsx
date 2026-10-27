import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`group fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center border border-white/15 bg-navy-900/90 text-brand-steel shadow-card backdrop-blur transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <LuArrowUp className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}
