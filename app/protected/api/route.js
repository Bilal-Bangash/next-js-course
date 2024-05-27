import { authOptions } from '@/app/api/auth/_options'
import { auth } from '@clerk/nextjs/server'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

// export async function GET() {
//   const session = await getServerSession(authOptions)
//   if (!session) {
//     return NextResponse.json({ message: 'You are not logged in' })
//   }
//   return NextResponse.json({ name: session.user.name })
// }

export async function GET() {
  const data = auth()
  return NextResponse.json({ data })
}
