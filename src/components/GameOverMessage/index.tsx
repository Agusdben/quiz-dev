import { useEffect, useState } from 'react'

interface Props {
  score: number
}

const MESSAGES: Record<number, string> = {
  0: 'You can do it better',
  10: 'Nice work, but it\'s a low score 😅',
  15: 'You\'re doing great, but you can do even better!',
  25: 'Yours friends call you big brain',
  40: 'Wooow you are awesome but you lose 😪',
  100: 'Amazing job you left all your IQ'
}

const GameOverMessage: React.FC<Props> = ({ score }) => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const scoreMessageNumbers = Object.keys(MESSAGES)
    let closeNumber = +scoreMessageNumbers[0]

    // Buscar el número más cercano
    for (let i = 0; i < scoreMessageNumbers.length; i++) {
      if (Math.abs(+scoreMessageNumbers[i] - score) < Math.abs(+closeNumber - score)) {
        closeNumber = +scoreMessageNumbers[i]
      }
    }

    setMessage(MESSAGES[+closeNumber])
  }, [score])

  return (
    <p>{message}</p>
  )
}

export default GameOverMessage
