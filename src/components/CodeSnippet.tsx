// components/CodeSnippet.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeSnippet({ codeString }: {codeString: string}) {
  
  return (
    <SyntaxHighlighter language="bash" style={atomDark} wrapLines={true}>
      {codeString}
    </SyntaxHighlighter>
  );
}
