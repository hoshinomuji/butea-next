'use client'
"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 0.6,
  baseColor: [0.52, 0.36, 0.84] as [number, number, number],
  markerColor: [0.92, 0.38, 0.95] as [number, number, number],
  glowColor: [0.82, 0.72, 1.0] as [number, number, number],
  markers: [
    // F1 circuits
    { location: [51.5114, -0.1198], size: 0.08 },   // Silverstone UK
    { location: [43.7338, 7.4215], size: 0.06 },    // Monaco
    { location: [26.0325, 50.5106], size: 0.05 },   // Bahrain
    { location: [24.4672, 54.6031], size: 0.05 },   // Abu Dhabi
    { location: [35.3717, 138.9272], size: 0.06 },  // Suzuka
    { location: [45.6156, 9.2811], size: 0.06 },    // Monza
    { location: [40.3725, -3.5867], size: 0.06 },   // Spain
    { location: [13.7563, 100.5018], size: 0.09 },  // Bangkok (ทีม)
    { location: [50.4372, 5.9714], size: 0.05 },    // Spa Belgium
    { location: [30.1327, 31.4000], size: 0.05 },   // Cairo
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    let globe: ReturnType<typeof createGlobe> | null = null

    const observer = new ResizeObserver(([entry]) => {
      widthRef.current = entry.contentRect.width
      if (globe) return
      if (widthRef.current === 0) return

      globe = createGlobe(canvasRef.current!, {
        ...config,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
        onRender: (state: Record<string, number>) => {
          if (!pointerInteracting.current) phiRef.current += 0.004
          state.phi = phiRef.current + rs.get()
          state.width = widthRef.current * 2
          state.height = widthRef.current * 2
        },
      } as Parameters<typeof createGlobe>[1])

      setTimeout(() => {
        if (canvasRef.current) canvasRef.current.style.opacity = '1'
      }, 0)
    })

    if (canvasRef.current) observer.observe(canvasRef.current)

    return () => {
      observer.disconnect()
      globe?.destroy()
    }
  }, [rs, config])

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-700"
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
