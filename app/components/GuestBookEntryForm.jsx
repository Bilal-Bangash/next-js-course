'use client'
import { useRef, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useState, useTransition } from 'react'
import { addEntry } from '../_actions'
const GuestBookEntryForm = () => {
  const formRef = useRef()
  const [validateError, setValidateError] = useState(null)
  // const router = useRouter()
  // const [isPending, startTransition] = useTransition()
  // const [isFetching, setIsFetching] = useState(false)
  // const isMutating = isPending || isFetching

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   const form = event.currentTarget
  //   const formData = new FormData(form)
  //   const { name, message } = Object.fromEntries(formData)
  //   setIsFetching(true)
  //   if (!name || !message) return
  //   const { error } = await fetch('/api/guestbook', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ name, message })
  //   })

  //   form.reset()
  //   setIsFetching(false)
  //   startTransition(() => {
  //     router.refresh()
  //   })
  // }

  async function action(data) {
    const result = await addEntry(data)
    if (result?.error) {
      setValidateError(result.error)
    } else {
      setValidateError(null)
      formRef.current.reset()
    }
  }

  return (
    <form
      className='flex max-w-sm flex-col gap-y-3 text-sm'
      action={action}
      ref={formRef}
      // key={Math.random()}
    >
      <input
        type='text'
        placeholder='Your name'
        name='name'
        className='rounded-md border border-gray-300 bg-transparent px-4 py-2'
      />
      {validateError?.name && (
        <p className='text-sm text-red-500'>
          {validateError.name._errors.join(', ')}
        </p>
      )}
      <input
        type='text'
        placeholder='Your message...'
        name='message'
        className='rounded-md border border-gray-300 bg-transparent px-4 py-2'
      />
      {validateError?.message && (
        <p className='text-sm text-red-500'>
          {validateError.message._errors.join(', ')}
        </p>
      )}
      <button
        type='submit'
        // disabled={isMutating}
        className='rounded-md border border-gray-300 bg-black px-4 py-2 text-white dark:bg-white dark:text-black'
      >
        Submit
      </button>
    </form>
  )
}

export default GuestBookEntryForm
