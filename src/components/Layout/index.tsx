import { Rubik } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import LinkedInIcon from '../Icons/LinkedInIcon'
import GitHubIcon from '../Icons/GitHubIcon'

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
        <header className='py-5 px-2'>
          <h1 className='text-xl text-primary'>DevQuiz</h1>
        </header>
        <main className='flex-1 h-full flex flex-col px-2'>
          {children}
        </main>
        <footer className='px-2 py-4 flex flex-col md:justify-between md:flex-row items-center'>
          <section>
            <small>Created by <Link className='hover:text-primary font-bold' href='https://agustindibenedetto.vercel.app/' target='_blank' rel="noopener noreferrer">Agustin Di Benedetto</Link></small>
          </section>
          <section className='[&_svg]:fill-text hover:[&_svg]:fill-primary flex gap-2'>
            <Link className='hover:text-primary font-bold' href='https://www.linkedin.com/in/agusdben/' target='_blank' rel="noopener noreferrer">
              <LinkedInIcon />
            </Link>
            <Link className='hover:text-primary font-bold' href='https://github.com/Agusdben' target='_blank' rel="noopener noreferrer">
              <GitHubIcon />
            </Link>
          </section>
        </footer>
      </div>
    </>
  )
}

export default Layout
