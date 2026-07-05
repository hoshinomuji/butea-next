'use client'
import { motion } from 'framer-motion'
import { Flag, Wrench, Trophy, BookOpen } from 'lucide-react'
import { fadeUp } from '@/lib/utils'

const HIGHLIGHTS = [
  {
    Icon: Wrench,
    title: 'ออกแบบและสร้างรถ',
    body: 'ใช้ซอฟต์แวร์วิศวกรรมระดับอุตสาหกรรม (Autodesk) ออกแบบและสร้างรถแข่งจำลองขนาดเล็กตั้งแต่ต้น',
  },
  {
    Icon: Trophy,
    title: 'แข่งขัน Time Trial & Knock-out',
    body: 'นำรถจำลองลงสนาม F1 จำลอง แข่งรอบ Time Trial วัดเวลา และต่อสู้ในรอบ Knock-out',
  },
  {
    Icon: BookOpen,
    title: 'Portfolio & Pit Display',
    body: 'จัดทำ Engineering Portfolio นำเสนอต่อกรรมการ พร้อมออกแบบบูธ Pit Display แสดงนวัตกรรมของทีม',
  },
]

export default function RaceEventSection() {
  return (
    <section
      id="race"
      className="relative w-full bg-[var(--surface-2)] overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-fuchsia-200/30 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-violet-200/25 blur-[120px] pointer-events-none rounded-full" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32 flex flex-col gap-16 sm:gap-24">

        <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-fuchsia-300 bg-fuchsia-100/70 text-fuchsia-700">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
              The Competition · 2026
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.08)}
            className="m-0 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[var(--text-h)]"
          >
            เวทีที่เรา{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600">
              เลือกพิสูจน์ตัวเอง
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.15)} className="text-[var(--text-body)] text-sm sm:text-base lg:text-lg leading-[1.9]">
            STEM Racing Thailand คือโครงการแข่งขันออกแบบและสร้างรถแข่งจำลองสำหรับเยาวชนอายุ 7–19 ปี
            พัฒนามาจาก F1 in Schools ผสาน STEM เข้ากับทักษะวิศวกรรมจริง สนับสนุนโดย สสวท.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {HIGHLIGHTS.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.08 * i)}
              className="group relative flex flex-col gap-4 p-7 sm:p-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)] hover:border-fuchsia-300 hover:shadow-[0_24px_60px_-24px_rgba(192,38,211,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute -top-4 -right-2 text-7xl font-black tabular-nums text-fuchsia-500/[0.06] group-hover:text-fuchsia-500/[0.1] transition-colors select-none pointer-events-none">
                0{i + 1}
              </span>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-fuchsia-500/25 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-[var(--text-h)] font-bold text-lg m-0">{title}</h3>
              <p className="text-[var(--text-body)] text-sm leading-[1.85] m-0">{body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.1)}
          className="relative rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--card-shadow)] overflow-hidden p-6 sm:p-8 lg:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.04] via-transparent to-violet-500/[0.04]" />
          <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
              <Flag className="w-6 h-6 text-white" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-fuchsia-600">
                ทีม Butea Refined · สิ่งที่เรากำลังทำ
              </span>
              <p className="text-[var(--text-h)] text-lg sm:text-xl font-bold leading-[1.6] m-0">
                เราออกแบบรถแข่งจำลองตั้งแต่ศูนย์ — ตั้งแต่โครงสร้าง อากาศพลศาสตร์ ไปจนถึงกราฟิกบนตัวรถ
              </p>
              <p className="text-[var(--text-body)] text-sm leading-[1.85] m-0">
                ทั้ง 4 คนรับผิดชอบคนละด้าน Auto ดูแลภาพรวม Luffy ออกแบบเชิงวิศวกรรม
                Metang ดีไซน์ทุกอย่างที่ตาเห็น และ Chaaim เป็นเสียงของทีมสู่โลกภายนอก
                เราสร้างกันจริงๆ ไม่มีรุ่นพี่ ไม่มีแบบให้ก็อป
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent" />
    </section>
  )
}
