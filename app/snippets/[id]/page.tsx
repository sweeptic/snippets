import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
