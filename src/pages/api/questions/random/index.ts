import QUESTIONS from '@/mocks/questions'
import { type Question } from '@/types/question'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<Question> | undefined> {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  const totalQuestions = QUESTIONS.length

  const randomIndex = Math.floor(Math.random() * totalQuestions)

  const newQuestion = QUESTIONS.at(randomIndex)

  if (newQuestion === undefined) {
    return res.status(404)
  }

  const { correctAnswerIndex, ...question } = newQuestion

  res.status(200).json(question)
}
