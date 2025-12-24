import { Treatment } from '@/types/treatment'

export const vitaminInjections: Treatment = {
  slug: 'vitamin-injections',
  name: 'Vitamin Injections',
  tagline: 'Boost your energy and wellness from within',
  description: 'Vitamin injections deliver essential nutrients directly into your bloodstream for maximum absorption. Whether you need an energy boost with B12, want stronger hair and nails with Biotin, or seek overall wellness support, these quick treatments can make a real difference.',
  price: 'From £35',
  priceFrom: 35,
  duration: '10-15 minutes',
  icon: '💉',
  benefits: [
    'Immediate absorption into bloodstream',
    'Boosts energy and reduces fatigue',
    'Supports healthy hair, skin, and nails',
    'Enhances immune function',
    'Quick and convenient',
    'Can be combined with other treatments',
  ],
  process: [
    {
      title: 'Consultation',
      description: 'We discuss your health goals and symptoms to recommend the most beneficial vitamin combination for you.',
    },
    {
      title: 'Preparation',
      description: 'A quick health check ensures the treatment is suitable for you. The injection site is cleaned.',
    },
    {
      title: 'Injection',
      description: 'The vitamin solution is injected intramuscularly, usually into the upper arm or buttock. It takes just seconds.',
    },
    {
      title: 'Benefit',
      description: 'Many people feel the effects within days. Regular treatments help maintain optimal vitamin levels.',
    },
  ],
  faqs: [
    {
      question: 'What vitamins do you offer?',
      answer: 'I offer B12 (energy and metabolism), Biotin (hair, skin, nails), Vitamin D (immune and bone health), and vitamin cocktails combining multiple nutrients.',
    },
    {
      question: 'How often should I have vitamin injections?',
      answer: 'This depends on your individual needs. Some people benefit from weekly injections, while others maintain well with monthly treatments.',
    },
    {
      question: 'Are vitamin injections better than oral supplements?',
      answer: 'Injections bypass the digestive system, delivering 100% of the vitamins directly into your bloodstream. Oral supplements may only absorb 10-20%.',
    },
    {
      question: 'Who benefits most from B12 injections?',
      answer: 'Those with low energy, vegetarians/vegans, people with absorption issues, and anyone over 50 often benefit significantly from B12 injections.',
    },
    {
      question: 'Is there any downtime?',
      answer: 'None at all! You might have slight tenderness at the injection site, but you can continue your day as normal.',
    },
  ],
  aftercare: [
    'Stay hydrated to help vitamins circulate',
    'Mild soreness at injection site is normal',
    'Apply pressure if any bleeding occurs',
    'Note how you feel over the coming days',
  ],
  resultsTimeline: 'Many people feel increased energy within 24-72 hours of a B12 injection. Biotin improvements in hair and nails develop over 4-8 weeks.',
  suitableFor: [
    'Low energy and fatigue',
    'Vegetarians and vegans',
    'Poor diet or absorption issues',
    'Weak hair and brittle nails',
    'Immune system support',
    'General wellness optimisation',
  ],
}
