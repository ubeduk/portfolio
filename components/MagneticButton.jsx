'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ as: Tag = 'a', children, strength = 22, className = '', ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength })
  }
  const onLeave = () => setPos({ x: 0, y: 0 })

  const MotionTag = motion[Tag] || motion.a

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
