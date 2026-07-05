'use client'
import { useEffect, useRef } from 'react'
import { MorphingText } from '@/components/ui/morphing-text'
import { Highlighter } from '@/components/ui/highlighter'
import { Globe } from '@/components/ui/globe'
import { RainbowButton } from '@/components/ui/rainbow-button'
import gsap from 'gsap'

const GREETINGS = ['สวัสดี', 'Hello', 'Bonjour', 'こんにちは', '안녕하세요']

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const morphRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)
  const scrollIndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(badgeRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0.2)
        .fromTo(morphRef.current, { scale: 0.85, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.8 }, 0.35)
        .fromTo(h2Ref.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.55)
        .fromTo(paraRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.75)
        .fromTo(ctaRef.current, { scale: 0.88, opacity: 0, y: 16 }, { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.4)' }, 0.9)
        .fromTo(scrollIndRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, 1.2)

      if (orb1Ref.current) gsap.to(orb1Ref.current, { y: '+=36', duration: 5.5, ease: 'sine.inOut', repeat: -1, yoyo: true })
      if (orb2Ref.current) gsap.to(orb2Ref.current, { y: '-=28', x: '+=18', duration: 7, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1 })
      if (orb3Ref.current) gsap.to(orb3Ref.current, { y: '+=22', x: '-=14', duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 2.5 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden flex items-center"
      style={{ fontFamily: "'IBM Plex Sans Thai', system-ui, sans-serif" }}
    >
      <img src="/Stem_RacingBackground.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40" />

      <div ref={orb1Ref} className="absolute -top-20 right-10 w-[460px] h-[460px] rounded-full bg-violet-300/28 blur-[130px] pointer-events-none" />
      <div ref={orb2Ref} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-200/32 blur-[120px] pointer-events-none" />
      <div ref={orb3Ref} className="absolute top-1/3 left-1/2 w-[280px] h-[280px] rounded-full bg-indigo-200/25 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20 flex items-center justify-between gap-8">

        <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-xl lg:flex-shrink-0">

          <div ref={badgeRef} style={{ opacity: 0 }}>
            <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase border border-violet-300 bg-violet-100/70 text-violet-700">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              Stem Racing Thailand · Development 2026
            </span>
          </div>

          <div ref={morphRef} style={{ opacity: 0 }}>
            <MorphingText texts={GREETINGS} className="h-14 sm:h-24 lg:h-32 text-left text-[var(--text-h)] text-4xl sm:text-7xl lg:text-8xl" />
          </div>

          <h2 ref={h2Ref} style={{ opacity: 0 }} className="text-[var(--text-h)] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight m-0">
            พวกเราคือทีม{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">Butea Refined</span>
          </h2>

          <p ref={paraRef} style={{ opacity: 0 }} className="text-[var(--text-body)] text-sm sm:text-base lg:text-lg leading-relaxed m-0">
            นักเรียนจากโรงเรียน นวมินทราชินูทิศ เบญจมราชาลัย ที่รวมทีมเข้าแข่งขัน{' '}
            <Highlighter action="underline" color="#7c3aed" strokeWidth={2} animationDuration={900}>Stem Racing Thailand</Highlighter>{' '}
            รุ่น{' '}
            <Highlighter action="box" color="#818cf8" strokeWidth={1.5} animationDuration={900}>Development</Highlighter>{' '}
            ปี 2026 ครับ
          </p>

          <div ref={ctaRef} style={{ opacity: 0 }} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <RainbowButton size="default" className="sm:!h-12 sm:!px-8 sm:!text-base">
              เกี่ยวกับทีม
            </RainbowButton>
            <button
              onClick={() => document.querySelector('#race')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-h)] transition-colors flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0"
            >
              ดูการแข่งขัน <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-violet-300/30 blur-3xl" />
          </div>
          <div className="relative w-[480px] h-[480px]">
            <Globe className="w-full h-full" />
            <div className="absolute top-[28%] right-[18%] flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_6px_2px_rgba(217,70,239,0.5)]" />
              <span className="text-[10px] font-semibold text-[var(--text-body)] tracking-wider">SILVERSTONE</span>
            </div>
            <div className="absolute bottom-[28%] left-[22%] flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_6px_2px_rgba(217,70,239,0.5)]" />
              <span className="text-[10px] font-semibold text-[var(--text-body)] tracking-wider">BANGKOK</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollIndRef} style={{ opacity: 0 }} className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 rounded-full border border-[var(--text-muted)]/40 flex items-start justify-center pt-1.5 overflow-hidden">
          <div className="w-1 h-1.5 rounded-full bg-[var(--text-muted)]/60 animate-[scrollDot_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`@keyframes scrollDot { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }`}</style>
    </section>
  )
}
