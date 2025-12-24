'use client'

import { useState } from 'react'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import BookingModal from '@/components/shared/BookingModal'
import { getAllTreatments } from '@/data/treatments'

export default function TreatmentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const treatments = getAllTreatments()

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
            Our Treatments
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our range of premium aesthetic treatments, each designed to enhance your natural beauty with subtle, expert results.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment) => (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{treatment.icon}</div>
                    <span className="bg-primary-100 text-primary-600 px-4 py-1 rounded-full text-sm font-semibold">
                      {treatment.price}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {treatment.name}
                  </h2>

                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {treatment.tagline}
                  </p>

                  <div className="flex items-center text-neutral-500 text-sm mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {treatment.duration}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {treatment.benefits.slice(0, 3).map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  HIFU Non-Surgical Facelift
                </h3>
                <p className="text-white/90">
                  Looking for our signature HIFU treatment? Visit our dedicated page for full details.
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation and I&apos;ll help you create a personalised treatment plan tailored to your goals.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
