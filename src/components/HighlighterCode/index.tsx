import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface Props {
  language: string
  code: string
}

const HighlighterCode: React.FC<Props> = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language}>
      {code}
    </SyntaxHighlighter>
  )
}

export default HighlighterCode
