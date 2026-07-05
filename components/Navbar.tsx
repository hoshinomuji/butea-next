'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'

const NAV_LINKS = [
  { label: 'เกี่ยวกับ', href: '#about' },
  { label: 'ทีม', href: '#team' },
  { label: 'การแข่งขัน', href: '#race' },
  { label: 'ติดต่อ', href: '#contact' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('#about')
  const progressRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? scrolled / total : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${pct})`
      }
      setIsScrolled(scrolled > 10)
      rafRef.current = requestAnimationFrame(update)
    }
    rafRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
        },
        { threshold: 0.3, rootMargin: '-60px 0px -30% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    if (!logoRef.current) return
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: -8 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)', delay: 0.3 }
    )
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent origin-left pointer-events-none">
        <div
          ref={progressRef}
          className="h-full w-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={cn(
          'fixed top-[3px] left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-[var(--border)]'
            : 'bg-transparent'
        )}
      >
        <div className="w-full px-6 sm:px-10">
          <div className="flex h-16 items-center justify-between gap-8">

            <button
              ref={logoRef}
              onClick={() => scrollTo('#about')}
              style={{ opacity: 0 }}
              className="flex items-center gap-2.5 shrink-0 group bg-transparent border-none cursor-pointer p-0"
            >
              <img
                src="/BR.png"
                alt="Butea Refined"
                className="h-9 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-sm text-[var(--text-h)] tracking-wide hidden sm:block">
                Butea Refined
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 bg-transparent border-none cursor-pointer text-[var(--text)] hover:text-[var(--text-h)]"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-[var(--accent-bg)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg text-[var(--text)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] transition-colors"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[67px] z-40 md:hidden bg-white/96 backdrop-blur-2xl border-b border-[var(--border)] shadow-2xl"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: 'easeOut' }}
                    onClick={() => { scrollTo(link.href); setMobileOpen(false) }}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors bg-transparent border-none cursor-pointer text-left',
                      isActive ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--accent-bg)]'
                    )}
                  >
                    {isActive && <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />}
                    {link.label}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[67px]" />
    </>
  )
}
