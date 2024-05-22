import { z } from 'zod'

export const GuestEntrySchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  message: z.string().min(2, { message: 'Message is required' })
})
