'use client';

import { Snippet } from '@/app/generated/prisma';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return <div>Client Component with {snippet.title} </div>;
}
