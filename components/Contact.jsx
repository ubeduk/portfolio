'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Link } from 'lucide-react'
import { Section, SectionHeading } from './Section'
import { supabase } from '@/lib/supabase'

export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const submit = async (e) => {
    e.preventDefault()

    if (!state.name || !state.email || !state.phone || !state.message) return

    setSending(true)

    const { error } = await supabase
      .from('contacts')
      .insert([state])

    if (error) {
      console.log(error)
      setSending(false)
      return
    }

    setSending(false)
    setSuccess(true)
    setShowPopup(true)

    setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })

    setTimeout(() => setShowPopup(false), 4000)
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something real."
        description="Got an idea for an app, website, or SaaS product? Let’s turn it into reality."
      />

      <div className="grid gap-8 md:grid-cols-5">

        {/* LEFT SIDE */}
       <div className="md:col-span-2 space-y-5 pr-2">
  <a
    href="mailto:Ubedkazii5151@gmail.com"
    className="card"
    style={{ display: 'block' }}
  >
    <Icon icon={<Mail />} title="Email" value="Ubedkazii5151@gmail.com" />
  </a>

  <a
    href="tel:+917041038720"
    className="card"
    style={{ display: 'block' }}
  >
    <Icon icon={<Phone />} title="Phone" value="+91 70410 38720" />
  </a>

  <a
    href="https://www.linkedin.com/in/kazi-ubed-5151uk"
    target="_blank"
    className="card"
    style={{ display: 'block' }}
  >
    <Icon icon={<Link />} title="LinkedIn" value="Linkedin/Ubedkazi" />
  </a>

  <div className="card">
    <Icon icon={<MapPin />} title="Location" value="Bhavnagar, India" />
  </div>
</div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="md:col-span-3 space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FloatInput
              label="Your Name"
              value={state.name}
              onChange={(v) => setState({ ...state, name: v })}
            />
            <FloatInput
              label="Email"
              type="email"
              value={state.email}
              onChange={(v) => setState({ ...state, email: v })}
            />
          </div>

          <FloatInput
            label="Phone"
            type="tel"
            value={state.phone}
            onChange={(v) => setState({ ...state, phone: v })}
          />

          <FloatTextarea
            label="Tell me about your project (App / Website / SaaS)"
            value={state.message}
            onChange={(v) => setState({ ...state, message: v })}
          />

          {/* 🔥 HIGH-CONVERT BUTTON */}
          <button
            type="submit"
            disabled={sending}
            className="flex items-center justify-center gap-2 w-full rounded-full bg-white px-6 py-3 text-black text-sm font-medium hover:bg-white/90"
          >
            {sending ? 'Sending...' : 'Start Your Project →'}
            <Send size={14} />
          </button>

          {/* 🔥 TRUST + AVAILABILITY */}
          <p style={{
            fontSize: '0.75rem',
            color: '#888',
            textAlign: 'center',
            lineHeight: 1.5,
          }}>
            Available for <strong>Freelance</strong>, <strong>Onsite</strong>, and <strong>Remote</strong> work.  
            I usually respond within a few hours.
          </p>

          {success && (
            <p style={{ color: '#4ade80', fontSize: '0.8rem' }}>
              Message sent successfully
            </p>
          )}
        </form>
      </div>

      {/* 🔥 POPUP */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div style={{
            background: '#0e0e11',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '360px',
            textAlign: 'center',
          }}>
            <h3 style={{ color: '#fff', marginBottom: '0.8rem' }}>
              🚀 Message Sent
            </h3>

            <p style={{ color: '#aaa', fontSize: '0.85rem' }}>
              Ubed Kazi will contact you shortly to discuss your project.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1.2rem',
                borderRadius: '999px',
                background: '#fff',
                color: '#000',
                fontSize: '0.75rem',
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </Section>
  )
}

/* COMPONENTS */

function Icon({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
        {icon}
      </div>
      <div>
        <div className="text-xs text-white/40">{title}</div>
        <div className="text-sm text-white/90">{value}</div>
      </div>
    </div>
  )
}

function FloatInput({ label, value, onChange, type = 'text' }) {
  return (
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white"
    />
  )
}

function FloatTextarea({ label, value, onChange }) {
  return (
    <textarea
      required
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white"
    />
  )
}