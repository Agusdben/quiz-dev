import QUESTIONS from '@/mocks/questions'
import { type AnswerIndexes } from '@/types'
import { type Result, type QuestionId } from '@/types/question'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<{ isCorrect: boolean }> | undefined> {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const questionId: QuestionId = req.body.questionId
  const answerIndex: AnswerIndexes = req.body.answerIndex

  const question = QUESTIONS.find(q => q.id === questionId)

  if (question === undefined) {
    return res.status(404)
  }

  const result: Result = {
    isCorrect: question.correctAnswerIndex === answerIndex
  }

  res.status(200).json(result)
}
