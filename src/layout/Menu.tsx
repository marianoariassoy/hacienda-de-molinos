import { menu } from '../data/data'
import { Link } from 'wouter'
import Languages from './Languages'
import Social from './Social'

const Menu = () => {
  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section
      className='h-full w-full text-center grid content-center'
      onClick={closeMenu}
    >
      <div className='flex flex-col gap-y-12 font-secondary-semibold'>
        <nav>
          <ul className='flex flex-col gap-y-4 text-2xl'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={` `}>
                  <a className='hover-underline-animation selected'>{item.title}</a>
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
