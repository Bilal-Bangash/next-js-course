'use server'

import { createGuestBookEntry } from '@/lib/mongo/guestbook'
import { GuestEntrySchema } from '@/lib/schema'
import { revalidatePath } from 'next/cache'
export async function addEntry(data) {
  console.log('%cdata', 'color:red;font-size:50px', data)
  const { name, message } = Object.fromEntries(data)
  //   if (!name || !message) throw new Error('Name and message are required')
  const { error: zodError } = GuestEntrySchema.safeParse({ name, message })
  if (zodError) {
    return { error: zodError.format() }
  }
  const { error } = await createGuestBookEntry({
    name,
    message,
    updatedAt: new Date()
  })
  if (error) throw new Error(error)
  revalidatePath('/guestbook')
}
