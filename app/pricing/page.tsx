'use client'

import { useState } from 'react'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import BookingModal from '@/components/shared/BookingModal'
import { getAllTreatments } from '@/data/treatments'

const pricingCategories = [
  {
    name: 'Anti-Wrinkle Injections',
    slug: 'anti-wrinkle-injections',
    icon: '✨',
    items: [
      { name: '1 Area', price: '£180' },
      { name: '2 Areas', price: '£220' },
      { name: '3 Areas', price: '£260' },
      { name: 'Additional Areas', price: '£50 each' },
    ],
  },
  {
    name: 'Lip Fillers',
    slug: 'lip-fillers',
    icon: '💋',
    items: [
      { name: '0.5ml', price: '£150' },
      { name: '1ml', price: '£220' },
      { name: '1ml Premium', price: '£280' },
    ],
  },
  {
    name: 'Skin Boosters',
    slug: 'skin-boosters',
    icon: '💧',
    items: [
      { name: 'Seventy Hyal', price: '£250' },
      { name: 'Profhilo (Face)', price: '£300' },
      { name: 'Profhilo (Neck)', price: '£300' },
      { name: 'Profhilo Course (2)', price: '£550' },
    ],
  },
  {
    name: 'Polynucleotides',
    slug: 'polynucleotides',
    icon: '🧬',
    items: [
      { name: 'Single Treatment', price: '£300' },
      { name: 'Course of 3', price: '£800' },
      { name: 'Under Eyes', price: '£250' },
    ],
  },
  {
    name: 'Fat Dissolving',
    slug: 'fat-dissolving',
    icon: '🎯',
    items: [
      { name: 'Lemon Bottle (per vial)', price: '£150' },
      { name: 'Aqualyx (per vial)', price: '£180' },
      { name: 'Double Chin Package', price: '£400' },
    ],
  },
  {
    name: 'Vitamin Injections',
    slug: 'vitamin-injections',
    icon: '💉',
    items: [
      { name: 'Vitamin B12', price: '£35' },
      { name: 'Biotin', price: '£35' },
      { name: 'Vitamin D', price: '£35' },
      { name: 'Course of 4', price: '£120' },
    ],
  },
]

export default function PricingPage() {
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
            Price List
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparent pricing for all treatments. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Finance Banner */}
      <section className="py-8 bg-accent-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-neutral-900 font-semibold text-lg">
              Spread the cost with Klarna
            </span>
            <span className="text-neutral-800">
              Pay in 3 interest-free instalments
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCategories.map((category) => (
              <div
                key={category.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100"
              >
                <div className="bg-primary-50 p-6 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="font-display text-xl font-bold text-neutral-800">
                      {category.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-neutral-600">{item.name}</span>
                        <span className="font-semibold text-neutral-800">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/treatments/${category.slug}`}
                    className="mt-6 block text-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* HIFU Link */}
          <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white text-center">
            <h3 className="font-display text-2xl font-bold mb-3">
              HIFU Non-Surgical Facelift
            </h3>
            <p className="text-white/90 mb-4">From £195 - Visit our dedicated HIFU page for full pricing</p>
            <a
              href="https://hifucambridge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View HIFU Prices
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-neutral-800 mb-8 text-center">
            Important Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-800 mb-3">Consultations</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                All consultations are free of charge with no obligation. During your consultation,
                we&apos;ll discuss your goals, assess your suitability, and create a personalised
                treatment plan.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-800 mb-3">Deposits</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                A deposit may be required to secure your booking. This is fully redeemable against
                your treatment cost. Deposits are non-refundable for cancellations within 24 hours.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-800 mb-3">Payment</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We accept cash, card, and bank transfer. Klarna is available for eligible treatments,
                allowing you to spread payments over 3 interest-free instalments.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-800 mb-3">Packages</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ask about our treatment packages and courses for better value. Multiple treatment
                bookings and regular clients may be eligible for special pricing.
              </p>
            </div>
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
            Ready to Book?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your free consultation and let&apos;s discuss the best treatment options for you.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
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
