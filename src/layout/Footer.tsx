import { Link } from 'wouter'
import { menu } from '../data/data'
import { Logo, Up, Line } from '../icons/icons'
import Languages from './Languages'
import Social from './Social'

const Footer = () => {
  return (
    <div className='px-6 lg:px-12 py-12 flex items-center text-white bg-tertiary'>
      <div className='flex-1 flex-grow'>
        <nav className='mb-8'>
          <ul className='flex flex-col [&>li>a:hover]:text-black transition-all'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={` `}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex flex-col gap-y-2'>
          <Languages />
          <Social />
        </div>
      </div>
      <div className='logo'>
        <Logo />
      </div>
      <div className='flex flex-1 flex-grow justify-end'>
        <a
          href='#home'
          className='flex flex-col items-center gap-y-1 scroll hover:text-black transition-all'
        >
          <Up />
          <span className='text-sm'>Home</span>
          <hr className='h-6 border-current border-l' />
        </a>
      </div>
    </div>
  )
}

export default Footer
