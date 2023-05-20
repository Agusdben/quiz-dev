import AnswersHistory from '@/components/AnswersHistory'
import HighlighterCode from '@/components/HighlighterCode'
import InteractiveQuestion from '@/components/InteractiveQuestion'
import useSolveQuiz from '@/hooks/useSolveQuiz'
import { type AnswerIndexes, type ServerSideError } from '@/types'
import { type Question } from '@/types/question'
import { type Quiz } from '@/types/quiz'
import { type GetServerSideProps } from 'next'
import NextError from 'next/error'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  quiz: Quiz
  questions: Question[]
  error?: ServerSideError
}

const QuizPage: React.FC<Props> = ({ error, quiz, questions }) => {
  const {
    currentQuestion,
    incrementCurrentQuestionIndex,
    isAnswerCorrect,
    totalQuestions,
    currentQuestionNumber
  } = useSolveQuiz({ questions })

  const [isAttemptCorrect, setIsAttemptCorrect] = useState<0 | 1 | undefined>(undefined)
  const [attemptIndex, setAttemptIndex] = useState<AnswerIndexes | null>(null)
  const [answersHistory, setAnswersHistory] = useState<Array<0 | 1 | undefined>>(new Array(totalQuestions).fill(undefined))

  if (error != null) {
    return (
      <NextError statusCode={error.statusCode} title={error.message} />
    )
  }

  const handleAttempt = (answerIndex: AnswerIndexes): void => {
    const isCorrect = isAnswerCorrect({ answerIndex })
    setIsAttemptCorrect(isCorrect)
    setAnswersHistory(history => {
      const newHistory = [...history]
      const undefinedIndex = newHistory.findIndex(h => h === undefined)
      newHistory[undefinedIndex] = isCorrect
      return newHistory
    })
    setAttemptIndex(answerIndex)

    if (currentQuestionNumber !== totalQuestions) {
      setTimeout(() => {
        incrementCurrentQuestionIndex()
        setIsAttemptCorrect(undefined)
        setAttemptIndex(null)
      }, 1000)
    }
  }

  return (
    <section className='flex-1 flex flex-col items-center justify-center'>
      <article className='max-w-lg flex flex-col gap-4 w-full p-2'>
        <header className='flex flex-col gap-4'>
          <h3 className='text-center uppercase text-2xl'>{quiz.title}</h3>
          <AnswersHistory history={answersHistory} currentQuestionNumber={currentQuestionNumber}/>
        </header>
        <HighlighterCode code={currentQuestion.question} language={quiz.language} />
        <InteractiveQuestion
          isAttemptCorrect={isAttemptCorrect}
          handleResponse={handleAttempt}
          question={currentQuestion}
          attemptIndex={attemptIndex}
        />
        <footer className='mt-6'>
          <Link href='/' className='p-2 bg-red-300 text-black hover:bg-red-400 transition-colors'> &lt;- Exit</Link>
        </footer>
      </article>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.query.id as string

    if (id == null) {
      throw new Error('Id not provided')
    }

    const API_URL = process.env.API_URL as string

    const responses = await Promise.all([await fetch(`${API_URL}/quizzes/${id}`), await fetch(`${API_URL}/quizzes/questions/${id}`)])

    if (responses.some(res => !res.ok)) {
      throw new Error('Response error')
    }

    const quiz: Quiz = await responses[0].json()
    const questions: Question[] = await responses[1].json()

    return {
      props: {
        quiz,
        questions
      }
    }
  } catch (err) {
    return {
      props: {
        error: {
          message: 'Server error, try again later',
          statusCode: 500
        }
      }
    }
  }
}

export default QuizPage
