import { Link } from 'wouter'
import Social from './Social'
import Languages from './Languages'
import Menu from './Menu'
import { Logo } from '../icons/icons'

const Header = () => {
  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='fixed w-full px-6 lg:px-12 py-12 flex items-start text-black z-50 transition-all font-secondary'>
      <div className='flex items-center gap-x-4 flex-grow flex-1'>
        <div
          className='nav-menu z-50'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
        </div>
        <span className='text-sm'>MENU</span>
      </div>
      <div className='z-50'>
        <Link href='/'>
          <a
            target='#home'
            className='scroll hover:blur-sm logo -mt-2'
          >
            <Logo />
          </a>
        </Link>
      </div>
      <div className='flex gap-x-6 items-center justify-end flex-grow flex-1'>
        <Languages />
        <Social />
      </div>
      <div className='menu-mobile fixed fade-in w-full h-full bg-tertiary top-0 left-0 z-40 hidden'>
        <Menu />
      </div>
    </section>
  )
}

export default Header
