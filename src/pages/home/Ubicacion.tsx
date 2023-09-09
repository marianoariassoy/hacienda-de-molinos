import { useDataContext } from '../../context/useDataContext'
import { textsUbicacion } from '../../data/data'
import { Link } from 'wouter'

const Ubicacion = () => {
  const { lan } = useDataContext()

  return (
    <section
      className='bg-tertiary text-white'
      id='ubicacion'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='col'>
          <img
            src='/images/ubicacion.svg'
            alt='Mapa de la ubicación de la Hacienda de Molinos'
            className='w-full'
          />
        </div>
        <div className='col lg:pl-12'>
          <div className='text-center'>
            <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsUbicacion[lan].subtitle}</h2>
            <h1 className='font-special text-8xl text-primary leading-8'>{textsUbicacion[lan].title}</h1>
          </div>

          <hr className='w-full border-b border-white my-8' />

          <p className='text-wrap mb-8'>
            La Hacienda de Molinos Hotel se encuentra a orillas del río Calchaquí, en el pueblo de Molinos, al costado
            de la Ruta Nac. 40, en el centro de los Valles Calchaquíes, en la Provincia de Salta, Argentina.
            <br />
            <br />
            En Salta, conviven durante todo el año, una gran diversidad de climas y paisajes. En menos de tres horas,
            uno se traslada de la ciudad al desierto, del clima cálido al frío soleado de las montañas, de la región de
            los valles verdes, pasando por la selva subtropical para llegar a la puna, en la Cordillera de los Andes.
            <br />
            <br />
            Molinos se encuentra a 2.150 m.s.n.m. El clima en es seco, árido andino y se caracteriza por tener una gran
            amplitud térmica. Los días son soleados y rara vez está nublado. Las precipitaciones son escasas y no
            superan los 200 mm. anuales. La temperatura media anual es de 12°C. La máxima 25º en diciembre y la mínima
            de 9,4º en julio.
          </p>
          <div className='grid grid-cols-2 gap-x-12 font-secondary'>
            <a
              href='https://goo.gl/maps/e5b2XHjqCtSeGzry9'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 text-center bg-primary text-cuatertiary hover:text-white hover:bg-black transition-all'
            >
              GOOGLE MAPS
            </a>
            <Link href='ruta-del-vino'>
              <a className='p-4 text-center bg-primary text-cuatertiary hover:text-white hover:bg-black transition-all uppercase'>
                {textsUbicacion[lan].image}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
