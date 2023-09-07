import { menu } from '../data/data'
import { Link } from 'wouter'
import Languages from './Languages'
import Social from './Social'
import { useDataContext } from '../context/useDataContext'

const Menu = () => {
  const { lan } = useDataContext()

  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='h-full w-full text-center grid content-center '>
      <div className='flex flex-col gap-y-12 font-secondary-semibold'>
        <nav onClick={closeMenu}>
          <ul className='flex flex-col gap-y-4 text-2xl'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={` `}>
                  <a className='hover-underline-animation selected'>
                    {lan === 'ES' && item.title}
                    {lan === 'EN' && item.title_en}
                    {lan === 'FR' && item.title_fr}
                    {lan === 'POR' && item.title_por}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex gap-x-6 items-center justify-center'>
          <Languages />
          <Social />
        </div>
      </div>
    </section>
  )
}

export default Menu
