import { Rubik } from 'next/font/google'

interface Props {
  children: React.ReactNode
}

const rubik = Rubik({ subsets: ['latin'], weight: '500' })

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${rubik.className} w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col`}>
      <header>header</header>
      <main className='flex-1'>
        {children}
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
