import { authOptions } from '@/app/api/auth/_options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

const ServerProtectedPage = async ({ params }) => {
  const session = await getServerSession(authOptions)
  //   if (!session) {
  //     const callbackUrl = encodeURIComponent('/protected/server')
  //     redirect(`/signin?callbackUrl=${callbackUrl}`)
  //   }
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold text-emerald-500'>
          Server Protected Page
        </h1>
        <h2 className='mt-4 text-2xl font-bold'>You are logged in as:</h2>
        <p className='mt-4 text-gray-500'>{session?.user?.name}</p>
      </div>
    </section>
  )
}

export default ServerProtectedPage
