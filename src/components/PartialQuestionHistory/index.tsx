import { type QuestionHistory } from '@/types/question'
import { useEffect, useState } from 'react'

interface Props {
  history: QuestionHistory[]
  currentQuestionNumber: number
}

interface States {
  partialHistory: number[]
}

const PARTIAL_LENGTH = 9

const PartialQuestionHistory: React.FC<Props> = ({ history, currentQuestionNumber }) => {
  const [partialHistory, setPartialHistory] = useState<States['partialHistory']>([])

  useEffect(() => {
    const historyLength = history.length + 1
    const partialHistoryLength = historyLength <= Math.floor(PARTIAL_LENGTH / 2) ? PARTIAL_LENGTH : historyLength + Math.floor(PARTIAL_LENGTH / 2)
    const partialHistory: States['partialHistory'] = Array.from({ length: partialHistoryLength }, (_, i) => i + 1)
    setPartialHistory(partialHistory.slice(-PARTIAL_LENGTH))
  }, [history])

  return (
    <div className='flex gap-4 justify-center flex-wrap my-4'>
      {
        partialHistory.map((questionNumber) => {
          const isCurrentQuestionUnanswered = currentQuestionNumber === questionNumber - 1
          const isPreviousQuestion = currentQuestionNumber > questionNumber - 1
          return (
            <div
              key={questionNumber}
              className={`
                p-2 border-2 text-center 
                ${isCurrentQuestionUnanswered ? 'scale-150 border-primary text-primary' : ''}
                ${isPreviousQuestion ? 'opacity-50' : ''}
                `}
              >
              {questionNumber}
            </div>
          )
        })
      }
    </div>
  )
}

export default PartialQuestionHistory
