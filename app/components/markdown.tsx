import ReactMarkdown from 'react-markdown';

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => (
          <img className="bg-[#ddd] h-auto max-w-full align-bottom" {...props} loading="lazy" alt={props.alt} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
