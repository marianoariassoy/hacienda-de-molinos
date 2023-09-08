import { Whatsapp } from '../icons/icons'

const WaComponent = () => {
  return (
    <a
      href='https://wa.me/'
      target='_blank'
      rel='noreferrer'
      className='fixed z-20 bottom-8 right-6 lg:right-12 drop-shadow hover:rotate-12 hover:text-black transition-all duration-300 text-tartiary'
    >
      <Whatsapp />
    </a>
  )
}

export default WaComponent
