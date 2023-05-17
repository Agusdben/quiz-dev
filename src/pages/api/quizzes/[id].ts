import { type Quiz } from '@/types/quiz'
import { type NextApiRequest, type NextApiResponse } from 'next'
import getQuizById from './getQuizById'

export default async function handler (req: NextApiRequest, res: NextApiResponse<Quiz>): Promise<void> {
  try {
    const id = req.query.id as string
    const quiz = await getQuizById({ id })
    res.status(200).json(quiz)
  } catch (error) {
    res.status(500)
  }
}
