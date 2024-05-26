import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/_options'

const AdminPage = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user?.role !== 'admin') {
    return (
      <section className='py-24'>
        <div className='container'>
          <h1 className='text-2xl font-bold'>
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    )
  }
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Admin Page</h1>
      </div>
    </section>
  )
}

export default AdminPage
