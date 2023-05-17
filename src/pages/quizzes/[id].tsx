import { type ServerSideError } from '@/types'
import { type Quiz } from '@/types/quiz'
import { type GetServerSideProps } from 'next'
import NextError from 'next/error'

interface Props {
  quiz: Quiz
  error?: ServerSideError
}

const QuizPage: React.FC<Props> = ({ error, quiz }) => {
  if (error != null) {
    return (
      <NextError statusCode={error.statusCode} title={error.message} />
    )
  }

  return (
    <section>

    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.query.id as string

    if (id == null) {
      throw new Error('Id not provided')
    }

    const res = await fetch(`${process.env.API_URL as string}/quizzes/${id}`)

    if (!res.ok) {
      throw new Error('Response error')
    }

    const quiz: Quiz = await res.json()

    return {
      props: {
        quiz
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
