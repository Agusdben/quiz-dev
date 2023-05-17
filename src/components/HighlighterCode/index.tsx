import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  language: 'javascript'
  code: string
}

const HighlighterCode: React.FC<Props> = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  )
}

export default HighlighterCode
