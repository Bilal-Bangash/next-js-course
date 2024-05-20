import ContactButton from '../ui/ContactButton'
import NavLink from '../ui/NavLink'
import ThemeButton from '../ui/ThemeButton'

const Header = () => {
  return (
    <header className='border-b p-4'>
      <nav className='container flex items-center justify-between '>
        <ul className='flex gap-3'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/posts'>Blog</NavLink>
          </li>
          <ContactButton />
        </ul>
        <ThemeButton />
      </nav>
    </header>
  )
}

export default Header
