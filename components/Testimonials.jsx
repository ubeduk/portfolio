'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeading } from './Section'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Ubed consistently delivers pixel-perfect Flutter builds with a strong sense for performance. The apps he shipped for us are genuinely fast and maintainable.',
    name: 'Engineering Lead',
    role: 'Ziaat Technolabs',
  },
  {
    quote:
      'Real-time drone logistics is a hard problem. Ubed’s calm execution and clean state management made the app feel effortless to use in the field.',
    name: 'Product Owner',
    role: 'Usha Neuros',
  },
  {
    quote:
      'A rare blend of clean UI craft and engineering discipline. He treats every micro-interaction with intention — exactly what modern mobile needs.',
    name: 'Senior Designer',
    role: 'Simplifyte',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Words from collaborators."
        description="A few kind words from people I’ve built and shipped with."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 glass transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <Quote className="h-6 w-6 text-white/25" />
            <blockquote className="mt-6 text-[15px] leading-[1.7] text-white/80">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/80">
                {t.name
                  .split(' ')
                  .map((x) => x[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <div className="text-sm text-white">{t.name}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  )
}
