import { Link } from 'wouter'
import Menu from './Menu'
import Social from './Social'
import Languages from './Languages'
import { Logo } from '../icons/icons'

const Header = () => {
  const OpenMenu = () => {
    document.querySelector('header')?.classList.toggle('text-white')
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='fixed w-full px-6 lg:px-12 py-12 flex items-start z-50 transition-all font-secondary'>
      <div className='flex items-center gap-x-4 flex-grow flex-1 '>
        <div
          className='nav-menu z-50'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
        </div>
        <span className='text-sm hidden lg:inline'>MENU</span>
      </div>
      <div className='z-50'>
        <Link href='/'>
          <a
            target='#home'
            className='scroll hover:text-black transition-all logo -mt-2'
          >
            <Logo />
          </a>
        </Link>
      </div>
      <div className='flex-grow flex-1'>
        <div className='gap-x-6 items-center justify-end hidden lg:flex'>
          <Languages />
          <Social />
        </div>
      </div>
      <div className='menu-mobile fixed fade-in w-full h-full top-0 left-0 z-40 hidden bg-tertiary-alpha backdrop-blur-md transition-all'>
        <Menu />
      </div>
    </section>
  )
}

export default Header
