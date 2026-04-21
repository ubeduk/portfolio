'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.3 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.3 })

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 30 })
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 30 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [mouseX, mouseY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-60 h-[420px] w-[420px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 35%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-61 h-2 w-2 rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
