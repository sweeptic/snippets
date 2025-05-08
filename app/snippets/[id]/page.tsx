import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as actions from '@/actions';
import { PageProps } from '@/.next/types/app/page';

// interface SnippetShowPageProps {
//   params: {
//     id: string;
//   };
// }

export default async function SnippetShowPage(props: PageProps) {
  const { id } = await props.params;

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const parsedInt = parseInt(id);

  const snippet = await db.snippet.findFirst({ where: { id: parsedInt } });
  console.log('show snippet - db.snippet.findFirst', id);

  const deleteSnippetaction = actions.deleteSnippet.bind(null, parsedInt);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetaction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-amber-600 ">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
