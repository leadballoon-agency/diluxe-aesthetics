export default function StructuredData() {
  // Main Business Schema - HealthAndBeautyBusiness with MedicalBusiness properties
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
    "@id": "https://diluxaesthetics.co.uk/#business",
    "name": "Diluxe Aesthetics Cambridge",
    "alternateName": ["Diluxe Aesthetics", "Diluxe Cambridge", "Diluxe Aesthetics Cherry Hinton"],
    "url": "https://diluxaesthetics.co.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://diluxaesthetics.co.uk/images/logo.png",
      "width": 512,
      "height": 512
    },
    "image": [
      {
        "@type": "ImageObject",
        "@id": "https://diluxaesthetics.co.uk/#primaryimage",
        "url": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
        "width": 1080,
        "height": 1350,
        "caption": "Consolata - Advanced Aesthetics Practitioner at Diluxe Aesthetics Cambridge"
      }
    ],
    "description": "Premium aesthetic treatments in Cambridge by advanced aesthetics practitioner Consolata. Specialising in anti-wrinkle injections, lip fillers, skin boosters, polynucleotides, fat dissolving & vitamin injections. Natural enhancements with exceptional results.",
    "slogan": "Natural Beauty, Enhanced",
    "telephone": "",
    "email": "",
    "sameAs": [
      "https://www.instagram.com/diluxe.aesthetics",
      "https://www.facebook.com/diluxeaesthetics",
      "https://g.page/diluxe-aesthetics-cambridge"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "216 Cherry Hinton Road",
      "addressLocality": "Cherry Hinton",
      "addressCity": "Cambridge",
      "addressRegion": "Cambridgeshire",
      "postalCode": "CB1 7AW",
      "addressCountry": {
        "@type": "Country",
        "name": "United Kingdom",
        "alternateName": "UK"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.1891,
      "longitude": 0.1456
    },
    "hasMap": "https://maps.google.com/?q=216+Cherry+Hinton+Road,+Cambridge+CB1+7AW",
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Klarna", "Bank Transfer"],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wheelchair Accessible", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Private Treatment Rooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
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
    "specialOpeningHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "validFrom": "2024-12-25",
        "validThrough": "2024-12-26",
        "opens": "00:00",
        "closes": "00:00",
        "description": "Closed for Christmas"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Cambridge", "containedInPlace": { "@type": "AdministrativeArea", "name": "Cambridgeshire" } },
      { "@type": "City", "name": "Cherry Hinton" },
      { "@type": "City", "name": "Trumpington" },
      { "@type": "City", "name": "Fulbourn" },
      { "@type": "City", "name": "Great Shelford" },
      { "@type": "City", "name": "Sawston" },
      { "@type": "City", "name": "Newmarket" },
      { "@type": "City", "name": "Ely" },
      { "@type": "City", "name": "Huntingdon" },
      { "@type": "City", "name": "St Ives" },
      { "@type": "City", "name": "Royston" },
      { "@type": "City", "name": "Saffron Walden" },
      { "@type": "City", "name": "Haverhill" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.1891,
        "longitude": 0.1456
      },
      "geoRadius": "30 mi"
    },
    "founder": { "@id": "https://diluxaesthetics.co.uk/#consolata" },
    "employee": [{ "@id": "https://diluxaesthetics.co.uk/#consolata" }],
    "knowsAbout": [
      "Anti-Wrinkle Injections",
      "Botulinum Toxin",
      "Dermal Fillers",
      "Lip Fillers",
      "Skin Boosters",
      "Profhilo",
      "Seventy Hyal",
      "Polynucleotides",
      "Fat Dissolving Injections",
      "Lemon Bottle",
      "Aqualyx",
      "Vitamin Injections",
      "B12 Injections",
      "Aesthetic Medicine",
      "Facial Aesthetics",
      "Non-Surgical Treatments"
    ],
    "knowsLanguage": ["en-GB"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "datePublished": "2024-12-10",
        "reviewBody": "Absolutely amazing experience! Consolata made me feel so comfortable and the results are incredible. My lips look so natural and exactly what I wanted.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Emma T." },
        "datePublished": "2024-12-05",
        "reviewBody": "Best anti-wrinkle treatment I've ever had. Consolata really listens to what you want and delivers. Will definitely be coming back!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lucy R." },
        "datePublished": "2024-11-28",
        "reviewBody": "Had skin boosters done and my skin has never looked better. So hydrated and glowing. Highly recommend Diluxe Aesthetics!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aesthetic Treatments Menu",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Injectable Treatments",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "@id": "https://diluxaesthetics.co.uk/treatments/anti-wrinkle-injections#procedure",
                "name": "Anti-Wrinkle Injections",
                "alternateName": ["Botox", "Wrinkle Relaxing Injections", "Anti-Aging Injections"],
                "description": "Smooth fine lines and prevent new wrinkles with precise muscle-relaxing injections for a refreshed, youthful appearance.",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Face",
                "preparation": "Free consultation to discuss goals and medical history",
                "followup": "Review appointment at 2 weeks",
                "howPerformed": "Small injections of botulinum toxin into targeted facial muscles"
              },
              "price": "180.00",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://diluxaesthetics.co.uk/treatments/anti-wrinkle-injections"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "@id": "https://diluxaesthetics.co.uk/treatments/lip-fillers#procedure",
                "name": "Lip Fillers",
                "alternateName": ["Lip Enhancement", "Lip Augmentation", "Dermal Lip Fillers"],
                "description": "Enhance your natural lip shape with hyaluronic acid dermal fillers for subtle, beautiful volume and definition.",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Lips",
                "preparation": "Consultation to discuss desired outcome",
                "followup": "Review at 2 weeks if needed",
                "howPerformed": "Precise injections of hyaluronic acid filler into lip tissue"
              },
              "price": "220.00",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://diluxaesthetics.co.uk/treatments/lip-fillers"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "@id": "https://diluxaesthetics.co.uk/treatments/skin-boosters#procedure",
                "name": "Skin Boosters",
                "alternateName": ["Profhilo", "Seventy Hyal", "Hyaluronic Acid Skin Treatment"],
                "description": "Deep hydration and skin renewal with injectable hyaluronic acid treatments for radiant, youthful skin.",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Face",
                "preparation": "Skin assessment and consultation",
                "followup": "Second session at 4 weeks for optimal results",
                "howPerformed": "Bio-remodelling injections of hyaluronic acid across face"
              },
              "price": "250.00",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://diluxaesthetics.co.uk/treatments/skin-boosters"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "@id": "https://diluxaesthetics.co.uk/treatments/polynucleotides#procedure",
                "name": "Polynucleotides",
                "alternateName": ["PN Treatment", "Skin Regeneration Treatment", "Bio-Stimulating Injections"],
                "description": "Revolutionary skin regeneration treatment using polynucleotides for firmer, more youthful-looking skin.",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Face",
                "preparation": "Full skin consultation",
                "followup": "Course of 3 treatments recommended",
                "howPerformed": "Micro-injections of polynucleotides to stimulate skin regeneration"
              },
              "price": "300.00",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://diluxaesthetics.co.uk/treatments/polynucleotides"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "@id": "https://diluxaesthetics.co.uk/treatments/fat-dissolving#procedure",
                "name": "Fat Dissolving Injections",
                "alternateName": ["Lemon Bottle", "Aqualyx", "Lipolysis", "Double Chin Treatment"],
                "description": "Target stubborn fat deposits with injectable fat dissolving treatments for a more sculpted profile.",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Chin, Jowls, Body",
                "preparation": "Consultation to assess suitability",
                "followup": "Multiple sessions may be required",
                "howPerformed": "Injections of deoxycholic acid to break down fat cells"
              },
              "price": "150.00",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://diluxaesthetics.co.uk/treatments/fat-dissolving"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "@id": "https://diluxaesthetics.co.uk/treatments/vitamin-injections#procedure",
                "name": "Vitamin Injections",
                "alternateName": ["B12 Injections", "Biotin Shots", "Vitamin Therapy", "Energy Boosting Injections"],
                "description": "Boost energy, immunity and wellness with vitamin B12, Biotin and vitamin therapy injections.",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Arm",
                "preparation": "Quick health questionnaire",
                "followup": "Regular top-ups recommended",
                "howPerformed": "Intramuscular vitamin injection"
              },
              "price": "35.00",
              "priceCurrency": "GBP",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://diluxaesthetics.co.uk/treatments/vitamin-injections"
            }
          ]
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Consultation",
        "description": "Complimentary consultation to discuss your aesthetic goals",
        "price": "0",
        "priceCurrency": "GBP"
      }
    ],
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://diluxaesthetics.co.uk/#book",
          "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
        },
        "result": { "@type": "Reservation", "name": "Aesthetic Treatment Booking" }
      },
      {
        "@type": "CommunicateAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://diluxaesthetics.co.uk/contact"
        }
      }
    ],
    "isAcceptingNewPatients": true,
    "medicalSpecialty": "Aesthetic Medicine"
  }

  // Person Schema for Consolata
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://diluxaesthetics.co.uk/#consolata",
    "name": "Consolata",
    "givenName": "Consolata",
    "jobTitle": "Advanced Aesthetics Practitioner",
    "description": "Advanced aesthetics practitioner specialising in natural enhancements and subtle, beautiful results. Founder and lead practitioner at Diluxe Aesthetics Cambridge.",
    "image": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png",
      "width": 1080,
      "height": 1350
    },
    "worksFor": { "@id": "https://diluxaesthetics.co.uk/#business" },
    "knowsAbout": [
      "Anti-Wrinkle Injections",
      "Botulinum Toxin Type A",
      "Dermal Fillers",
      "Hyaluronic Acid Fillers",
      "Lip Augmentation",
      "Skin Boosters",
      "Profhilo",
      "Seventy Hyal",
      "Polynucleotides",
      "Fat Dissolving",
      "Lemon Bottle",
      "Aqualyx",
      "Vitamin B12 Injections",
      "Biotin Injections",
      "Facial Anatomy",
      "Aesthetic Medicine",
      "Patient Safety"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Qualification",
        "name": "Advanced Aesthetics Practitioner Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Training",
        "name": "Dermal Filler Training"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Training",
        "name": "Anti-Wrinkle Injection Training"
      }
    ],
    "award": ["5-Star Rated Aesthetics Practitioner"],
    "sameAs": ["https://www.instagram.com/diluxe.aesthetics"]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://diluxaesthetics.co.uk/#website",
    "name": "Diluxe Aesthetics Cambridge",
    "alternateName": "Diluxe Aesthetics",
    "url": "https://diluxaesthetics.co.uk",
    "description": "Premium aesthetic treatments in Cambridge. Natural enhancements by advanced aesthetics practitioner Consolata.",
    "publisher": { "@id": "https://diluxaesthetics.co.uk/#business" },
    "inLanguage": "en-GB",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://diluxaesthetics.co.uk/treatments?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Breadcrumb Schema (Homepage)
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

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://diluxaesthetics.co.uk/#organization",
    "name": "Diluxe Aesthetics",
    "legalName": "Diluxe Aesthetics Cambridge",
    "url": "https://diluxaesthetics.co.uk",
    "logo": "https://diluxaesthetics.co.uk/images/logo.png",
    "foundingDate": "2024",
    "founder": { "@id": "https://diluxaesthetics.co.uk/#consolata" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "216 Cherry Hinton Road",
      "addressLocality": "Cambridge",
      "postalCode": "CB1 7AW",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "GB"
    },
    "sameAs": [
      "https://www.instagram.com/diluxe.aesthetics"
    ]
  }

  // Place Schema for the clinic
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": "https://diluxaesthetics.co.uk/#location",
    "name": "Diluxe Aesthetics Cambridge Clinic",
    "description": "Premium aesthetics clinic located in Cherry Hinton, Cambridge with free parking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "216 Cherry Hinton Road",
      "addressLocality": "Cherry Hinton, Cambridge",
      "postalCode": "CB1 7AW",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.1891,
      "longitude": 0.1456
    },
    "hasMap": "https://maps.google.com/?q=216+Cherry+Hinton+Road,+Cambridge+CB1+7AW",
    "publicAccess": true,
    "smokingAllowed": false,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wheelchair Access", "value": true }
    ],
    "containedInPlace": {
      "@type": "City",
      "name": "Cambridge",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Cambridgeshire",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Kingdom"
        }
      }
    }
  }

  // ItemList for treatments (helps with featured snippets)
  const treatmentListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Aesthetic Treatments at Diluxe Aesthetics Cambridge",
    "description": "Complete list of aesthetic treatments available at Diluxe Aesthetics",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Anti-Wrinkle Injections",
        "url": "https://diluxaesthetics.co.uk/treatments/anti-wrinkle-injections"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lip Fillers",
        "url": "https://diluxaesthetics.co.uk/treatments/lip-fillers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skin Boosters",
        "url": "https://diluxaesthetics.co.uk/treatments/skin-boosters"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Polynucleotides",
        "url": "https://diluxaesthetics.co.uk/treatments/polynucleotides"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Fat Dissolving",
        "url": "https://diluxaesthetics.co.uk/treatments/fat-dissolving"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Vitamin Injections",
        "url": "https://diluxaesthetics.co.uk/treatments/vitamin-injections"
      }
    ]
  }

  // SiteNavigationElement for enhanced crawling
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "hasPart": [
      { "@type": "WebPage", "name": "Home", "url": "https://diluxaesthetics.co.uk" },
      { "@type": "WebPage", "name": "Treatments", "url": "https://diluxaesthetics.co.uk/treatments" },
      { "@type": "WebPage", "name": "About", "url": "https://diluxaesthetics.co.uk/about" },
      { "@type": "WebPage", "name": "Results", "url": "https://diluxaesthetics.co.uk/results" },
      { "@type": "WebPage", "name": "Pricing", "url": "https://diluxaesthetics.co.uk/pricing" },
      { "@type": "WebPage", "name": "Contact", "url": "https://diluxaesthetics.co.uk/contact" }
    ]
  }

  // WebPage Schema for homepage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://diluxaesthetics.co.uk/#webpage",
    "url": "https://diluxaesthetics.co.uk",
    "name": "Diluxe Aesthetics Cambridge | Premium Aesthetic Treatments",
    "description": "Premium aesthetic treatments in Cambridge by advanced aesthetics practitioner. Anti-wrinkle injections, lip fillers, skin boosters & more. Natural enhancements, exceptional results.",
    "isPartOf": { "@id": "https://diluxaesthetics.co.uk/#website" },
    "about": { "@id": "https://diluxaesthetics.co.uk/#business" },
    "primaryImageOfPage": { "@id": "https://diluxaesthetics.co.uk/#primaryimage" },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-GB",
    "potentialAction": {
      "@type": "ReadAction",
      "target": "https://diluxaesthetics.co.uk"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description"]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  )
}
