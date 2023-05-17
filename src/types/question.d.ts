import { type AnswerIndexes } from '.'
import { type Answer } from './answer'
import { type QuizId } from './quiz'

export type QuestionId = string
export type QuestionQuestion = string
export type QuestionAnswers = Answer[]

export interface Question {
  id: QuestionId
  quizId: QuizId
  question: QuestionQuestion
  answers: QuestionAnswers
  correctAnswerIndex: AnswerIndexes
}
