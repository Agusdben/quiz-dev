import QUESTIONS from '@/mocks/questions'
import { type AnswerIndexes } from '@/types'
import { type QuestionId } from '@/types/question'
import type { NextApiRequest, NextApiResponse } from 'next'
import cors from '../../cors'

async function handler (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<{ correctIndex: AnswerIndexes }> | undefined> {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const questionId: QuestionId = req.body.questionId

  const question = QUESTIONS.find(q => q.id === questionId)

  if (question === undefined) {
    return res.status(404)
  }

  res.status(200).json({ correctIndex: question.correctAnswerIndex })
}

export default cors(handler)
