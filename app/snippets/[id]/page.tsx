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

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-amber-600 ">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
