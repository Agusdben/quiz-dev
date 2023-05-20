import { type AnswerIndexes } from '@/types'
import { type Question } from '@/types/question'
import { useEffect, useState } from 'react'

interface Params {
  questions: Question[]
}

interface ReturnTypes {
  currentQuestion: Question
  totalQuestions: number
  currentQuestionNumber: number
  isAnswerCorrect: ({ answerIndex }: {
    answerIndex: AnswerIndexes
  }) => boolean
  incrementCurrentQuestionIndex: () => void
}

const useSolveQuiz = ({ questions }: Params): ReturnTypes => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[currentQuestionIndex])

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex])
  }, [currentQuestionIndex, questions])

  const incrementCurrentQuestionIndex = (): void => {
    setCurrentQuestionIndex(currentIndex => currentIndex + 1)
  }

  const isAnswerCorrect = ({ answerIndex }: { answerIndex: AnswerIndexes }): boolean => {
    return answerIndex === currentQuestion.correctAnswerIndex
  }

  return {
    currentQuestion,
    totalQuestions: questions.length,
    currentQuestionNumber: currentQuestionIndex + 1,
    isAnswerCorrect,
    incrementCurrentQuestionIndex
  }
}

export default useSolveQuiz