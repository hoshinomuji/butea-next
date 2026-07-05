'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Megaphone, PenTool, Users, Wrench } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MEMBERS = [
  {
    id: 'auto',
    name: 'วชิรวิทย์ เลิศวรสิริกุล',
    nameEn: 'Wachirawit Lertworasirikul',
    nickname: 'Auto',
    role: 'Team Manager',
    Icon: Users,
    color: '#7c3aed',
    image: '/%E0%B8%A3%E0%B8%B9%E0%B8%9B%204%20%E0%B8%84%E0%B8%99/Auto_TeamManager.png',
    bio: 'เป็นคนร่าเริง ชอบเล่นกีฬา มีความมุ่งมั่นที่จะเก็บประสบการณ์จากรายการนี้อย่างมาก ในฐานะ Team Manager คือคนที่คอยประสานงานและผลักดันทีมให้เดินหน้าต่อไปได้เสมอ',
    index: '01',
    mobilePos: '60% 15%',
  },
  {
    id: 'luffy',
    name: 'มัฏฐกัณ ทองเอี่ยม',
    nameEn: 'Mathakan Tongeam',
    nickname: 'Luffy',
    role: 'Engineering',
    Icon: Wrench,
    color: '#059669',
    image: '/%E0%B8%A3%E0%B8%B9%E0%B8%9B%204%20%E0%B8%84%E0%B8%99/Luffy_Engineer.png',
    bio: 'เป็นเด็กที่ชอบคอมพิวเตอร์และเทคโนโลยี เป็นคนเก่ง เข้ากับคนอื่นง่าย มีความมุ่งมั่นอย่างมาก รับผิดชอบด้านวิศวกรรมและการออกแบบโครงสร้างของรถ',
    index: '02',
    mobilePos: '50% 15%',
  },
  {
    id: 'metang',
    name: 'กีรติ แสงเพชร',
    nameEn: 'Kirati Sangpate',
    nickname: 'Metang',
    role: 'Graphic Design',
    Icon: PenTool,
    color: '#db2777',
    image: '/%E0%B8%A3%E0%B8%B9%E0%B8%9B%204%20%E0%B8%84%E0%B8%99/Metang_GraphicDesign.png',
    bio: 'มีบุคลิกที่เรียบร้อย คอยใส่ใจกับรายละเอียดต่างๆ มีความมุ่งมั่นที่จะเก็บประสบการณ์จากรายการนี้อย่างมาก ดูแลด้านภาพลักษณ์และการออกแบบกราฟิกของทีม',
    index: '03',
    mobilePos: '35% 15%',
  },
  {
    id: 'chaaim',
    name: 'วรวลัญช์ วรผล',
    nameEn: 'Worrawalan Worrapol',
    nickname: 'Chaaim',
    role: 'Marketing Manager',
    Icon: Megaphone,
    color: '#ea580c',
    image: '/%E0%B8%A3%E0%B8%B9%E0%B8%9B%204%20%E0%B8%84%E0%B8%99/Chaem_MarketingManager.png',
    bio: 'เป็นคนชอบพูดชอบคุย เป็น Extrovert ชอบลองทำอะไรใหม่ๆ เป้าหมายคือได้เรียนรู้ประสบการณ์ใหม่ ได้ทำในสิ่งที่ชอบและได้ความรู้ใหม่ๆ จากการแข่งขันครั้งนี้',
    index: '04',
    mobilePos: '50% 15%',
  },
]

