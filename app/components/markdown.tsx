import ReactMarkdown from 'react-markdown';
import styles from './markdown.module.css';

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        img: ({ node, ...props }) => (
          <img className={styles.image} {...props} loading="lazy" alt={props.alt} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
