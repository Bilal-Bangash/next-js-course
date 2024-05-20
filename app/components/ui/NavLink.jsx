'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link href={href} className={isActive ? 'text-cyan-500' : ''} {...rest} />
  )
}
// 03125850155
export default NavLink
