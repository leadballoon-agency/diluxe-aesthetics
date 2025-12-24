import { Treatment } from '@/types/treatment'
import { antiWrinkle } from './anti-wrinkle-injections'
import { lipFillers } from './lip-fillers'
import { skinBoosters } from './skin-boosters'
import { polynucleotides } from './polynucleotides'
import { fatDissolving } from './fat-dissolving'
import { vitaminInjections } from './vitamin-injections'

export const treatments: Treatment[] = [
  antiWrinkle,
  lipFillers,
  skinBoosters,
  polynucleotides,
  fatDissolving,
  vitaminInjections,
]

export function getAllTreatments(): Treatment[] {
  return treatments
}

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug)
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((treatment) => treatment.slug)
}
