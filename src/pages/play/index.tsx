import GameOverMessage from '@/components/GameOverMessage'
import InteractiveQuestion from '@/components/InteractiveQuestion'
import Modal from '@/components/Modal'
import PartialQuestionHistory from '@/components/PartialQuestionHistory'
import Wildcards from '@/components/Wildcards'
import useModal from '@/hooks/useModal'
import usePlayQuestions from '@/hooks/usePlayQuestions'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Play: React.FC = () => {
  const {
    question,
    isCorrect,
    history,
    points,
    wildcardsAvailable,
    gameOver,
    activeWildcard,
    handleActiveWildcard,
    findRandomQuestion,
    verifyIfCorrect
  } = usePlayQuestions()

  const modalGameOver = useModal({ title: 'End of game' })
  const router = useRouter()

  useEffect(() => {
    findRandomQuestion()
      .catch(err => { console.error(err) })
  }, [findRandomQuestion])

  useEffect(() => {
    if (gameOver) {
      modalGameOver.handleModal()
    }
  }, [gameOver])

  const handleModalGameOverClose = (): void => {
    router.push('/')
      .catch((err) => { console.error(err) })
  }

  return (
    <>
      <section className='flex-1 gap-4 flex flex-col items-center justify-center'>
        {question !== null && (
          <>
            <header>
              <PartialQuestionHistory history={history} currentQuestionNumber={points}/>
            </header>
            <InteractiveQuestion
              gameOver={gameOver}
              question={question}
              handleResponse={verifyIfCorrect}
              isAttemptCorrect={isCorrect}
            />
            <Wildcards
              wildcards={wildcardsAvailable}
              onWildcardActive={handleActiveWildcard}
              isWildcardActive={activeWildcard !== undefined}
              />
          </>
        )}
        <Modal isOpen={modalGameOver.isOpen} onClose={handleModalGameOverClose} title={modalGameOver.title}>
          <div className='text-center flex flex-col gap-5'>
            <h2 className='text-3xl font-bold'>
              <GameOverMessage score={history.length} />
            </h2>
            <h3 className='text-xl'>You answer successfully <span className='text-primary'>{history.length}</span> questions </h3>
          </div>
        </Modal>
      </section>
    </>
  )
}

export default Play
