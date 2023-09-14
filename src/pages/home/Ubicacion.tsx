import { useDataContext } from '../../context/useDataContext'
import { textsUbicacion } from '../../data/data'
import { Link } from 'wouter'
import useFetch from '../../hooks/useFetch'
import { useInView } from 'react-intersection-observer'

const Ubicacion = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`) as {
    data: Array<{ id: number; title: string; text: string }> | null
    loading: boolean
  }
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <section
      className='bg-tertiary text-white'
      id='ubicacion'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div
          className={`col animation-fade-in ${inView2 ? 'visible' : ''}`}
          ref={ref2}
        >
          <img
            src='/images/ubicacion.svg'
            alt='Mapa de la ubicación de la Hacienda de Molinos'
            className='w-full'
          />
        </div>
        <div
          className={`col lg:pl-12 animation-fade-in ${inView ? 'visible' : ''}`}
          ref={ref}
        >
          <div className='text-center'>
            <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsUbicacion[lan].subtitle}</h2>
            <h1 className='font-special text-8xl text-primary leading-8'>{textsUbicacion[lan].title}</h1>
          </div>

          <hr className='w-full border-b border-white my-8' />

          <p className='text-wrap mb-8 whitespace-pre-wrap'>{!loading && data[2].text}</p>
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
