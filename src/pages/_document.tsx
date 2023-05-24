import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-black-800 text-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
