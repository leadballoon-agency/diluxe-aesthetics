import { Treatment } from '@/types/treatment'

export const skinBoosters: Treatment = {
  slug: 'skin-boosters',
  name: 'Skin Boosters',
  tagline: 'Deep hydration for radiant, glowing skin from within',
  description: 'Skin boosters like Profhilo and Seventy Hyal deliver intense hydration deep within the skin, stimulating collagen and elastin production. Unlike traditional fillers, they spread beneath the skin to improve overall quality, texture, and radiance.',
  price: 'From £250',
  priceFrom: 250,
  duration: '30 minutes',
  icon: '💧',
  benefits: [
    'Intense deep hydration',
    'Improves skin texture and tone',
    'Stimulates collagen production',
    'Reduces fine lines and crepiness',
    'Creates natural radiance',
    'Suitable for face, neck, and hands',
  ],
  process: [
    {
      title: 'Assessment',
      description: 'We analyse your skin quality and discuss which skin booster is best for your needs - Profhilo, Seventy Hyal, or others.',
    },
    {
      title: 'Preparation',
      description: 'The treatment area is cleansed. The product itself contains properties that make it comfortable, but numbing is available.',
    },
    {
      title: 'Treatment',
      description: 'Small amounts are injected at specific points using the BAP (Bio Aesthetic Points) technique for optimal spreading.',
    },
    {
      title: 'Protocol',
      description: 'Two treatments are recommended 4 weeks apart for best results, with maintenance every 6 months.',
    },
  ],
  faqs: [
    {
      question: 'What\'s the difference between Profhilo and fillers?',
      answer: 'Profhilo isn\'t a filler - it doesn\'t add volume. Instead, it remodels ageing and sagging tissue by stimulating collagen and elastin, improving overall skin quality.',
    },
    {
      question: 'How many treatments do I need?',
      answer: 'The recommended protocol is 2 treatments, 4 weeks apart. Maintenance treatments every 6 months help maintain results.',
    },
    {
      question: 'Where can skin boosters be used?',
      answer: 'Face, neck, decolletage, and hands are all excellent treatment areas. They\'re particularly effective for crepey skin on the neck.',
    },
    {
      question: 'When will I see results?',
      answer: 'You\'ll notice improved hydration immediately, but the full skin-remodelling benefits develop over 4-8 weeks as collagen production increases.',
    },
    {
      question: 'Is there any downtime?',
      answer: 'You may have small bumps at injection sites for a few hours. Minimal downtime means you can return to normal activities immediately.',
    },
  ],
  aftercare: [
    'Small bumps are normal and resolve within hours',
    'Avoid makeup for 12 hours',
    'Stay hydrated to maximise results',
    'Avoid intense exercise for 24 hours',
    'No facials or strong skincare for 48 hours',
  ],
  resultsTimeline: 'Hydration is immediate. Full bio-remodelling results develop over 4-8 weeks after completing both treatments.',
  suitableFor: [
    'Dehydrated, dull skin',
    'Fine lines and crepiness',
    'Loss of skin firmness',
    'Neck and decolletage ageing',
    'Ageing hands',
    'Overall skin rejuvenation',
  ],
}
