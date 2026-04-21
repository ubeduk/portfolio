'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeading } from './Section'

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Production Apps', value: '6' },
  { label: 'Live on Play Store', value: '2' },
  { label: 'Domains', value: '5+' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Crafting apps with intent." />
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6 text-[17px] leading-[1.75] text-white/70"
        >
          <p>
            I&apos;m <span className="text-white">Ubed Kazi</span>, a Flutter Developer with
            2+ years of experience building high-performance mobile applications.
          </p>
          <p>
            I specialize in creating scalable, user-friendly apps with clean UI, smooth performance,
            and strong backend integrations. I&apos;ve shipped multiple production-level applications
            across logistics, community services, education systems, SaaS tools, and utility platforms.
          </p>
          <p>
            My focus is on performance optimization, state management, and solving real-world problems
            through mobile technology &mdash; one pixel and one API call at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-2"
        >
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
              >
                <div className="text-3xl font-semibold tracking-tight text-white">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/40">{s.label}</div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
