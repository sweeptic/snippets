'use client';

import * as actions from '@/actions';
import { Snippet } from '@/app/generated/prisma';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = '') {
    console.log('here is the current model value:', value);
    setCode(value);
  }

  //   const editSnippetaction = () => {
  //     actions.editSnippet(snippet.id, code);
  //   };

  const editSnippetaction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      Client Component with {snippet.title}
      <Editor height="40vh" defaultLanguage="javascript" defaultValue={snippet.code} onChange={handleEditorChange} />
      <form action={editSnippetaction}>
        <button className="mt-2 p-2 border rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
