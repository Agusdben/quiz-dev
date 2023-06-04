import { type Wildcard } from '@/types/wildcards'

export const ATTEMPT_STYLES = {
  0: 'bg-red-300 text-black border-red-300',
  1: 'bg-green-300 text-black border-green-300'
}

export const WILDCARDS_AVAILABLE = {
  bomb: 'bomb',
  'doble chance': 'doble chance',
  skip: 'skip'
} as const

export const WILDCARDS: Wildcard[] = [
  {
    name: 'bomb',
    description: 'Remove two invalid answers'
  },
  {
    name: 'doble chance',
    description: 'Give you an extra chance'
  },
  {
    name: 'skip',
    description: 'Skip current question'
  }
]
