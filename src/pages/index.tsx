import { type Quiz } from '@/types/quiz'
import { type GetStaticProps } from 'next'
import Link from 'next/link'

interface Props {
  quizzes: Quiz[]
}

const Home: React.FC<Props> = ({ quizzes }) => {
  return (
    <section>
      <ul className=''>
        {quizzes.map(q => {
          return (
            <li key={q.id} className='max-w-xs grid border-rose-50 border-2 border-dashed p-2 text-center hover:border-blue-400'>
              <Link href={`quizzes/${q.id}`} className='flex flex-col hover:bg-slate-100 hover:text-black'>
                <h3 className='text-blue-400'>{q.title}</h3>
                <span>{q.language}</span>
                <small>{q.difficulty}</small>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let quizzes: Quiz[] = []
  try {
    const res = await fetch(`${process.env.API_URL as string}/quizzes`)
    quizzes = await res.json()
  } catch (error) {
    console.error()
  }
  return {
    props: {
      quizzes
    }
  }
}

export default Home
