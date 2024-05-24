'use client'

import { i18n } from '@/i18n.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LocaleSwitcher = () => {
  const pathname = usePathname()

  const redirectPathName = locale => {
    if (!pathname) return
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => (
        <li key={locale}>
          <Link
            href={redirectPathName(locale)}
            className='rounded-md border bg-black px-3 py-2 text-white'
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LocaleSwitcher
