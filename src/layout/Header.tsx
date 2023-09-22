import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import Menu from './Menu'
import Social from './Social'
import Languages from './Languages'
import { Logo } from '../icons/icons'

const Header = () => {
  const [location] = useLocation()
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    location === '/historia' ||
    location === '/ruta-del-vino' ||
    location === '/beneficios-y-promociones' ||
    location === '/vivi-molinos'
      ? setIsHome(false)
      : setIsHome(true)
  }, [location])

  const OpenMenu = () => {
    document.querySelector('header')?.classList.toggle('text-white')
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='fixed w-full px-6 lg:px-12 py-12 flex items-center z-50 transition-all font-secondary'>
      <div className='flex items-center gap-x-4 flex-grow flex-1 fade-in-delay-2 z-50'>
        <div
          className='nav-menu'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
        </div>
        <span className='text-sm hidden lg:inline'>MENU</span>
      </div>
      <div className='z-50 scale'>
        {isHome ? (
          <a
            href='#'
            target='#home'
            className='scroll hover:opacity-70 transition-all logo-header'
          >
            <Logo />
          </a>
        ) : (
          <Link href='/'>
            <a className='hover:opacity-70 transition-all logo-header'>
              <Logo />
            </a>
          </Link>
        )}
      </div>
      <div className='flex-grow flex-1 fade-in-delay-2 z-50'>
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
