'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
  console.log('edit snippet called', id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  console.log('edit snippet called', id);
  await db.snippet.delete({
    where: { id },
  });

  redirect(`/`);
}

export async function createSnippet(formState: { message: string }, formData: FormData) {
  // This is need to be a server action

  //   Check the user's inputs and make sure they are valid
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  if (!(title && code)) {
    return { message: 'title must be longer' };
  }
  // Create a new record in the database
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log(snippet);

  //   Redirect the user back to the root route
  redirect('/');
}
