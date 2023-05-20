import { ATTEMPT_STYLES } from '@/constants'
import { type AnswerIndexes } from '@/types'
import { type Question } from '@/types/question'
import React from 'react'

interface Props {
  question: Question
  handleResponse: (answerIndex: AnswerIndexes) => void
  isAttemptCorrect: 0 | 1 | undefined
  attemptIndex: AnswerIndexes | null
}

const InteractiveQuestion: React.FC<Props> = ({ question, handleResponse, isAttemptCorrect, attemptIndex }) => {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      {
        question.answers.map(answer => {
          const attemptStyle = isAttemptCorrect !== undefined && attemptIndex === answer.index ? ATTEMPT_STYLES[isAttemptCorrect] : ''

          return (
            <button
              disabled={isAttemptCorrect !== undefined}
              key={answer.id}
              className={`text-left border-2 p-2 hover:bg-blue-400 disabled:pointer-events-none transition-colors ${attemptStyle}`}
              onClick={() => { handleResponse(answer.index) }}
              >
              <p>{answer.index}) {answer.answer}</p>
            </button>
          )
        })
      }
    </div>
  )
}

export default InteractiveQuestion
