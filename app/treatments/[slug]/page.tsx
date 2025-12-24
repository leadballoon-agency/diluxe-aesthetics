'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import BookingModal from '@/components/shared/BookingModal'
import { getTreatmentBySlug, getAllTreatments } from '@/data/treatments'

export default function TreatmentPage() {
  const params = useParams()
  const slug = params.slug as string
  const treatment = getTreatmentBySlug(slug)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  if (!treatment) {
    notFound()
  }

  const otherTreatments = getAllTreatments().filter(t => t.slug !== slug).slice(0, 3)

  return (
    <>
      <SiteHeader onBookingClick={() => setIsBookingOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            All Treatments
          </Link>

          <div className="text-6xl mb-6">{treatment.icon}</div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {treatment.name}
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {treatment.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
              <span className="text-white font-semibold">{treatment.price}</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
              <span className="text-white">{treatment.duration}</span>
            </div>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Book This Treatment
          </button>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed">
            {treatment.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              The Treatment Process
            </h2>
          </div>

          <div className="space-y-8">
            {treatment.process.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      {treatment.suitableFor && (
        <section className="py-16 sm:py-20 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
                Ideal For Treating
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {treatment.suitableFor.map((item, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-neutral-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {treatment.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-800 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      {treatment.aftercare && (
        <section className="py-16 sm:py-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
                Aftercare Advice
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                {treatment.aftercare.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Book Your {treatment.name}?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Start your journey to natural enhancement with a consultation.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Book Now - {treatment.price}
          </button>
        </div>
      </section>

      {/* Other Treatments */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              Explore Other Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTreatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-neutral-100 hover:border-primary-200"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-display text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {t.name}
                </h3>
                <p className="text-primary-600 font-semibold">{t.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/treatments"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
            >
              View All Treatments
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
