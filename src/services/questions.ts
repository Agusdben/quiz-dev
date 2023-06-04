import { type AnswerIndexes } from '@/types'
import { type QuestionId, type Question } from '@/types/question'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export const getRandomQuestion = async (): Promise<Question> => {
  const res = await fetch(`${API_URL}/questions/random`)

  if (!res.ok) {
    throw new Error('')
  }

  const question: Question = await res.json()

  return question
}

export const getCorrectIndex = async ({ questionId }: { questionId: QuestionId }): Promise<{ correctIndex: AnswerIndexes }> => {
  const res = await fetch(`${API_URL}/questions/correct`, {
    method: 'POST',
    body: JSON.stringify({ questionId }),
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
