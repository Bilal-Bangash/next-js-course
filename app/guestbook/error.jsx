'use client'

const Error = ({ error, reset }) => {
  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='mb-4 text-red-400'>{error.message}</h2>
        <button
          onClick={() => reset()}
          className='rounded-md border border-gray-300 bg-black px-4 py-2 text-white dark:bg-white dark:text-black'
        >
          Try again
        </button>
      </div>
    </section>
    // <div>
    //     <h2 className='text-sm text-red-500'>{error.message}</h2>
    // </div>
  )
}

export default Error
