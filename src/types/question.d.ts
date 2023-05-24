import { type AnswerIndexes } from '.'
import { type Answer } from './answer'

export type QuestionId = string
export type QuestionQuestion = string
export type QuestionAnswers = Answer[]

export interface Question {
  id: QuestionId
  question: QuestionQuestion
  answers: QuestionAnswers
}

export interface QuestionWithCorrect extends Question {
  correctAnswerIndex: AnswerIndexes
}

export interface QuestionHistory extends Question {
  isCorrect: boolean
}

export interface Result {
  isCorrect: boolean
}
