'use client'

import { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import BookingModal from '@/components/shared/BookingModal'

// Placeholder results - in production, these would come from a CMS or data file
const results = [
  {
    id: 1,
    treatment: 'Lip Fillers',
    description: '1ml lip filler for subtle volume and definition',
    beforeImage: '/images/results/placeholder-before.jpg',
    afterImage: '/images/results/placeholder-after.jpg',
  },
  {
    id: 2,
    treatment: 'Anti-Wrinkle',
    description: 'Forehead and frown line treatment',
    beforeImage: '/images/results/placeholder-before.jpg',
    afterImage: '/images/results/placeholder-after.jpg',
  },
  {
    id: 3,
    treatment: 'Skin Boosters',
    description: 'Profhilo treatment for skin hydration',
    beforeImage: '/images/results/placeholder-before.jpg',
    afterImage: '/images/results/placeholder-after.jpg',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    treatment: 'Lip Fillers',
    text: 'Consolata was fantastic from start to finish. She explained everything thoroughly and made me feel completely at ease. The results are exactly what I wanted - natural and beautiful!',
    rating: 5,
  },
  {
    name: 'Jennifer K.',
    treatment: 'Anti-Wrinkle',
    text: 'I was nervous about having treatment but Consolata\'s professionalism and warm manner put me at ease immediately. I\'m so happy with my results - I look refreshed but still like me.',
    rating: 5,
  },
  {
    name: 'Michelle R.',
    treatment: 'Skin Boosters',
    text: 'Such a lovely experience at Diluxe Aesthetics. Consolata is incredibly knowledgeable and takes the time to understand exactly what you\'re hoping to achieve. My skin has never looked better!',
    rating: 5,
  },
  {
    name: 'Emma T.',
    treatment: 'Lip Fillers',
    text: 'I\'ve been going to Consolata for over a year now and wouldn\'t go anywhere else. She\'s an absolute perfectionist and her attention to detail is incredible.',
    rating: 5,
  },
  {
    name: 'Rachel B.',
    treatment: 'Polynucleotides',
    text: 'The polynucleotide treatment has completely transformed my under-eye area. Consolata took her time to explain the process and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Louise H.',
    treatment: 'Fat Dissolving',
    text: 'Finally found someone I trust for aesthetic treatments. Consolata is honest, skilled, and genuinely cares about achieving the best results for her clients.',
    rating: 5,
  },
]

export default function ResultsPage() {
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
            Results & Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See real results from real clients and read what they have to say about their experience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary-600 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-500 text-sm">Google Rating</p>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-neutral-500 text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary-600 mb-2">4+</div>
              <p className="text-neutral-500 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              Before & After Gallery
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Real results from real clients. All photos are unedited and shared with permission.
            </p>
          </div>

          {/* Placeholder for when no images are available */}
          <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
            <div className="text-6xl mb-6">📸</div>
            <h3 className="font-display text-xl font-bold text-neutral-800 mb-3">
              Gallery Coming Soon
            </h3>
            <p className="text-neutral-600 max-w-md mx-auto mb-6">
              Before and after photos will be added here. In the meantime, visit our Instagram to see client results.
            </p>
            <a
              href="https://www.instagram.com/diluxe.aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
              What Clients Say
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Don&apos;t just take my word for it - here&apos;s what my clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-neutral-800">{testimonial.name}</p>
                  <p className="text-sm text-primary-600">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
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
            Ready to See Your Own Results?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your free consultation and let&apos;s discuss how I can help you achieve your aesthetic goals.
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
