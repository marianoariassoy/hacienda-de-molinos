import { useDataContext } from '../../context/useDataContext'
import { textsNosotros } from '../../data/data'

const Nosotros = () => {
  const { lan } = useDataContext()

  return (
    <section
      className='bg-primary text-white'
      id='nosotros'
    >
      <div className='relative m-auto max-w-6xl px-6 py-14 flex flex-col lg:flex-row items-center gap-8'>
        <div className='absolute left-1/4 top-32 font-special text-8xl leading-10'>
          <div>
            {textsNosotros[lan].title} <span className='block ml-12'> {textsNosotros[lan].subtitle} </span>
          </div>
        </div>
        <div className='lg:w-[40%] flex items-end gap-x-3 '>
          <div className='text-vertical font-secondary'>{textsNosotros[lan].image}</div>
          <div>
            <img
              src='/images/nosotros.webp'
              alt='Imagen de la puerta de entrada'
              className='aspect-[5/7] lg:aspect-[9/16] object-cover block w-full h-full'
            />
          </div>
        </div>
        <div className='lg:w-[60%] lg:pt-24'>
          <p className='text-wrap'>
            La Hacienda de Molinos es la posta obligada en la vuelta a los Valles Calchaquíes.
            <br />
            <br />
            La antigua casona del S XVIII, que fuera residencia del último gobernador de Salta por mandato del Rey, ha
            sido restaurada para brindar el confort de un hotel del SXXI, manteniendo la esencia y rasgos de la época
            colonial.
            <br />
            <br />
            El patio del molle, los gruesos muros de adobe, las rejas de hierro y los techos, construidos con algarrobo
            y cañizo, son sólo algunos encantos del hotel, que imponen su carácter remontándonos al pasado.
            <br />
            <br />
            Molinos formó parte del Camino del Inca, fue testigo del encuentro de razas, de pueblos, de raíces y de
            sentidos. Hoy sus callecitas, iluminadas por faroles, acumulan en silencio parte de esa historia.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
