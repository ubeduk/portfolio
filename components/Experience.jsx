'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Section, SectionHeading } from './Section'

const jobs = [
  {
    id: 1,
    company: 'Ziaat Technolabs',
    role: 'Flutter Developer',
    period: 'Oct 2024 — Present',
    duration: '8+ months',
    current: true,
    points: [
      'Built 3 production applications (2 live on Google Play + 1 internal)',
      'End-to-end REST API integration and state management architecture',
      'Performance optimization: faster cold starts, smoother scrolling, lower memory',
    ],
    metrics: [
      { v: '3', k: 'Apps' },
      { v: '2', k: 'Live' },
      { v: '8mo', k: 'Tenure' },
    ],
    tags: ['Flutter', 'Firebase', 'REST', 'GetX'],
  },
  {
    id: 2,
    company: 'Usha Neuros',
    role: 'Flutter Developer · Drone Systems',
    period: 'Logistics Drone Project',
    duration: 'Contract',
    points: [
      'Built a logistics drone mobile application with real-time systems',
      'Integrated Python-based camera pipelines with Flutter UI',
      'Designed reliable flows for drone selling and renting',
    ],
    metrics: [
      { v: '1', k: 'App' },
      { v: 'Real-time', k: 'Systems' },
      { v: 'Py', k: 'Integrations' },
    ],
    tags: ['Flutter', 'Python', 'Real-time'],
  },
  {
    id: 3,
    company: 'Rudra IT Hub',
    role: 'Mobile Development Intern',
    period: '6 Months Internship',
    duration: '6 months',
    points: [
      'Structured mobile development training across core modules',
      'Delivered UI modules and contributed to internal projects',
    ],
    metrics: [
      { v: '6mo', k: 'Training' },
      { v: 'UI', k: 'Modules' },
    ],
    tags: ['Mobile', 'UI', 'Foundations'],
  },
]

function ExperienceCard({ job, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 transition hover:border-white/25 hover:bg-white/[0.04] sm:p-8 md:p-10"
    >
      {/* Giant numeral in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none font-semibold leading-none tracking-tighter text-white/[0.035] transition-all duration-700 group-hover:text-white/[0.06] sm:-right-4 sm:-top-10"
        style={{ fontSize: 'clamp(160px, 28vw, 320px)' }}
      >
        {String(job.id).padStart(2, '0')}
      </div>

      {/* Ambient hover glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/[0.04] opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

      <div className="relative">
        {/* Top row: number pill + NOW badge */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-[11px] font-medium tracking-[0.22em] text-white/40">
            {String(job.id).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/45">{job.period}</span>
          {job.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.15em] text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> NOW
            </span>
          )}
        </div>

        {/* Company + Role */}
        <div className="grid gap-6 md:grid-cols-5 md:items-start">
          <div className="md:col-span-3">
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {job.company}
            </h3>
            <p className="mt-1.5 text-sm text-white/55 sm:text-base">{job.role}</p>

            <ul className="mt-6 space-y-2.5">
              {job.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/55"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics panel */}
          <div className="md:col-span-2">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 glass">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Snapshot</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
              <div className={`grid gap-3 ${job.metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {job.metrics.map((m) => (
                  <div key={m.k} className="rounded-xl border border-white/5 bg-black/30 p-3 text-center">
                    <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{m.v}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-white/40">{m.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.18em] text-white/40">
                {job.duration}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shimmer line on hover */}
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:scale-x-100 sm:inset-x-8 md:inset-x-10" />
    </motion.article>
  )
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline of shipping."
        description="From internships to production Flutter engineering — a focused 2+ year journey."
      />
      <div className="flex flex-col gap-5">
        {jobs.map((j, i) => (
          <ExperienceCard key={j.id} job={j} index={i} />
        ))}
      </div>
    </Section>
  )
}
