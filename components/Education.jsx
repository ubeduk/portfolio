'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Section, SectionHeading } from './Section'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Foundations." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center md:justify-between md:p-10"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <GraduationCap className="h-5 w-5 text-white/80" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">2020 — 2024</div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              Bachelor of Computer Applications
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Swami Sahajanand College of Commerce &amp; Management
            </p>
          </div>
        </div>
        <div className="hidden h-16 w-px bg-white/10 md:block" />
        <div className="text-sm text-white/50 md:max-w-xs md:text-right">
          Strong foundation in computing, algorithms and application development — the launchpad for building real-world mobile products.
        </div>
      </motion.div>
    </Section>
  )
}
