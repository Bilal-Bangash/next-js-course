'use client'
import { useSession } from 'next-auth/react'

const ClientProtectedPage = () => {
  const { data: session } = useSession({ required: true })
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold text-emerald-500'>
          Client Protected Page
        </h1>
        <h2 className='mt-4 text-2xl font-bold'>You are logged in as:</h2>
        <p className='mt-4 text-gray-500'>{session?.user?.name}</p>
      </div>
    </section>
  )
}

export default ClientProtectedPage
