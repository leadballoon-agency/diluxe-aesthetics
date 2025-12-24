import { Treatment } from '@/types/treatment'

export const antiWrinkle: Treatment = {
  slug: 'anti-wrinkle-injections',
  name: 'Anti-Wrinkle Injections',
  tagline: 'Smooth away fine lines for a refreshed, youthful appearance',
  description: 'Anti-wrinkle injections use a purified protein to temporarily relax facial muscles, smoothing existing lines and preventing new ones from forming. This quick, virtually painless treatment delivers natural-looking results that let your personality shine through.',
  price: 'From £180',
  priceFrom: 180,
  duration: '20-30 minutes',
  icon: '✨',
  benefits: [
    'Smooths forehead lines and frown lines',
    'Softens crow\'s feet around the eyes',
    'Prevents new wrinkles from forming',
    'Quick treatment with no downtime',
    'Natural-looking results',
    'Results last 3-4 months',
  ],
  process: [
    {
      title: 'Consultation',
      description: 'We discuss your concerns, assess your facial anatomy, and create a personalised treatment plan.',
    },
    {
      title: 'Preparation',
      description: 'The treatment area is cleansed. Numbing cream can be applied if preferred, though most find it unnecessary.',
    },
    {
      title: 'Treatment',
      description: 'Small amounts are precisely injected into targeted muscles using ultra-fine needles. Most describe it as a tiny pinch.',
    },
    {
      title: 'Aftercare',
      description: 'You can return to normal activities immediately. We provide aftercare guidance to optimise your results.',
    },
  ],
  faqs: [
    {
      question: 'How long do results last?',
      answer: 'Results typically last 3-4 months. With regular treatments, some clients find their results last longer as muscles become trained to relax.',
    },
    {
      question: 'Will I look frozen or expressionless?',
      answer: 'Absolutely not! My approach focuses on subtle, natural results. You\'ll still be able to express yourself fully while looking refreshed and relaxed.',
    },
    {
      question: 'Is the treatment painful?',
      answer: 'Most clients describe it as a tiny pinch that\'s over in seconds. The needles are extremely fine, and the treatment is quick.',
    },
    {
      question: 'When will I see results?',
      answer: 'You\'ll start to notice changes within 2-3 days, with full results visible at 2 weeks.',
    },
    {
      question: 'Are there any side effects?',
      answer: 'Minor redness or small bumps at injection sites may occur but typically resolve within an hour. Bruising is possible but rare.',
    },
  ],
  aftercare: [
    'Avoid touching or rubbing the treated area for 4 hours',
    'Stay upright for 4 hours after treatment',
    'Avoid strenuous exercise for 24 hours',
    'Avoid alcohol and blood-thinning medications for 24 hours',
    'No facials, saunas, or sunbeds for 2 weeks',
  ],
  resultsTimeline: 'Results begin to appear within 2-3 days, with full effects visible at 2 weeks. Results typically last 3-4 months.',
  suitableFor: [
    'Forehead lines (horizontal lines)',
    'Frown lines (between eyebrows)',
    'Crow\'s feet (around eyes)',
    'Bunny lines (on nose)',
    'Smoker\'s lines (around lips)',
    'Chin dimpling',
  ],
}
