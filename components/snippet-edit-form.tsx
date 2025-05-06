'use client';

import { Snippet } from '@/app/generated/prisma';
import { Editor } from '@monaco-editor/react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }

  return (
    <div>
      Client Component with {snippet.title}
      <Editor height="40vh" defaultLanguage="javascript" defaultValue={snippet.code} onChange={handleEditorChange} />
    </div>
  );
}
