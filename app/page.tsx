'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
  loading: () => null,
})

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-[#F5F5F5]">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Ambient layers */}
      <div className="noise-overlay" />
      <div className="vignette" />

      {/* Top gradient fade for legibility */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[3] h-40 bg-gradient-to-b from-black via-black/60 to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <CursorGlow />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
