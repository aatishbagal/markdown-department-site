import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Table(props) {
  return (
    <div className="table-wrap">
      <table {...props} />
    </div>
  )
}

export default function Markdown({ text }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ table: Table }}>
        {text}
      </ReactMarkdown>
    </div>
  )
}
