import { Whatsapp } from '../icons/icons'

const WaComponent = () => {
  return (
    <a
      href='https://wa.me/5493875040576'
      target='_blank'
      rel='noreferrer'
      className='fixed z-20 bottom-8 text-white right-8 drop-shadow hover:rotate-12 transition-all duration-300 hover:text-white'
    >
      <Whatsapp />
    </a>
  )
}

export default WaComponent
