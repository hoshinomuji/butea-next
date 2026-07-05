'use client'
import { Mail } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons'

const NAV_LINKS = [
  { label: 'เกี่ยวกับ', href: '#about' },
  { label: 'ทีม', href: '#team' },
  { label: 'การแข่งขัน', href: '#race' },
  { label: 'ติดต่อ', href: '#contact' },
]

const SOCIAL_LINKS = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/butearefind.stamracing?igsh=OXV5aDVodnJjd3k4&utm_source=qr', label: 'Instagram' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61591774706851', label: 'Facebook' },
  { Icon: TikTokIcon, href: 'https://www.tiktok.com/@butea.refined_stemracing?_r=1&_t=ZS-97lk3j3DQuo', label: 'TikTok' },
  { Icon: Mail, href: 'mailto:butearefined6767@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative w-full bg-[var(--surface-2)]"
      style={{ fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          <div className="flex flex-col gap-1.5">
            <span className="text-[var(--text-h)] font-black text-lg tracking-tight">
              Butea Refined
            </span>
            <span className="text-[var(--text-muted)] text-xs tracking-wide">
              Stem Racing Thailand 2026 · Development
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-[var(--text-body)] hover:text-[var(--text-h)] text-sm transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-h)] hover:border-[var(--text-muted)] transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[var(--text-muted)] text-xs">
            © 2026 Butea Refined · All rights reserved
          </span>
          <span className="text-[var(--text-muted)] text-xs">
            โรงเรียนนวมินทราชินูทิศ เบญจมราชาลัย
          </span>
        </div>
      </div>
    </footer>
  )
}
