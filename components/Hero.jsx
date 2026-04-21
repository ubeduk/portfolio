'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Download, Globe2, Building2, Home } from 'lucide-react'
import MagneticButton from './MagneticButton'

const availability = [
  { icon: Home, label: 'Freelance' },
  { icon: Globe2, label: 'Remote' },
  { icon: Building2, label: 'Onsite' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pt-28 text-center sm:px-6 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] text-white/70 backdrop-blur sm:text-[12px]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-[42px] font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          <span className="block text-gradient-mono">Ubed Kazi</span>
          <span className="mt-3 block text-xl font-light text-white/60 sm:text-3xl md:text-4xl">
            Software Developer <span className="text-white/25">·</span> Flutter Specialist
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-7 max-w-2xl text-balance text-[15px] leading-relaxed text-white/55 sm:text-lg"
        >
          Building scalable, high-performance mobile applications with clean interfaces,
          thoughtful motion, and production-grade engineering.
        </motion.p>

        {/* Availability pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Open to</span>
          {availability.map((a) => (
            <span
              key={a.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/75"
            >
              <a.icon className="h-3 w-3 text-white/60" /> {a.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-9 flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3"
        >
          <MagneticButton
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 active:scale-95"
          >
            View Work
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 active:scale-95"
          >
            Contact
          </MagneticButton>
      <MagneticButton
  href="/Kazi Ubed-2.pdf"
  download
  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white/70 transition hover:text-white"
>
  <Download className="h-4 w-4" /> Download Resume
</MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/40"
        >
          <span className="inline-flex items-center gap-2"><MapPin className="h-3 w-3" /> Bhavnagar, India</span>
          <span>2+ Years Experience</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
