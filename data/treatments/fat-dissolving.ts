import { Treatment } from '@/types/treatment'

export const fatDissolving: Treatment = {
  slug: 'fat-dissolving',
  name: 'Fat Dissolving',
  tagline: 'Sculpt stubborn fat pockets without surgery',
  description: 'Fat dissolving injections like Lemon Bottle and Aqualyx permanently destroy fat cells in targeted areas. Perfect for stubborn pockets of fat that don\'t respond to diet and exercise, these treatments offer a non-surgical solution for body contouring.',
  price: 'From £150',
  priceFrom: 150,
  duration: '30-45 minutes',
  icon: '🎯',
  benefits: [
    'Permanently destroys fat cells',
    'Non-surgical alternative to liposuction',
    'Targets stubborn fat pockets',
    'Minimal downtime',
    'Results are permanent with healthy lifestyle',
    'Can treat multiple areas',
  ],
  process: [
    {
      title: 'Assessment',
      description: 'We assess the treatment area, discuss your goals, and create a personalised treatment plan.',
    },
    {
      title: 'Preparation',
      description: 'The area is marked and cleansed. Photos may be taken to track your progress.',
    },
    {
      title: 'Treatment',
      description: 'Fat dissolving solution is injected into the targeted fat deposits using a series of small injections.',
    },
    {
      title: 'Process',
      description: 'The solution breaks down fat cells, which are then naturally eliminated by your body over the following weeks.',
    },
  ],
  faqs: [
    {
      question: 'How many sessions will I need?',
      answer: 'Most clients need 2-4 sessions, spaced 4-6 weeks apart, depending on the area and amount of fat being treated.',
    },
    {
      question: 'Is the fat loss permanent?',
      answer: 'Yes! Once fat cells are destroyed, they\'re gone forever. However, remaining cells can still grow, so maintaining a healthy lifestyle is important.',
    },
    {
      question: 'Which areas can be treated?',
      answer: 'Common areas include double chin, jowls, bra fat, back fat, stomach, love handles, inner thighs, and upper arms.',
    },
    {
      question: 'What\'s the difference between Lemon Bottle and Aqualyx?',
      answer: 'Both are effective fat dissolvers. Lemon Bottle is newer with less swelling, while Aqualyx has a longer track record. We\'ll recommend the best option for you.',
    },
    {
      question: 'How much downtime is there?',
      answer: 'Expect swelling, redness, and tenderness for several days to 2 weeks. Most people return to normal activities immediately but may avoid social events for a few days.',
    },
  ],
  aftercare: [
    'Swelling and bruising are normal and expected',
    'Massage the treated area as directed',
    'Stay well hydrated to help flush out fat',
    'Avoid alcohol for 48 hours',
    'Wear loose, comfortable clothing',
    'Gentle exercise after 48 hours can help lymphatic drainage',
  ],
  resultsTimeline: 'Initial swelling subsides in 1-2 weeks. Results develop over 4-8 weeks as the body processes the destroyed fat cells.',
  suitableFor: [
    'Double chin (submental fat)',
    'Jowls',
    'Bra fat',
    'Back fat',
    'Stomach area',
    'Love handles',
    'Inner thighs',
    'Upper arms',
  ],
}
