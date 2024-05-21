import { getGuestBookEntries } from '@/lib/mongo/guestbook'
import GuestBookEntryForm from '../components/GuestBookEntryForm'

// export const dynamic = 'force-dynamic'
export const dynamic = 'auto'
async function getData() {
  const { entries, error } = await getGuestBookEntries()
  if (!entries || error) throw new Error('Failed to fetch guestbook entries')
  return entries
}

const GuestBook = async () => {
  const entries = await getData()
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Guest Book</h1>
        <GuestBookEntryForm />
        <ul className='mt-6 flex flex-col gap-3'>
          {entries.map(entry => (
            <li key={entry._id} className='flex gap-x-3'>
              <span className='text-gray-500'>{entry.name}</span>
              <span>{entry.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default GuestBook
