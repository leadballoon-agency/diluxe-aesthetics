export interface Treatment {
  slug: string
  name: string
  tagline: string
  description: string
  price: string
  priceFrom: number
  duration: string
  icon: string
  image?: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  aftercare?: string[]
  resultsTimeline?: string
  suitableFor?: string[]
}
