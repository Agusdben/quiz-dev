import InteractiveQuestion from '@/components/InteractiveQuestion'
import PartialQuestionHistory from '@/components/PartialQuestionHistory'
import usePlayQuestions from '@/hooks/usePlayQuestions'
import { useEffect } from 'react'

const Play: React.FC = () => {
  const { question, isCorrect, history, points, findRandomQuestion, verifyIfCorrect } = usePlayQuestions()

  useEffect(() => {
    findRandomQuestion()
      .catch(err => { console.error(err) })
  }, [findRandomQuestion])

  return (
    <>
      <section className='flex-1 flex flex-col items-center justify-center'>
        {question !== null && (
          <>
            <header>
              <PartialQuestionHistory history={history} currentQuestionNumber={points}/>
            </header>
            <InteractiveQuestion
              question={question}
              handleResponse={verifyIfCorrect}
              isAttemptCorrect={isCorrect}
            />
          </>
        )}
      </section>
    </>
  )
}

export default Play
