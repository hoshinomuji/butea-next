'use client'
import { fadeUp } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ExternalLink, Mail } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons'


const SOCIALS = [
  {
    platform: 'Instagram',
    handle: '@butearefind.stamracing',
    href: 'https://www.instagram.com/butearefind.stamracing?igsh=OXV5aDVodnJjd3k4&utm_source=qr',
    Icon: InstagramIcon,
    accent: 'from-pink-500 to-orange-400',
    border: 'hover:border-pink-300',
    shadow: 'hover:shadow-[0_24px_60px_-24px_rgba(236,72,153,0.35)]',
    badge: 'border-pink-300 bg-pink-100/70 text-pink-700',
    dot: 'bg-pink-500',
  },
  {
    platform: 'Facebook',
    handle: 'Butea Refined.nbr ',
    href: 'https://www.facebook.com/profile.php?id=61591774706851',
    Icon: FacebookIcon,
    accent: 'from-blue-600 to-blue-400',
    border: 'hover:border-blue-300',
    shadow: 'hover:shadow-[0_24px_60px_-24px_rgba(59,130,246,0.35)]',
    badge: 'border-blue-300 bg-blue-100/70 text-blue-700',
    dot: 'bg-blue-500',
  },
  {
    platform: 'TikTok',
    handle: '@butea.refined_stemracing',
    href: 'https://www.tiktok.com/@butea.refined_stemracing?_r=1&_t=ZS-97lk3j3DQuo',
    Icon: TikTokIcon,
    accent: 'from-neutral-900 to-neutral-700',
    border: 'hover:border-neutral-400',
    shadow: 'hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]',
    badge: 'border-neutral-300 bg-neutral-100/70 text-neutral-700',
    dot: 'bg-neutral-700',
  },
  {
    platform: 'Email',
    handle: 'butearefined6767@gmail.com',
    href: 'mailto:butearefined6767@gmail.com',
    Icon: Mail,
    accent: 'from-violet-600 to-fuchsia-500',
    border: 'hover:border-violet-300',
    shadow: 'hover:shadow-[0_24px_60px_-24px_rgba(124,58,237,0.35)]',
    badge: 'border-violet-300 bg-violet-100/70 text-violet-700',
    dot: 'bg-violet-500',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--surface-2)] overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-pink-200/25 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-200/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32 flex flex-col gap-16 sm:gap-20">

        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-pink-300 bg-pink-100/70 text-pink-700">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              ติดต่อเรา · Butea Refined
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.08)}
            className="m-0 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[var(--text-h)]"
          >
            ติดตามเส้นทาง{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600">
              ของพวกเรา
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.15)} className="text-[var(--text-body)] text-sm sm:text-base leading-[1.9]">
            อัปเดตทุกความคืบหน้า ตั้งแต่เบื้องหลังการสร้างรถ ไปจนถึงวันแข่งขันจริง
            ติดตามเราได้ทุกช่องทางด้านล่าง
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SOCIALS.map(({ platform, handle, href, Icon, accent, border, shadow, badge, dot }, i) => (
            <motion.a
              key={platform}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              {...fadeUp(0.07 * i)}
              className={`group relative flex flex-col gap-5 p-7 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)] ${border} ${shadow} hover:-translate-y-1.5 transition-all duration-300 overflow-hidden no-underline`}
            >
              <span className="absolute -bottom-3 -right-1 text-7xl font-black tabular-nums text-black/[0.04] group-hover:text-black/[0.07] transition-colors select-none pointer-events-none">
                0{i + 1}
              </span>

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 text-white" />
              </div>

              <div className="flex flex-col gap-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[0.12em] uppercase border w-fit ${badge}`}>
                  <span className={`w-1 h-1 rounded-full ${dot}`} />
                  {platform}
                </span>
                <span className="text-[var(--text-h)] font-semibold text-sm break-all">{handle}</span>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-body)] transition-colors mt-auto self-end" />
            </motion.a>
          ))}
        </div>

      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent" />
    </section>
  )
}
