'use client'

import { useState } from 'react'

const treatments = [
  { id: 'anti-wrinkle', name: 'Anti-Wrinkle Injections', price: 'From £180' },
  { id: 'lip-fillers', name: 'Lip Fillers', price: 'From £220' },
  { id: 'skin-boosters', name: 'Skin Boosters', price: 'From £250' },
  { id: 'polynucleotides', name: 'Polynucleotides', price: 'From £300' },
  { id: 'fat-dissolving', name: 'Fat Dissolving', price: 'From £150' },
  { id: 'vitamin-injections', name: 'Vitamin Injections', price: 'From £35' },
  { id: 'hifu', name: 'HIFU Facelift', price: 'From £195' },
  { id: 'consultation', name: 'Free Consultation', price: 'Free' },
]

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Find the selected treatment details
    const selectedTreatment = treatments.find(t => t.id === formData.treatment)

    // Format date nicely
    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    // Build beautiful formatted notes for GHL
    const formattedNotes = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ NEW BOOKING REQUEST ✨
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 TREATMENT REQUESTED
${selectedTreatment?.name || formData.treatment}
${selectedTreatment?.price || ''}

👤 CLIENT DETAILS
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

${formData.message ? `💬 CLIENT NOTES\n${formData.message}\n` : ''}
📅 Submitted: ${formattedDate}
🌐 Source: diluxaesthetics.co.uk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()

    try {
      // GHL Webhook
      const response = await fetch('https://services.leadconnectorhq.com/hooks/0kfpm8NVBgT1ZEDGRJF3/webhook-trigger/f4e779dd-c47f-4d1d-bf26-b2caf9232c53', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Individual fields for GHL mapping
          name: formData.name,
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          treatment: selectedTreatment?.name || formData.treatment,
          treatmentPrice: selectedTreatment?.price || '',
          message: formData.message,
          // Beautifully formatted notes field for GHL custom field
          booking_request: formattedNotes,
          // Meta
          source: 'diluxaesthetics.co.uk',
          formType: 'Booking Request',
          timestamp: now.toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', treatment: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] overflow-y-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="font-display text-2xl sm:text-3xl font-bold relative z-10">
            Book Your Appointment
          </h2>
          <p className="text-white/90 mt-2 relative z-10">
            Start your journey to natural beauty
          </p>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-800 mb-2">
                Thank You!
              </h3>
              <p className="text-neutral-600 mb-6">
                We&apos;ll be in touch within 24 hours to confirm your appointment.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  onClose()
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Treatment Selection */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Select Treatment *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {treatments.map((treatment) => (
                    <label
                      key={treatment.id}
                      className={`relative flex flex-col p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.treatment === treatment.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="treatment"
                        value={treatment.id}
                        checked={formData.treatment === treatment.id}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="sr-only"
                        required
                      />
                      <span className={`text-sm font-medium ${
                        formData.treatment === treatment.id ? 'text-primary-700' : 'text-neutral-700'
                      }`}>
                        {treatment.name}
                      </span>
                      <span className={`text-xs mt-1 ${
                        formData.treatment === treatment.id ? 'text-primary-600' : 'text-neutral-500'
                      }`}>
                        {treatment.price}
                      </span>
                      {formData.treatment === treatment.id && (
                        <div className="absolute top-2 right-2">
                          <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  placeholder="07XXX XXXXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                  placeholder="Any questions or preferences..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Request Appointment'
                )}
              </button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting, you agree to our{' '}
                <a href="/privacy-policy" className="text-primary-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
