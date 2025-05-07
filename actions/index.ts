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

  if (typeof title !== 'string' || title.length < 3) {
    return { message: 'Title must be longer' };
  }

  if (typeof code !== 'string' || code.length < 5) {
    return { message: 'Code must be longer' };
  }
  // Create a new record in the database

  try {
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // redirect('/'); catching the catch block...
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong...' };
    }
  }

  //   Redirect the user back to the root route
  redirect('/');
}
