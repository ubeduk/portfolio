'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, ExternalLink, Sparkles } from 'lucide-react'
import { Section, SectionHeading } from './Section'

const projects = [
  {
    id: 'open-fashion',
    title: 'Open Fashion App',
    category: 'E-commerce',
    short: 'Full-featured fashion e-commerce built for performance and scale.',
    description:
      'A production-ready fashion e-commerce mobile application with clean catalog browsing, cart, checkout flows and a Node.js backend. State managed with GetX for reactive, efficient updates.',
    stack: ['Flutter', 'Node.js', 'GetX', 'REST API'],
    highlights: ['Reactive state with GetX', 'Custom UI components', 'Smooth image-heavy lists'],
  },
  {
    id: 'drone-logistics',
    title: 'Drone Logistics App',
    category: 'Logistics · Real-time',
    short: 'Drone selling, renting and real-time logistics with camera integration.',
    description:
      'A logistics platform for drone operators featuring real-time telemetry, Python-powered camera integration, and an end-to-end selling & renting workflow with secure payments.',
    stack: ['Flutter', 'Python', 'Real-time APIs', 'Firebase'],
    highlights: ['Real-time data stream', 'Python camera integration', 'Rental workflow'],
  },
  {
    id: 'jub-service',
    title: 'JUB Service App',
    category: 'Community · LIVE',
    short: 'Live on Google Play — community service management platform.',
    description:
      'A live, production community service app serving the Ziaat community with event flows, announcements, user profiles and admin tooling. Currently on the Google Play Store.',
    stack: ['Flutter', 'Firebase', 'REST API', 'Push Notifications'],
    highlights: ['Live on Play Store', 'Role-based access', 'Push notifications'],
    // link: 'https://play.google.com/store/apps/details?id=com.ziaat.jubservice.jub_service_app',
    live: true,
  },
  {
    id: 'madrasa',
    title: 'Madrasa Management App',
    category: 'Education · LIVE',
    short: 'End-to-end management system for Madrasa institutions.',
    description:
      'A complete management system handling student records, attendance, curriculum tracking and staff coordination. Deployed and actively used in production.',
    stack: ['Flutter', 'Firebase', 'Cloud Functions', 'REST API'],
    highlights: ['Live deployment', 'Attendance tracking', 'Role-based modules'],
    // link: 'https://play.google.com/store/apps/details?id=com.ziaat.jubservice.jub_service_app',
    live: true,
  },
  {
    id: 'mosque-noor',
    title: 'Mosque Aqsa App',
    category: 'Utility · Community',
    short: 'A complete companion app for daily Islamic practice.',
    description:
      'Noor brings prayer times, Qaza calculator, full Quran read & play, Qibla finder and Azan notifications into one beautifully minimal experience.',
    stack: ['Flutter', 'Location APIs', 'Audio Engine', 'Notifications'],
    highlights: ['Namaz times', 'Qaza calculator', 'Quran read & audio', 'Qibla finder', 'Azan notifications'],
  },
  {
    id: 'simplifyte',
    title: 'Simplifyte SaaS App',
    category: 'SaaS · Productivity',
    short: 'Role-based SaaS platform with task, time and client management.',
    description:
      'An all-in-one SaaS productivity tool: role-based authentication, task manager, time logger, and client data system designed for growing teams.',
    stack: ['Flutter', 'REST API', 'Auth', 'State Management'],
    highlights: ['Role-based system', 'Task manager', 'Time logger', 'Client data system'],
  },
  {
  id: 'waqt_e_namaz',
  title: 'Waqt-e-Namaz',
  category: 'Islamic Utility · Role-Based System',
  short: 'Real-time namaz scheduling powered by Supabase.',
  description:
    'A full-featured mosque and prayer management system with role-based access. Admins control namaz timings, takvim schedules, Eid-ul-Fitr prayers, azan timing, and masjid data. Built with Supabase real-time database, ensuring instant updates across all users without refresh. Designed for accuracy, reliability, and seamless community usage.',
  stack: ['Flutter', 'Supabase', 'Realtime', 'PostgreSQL'],
  highlights: [
    'Admin dashboard control',
    'Live database sync (Supabase)',
    'Prayer + takvim scheduling',
    'Masjid CRUD operations',
  ],
  
  id: 'gym_management',
  title: 'Gym Management System',
  category: 'Fitness SaaS · Role-Based System',
  short: 'A trainer-client fitness management app with session tracking and personalized plans.',
  description:
    'A role-based gym management application designed for trainers to manage their clients efficiently. Trainers can add clients, track session attendance using punch-in and punch-out functionality, and monitor complete client history. The system also allows trainers to create and assign personalized workout and diet plans, which users can follow directly within the app. Built to streamline fitness workflows and improve client engagement.',
  stack: ['Flutter', 'REST API', 'State Management', 'Backend Integration'],
  highlights: [
    'Trainer & Client role system',
    'Session punch-in / punch-out tracking',
    'Workout plan management',
    'Diet plan assignment',
    'Client progress tracking',
  ],
  

  id: 'doctor_patient',
  title: 'Doctor Patient App',
  category: 'HealthTech · Full Platform',
  short: 'A complete doctor-patient ecosystem with booking, reviews, and consultation features.',
  description:
    'A full-featured healthcare platform connecting doctors and patients through a structured and scalable system. Doctors can register, upload verification documents, manage their profiles, and define available appointment slots. Patients can explore a list of verified doctors, view profiles, read live reviews, and book appointments based on real-time availability. The platform also supports call-based appointment scheduling and complete appointment management for both doctors and patients, ensuring a seamless healthcare experience.',
  stack: ['Flutter', 'REST API', 'Role-Based System', 'Backend Services'],
  highlights: [
    'Doctor & Patient role-based system',
    'Doctor listing & profile management',
    'Appointment booking & scheduling',
    'Live doctor reviews & ratings',
    'Call-based appointment feature',
    'Doctor verification workflow',
    'Real-time appointment management',
  ],



}

]

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      layout
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/[0.04] to-white/[0.01] transition hover:border-white/20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)] opacity-0 transition group-hover:opacity-100" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="relative z-10 flex w-full items-start justify-between gap-6 p-6 text-left md:p-8"
      >
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">{project.category}</span>
            {project.live && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> LIVE
              </span>
            )}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-white/55">{project.short}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition group-hover:border-white/30 group-hover:bg-white/10"
        >
          <Plus className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 p-6 md:p-8">
              <p className="text-[15px] leading-relaxed text-white/70">{project.description}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-white/70">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/40" />
                    {h}
                  </div>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black transition hover:bg-white/90"
                >
                  View on Play Store <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Products shipped, problems solved."
        description="A collection of production applications across e-commerce, logistics, education, community and SaaS."
      />
      <div className="grid gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
