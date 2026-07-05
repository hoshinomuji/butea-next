import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.7, ease: 'easeOut' as const },
})

const FEATURES = [
  { icon: '🏛️', label: 'Grand Ballroom', desc: 'ห้องบอลรูมขนาดใหญ่ รองรับผู้เข้าร่วมงานระดับพันคน' },
  { icon: '🚗', label: 'ที่จอดรถ', desc: 'ที่จอดรถทั้งในและนอกอาคาร รองรับได้หลายร้อยคัน' },
  { icon: '🎪', label: 'MICE Venue', desc: 'รองรับงานประชุม นิทรรศการ และอีเวนต์ระดับนานาชาติ' },
  { icon: '🏨', label: 'โรงแรมระดับ 5 ดาว', desc: 'ห้องพักหลายประเภท ตั้งแต่ Junior Suite ถึง Executive Suite' },
]

export default function EventVenueSection() {
  return (
    <section
      id="venue"
      className="relative w-full bg-[#07070c] overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-800/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-violet-800/8 blur-[110px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-16 py-32 flex flex-col gap-20">

        {/* ── HEADER ── */}
        <div className="flex flex-col gap-5 max-w-2xl">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-indigo-500/25 bg-indigo-500/8 text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Event Venue · Thailand
            </span>
          </motion.div>

          <motion.h2 {...fadeUp(0.08)} className="m-0 text-[2.75rem] sm:text-[3.5rem] font-black leading-[1.08] tracking-tight text-white">
            สนามประลองฝีมือ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
              เริ่มต้นที่นนทบุรี
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.15)} className="text-white/45 text-base leading-[1.85] max-w-xl">
            การแข่งขัน Stem Racing Thailand รุ่น Development ปี 2026 จัดขึ้นในประเทศไทย
            ที่ Grand Richmond Stylish Convention Hotel — โรงแรมระดับ 5 ดาว
            ใจกลางนนทบุรี ที่พร้อมรองรับทุกมิติของงานระดับนานาชาติที่จัดโดยทีมงาน UK
          </motion.p>
        </div>

        {/* ── MAIN CARD ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative rounded-3xl overflow-hidden border border-white/[0.07]"
          style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(255,255,255,0.02) 60%, rgba(168,85,247,0.05) 100%)' }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — hotel info */}
            <div className="flex flex-col gap-7 p-8 sm:p-12 flex-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-black text-2xl sm:text-3xl m-0 leading-tight">
                  Grand Richmond<br />
                  <span className="text-white/50 font-medium text-lg">Stylish Convention Hotel</span>
                </h3>
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-start gap-3 text-white/55 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-indigo-400 shrink-0" />
                  <span className="leading-relaxed">282 ถ.รัตนาธิเบศร์ บางกระสอ เมืองนนทบุรี<br />นนทบุรี 11000 ประเทศไทย</span>
                </div>
                <div className="flex items-center gap-3 text-white/55 text-sm">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>+66 2831 8888</span>
                </div>
                <div className="flex items-center gap-3 text-white/55 text-sm">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>richmond@grandrichmondhotel.com</span>
                </div>
              </div>

              <a
                href="https://grandrichmondhotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors w-fit"
              >
                เยี่ยมชมเว็บไซต์โรงแรม
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-white/[0.06] my-8" />
            <div className="lg:hidden h-px bg-white/[0.06] mx-8" />

            {/* Right — map embed placeholder */}
            <div className="relative flex-1 min-h-[260px] lg:min-h-0 overflow-hidden">
              <iframe
                title="Grand Richmond Hotel Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d100.5106!3d13.8588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d3c5a000001%3A0x7e5f5a5f5a5f5a5f!2sGrand%20Richmond%20Stylish%20Convention%20Hotel!5e0!3m2!1sth!2sth!4v1"
                className="absolute inset-0 w-full h-full grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(200deg) saturate(0.5)' }}
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07070c]/60 via-transparent to-transparent pointer-events-none lg:block hidden" />
            </div>
          </div>
        </motion.div>

        {/* ── FEATURES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(0.07 * i)}
              className="flex flex-col gap-3 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-300"
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="text-white font-semibold text-sm">{f.label}</span>
              <span className="text-white/40 text-xs leading-relaxed">{f.desc}</span>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  )
}
