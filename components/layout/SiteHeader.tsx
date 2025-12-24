'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const treatments = [
  { name: 'Anti-Wrinkle Injections', slug: 'anti-wrinkle-injections', external: false },
  { name: 'Lip Fillers', slug: 'lip-fillers', external: false },
  { name: 'Skin Boosters', slug: 'skin-boosters', external: false },
  { name: 'Polynucleotides', slug: 'polynucleotides', external: false },
  { name: 'Fat Dissolving', slug: 'fat-dissolving', external: false },
  { name: 'Vitamin Injections', slug: 'vitamin-injections', external: false },
  { name: 'HIFU Non-Surgical Facelift', slug: 'https://hifucambridge.com', external: true },
]

interface SiteHeaderProps {
  onBookingClick?: () => void
}

export default function SiteHeader({ onBookingClick }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`font-display text-xl sm:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              Diluxe Aesthetics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsTreatmentsOpen(true)}
              onMouseLeave={() => setIsTreatmentsOpen(false)}
            >
              <button
                className={`flex items-center font-medium transition-colors min-h-0 ${
                  isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Treatments
                <svg className={`w-4 h-4 ml-1 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isTreatmentsOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl py-2 animate-fade-in">
                  <Link
                    href="/treatments"
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 font-medium"
                  >
                    All Treatments
                  </Link>
                  <div className="border-t border-neutral-100 my-2"></div>
                  {treatments.map((treatment) => (
                    treatment.external ? (
                      <a
                        key={treatment.slug}
                        href={treatment.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {treatment.name}
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        key={treatment.slug}
                        href={`/treatments/${treatment.slug}`}
                        className="block px-4 py-2 text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {treatment.name}
                      </Link>
                    )
                  ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`font-medium transition-colors min-h-0 ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/results"
              className={`font-medium transition-colors min-h-0 ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Results
            </Link>
            <Link
              href="/pricing"
              className={`font-medium transition-colors min-h-0 ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors min-h-0 ${
                isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </Link>

            <button
              onClick={onBookingClick}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg ${
                isScrolled
                  ? 'bg-primary-500 hover:bg-primary-600 text-white'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-neutral-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
              {/* Treatments Section */}
              <div className="border-b border-neutral-100 pb-2 mb-2">
                <Link
                  href="/treatments"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-600 font-semibold"
                >
                  All Treatments
                </Link>
                {treatments.map((treatment) => (
                  treatment.external ? (
                    <a
                      key={treatment.slug}
                      href={treatment.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-neutral-600 hover:text-primary-600 text-sm"
                    >
                      {treatment.name}
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={treatment.slug}
                      href={`/treatments/${treatment.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-neutral-600 hover:text-primary-600 text-sm"
                    >
                      {treatment.name}
                    </Link>
                  )
                ))}
              </div>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium"
              >
                About
              </Link>
              <Link
                href="/results"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium"
              >
                Results
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onBookingClick?.()
                }}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
