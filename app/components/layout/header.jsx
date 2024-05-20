import ContactButton from '../ui/ContactButton'
import NavLink from '../ui/NavLink'

const Header = () => {
  return (
    <header className='bg-gray-100 p-4'>
      <nav className='container'>
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
      </nav>
    </header>
  )
}

export default Header