import { ATTEMPT_STYLES } from '@/constants'

interface Props {
  history: Array<0 | 1 | undefined>
  currentQuestionNumber: number
}

const AnswersHistory: React.FC<Props> = ({ history, currentQuestionNumber }) => {
  return (
    <div className='flex gap-4 justify-center flex-wrap'>
      {
        history.map((isCorrect, index) => (
          <div
            key={index}
            className={`
              w-7 aspect-square text-center border-2 
              ${isCorrect !== undefined ? ATTEMPT_STYLES[isCorrect] : 'border-blue-300'}
              ${index + 1 > currentQuestionNumber || index + 1 < currentQuestionNumber ? 'opacity-50' : ''}
              `}
          >
            {index + 1}
          </div>
        ))
      }
    </div>
  )
}

export default AnswersHistory
