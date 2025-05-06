import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const { id } = await props.params;

  const parsedInt = parseInt(id);

  const snippet = await db.snippet.findFirst({ where: { id: parsedInt } });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      Editing snippet with title {snippet.title}
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
