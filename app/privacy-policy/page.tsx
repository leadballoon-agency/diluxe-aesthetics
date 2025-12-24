import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Diluxe Aesthetics Cambridge - how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Simple Header for Legal Pages */}
      <header className="bg-white border-b border-neutral-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-xl font-bold text-primary-600">
            Diluxe Aesthetics
          </Link>
        </div>
      </header>

      <main className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-800 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">1. Introduction</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Diluxe Aesthetics Cambridge (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your personal information when you
                use our website (diluxaesthetics.co.uk) and our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">2. Information We Collect</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you provide when booking appointments or contacting us.</li>
                <li><strong>Health Information:</strong> Medical history and health-related information necessary for providing safe aesthetic treatments.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage data collected through cookies and similar technologies.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Process bookings and provide our aesthetic treatment services</li>
                <li>Communicate with you about appointments and treatments</li>
                <li>Send relevant updates and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We process your personal data based on: your consent, the performance of a contract with you,
                our legitimate business interests, and compliance with legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">5. Data Sharing</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Service providers who assist in running our business (booking systems, payment processors)</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisers such as accountants and insurers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">6. Cookies and Tracking</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to improve your browsing experience
                and analyse website traffic. This may include:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (Meta Pixel)</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mb-4">
                You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">7. Data Retention</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and comply
                with legal requirements. Treatment records are retained in accordance with healthcare regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">8. Your Rights</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mb-4">
                To exercise these rights, please contact us via Instagram DM @diluxe.aesthetics.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">9. Data Security</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We implement appropriate technical and organisational measures to protect your personal
                information against unauthorised access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">10. Changes to This Policy</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-xl font-bold text-neutral-800 mb-4">11. Contact Us</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <strong>Diluxe Aesthetics Cambridge</strong><br />
                216 Cherry Hinton Road<br />
                Cambridge, CB1 7AW<br />
                Instagram: @diluxe.aesthetics
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer for Legal Pages */}
      <footer className="bg-neutral-50 border-t border-neutral-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Diluxe Aesthetics Cambridge. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
