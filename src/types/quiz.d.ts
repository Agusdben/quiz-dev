
export type QuizId = string
export type QuizLanguage = string
export type QuizTitle = string
export type QuizDifficulty = 'easy' | 'normal' | 'hard'

export interface Quiz {
  id: QuizId
  language: QuizLanguage
  title: QuizTitle
  difficulty: QuizDifficulty
}
