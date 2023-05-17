import { type AnswerIndexes } from '.'

export type AnswerId = string
export type AnswerAnswer = string

export interface Answer {
  id: AnswerId
  answer: AnswerAnswer
  index: AnswerIndexes
}
