import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { menu } from '../data/data'
import { Logo, Up } from '../icons/icons'
import Languages from './Languages'
import Social from './Social'
import { useDataContext } from '../context/useDataContext'
import scroll from '../utils/scroll'

const Footer = () => {
  const { lan } = useDataContext()
  const [location] = useLocation()
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    scroll()
  }, [])

  useEffect(() => {
    location === '/historia' ||
    location === '/ruta-del-vino' ||
    location === '/beneficios-y-promociones' ||
    location === '/vivi-molinos'
      ? setIsHome(false)
      : setIsHome(true)
  }, [location])

  return (
    <div className='px-6 lg:px-12 py-12 flex items-center text-white bg-tertiary'>
      <div className='flex-1 flex-grow'>
        <nav className='mb-8'>
          <ul className='flex flex-col [&>li>a:hover]:opacity-50 transition-all'>
            {menu.map((item, index) => (
              <li key={index}>
                {isHome && item.path ? (
                  <a
                    href='#'
                    className='scroll'
                    target={item.path.toLocaleLowerCase()}
                  >
                    {lan === 'ES' && item.title}
                    {lan === 'EN' && item.title_en}
                    {lan === 'FR' && item.title_fr}
                    {lan === 'POR' && item.title_por}
                  </a>
                ) : (
                  <Link href={item.url}>
                    <a className={`${item.url === location ? 'underline underline-offset-4 decoration-2' : ''}`}>
                      {lan === 'ES' && item.title}
                      {lan === 'EN' && item.title_en}
                      {lan === 'FR' && item.title_fr}
                      {lan === 'POR' && item.title_por}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex flex-col gap-y-2'>
          <Languages />
          <Social />
        </div>
      </div>
      <div>
        <div className='logo hidden lg:block'>
          <Logo />
        </div>
      </div>
      <div className='flex flex-1 flex-grow justify-end'>
        <a
          target='#home'
          className='flex flex-col items-center gap-y-1 scroll hover:text-black transition-all animate-pulse cursor-pointer'
        >
          <Up />
          <span className='font-secondary'>Home</span>
          <hr className='h-6 border-current border-l' />
        </a>
      </div>
    </div>
  )
}

export default Footer
