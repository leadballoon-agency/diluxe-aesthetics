'use client'

import { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import BookingModal from '@/components/shared/BookingModal'
import Link from 'next/link'

const treatments = [
  {
    name: 'Anti-Wrinkle Injections',
    slug: 'anti-wrinkle-injections',
    description: 'Smooth fine lines and prevent new wrinkles with precise muscle-relaxing injections.',
    price: 'From £180',
    icon: '✨',
  },
  {
    name: 'Lip Fillers',
    slug: 'lip-fillers',
    description: 'Enhance your natural lip shape with subtle, beautiful volume and definition.',
    price: 'From £220',
    icon: '💋',
  },
  {
    name: 'Skin Boosters',
    slug: 'skin-boosters',
    description: 'Deep hydration and skin renewal with Profhilo and Seventy Hyal treatments.',
    price: 'From £250',
    icon: '💧',
  },
  {
    name: 'Polynucleotides',
    slug: 'polynucleotides',
    description: 'Revolutionary skin regeneration for firmer, more youthful-looking skin.',
    price: 'From £300',
    icon: '🧬',
  },
  {
    name: 'Fat Dissolving',
    slug: 'fat-dissolving',
    description: 'Target stubborn fat with Lemon Bottle and Aqualyx for a sculpted profile.',
    price: 'From £150',
    icon: '🎯',
  },
  {
    name: 'Vitamin Injections',
    slug: 'vitamin-injections',
    description: 'Boost energy and wellness with B12, Biotin and vitamin therapy shots.',
    price: 'From £35',
    icon: '💉',
  },
]

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <SiteHeader onBookingClick={() => setIsBookingOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Now Booking for January</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Natural Beauty,
            <span className="block text-accent-300">Expert Enhancement</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium aesthetic treatments in Cambridge by advanced aesthetics practitioner.
            Subtle enhancements that celebrate your unique beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Book Consultation
            </button>
            <Link
              href="/treatments"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all"
            >
              View Treatments
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 mt-16 flex-wrap">
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Advanced Practitioner</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Klarna Available</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              Our Treatments
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
              Enhance Your Natural Beauty
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Tailored aesthetic treatments designed to enhance your unique features with subtle, natural-looking results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-200"
              >
                <div className="text-4xl mb-4">{treatment.icon}</div>
                <h3 className="font-display text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold">{treatment.price}</span>
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* HIFU Banner */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Looking for HIFU Non-Surgical Facelift?
                </h3>
                <p className="text-white/90">
                  Visit our dedicated HIFU treatment page for full details and booking.
                </p>
              </div>
              <a
                href="https://hifucambridge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Visit HIFU Cambridge
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                Meet Your Practitioner
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
                Hello, I&apos;m Consolata
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                As an advanced aesthetics practitioner, I&apos;m passionate about helping
                you look and feel your best. My approach focuses on subtle, natural-looking
                enhancements that celebrate your unique beauty.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Based in Cherry Hinton, Cambridge, I offer a warm, welcoming clinic environment
                where you can feel completely at ease. Every treatment is tailored to your
                individual needs and aesthetic goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Learn More About Me
                </Link>
                <a
                  href="https://www.instagram.com/diluxe.aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-primary-100">
                <img
                  src="https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png"
                  alt="Consolata - Aesthetic Practitioner at Diluxe Aesthetics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-800 font-semibold">5.0 Rating</p>
                <p className="text-neutral-500 text-sm">Based on 47+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Book your free consultation today and discover how we can help you achieve your aesthetic goals.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Book Free Consultation
          </button>

          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Klarna Available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Private Clinic</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
