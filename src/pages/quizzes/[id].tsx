import HighlighterCode from '@/components/HighlighterCode'
import useSolveQuiz from '@/hooks/useSolveQuiz'
import { type AnswerIndexes, type ServerSideError } from '@/types'
import { type Question } from '@/types/question'
import { type Quiz } from '@/types/quiz'
import { type GetServerSideProps } from 'next'
import NextError from 'next/error'
import { useState } from 'react'

interface Props {
  quiz: Quiz
  questions: Question[]
  error?: ServerSideError
}

const ATTEMPT_STYLES = {
  0: 'bg-red-300 text-black',
  1: 'bg-green-300 text-black'
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

  if (error != null) {
    return (
      <NextError statusCode={error.statusCode} title={error.message} />
    )
  }

  const handleAttempt = (answerIndex: AnswerIndexes): void => {
    const isCorrect = isAnswerCorrect({ answerIndex })
    setIsAttemptCorrect(isCorrect ? 1 : 0)
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
        <header>
          <h2>Question: {currentQuestionNumber}/{totalQuestions}</h2>
        </header>
        <HighlighterCode code={currentQuestion.question} language={quiz.language} />
        <div className='grid grid-cols-2 gap-4'>
          {
            currentQuestion.answers.map(answer => {
              const attemptStyle = isAttemptCorrect !== undefined && attemptIndex === answer.index ? ATTEMPT_STYLES[isAttemptCorrect] : ''

              return (
                <button
                 disabled={isAttemptCorrect !== undefined}
                 key={answer.id}
                 className={`text-left border-2 p-1 hover:bg-blue-400 disabled:pointer-events-none ${attemptStyle}`}
                 onClick={() => { handleAttempt(answer.index) }}
                 >
                  <p>{answer.index}) {answer.answer}</p>
                </button>
              )
            })
          }
        </div>
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
