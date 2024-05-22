'use server'

import { createGuestBookEntry } from '@/lib/mongo/guestbook'
import { GuestEntrySchema } from '@/lib/schema'
import { revalidatePath } from 'next/cache'
export async function addEntry_old(data) {
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

export async function addEntry(state, formData) {
  const result = GuestEntrySchema.safeParse({
    name: formData.get('name'),
    message: formData.get('message')
  })

  await new Promise(resolve => setTimeout(resolve, 1000))

  if (result.success) {
    return { data: result.data }
  }

  // Todo: perform any desired action/mutation

  if (result.error) {
    return { error: result.error.format() }
  }
}
