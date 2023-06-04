import { type WILDCARDS_AVAILABLE } from '@/constants'

export type WildcardAvailable = keyof typeof WILDCARDS_AVAILABLE

export interface Wildcard {
  name: WildcardAvailable
  description: string
}

export interface WildcardTracker extends Wildcard {
  used: boolean
}
