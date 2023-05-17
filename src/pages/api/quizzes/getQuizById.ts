import QUIZZES from '@/mocks/quizzes'
import { type QuizId, type Quiz } from '@/types/quiz'

interface GetQuizByIdParams {
  id: QuizId
}

export default function getQuizById ({ id }: GetQuizByIdParams): Quiz {
  const quiz = QUIZZES.filter(q => q.id === id)

  return quiz[0]
}
