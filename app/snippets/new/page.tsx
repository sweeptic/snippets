'use client';

import { useActionState } from 'react';
import notFound from '../[id]/not-found';
import * as actions from '@/actions';

export default function SnippetCreatePage() {
  const [formState, action] = useActionState(actions.createSnippet, { message: '' });

  //
  //   async function  createSnippet(formData: FormData) {
  //     // This is neet to be a server action
  //     'use server';

  //     // Check the user's inputs and make sure they are valid
  //     const title = formData.get('title') as string;
  //     const code = formData.get('code') as string;

  //     // Create a new record in the database
  //     const snippet = await db.snippet.create({
  //       data: {
  //         title,
  //         code,
  //       },
  //     });
  //     console.log(snippet);

  //     //   Redirect the user back to the root route
  //     redirect('/');
  //   }

  notFound();

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="title" className="border rounded p-2 w-full" id="title" />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea name="code" className="border rounded p-2 w-full" id="code" />
        </div>
        <div>{formState.message}</div>
        <button type="submit" className="border rounded p-2 ">
          Create
        </button>
      </div>
    </form>
  );
}
