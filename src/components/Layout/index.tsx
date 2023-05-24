import { Rubik } from 'next/font/google'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const rubik = Rubik({ subsets: ['latin'], weight: '500' })

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>DevQuiz</title>
        <meta name="description" content="Site where you can solve quizzes about dev world and test your knowledge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${rubik.className} w-screen max-w-5xl m-auto min-h-screen overflow-x-hidden flex flex-col gap-4`}>
        <header>header</header>
        <main className='flex-1 h-full flex flex-col px-2'>
          {children}
        </main>
        <footer>footer</footer>
      </div>
    </>
  )
}

export default Layout
