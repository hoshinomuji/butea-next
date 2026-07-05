'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ExternalLink, Cog, Flower2, Flag } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUp } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_TRIGGER_START = 'top 80%'

const STATS = [
  { value: '2026', display: '2026', label: 'ปีก่อตั้ง', sub: 'Founded', numeric: 2026 },
  { value: '4', display: '4', label: 'สมาชิก', sub: 'Members', numeric: 4 },
  { value: '#1', display: '#1', label: 'รุ่นบุกเบิก', sub: 'Pioneer Gen', numeric: null },
  { value: 'TH', display: 'TH', label: 'สนามแข่ง', sub: 'Race in Thailand', numeric: null },
]

const PILLARS = [
  {
    Icon: Cog,
    title: 'จุดเริ่มต้น',
    body: 'ปี 2026 เราสี่คนนั่งคุยกันเรื่องความฝันที่อยากทำบางอย่างใหญ่กว่าห้องเรียน Stem Racing Thailand คือคำตอบ — การแข่งขันออกแบบและสร้างรถยนต์สำหรับนักเรียนมัธยม ที่พร้อมพิสูจน์ตัวเองบนเวทีนานาชาติ',
  },
  {
    Icon: Flower2,
    title: 'ปรัชญาทีม',
    body: '"Refined" ไม่ได้แปลว่าสมบูรณ์แบบ — มันแปลว่าเราเชื่อในการปรับปรุงอย่างต่อเนื่อง ชื่อ Butea มาจากดอกทองกวาว ดอกไม้ที่บานสะพรั่งที่สุดในฤดูแล้ง สัญลักษณ์ว่าทีมที่ดีเติบโตได้แม้ในสภาวะที่ยากที่สุด',
  },
  {
    Icon: Flag,
    title: 'ในฐานะรุ่นแรก',
    body: 'เราไม่มีรุ่นพี่ที่จะบอกทางให้ ทุกการตัดสินใจ ทุกข้อผิดพลาด และทุกชัยชนะเล็กๆ ล้วนเป็นของพวกเราเอง ทุกก้าวที่เราเดินกำลังสร้างเส้นทางให้รุ่นน้องในอนาคต',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([])
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([])
  const photoWrapRef = useRef<HTMLDivElement>(null)
  const photoImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const el = statValueRefs.current[i]
        if (!el) return
        if (stat.numeric !== null) {
          const obj = { val: 0 }
          ScrollTrigger.create({
            trigger: statsRef.current,
            start: SCROLL_TRIGGER_START,
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: stat.numeric!,
                duration: 1.4,
                ease: 'power2.out',
                delay: i * 0.12,
                onUpdate: () => { el.textContent = Math.round(obj.val).toString() },
              })
            },
          })
        } else {
          ScrollTrigger.create({
            trigger: statsRef.current,
            start: SCROLL_TRIGGER_START,
            once: true,
            onEnter: () => {
              const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#'
              const target = stat.display
              let iter = 0
              const interval = setInterval(() => {
                el.textContent = target.split('').map((c, j) =>
                  j < iter ? c : chars[Math.floor(Math.random() * chars.length)]
                ).join('')
                iter += 0.4
                if (iter >= target.length) { el.textContent = target; clearInterval(interval) }
              }, 40)
            },
          })
        }
      })

      pillarRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 0.75, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
            delay: i * 0.1,
          }
        )
      })

      if (photoImgRef.current) {
        gsap.to(photoImgRef.current, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: photoWrapRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[var(--surface-2)] overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
    >
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-violet-200/40 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-indigo-200/35 blur-[120px] pointer-events-none rounded-full" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-28 lg:py-32 flex flex-col gap-14 sm:gap-24">

        <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-violet-300 bg-violet-100/70 text-violet-700">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              About the Team
            </span>
          </motion.div>

          <motion.h2 {...fadeUp(0.08)} className="m-0 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[var(--text-h)]">
            ทีมที่เกิดจาก{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600">
              ความหลงใหลในความเร็ว
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.15)} className="text-[var(--text-body)] text-sm sm:text-base lg:text-lg leading-[1.9]">
            Butea Refined — ทีมแรกจากโรงเรียนนวมินทราชินูทิศ เบญจมราชาลัย
            บนเวที Stem Racing Thailand รุ่น Development ปี 2026
            เราไม่ได้แค่สร้างรถ เราออกแบบทุกอย่างตั้งแต่ศูนย์
          </motion.p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)]"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`group relative flex flex-col items-center justify-center gap-1.5 py-9 sm:py-11 px-3 transition-colors
                ${i % 2 === 0 ? 'border-r border-[var(--surface-border)]' : ''}
                ${i === 2 ? 'sm:border-r sm:border-[var(--surface-border)]' : ''}
                ${i < 2 ? 'border-b sm:border-b-0 border-[var(--surface-border)]' : ''}`}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-2/3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-300" />
              <span
                ref={(el) => { statValueRefs.current[i] = el }}
                className="text-3xl sm:text-5xl font-black tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-pink-600 leading-none"
              >
                0
              </span>
              <span className="text-[var(--text-h)] text-xs sm:text-sm font-semibold text-center">{s.label}</span>
              <span className="text-[var(--text-muted)] text-[9px] sm:text-[10px] tracking-widest uppercase text-center">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {PILLARS.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              ref={(el) => { pillarRefs.current[i] = el }}
              style={{ opacity: 0 }}
              className="group relative flex flex-col gap-4 p-7 sm:p-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)] hover:border-violet-300 hover:shadow-[0_24px_60px_-24px_rgba(124,58,237,0.35)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute -top-4 -right-2 text-7xl font-black tabular-nums text-violet-500/[0.06] group-hover:text-violet-500/[0.1] transition-colors select-none pointer-events-none">
                0{i + 1}
              </span>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-[var(--text-h)] font-bold text-lg m-0">{title}</h3>
              <p className="text-[var(--text-body)] text-sm leading-[1.85] m-0">{body}</p>
            </div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)]"
        >
          <div className="p-7 sm:p-9 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase border border-indigo-300 bg-indigo-100/70 text-indigo-700 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Event Venue · Thailand
            </span>
            <div>
              <h3 className="text-[var(--text-h)] font-black text-2xl sm:text-3xl m-0 leading-tight">Grand Richmond</h3>
              <p className="text-[var(--text-muted)] text-sm font-medium m-0">Stylish Convention Hotel · นนทบุรี</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-[var(--text-body)] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                <span>282 ถ.รัตนาธิเบศร์ บางกระสอ เมืองนนทบุรี 11000</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-body)] text-sm">
                <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>+66 2831 8888</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-body)] text-sm">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="break-all">richmond@grandrichmondhotel.com</span>
              </div>
            </div>
            <a
              href="https://grandrichmondhotel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors w-fit mt-auto"
            >
              เยี่ยมชมเว็บไซต์โรงแรม
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[var(--surface-border)]">
            <iframe
              title="Grand Richmond Hotel Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.5106!3d13.8588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d3c5a000001%3A0x7e5f5a5f5a5f5a5f!2sGrand%20Richmond%20Stylish%20Convention%20Hotel!5e0!3m2!1sth!2sth!4v1"
              className="absolute inset-0 w-full h-full opacity-95 hover:opacity-100 transition-opacity duration-300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>

      {/* Team photo — parallax */}
      <div ref={photoWrapRef} className="relative w-full mt-0 sm:mt-24 overflow-hidden">
        <img
          ref={photoImgRef}
          src="/รูปรวมทุกคน/TeamMember.png"
          alt="Butea Refined Team"
          className="w-full h-[240px] sm:h-[600px] lg:h-[720px] object-cover object-center sm:object-[center_26%] sm:scale-110"
        />
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent" />
    </section>
  )
}
