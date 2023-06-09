import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  language: string
  code: string
}

const HighlighterCode: React.FC<Props> = ({ language, code }) => {
  return (
    <div className='select-none'>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default HighlighterCode
