'use client'

import { motion } from 'framer-motion'

const items = [
  'Flutter', 'Dart', 'Firebase', 'REST API', 'GetX', 'Riverpod',
  'Provider', 'Next.js', 'React', 'Node.js', 'Git', 'Figma',
  'Flame Engine', 'Python', 'Cloud Functions',
]

export default function TechMarquee() {
  return (
    <div className="relative z-10 border-y border-white/5 bg-black/30 py-8">
      <div className="mx-auto max-w-6xl overflow-hidden px-6">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {[...items, ...items].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="text-2xl font-light tracking-tight text-white/25 transition hover:text-white sm:text-3xl"
            >
              {t}
              <span className="ml-12 text-white/10">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
