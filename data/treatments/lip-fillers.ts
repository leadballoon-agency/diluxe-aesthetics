import { Treatment } from '@/types/treatment'

export const lipFillers: Treatment = {
  slug: 'lip-fillers',
  name: 'Lip Fillers',
  tagline: 'Enhance your natural lip shape with subtle, beautiful volume',
  description: 'Lip fillers using premium hyaluronic acid add natural-looking volume, definition, and hydration to your lips. Whether you want a subtle enhancement or more noticeable volume, I tailor each treatment to complement your unique facial features.',
  price: 'From £220',
  priceFrom: 220,
  duration: '30-45 minutes',
  icon: '💋',
  benefits: [
    'Adds natural-looking volume',
    'Defines lip border and cupid\'s bow',
    'Improves lip symmetry',
    'Smooths fine lines around lips',
    'Hydrates and plumps',
    'Results last 6-12 months',
  ],
  process: [
    {
      title: 'Consultation',
      description: 'We discuss your lip goals, assess your facial proportions, and decide on the perfect amount of filler for your desired look.',
    },
    {
      title: 'Numbing',
      description: 'A topical numbing cream is applied for 15-20 minutes to ensure your comfort during treatment.',
    },
    {
      title: 'Treatment',
      description: 'Premium hyaluronic acid filler is carefully injected using fine needles or cannula, sculpting your lips to perfection.',
    },
    {
      title: 'Finishing',
      description: 'Your lips are assessed for symmetry and balance. You\'ll see immediate results, with final results at 2 weeks.',
    },
  ],
  faqs: [
    {
      question: 'How long do lip fillers last?',
      answer: 'Lip fillers typically last 6-12 months, depending on the product used, your metabolism, and lifestyle factors.',
    },
    {
      question: 'Will my lips look natural?',
      answer: 'My philosophy is \'less is more\'. I focus on enhancing your natural lip shape and features rather than creating an overdone look.',
    },
    {
      question: 'How much swelling should I expect?',
      answer: 'Swelling is normal and peaks at 24-48 hours. Most swelling subsides within a week. I recommend booking treatments at least 2 weeks before special events.',
    },
    {
      question: 'Can lip filler be dissolved?',
      answer: 'Yes! Hyaluronic acid fillers can be dissolved with an enzyme called hyaluronidase if needed.',
    },
    {
      question: 'How much filler will I need?',
      answer: 'For first-timers, I recommend starting with 0.5-1ml to achieve a subtle, natural enhancement. We can always add more at a follow-up appointment.',
    },
  ],
  aftercare: [
    'Apply ice to reduce swelling for the first 24 hours',
    'Avoid kissing or applying pressure to lips for 24 hours',
    'Stay hydrated to help the filler settle',
    'Avoid hot drinks, alcohol, and spicy food for 24 hours',
    'No strenuous exercise for 24-48 hours',
    'Sleep with head slightly elevated for the first night',
  ],
  resultsTimeline: 'You\'ll see immediate results, though expect swelling for 2-5 days. Final, settled results are visible at 2 weeks.',
  suitableFor: [
    'Adding subtle volume',
    'Defining lip borders',
    'Enhancing cupid\'s bow',
    'Correcting asymmetry',
    'Smoothing smoker\'s lines',
    'Creating a more youthful pout',
  ],
}
