export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://diluxaesthetics.co.uk/#business",
    "name": "Diluxe Aesthetics Cambridge",
    "alternateName": ["Diluxe Aesthetics", "Diluxe Cambridge"],
    "url": "https://diluxaesthetics.co.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://diluxaesthetics.co.uk/images/logo.png",
      "width": 512,
      "height": 512
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
      "width": 1080,
      "height": 1350,
      "caption": "Consolata - Advanced Aesthetics Practitioner at Diluxe Aesthetics Cambridge"
    },
    "description": "Premium aesthetic treatments in Cambridge. Anti-wrinkle injections, lip fillers, skin boosters, polynucleotides, fat dissolving & vitamin injections by advanced aesthetics practitioner.",
    "telephone": "",
    "email": "",
    "sameAs": [
      "https://www.instagram.com/diluxe.aesthetics"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "216 Cherry Hinton Road",
      "addressLocality": "Cambridge",
      "addressRegion": "Cambridgeshire",
      "postalCode": "CB1 7AW",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.1891,
      "longitude": 0.1456
    },
    "priceRange": "££",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Parking",
        "value": true
      }
    ],
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Klarna"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Cambridge" },
      { "@type": "City", "name": "Cherry Hinton" },
      { "@type": "City", "name": "Trumpington" },
      { "@type": "City", "name": "Fulbourn" },
      { "@type": "City", "name": "Great Shelford" }
    ],
    "founder": {
      "@type": "Person",
      "@id": "https://diluxaesthetics.co.uk/#consolata",
      "name": "Consolata",
      "jobTitle": "Advanced Aesthetics Practitioner",
      "description": "Advanced aesthetics practitioner specialising in natural enhancements and subtle results",
      "image": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
      "knowsAbout": ["Anti-Wrinkle Injections", "Lip Fillers", "Skin Boosters", "Polynucleotides", "Fat Dissolving", "Aesthetic Medicine"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aesthetic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Anti-Wrinkle Injections",
            "description": "Smooth fine lines and prevent new wrinkles with precise muscle-relaxing injections."
          },
          "price": "180.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lip Fillers",
            "description": "Enhance your natural lip shape with subtle, beautiful volume and definition."
          },
          "price": "220.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skin Boosters",
            "description": "Deep hydration and skin renewal with Profhilo and Seventy Hyal treatments."
          },
          "price": "250.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Polynucleotides",
            "description": "Revolutionary skin regeneration for firmer, more youthful-looking skin."
          },
          "price": "300.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fat Dissolving",
            "description": "Target stubborn fat with Lemon Bottle and Aqualyx for a sculpted profile."
          },
          "price": "150.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vitamin Injections",
            "description": "Boost energy and wellness with B12, Biotin and vitamin therapy shots."
          },
          "price": "35.00",
          "priceCurrency": "GBP"
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://diluxaesthetics.co.uk/#website",
    "name": "Diluxe Aesthetics Cambridge",
    "url": "https://diluxaesthetics.co.uk",
    "description": "Premium aesthetic treatments in Cambridge. Natural enhancements by advanced aesthetics practitioner.",
    "publisher": { "@id": "https://diluxaesthetics.co.uk/#business" },
    "inLanguage": "en-GB"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://diluxaesthetics.co.uk"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
