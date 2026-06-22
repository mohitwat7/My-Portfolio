'use client'

import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Check, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { SectionHeading } from './section-heading'
import emailjs from '@emailjs/browser'

const details = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'mohitwatofficial@gmail.com', 
    href: 'mailto:mohitwatofficial@gmail.com' 
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '+91-7796301657', 
    href: 'tel:+917796301657' 
  },
  { 
    icon: MapPin, 
    label: 'Location', 
    value: 'Pune, India', 
    href: undefined 
  },
  { 
    icon: LinkedinIcon, 
    label: 'LinkedIn', 
    value: '/in/mohit-wat-16b142255', 
    href: 'https://www.linkedin.com/in/mohit-wat-16b142255' 
  },
  { 
    icon: GithubIcon, 
    label: 'GitHub', 
    value: '@mohitwat7', 
    href: 'https://github.com/mohitwat7' 
  },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS credentials missing!')
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
        return
      }

      // Get current time with full formatting
      const now = new Date()
      const timeString = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })

      // Create template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: timeString,
      }

      // Send using emailjs.send() with parameters
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (result.status === 200) {
        setStatus('sent')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Email send error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something measurable"
        description="Turning raw data into actionable business insights — where analytics meets strategy. If you're building a team that values data-driven decisions, let's have a conversation."
      />

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="glass glow-purple grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Reach out directly or drop a message — I usually respond within a day.
            </p>
            <ul className="mt-6 space-y-3">
              {details.map((d) => {
                const content = (
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                      <d.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">
                        {d.label}
                      </span>
                      <span className="text-sm font-medium">{d.value}</span>
                    </span>
                  </span>
                )
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith('http') ? '_blank' : undefined}
                        rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block rounded-2xl border border-transparent p-1 transition-colors hover:border-border hover:bg-card/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-1">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right Column - Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Field
              label="Subject"
              id="subject"
              placeholder="Role / opportunity"
              value={formData.subject}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Leave a message with your LinkedIn/GitHub/X username..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.01] disabled:opacity-80 ${
                status === 'sent' 
                  ? 'bg-green-600' 
                  : status === 'error'
                  ? 'bg-red-600'
                  : 'bg-primary'
              }`}
            >
              {status === 'sending' && (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              )}
              {status === 'sent' && (
                <>
                  <Check className="size-4" />
                  Message sent — thank you!
                </>
              )}
              {status === 'error' && (
                <>
                  <Send className="size-4" />
                  Failed — try again?
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send className="size-4" />
                  Send message
                </>
              )}
            </button>
            
            {/* Status Messages */}
            {status === 'sent' && (
              <p className="text-center text-sm text-green-600">
                ✓ Your message has been sent. I'll get back to you soon!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-600">
                ✗ Failed to send. Please email me directly or try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// Field Component
function Field({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  )
}
