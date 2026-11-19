import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineBolt, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#initiatives', label: 'Initiatives' },
    { href: '/#movement', label: 'Join Us' },
    { href: '/#contact', label: 'Contact' },
  ]
  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' && !hash : pathname === '/' && hash === href.slice(1)

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between gap-4">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2.5"
          >
            <img
              src="/images/X.png"
              alt="Xyphoria"
              className="h-11 w-11 md:h-12 md:w-12 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-mid">
              Xyphoria
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActiveLink(link.href)
                  ? 'bg-brand-light text-brand-green'
                  : 'text-slate-600 hover:text-brand-green hover:bg-slate-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
          <HiOutlineBolt className="text-brand-green" />
          <span>future-ready</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <HiOutlineXMark className="text-2xl text-brand-mid" />
          ) : (
            <HiOutlineBars3 className="text-2xl text-brand-mid" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? 'bg-brand-light text-brand-green'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}