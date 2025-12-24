import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import StructuredData from '@/components/shared/StructuredData'

export const metadata: Metadata = {
  title: {
    default: 'Diluxe Aesthetics Cambridge | Premium Aesthetic Treatments',
    template: '%s | Diluxe Aesthetics Cambridge'
  },
  description: 'Premium aesthetic treatments in Cambridge by advanced aesthetics practitioner Consolata. Anti-wrinkle injections, lip fillers, skin boosters, polynucleotides & more. Natural enhancements, exceptional results.',
  keywords: 'aesthetics Cambridge, lip fillers Cambridge, anti-wrinkle Cambridge, Botox Cambridge, skin boosters Cambridge, polynucleotides Cambridge, fat dissolving Cambridge, Diluxe Aesthetics, Cambridge aesthetics clinic, Cherry Hinton aesthetics',
  authors: [{ name: 'Diluxe Aesthetics Cambridge' }],
  creator: 'Diluxe Aesthetics Cambridge',
  publisher: 'Diluxe Aesthetics Cambridge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://diluxaesthetics.co.uk'),
  alternates: {
    canonical: 'https://diluxaesthetics.co.uk',
  },
  openGraph: {
    title: 'Diluxe Aesthetics Cambridge | Premium Aesthetic Treatments',
    description: 'Premium aesthetic treatments in Cambridge. Anti-wrinkle, lip fillers, skin boosters & more by advanced aesthetics practitioner. Natural enhancements, exceptional results.',
    url: 'https://diluxaesthetics.co.uk',
    siteName: 'Diluxe Aesthetics Cambridge',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png',
        width: 1080,
        height: 1350,
        alt: 'Consolata - Advanced Aesthetics Practitioner at Diluxe Aesthetics Cambridge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diluxe Aesthetics Cambridge | Premium Aesthetic Treatments',
    description: 'Premium aesthetic treatments in Cambridge. Anti-wrinkle, lip fillers, skin boosters & more. Natural enhancements by advanced aesthetics practitioner.',
    images: ['https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'GB-CAM',
    'geo.placename': 'Cherry Hinton, Cambridge',
    'geo.position': '52.1891;0.1456',
    'ICBM': '52.1891, 0.1456',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body>
        <Suspense fallback={null}>
          {/* FacebookPixel will be added later */}
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
