import Logo from '@/components/Logo'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <>
      <section className='flex-1 w-full flex flex-col justify-center items-center gap-y-6 gap-x-14 lg:flex-row-reverse'>
        <Logo />
        <div className='flex flex-col gap-4'>
          <h3 className='text-5xl text-primary'>Welcome</h3>
          <p className='max-w-sm leading-7 '>Answer JavaScript questions and earn points for each correct answer. Try to go as far as possible without making any mistakes.</p>
          <Link className='bg-primary w-fit px-4 py-2 text-black-800 font-bold hover:scale-110 hover:brightness-150 transition-all' href='/play'>Play</Link>
        </div>
      </section>
    </>
  )
}

export default Home
