import { Instagram, Booking, Facebook, TripAdvisor } from '../icons/icons'

const Social = () => {
  return (
    <nav className='flex gap-x-3 items-center [&>a:hover]:opacity-70 [&>a]:transition-all'>
      <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noreferrer'
      >
        <Instagram />
      </a>
      <a
        href='https://www.booking.com/'
        target='_blank'
        rel='noreferrer'
      >
        <Booking />
      </a>
      <a
        href='https://www.facebook.com/'
        target='_blank'
        rel='noreferrer'
      >
        <Facebook />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
      >
        <TripAdvisor />
      </a>
    </nav>
  )
}

export default Social
