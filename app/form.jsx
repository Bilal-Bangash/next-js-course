'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { addEntry } from './_actions'

const Form = () => {
  const [state, fromAction] = useFormState(addEntry, null)
  const stauts = useFormStatus
  return (
    <section className='flex gap-6'>
      <form action={fromAction} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
        <input
          name='name'
          placeholder='Your Name'
          className='rounded-md border border-gray-300 bg-transparent px-4 py-2'
        />
        <input
          name='message'
          placeholder='Your message'
          className='rounded-md border border-gray-300 bg-transparent px-4 py-2'
        />
        <SubmitButton />
      </form>
      <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type='submit'
      className='rounded-lg bg-black py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-white dark:text-black'
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export default Form
