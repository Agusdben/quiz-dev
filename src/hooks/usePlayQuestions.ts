import { WILDCARDS } from '@/constants'
import { getRandomQuestion, getCorrectIndex } from '@/services/questions'
import { type AnswerIndexes } from '@/types'
import { type QuestionHistory, type Question, type QuestionId } from '@/types/question'
import { type WildcardTracker, type WildcardAvailable } from '@/types/wildcards'
import { useCallback, useEffect, useState } from 'react'

interface ReturnTypes {
  question: Question | null
  history: QuestionHistory[]
  isCorrect: boolean | undefined
  points: number
  gameOver: boolean
  wildcardsAvailable: WildcardTracker[]
  activeWildcard: WildcardAvailable | undefined
  handleActiveWildcard: (wildcard: WildcardAvailable) => void
  findRandomQuestion: () => Promise<void>
  verifyIfCorrect: ({ questionId, answerIndex }: {
    questionId: QuestionId
    answerIndex: AnswerIndexes
  }) => Promise<void>
}

const usePlayQuestions = (): ReturnTypes => {
  const [question, setQuestion] = useState<Question | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined)
  const [history, setHistory] = useState<QuestionHistory[]>([])
  const [points, setPoints] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const [wildcardsAvailable, setWildcardsAvailable] = useState<WildcardTracker[]>(() => {
    return WILDCARDS.map(w => {
      return { ...w, used: false }
    })
  })

  const [activeWildcard, setActiveWildcard] = useState<WildcardAvailable | undefined>(undefined)

  useEffect(() => {
    const lastQuestionAnswered = history.at(-1)

    if (lastQuestionAnswered == null) return

    if (lastQuestionAnswered.isCorrect) {
      setPoints(currentPoints => currentPoints + 1)
    }
  }, [history])

  const handleSkipWildcard = useCallback(() => {
    if (question == null) return
    setHistory(history => history.concat({ ...question, isCorrect: true }))
    const updatedWildcardsAvailable = wildcardsAvailable.map((wa) => {
      return wa.name === 'skip'
        ? { ...wa, used: true }
        : { ...wa }
    })
    setWildcardsAvailable(updatedWildcardsAvailable)
    setActiveWildcard(undefined)
  }, [question, wildcardsAvailable])

  const handleBombWildcard = useCallback(async (): Promise<void> => {
    if (question == null) return

    const result: { correctIndex: AnswerIndexes } = await getCorrectIndex({ questionId: question.id })
    const correctAnswer = question.answers.find(a => a.index === result.correctIndex)

    if (correctAnswer == null) return

    const currentInvalidAnswers = question.answers.filter(a => a.index !== correctAnswer.index)

    const randomInvalidAnswer = currentInvalidAnswers.at(Math.floor(Math.random() * currentInvalidAnswers.length))

    if (randomInvalidAnswer == null) return

    const newQuestionWithTwoAnswers: Question = {
      ...question,
      answers: [correctAnswer, randomInvalidAnswer]
    }

    const updatedWildcardsAvailable = wildcardsAvailable.map((wa) => {
      return wa.name === 'bomb'
        ? { ...wa, used: true }
        : { ...wa }
    })
    setWildcardsAvailable(updatedWildcardsAvailable)
    setQuestion(newQuestionWithTwoAnswers)
  }, [question, wildcardsAvailable])

  const handleDobleChance = useCallback(() => {
    const updatedWildcardsAvailable = wildcardsAvailable.map((wa) => {
      return wa.name === 'doble chance'
        ? { ...wa, used: true }
        : { ...wa }
    })
    setWildcardsAvailable(updatedWildcardsAvailable)
  }, [wildcardsAvailable])

  useEffect(() => {
    if (activeWildcard === undefined) return

    (async () => {
      switch (activeWildcard) {
        case 'bomb': {
          await handleBombWildcard()
          break
        }
        case 'skip': {
          handleSkipWildcard()
          break
        }
        case 'doble chance': {
          handleDobleChance()
          break
        }
      }
    })().catch(err => { console.log(err) })
  }, [activeWildcard, handleBombWildcard, handleSkipWildcard, handleDobleChance])

  const handleActiveWildcard = (wildcard: WildcardAvailable): void => {
    const isWildcardAvailable = wildcardsAvailable.some(wa => wa.name === wildcard && !wa.used)
    if (isWildcardAvailable) {
      setActiveWildcard(wildcard)
    }
  }

  const findRandomQuestion = useCallback(async (): Promise<void> => {
    try {
      let question: Question | null = null
      let isQuestionAlreadyAnswered = false
      let attempts = 0
      const maxGetRandomQuestionAttempts = 6
      while ((question == null || isQuestionAlreadyAnswered) && attempts < maxGetRandomQuestionAttempts) {
        question = await getRandomQuestion()
        isQuestionAlreadyAnswered = history.some(h => h.id === question?.id)
        attempts++
      }

      setQuestion(question)
    } catch (error) {
      console.error(error)
    }
  }, [history])

  const verifyIfCorrect = async ({ questionId, answerIndex }: { questionId: QuestionId, answerIndex: AnswerIndexes }): Promise<void> => {
    try {
      if (question == null) {
        throw new Error('Question is undefined')
      }
      const result: { correctIndex: AnswerIndexes } = await getCorrectIndex({ questionId })

      const isCorrect = result.correctIndex === answerIndex

      setIsCorrect(isCorrect)

      setActiveWildcard(undefined)

      if (activeWildcard === 'doble chance' && !isCorrect) {
        return
      }

      if (isCorrect) {
        setTimeout(() => {
          setHistory(history => history.concat({ ...question, isCorrect }))
          setIsCorrect(undefined)
        }, 1500)
      } else {
        setGameOver(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    question,
    history,
    points,
    isCorrect,
    gameOver,
    activeWildcard,
    wildcardsAvailable,
    handleActiveWildcard,
    findRandomQuestion,
    verifyIfCorrect
  }
}

export default usePlayQuestions
