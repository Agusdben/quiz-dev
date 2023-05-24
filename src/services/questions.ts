import { type AnswerIndexes } from '@/types'
import { type QuestionId, type Question, type Result } from '@/types/question'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export const getRandomQuestion = async (): Promise<Question> => {
  const res = await fetch(`${API_URL}/questions/random`)

  if (!res.ok) {
    throw new Error('')
  }

  const question: Question = await res.json()

  return question
}

export const postSolution = async ({ questionId, answerIndex }: { questionId: QuestionId, answerIndex: AnswerIndexes }): Promise<Result> => {
  const res = await fetch(`${API_URL}/questions/verify`, {
    method: 'POST',
    body: JSON.stringify({ questionId, answerIndex }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('')
  }

  const result = await res.json()

  return result
}
