import { PageProps } from '@/.next/types/app/page';
import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

// interface SnippetEditPageProps {
//   params: {
//     id: string;
//   };
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SnippetEditPage(props: PageProps) {
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
