'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleMode = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  return (
    <button
      onClick={handleMode}
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg transition transition-colors  hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='h-5 w-5 text-orange-300' />
      ) : (
        <MoonIcon className='h-5 w-5 text-slate-300' />
      )}
    </button>
  )
}

export default ThemeButton