const hexA = (hex: string, a: number) => {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])
  const infoRef = useRef<HTMLDivElement>(null)
  const bigNumRef = useRef<HTMLDivElement>(null)
  const streakRef = useRef<HTMLDivElement>(null)
  const prevIdx = useRef(0)
  const [active, setActive] = useState(0)

  const transition = useCallback((from: number, to: number) => {
    if (from === to) return
    const dir = to > from ? 1 : -1
    const toMember = MEMBERS[to]

    const fromImg = imgRefs.current[from]
    const toImg = imgRefs.current[to]

    if (fromImg) gsap.killTweensOf(fromImg)
    if (toImg) gsap.killTweensOf(toImg)
    if (streakRef.current) gsap.killTweensOf(streakRef.current)

    if (streakRef.current) {
      streakRef.current.style.background = `linear-gradient(90deg, transparent, ${hexA(toMember.color, 0.35)}, transparent)`
      gsap.fromTo(
        streakRef.current,
        { xPercent: dir > 0 ? -160 : 260, opacity: 0 },
        {
          xPercent: dir > 0 ? 260 : -160,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.inOut',
          onComplete: () => gsap.set(streakRef.current, { opacity: 0 }),
        }
      )
    }

    if (fromImg) {
      gsap.to(fromImg, { opacity: 0, scale: 1.12, filter: 'blur(8px)', duration: 0.5, ease: 'power2.in' })
    }
    if (toImg) {
      gsap.fromTo(
        toImg,
        {
          opacity: 0,
          scale: 1.18,
          filter: 'blur(12px)',
          clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.95,
          ease: 'expo.out',
          delay: 0.12,
        }
      )
    }

    const items = infoRef.current?.querySelectorAll<HTMLElement>('[data-anim]')
    if (items && items.length) {
      gsap.to(items, {
        opacity: 0,
        y: dir * -22,
        duration: 0.28,
        stagger: 0.035,
        ease: 'power2.in',
        onComplete: () => {
          setActive(to)
          gsap.fromTo(
            items,
            { opacity: 0, y: dir * 28 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', delay: 0.04 }
          )
        },
      })
    } else {
      setActive(to)
    }

    if (bigNumRef.current) {
      gsap.fromTo(
        bigNumRef.current,
        { opacity: 0, scale: 1.35, x: dir * 80 },
        { opacity: 0.08, scale: 1, x: 0, duration: 1, ease: 'expo.out', delay: 0.08 }
      )
    }

    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at 74% 46%, ${hexA(toMember.color, 0.3)}, transparent 58%)`
    }
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        borderColor: hexA(toMember.color, 0.55),
        boxShadow: `0 40px 90px -25px ${hexA(toMember.color, 0.45)}`,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  }, [])

  useEffect(() => {
    imgRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: 1, filter: 'blur(0px)', clipPath: 'inset(0% 0% 0% 0%)' })
    })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (MEMBERS.length + 1)}`,
        pin: stickyRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        scrub: false,
        onUpdate: (self) => {
          const idx = Math.min(Math.floor(self.progress * MEMBERS.length), MEMBERS.length - 1)
          if (idx !== prevIdx.current) {
            transition(prevIdx.current, idx)
            prevIdx.current = idx
          }
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [transition])

  const m = MEMBERS[active]

  return (
    <div
      id="team"
      ref={containerRef}
      style={{ height: `${(MEMBERS.length + 2) * 100}dvh`, fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
      className="relative bg-[var(--surface)]"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />

      <div ref={stickyRef} className="relative w-full h-dvh overflow-hidden flex flex-col">

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 40% 50%, black 40%, transparent 100%)',
          }}
        />

        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none transition-none"
          style={{ background: `radial-gradient(circle at 74% 46%, ${hexA(MEMBERS[0].color, 0.3)}, transparent 58%)` }}
        />

        <div
          ref={bigNumRef}
          className="absolute right-[-3%] top-1/2 -translate-y-1/2 font-black tabular-nums leading-none pointer-events-none select-none z-0 text-[52vw] sm:text-[40vw] lg:text-[26vw]"
          style={{ color: m.color, opacity: 0.08 }}
        >
          {m.index}
        </div>

        <div
          ref={streakRef}
          className="absolute inset-y-0 left-0 w-1/4 pointer-events-none z-30 blur-md"
          style={{ opacity: 0, background: `linear-gradient(90deg, transparent, ${hexA(m.color, 0.35)}, transparent)` }}
        />

        <div className="absolute inset-0 lg:inset-y-0 lg:inset-x-auto lg:right-0 lg:left-auto lg:w-1/2 pointer-events-none z-0">
          {MEMBERS.map((mem, i) => (
            <img
              key={mem.id}
              ref={(el) => { imgRefs.current[i] = el }}
              src={mem.image}
              alt={mem.nickname}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover select-none will-change-transform
                         lg:inset-auto lg:bottom-0 lg:right-0 lg:h-[92%] lg:w-auto lg:object-contain lg:object-bottom"
              style={{ opacity: i === 0 ? 1 : 0, objectPosition: mem.mobilePos }}
            />
          ))}
          <div className="absolute bottom-0 inset-x-0 h-48 lg:hidden bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/60 to-transparent" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--surface)] to-transparent" />
        </div>

        <div className="hidden lg:block absolute right-8 top-16 bottom-16 w-[calc(50%-4rem)] pointer-events-none z-10">
          <div
            ref={frameRef}
            className="absolute inset-0 rounded-3xl border transition-none"
            style={{ borderColor: hexA(m.color, 0.55), boxShadow: `0 40px 90px -25px ${hexA(m.color, 0.45)}` }}
          />
          <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 rounded-tl-3xl" style={{ borderColor: m.color }} />
          <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 rounded-br-3xl" style={{ borderColor: m.color }} />
        </div>

        <div className="relative z-20 flex items-start justify-between px-5 sm:px-8 lg:px-16 pt-6 sm:pt-10 shrink-0">
          <div>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-1 transition-colors duration-500" style={{ color: m.color }}>
              ● Meet the Team
            </p>
            <h2 className="text-[var(--text-h)] font-black text-base sm:text-xl lg:text-2xl m-0 tracking-tight">สมาชิกทีม Butea Refined</h2>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 font-mono">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)]">Roster</span>
            <span className="text-sm font-bold tabular-nums transition-colors duration-500" style={{ color: m.color }}>
              {m.index} <span className="text-[var(--text-muted)]">/ 0{MEMBERS.length}</span>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex absolute left-16 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
          {MEMBERS.map((mem, i) => {
            const on = i === active
            return (
              <div key={mem.id} className="flex items-center gap-3">
                <span
                  className="font-mono text-xs font-bold tabular-nums transition-all duration-500"
                  style={{ color: on ? mem.color : 'rgba(15,23,42,0.25)' }}
                >
                  {mem.index}
                </span>
                <div className="h-px rounded-full transition-all duration-500" style={{
                  width: on ? '48px' : '18px',
                  background: on ? mem.color : 'rgba(15,23,42,0.15)',
                  boxShadow: on ? `0 0 10px ${hexA(mem.color, 0.6)}` : 'none',
                }} />
              </div>
            )
          })}
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end lg:justify-center
                        px-5 sm:px-8 lg:pl-32 lg:pr-16 lg:w-1/2
                        pb-6 lg:pb-0 lg:max-w-none">
          <div ref={infoRef} className="flex flex-col gap-3 sm:gap-5 w-full max-w-sm lg:max-w-lg max-lg:bg-white/80 max-lg:backdrop-blur-md max-lg:rounded-2xl max-lg:p-4">

            <div data-anim className="flex items-center gap-3">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border"
                style={{ borderColor: `${m.color}45`, background: `${m.color}14`, color: m.color }}
              >
                <m.Icon className="w-3 h-3 lg:w-3.5 lg:h-3.5" strokeWidth={2.2} />
                {m.role}
              </div>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${hexA(m.color, 0.4)}, transparent)` }} />
            </div>

            <h3
              data-anim
              className="font-black text-4xl sm:text-6xl lg:text-7xl m-0 leading-[0.95] tracking-tight"
              style={{
                backgroundImage: `linear-gradient(135deg, ${m.color}, ${m.color}aa)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {m.nickname}
            </h3>

            <div data-anim>
              <p className="text-[var(--text-h)] text-sm sm:text-base font-semibold">{m.name}</p>
              <p className="text-[var(--text-muted)] text-[11px] sm:text-xs tracking-wide font-mono mt-0.5">{m.nameEn}</p>
            </div>

            <p data-anim className="text-[var(--text-body)] text-xs sm:text-sm lg:text-base leading-[1.85] border-l-2 pl-4" style={{ borderColor: `${m.color}55` }}>
              {m.bio}
            </p>

            <div data-anim className="flex items-center gap-3 max-w-xs pt-1">
              <div className="flex-1 h-1 bg-black/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${((active + 1) / MEMBERS.length) * 100}%`, background: m.color, boxShadow: `0 0 8px ${hexA(m.color, 0.6)}` }}
                />
              </div>
              <span className="text-[var(--text-muted)] text-[10px] font-mono tabular-nums shrink-0">{active + 1} / {MEMBERS.length}</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 shrink-0 pb-5 text-center">
          <span className="text-[var(--text-muted)] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-mono">
            {active < MEMBERS.length - 1 ? '↓  เลื่อนเพื่อดูสมาชิกคนต่อไป' : '✓  ครบทั้ง 4 คนแล้ว'}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--surface)] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}
