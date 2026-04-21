'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeading } from './Section'

const coreSkills = [
  { name: 'Flutter & Dart', level: 95 },
  { name: 'State Management', level: 92 },
  { name: 'REST API Integration', level: 90 },
  { name: 'Firebase', level: 88 },
  { name: 'Performance Optimization', level: 86 },
  { name: 'UI/UX Implementation', level: 90 },
  { name: 'Next.js & React', level: 80 },
]

const tools = ['Git & GitHub', 'Figma', 'Canva', 'VS Code', 'Android Studio', 'Postman']

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools of the craft."
        description="A curated stack refined through shipping real products."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          {coreSkills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group"
            >
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white/85">{s.name}</span>
                <span className="tabular-nums text-white/35">{s.level}%</span>
              </div>
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-linear-to-r from-white/80 to-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 glass"
        >
          <div className="mb-6 text-[11px] uppercase tracking-[0.22em] text-white/40">Tools</div>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/75 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
            {[
              { k: 'Clean', v: 'Architecture' },
              { k: 'Smooth', v: 'Performance' },
              { k: 'Pixel', v: 'Perfection' },
            ].map((x) => (
              <div key={x.k}>
                <div className="text-xl font-semibold text-white">{x.k}</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-white/40">{x.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
