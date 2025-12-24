import { Treatment } from '@/types/treatment'

export const polynucleotides: Treatment = {
  slug: 'polynucleotides',
  name: 'Polynucleotides',
  tagline: 'Revolutionary skin regeneration for lasting rejuvenation',
  description: 'Polynucleotides (PN) are the latest advancement in skin regeneration. Derived from salmon DNA, they work at a cellular level to repair, regenerate, and rejuvenate your skin. This treatment stimulates fibroblasts to produce new collagen and elastin for truly transformative results.',
  price: 'From £300',
  priceFrom: 300,
  duration: '30-45 minutes',
  icon: '🧬',
  benefits: [
    'Stimulates cellular regeneration',
    'Boosts collagen and elastin',
    'Improves skin elasticity',
    'Reduces fine lines and wrinkles',
    'Heals and repairs damaged skin',
    'Long-lasting anti-ageing effects',
  ],
  process: [
    {
      title: 'Consultation',
      description: 'We assess your skin concerns and discuss how polynucleotides can address your specific needs.',
    },
    {
      title: 'Preparation',
      description: 'Skin is cleansed and numbing cream applied if preferred for optimal comfort.',
    },
    {
      title: 'Treatment',
      description: 'Polynucleotides are injected into targeted areas using fine needles, focusing on areas of concern.',
    },
    {
      title: 'Course',
      description: 'A course of 3 treatments, 2-4 weeks apart, is recommended for optimal regenerative results.',
    },
  ],
  faqs: [
    {
      question: 'How are polynucleotides different from other treatments?',
      answer: 'Unlike hyaluronic acid which hydrates, polynucleotides work at a DNA level to actually regenerate and repair skin cells, creating lasting structural improvements.',
    },
    {
      question: 'Where do polynucleotides come from?',
      answer: 'They\'re derived from salmon DNA, which is highly biocompatible with human tissue. The purification process makes it safe and well-tolerated.',
    },
    {
      question: 'How many treatments will I need?',
      answer: 'A course of 3 treatments, spaced 2-4 weeks apart, delivers optimal results. Maintenance treatments can be done every 6-12 months.',
    },
    {
      question: 'Can polynucleotides be combined with other treatments?',
      answer: 'Yes! They work beautifully alongside other treatments like skin boosters, anti-wrinkle injections, and fillers for comprehensive rejuvenation.',
    },
    {
      question: 'When will I see results?',
      answer: 'Initial improvements in hydration are quick, but the real regenerative magic happens over 4-12 weeks as new collagen forms.',
    },
  ],
  aftercare: [
    'Avoid touching the treated area for 6 hours',
    'No makeup for 12 hours post-treatment',
    'Stay well hydrated',
    'Avoid intense exercise for 24 hours',
    'Protect skin from sun exposure',
  ],
  resultsTimeline: 'Results develop progressively over 4-12 weeks as cellular regeneration occurs. Full results seen after completing the course.',
  suitableFor: [
    'Ageing and sun-damaged skin',
    'Under-eye dark circles and crepiness',
    'Acne scarring',
    'Skin laxity',
    'Dull, tired-looking skin',
    'Overall skin regeneration',
  ],
}
