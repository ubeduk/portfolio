'use client'

import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 max-w-2xl"
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
          <span className="h-px w-8 bg-white/20" /> {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg">{description}</p>
      )}
    </motion.div>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-28 md:py-36 ${className}`}>
      {children}
    </section>
  )
}
