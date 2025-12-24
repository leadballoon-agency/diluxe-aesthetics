import Link from 'next/link'

const treatments = [
  { name: 'Anti-Wrinkle Injections', slug: '/treatments/anti-wrinkle-injections' },
  { name: 'Lip Fillers', slug: '/treatments/lip-fillers' },
  { name: 'Skin Boosters', slug: '/treatments/skin-boosters' },
  { name: 'Polynucleotides', slug: '/treatments/polynucleotides' },
  { name: 'Fat Dissolving', slug: '/treatments/fat-dissolving' },
  { name: 'Vitamin Injections', slug: '/treatments/vitamin-injections' },
  { name: 'HIFU Facelift', slug: 'https://hifucambridge.com', external: true },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary-300">
                Diluxe Aesthetics
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Premium aesthetic treatments in Cambridge. Natural enhancements by advanced aesthetics practitioner.
            </p>
            <a
              href="https://www.instagram.com/diluxe.aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-300 hover:text-primary-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @diluxe.aesthetics
            </a>
          </div>

          {/* Treatments Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Treatments</h3>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment.slug}>
                  {treatment.external ? (
                    <a
                      href={treatment.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary-300 transition-colors text-sm inline-flex items-center"
                    >
                      {treatment.name}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={treatment.slug}
                      className="text-neutral-400 hover:text-primary-300 transition-colors text-sm"
                    >
                      {treatment.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary-300 transition-colors text-sm">
                  About Consolata
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-neutral-400 hover:text-primary-300 transition-colors text-sm">
                  Before & After
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-400 hover:text-primary-300 transition-colors text-sm">
                  Price List
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary-300 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-neutral-400 hover:text-primary-300 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Visit Us</h3>
            <address className="not-italic text-neutral-400 text-sm space-y-2">
              <p className="leading-relaxed">
                216 Cherry Hinton Road<br />
                Cambridge<br />
                CB1 7AW
              </p>
              <p className="text-neutral-500 text-xs mt-3">
                Free parking at rear<br />
                (MDL Male Image Barbers)
              </p>
            </address>
            <div className="mt-4 pt-4 border-t border-neutral-800">
              <p className="text-neutral-500 text-xs">Contact via Instagram DM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Diluxe Aesthetics Cambridge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-neutral-400 text-sm ml-2">5.0 on Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
