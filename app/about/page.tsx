'use client'

import { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import BookingModal from '@/components/shared/BookingModal'
import Link from 'next/link'

const qualifications = [
  'Advanced Aesthetics Practitioner',
  'Botulinum Toxin & Dermal Fillers Certified',
  'Profhilo & Skin Booster Trained',
  'Polynucleotide Treatment Specialist',
  'Fat Dissolving Injectable Certified',
  'Fully Insured & Registered',
]

const values = [
  {
    title: 'Natural Results',
    description: 'I believe in enhancing your natural beauty, not changing who you are. Subtle, elegant results that still look like you.',
    icon: '✨',
  },
  {
    title: 'Personalised Care',
    description: 'Every face is unique. I take time to understand your goals and create a bespoke treatment plan just for you.',
    icon: '💝',
  },
  {
    title: 'Safety First',
    description: 'Your safety is my priority. I use only premium, approved products and follow the highest clinical standards.',
    icon: '🛡️',
  },
  {
    title: 'Ongoing Support',
    description: 'My care doesn\'t end when you leave. I\'m always available for questions and follow-up advice.',
    icon: '🤝',
  },
]

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <SiteHeader onBookingClick={() => setIsBookingOpen(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get to know the person behind Diluxe Aesthetics and my approach to natural enhancement.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-primary-100 shadow-2xl">
                <img
                  src="https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png"
                  alt="Consolata - Advanced Aesthetics Practitioner at Diluxe Aesthetics"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-400/20 rounded-full -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6">
                Your Practitioner
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
                Hello, I&apos;m Consolata
              </h2>

              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Welcome to Diluxe Aesthetics! I&apos;m Consolata, an advanced aesthetics practitioner
                  based in Cherry Hinton, Cambridge. My journey into aesthetics began from a deep
                  passion for helping people feel confident and beautiful in their own skin.
                </p>
                <p>
                  I believe that aesthetic treatments should enhance your natural features, not
                  change who you are. My philosophy centres on subtle, elegant results that leave
                  you looking refreshed and rejuvenated – never overdone.
                </p>
                <p>
                  Operating from my private clinic, I offer a calm, welcoming environment where
                  you can feel completely at ease. I take the time to truly understand your goals
                  and concerns, ensuring every treatment is tailored specifically to you.
                </p>
                <p>
                  Whether you&apos;re looking to smooth fine lines, add subtle volume to your lips,
                  or rejuvenate your skin, I&apos;m here to guide you through every step of your
                  aesthetic journey.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Book Consultation
                </button>
                <a
                  href="https://www.instagram.com/diluxe.aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @diluxe.aesthetics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              Training & Qualifications
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              I&apos;m committed to ongoing education and training to ensure I deliver the safest, most effective treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-700 font-medium">{qualification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              My Approach
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These core values guide everything I do at Diluxe Aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-bold text-neutral-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
            The Clinic
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Diluxe Aesthetics is located in a private, comfortable setting in Cherry Hinton, Cambridge.
            The clinic offers a calm, relaxing atmosphere where you can feel completely at ease during
            your treatment. Free parking is available at the rear of the building.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm inline-block">
            <p className="text-neutral-800 font-semibold mb-2">216 Cherry Hinton Road</p>
            <p className="text-neutral-600">Cambridge, CB1 7AW</p>
            <p className="text-neutral-500 text-sm mt-3">Free parking at rear (MDL Male Image Barbers)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;d love to meet you and discuss how I can help you achieve your aesthetic goals.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Book Your Free Consultation
          </button>
        </div>
      </section>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
