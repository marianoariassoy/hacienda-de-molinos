import { Whatsapp } from '../icons/icons'

const WaComponent = () => {
  return (
    <a
      href='https://wa.me/5493876848090'
      target='_blank'
      rel='noreferrer'
      className='fixed z-20 bottom-8 right-6 lg:right-12 drop-shadow hover:rotate-12 hover:text-black transition-all duration-300 text-tartiary fade-in-delay-2'
    >
      <Whatsapp />
    </a>
  )
}

export default WaComponent
