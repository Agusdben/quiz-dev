import { type AnswerIndexes } from '@/types'
import { type Answer } from '@/types/answer'
import { type QuestionId, type Question } from '@/types/question'
import React, { useState } from 'react'
import HighlighterCode from '../HighlighterCode'

interface Props {
  question: Question
  gameOver: boolean
  handleResponse: ({ questionId, answerIndex }: {
    questionId: QuestionId
    answerIndex: AnswerIndexes
  }) => Promise<void>
  isAttemptCorrect: boolean | undefined
}

const ATTEMPT_STYLES = {
  0: 'bg-red-300 text-black border-red-300',
  1: 'bg-green-300 text-black border-green-300'
}

const InteractiveQuestion: React.FC<Props> = ({ question, handleResponse, isAttemptCorrect, gameOver }) => {
  const [lastAttemptIndex, setLastAttemptIndex] = useState<AnswerIndexes | undefined>(undefined)

  const handleAttempt = (answer: Answer): void => {
    setLastAttemptIndex(answer.index)
    handleResponse({ answerIndex: answer.index, questionId: question.id })
      .catch(error => { console.error(error) })
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <HighlighterCode code={question.question} language='javascript'/>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          question.answers.map(answer => {
            const attemptStyles = isAttemptCorrect !== undefined && lastAttemptIndex === answer.index ? ATTEMPT_STYLES[isAttemptCorrect ? 1 : 0] : ''
            return (
              <button
                disabled={gameOver}
                key={answer.id}
                className={`text-left border-2 p-2 hover:bg-primary hover:border-primary hover:text-black hover:scale-105 disabled:pointer-events-none transition-all
                ${lastAttemptIndex === answer.index ? attemptStyles : ''}
                `}
                onClick={() => { handleAttempt(answer) }}
                >
                <p>{answer.index}) {answer.answer}</p>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default InteractiveQuestion
