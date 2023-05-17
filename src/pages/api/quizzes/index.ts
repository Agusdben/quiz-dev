import QUIZZES from '@/mocks/quizzes'
import { type Quiz } from '@/types/quiz'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse<Quiz> | undefined> {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  res.status(200).json(QUIZZES)
}
