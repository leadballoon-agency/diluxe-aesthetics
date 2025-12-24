# Diluxe Aesthetics - Cambridge

## Project Overview
Multi-page website for Diluxe Aesthetics Cambridge, a premium aesthetics clinic in Cherry Hinton, Cambridge. This site serves as a **blueprint template** for future aesthetics client websites.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4 (CSS-first config)
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Playfair Display (headings), Inter (body)

## Key URLs
- **Production:** https://diluxaesthetics.co.uk
- **HIFU Landing Page:** https://hifucambridge.com (separate project)

## Project Structure
```
app/
├── layout.tsx              # Root layout with metadata, SEO
├── page.tsx                # Homepage
├── globals.css             # Tailwind + custom styles
├── icon.tsx                # Dynamic favicon
├── apple-icon.tsx          # Apple touch icon
├── sitemap.ts              # Dynamic sitemap
├── robots.ts               # Robots.txt
├── about/page.tsx          # About Consolata
├── treatments/
│   ├── page.tsx            # Treatments hub
│   └── [slug]/page.tsx     # Dynamic treatment pages
├── results/page.tsx        # Before/After + testimonials
├── pricing/page.tsx        # Full price list
├── contact/page.tsx        # Contact form + location
└── privacy-policy/page.tsx # Privacy policy

components/
├── layout/
│   ├── SiteHeader.tsx      # Nav with treatments dropdown
│   └── Footer.tsx          # Site footer
├── shared/
│   ├── BookingModal.tsx    # GHL webhook booking form
│   └── StructuredData.tsx  # SEO JSON-LD schemas
├── treatments/             # (Available for expansion)
└── home/                   # (Available for expansion)

data/
└── treatments/
    ├── index.ts            # Treatment utilities
    ├── anti-wrinkle-injections.ts
    ├── lip-fillers.ts
    ├── skin-boosters.ts
    ├── polynucleotides.ts
    ├── fat-dissolving.ts
    └── vitamin-injections.ts

types/
└── treatment.ts            # Treatment TypeScript interface
```

## Brand Information
- **Business:** Diluxe Aesthetics Cambridge
- **Practitioner:** Consolata (Advanced Aesthetics Practitioner)
- **Address:** 216 Cherry Hinton Road, Cambridge, CB1 7AW
- **Parking:** Free parking at rear (MDL Male Image Barbers)
- **Instagram:** @diluxe.aesthetics

## Hosted Media Assets
- **Consolata Portrait:** `https://storage.googleapis.com/msgsndr/0kfpm8NVBgT1ZEDGRJF3/media/694c0869e889d3cb4749a7dc.png`

## Treatments Offered
1. Anti-Wrinkle Injections (From £180)
2. Lip Fillers (From £220)
3. Skin Boosters (From £250)
4. Polynucleotides (From £300)
5. Fat Dissolving (From £150)
6. Vitamin Injections (From £35)
7. HIFU (External link to hifucambridge.com)

## GHL Integration
Booking forms submit to GHL webhooks:
- Booking form: `https://services.leadconnectorhq.com/hooks/0kfpm8NVBgT1ZEDGRJF3/webhook-trigger/f4e779dd-c47f-4d1d-bf26-b2caf9232c53`

**Webhook payload includes:**
- Individual fields: `name`, `firstName`, `lastName`, `email`, `phone`, `treatment`, `treatmentPrice`, `message`
- Formatted `notes` field with beautiful layout for GHL notes mapping
- Meta: `source`, `formType`, `timestamp`

## Design System
- **Primary Color:** Dusky Pink (#d4a5a5 range)
- **Accent Color:** Gold (#d4af37)
- **Typography:** Mobile-first with responsive scaling
- **Touch Targets:** Minimum 44px for accessibility

## SEO Schemas Implemented
1. HealthAndBeautyBusiness (LocalBusiness)
2. WebSite
3. BreadcrumbList
4. Person (Consolata)
5. Service + Offer (for each treatment)
6. AggregateRating

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Blueprint Notes for Future Clients
This project is designed as a reusable template:

1. **Treatment Data:** Easy to modify in `/data/treatments/` - each treatment is a separate file
2. **Design System:** Colors defined in `/app/globals.css` using CSS custom properties
3. **Components:** Modular components in `/components/` ready for customization
4. **GHL Integration:** Webhook URLs easily updated in BookingModal and Contact forms
5. **SEO:** Structured data templates in StructuredData.tsx

### To Customize for New Client:
1. Update brand colors in `globals.css` (@theme block)
2. Replace practitioner info and images
3. Modify treatments in `/data/treatments/`
4. Update GHL webhook URLs
5. Update address and business details
6. Customize metadata in `layout.tsx`

## Important Notes
- Always use mobile-first approach
- Keep `leading-relaxed` on body text for readability
- Use `section-padding` utility class for consistent horizontal padding
- All booking CTAs trigger the BookingModal
- HIFU links externally to hifucambridge.com
