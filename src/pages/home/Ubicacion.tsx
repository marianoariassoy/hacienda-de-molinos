import { useState } from 'react'
import { useDataContext } from '../../context/useDataContext'
import { textsUbicacion, textsRuta } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import { useInView } from 'react-intersection-observer'

const Ubicacion = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`) as {
    data: Array<{ id: number; title: string; text: string }> | null
    loading: boolean
  }

  const [showUbicacion, setShowUbicacion] = useState(true)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <>
      <section
        className={`fade-in bg-tertiary text-white ${showUbicacion ? '' : 'hidden'}`}
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
              <div className='flex justify-center'>
                {lan === 'ES' && <h1 className='font-special text-8xl text-primary'>{textsUbicacion[lan].title}</h1>}
                {lan === 'EN' && <h1 className='font-special text-8xl text-primary'>{textsUbicacion[lan].title}</h1>}
                {lan === 'FR' && (
                  <img
                    src='/images/title-ubicacion-fr.svg'
                    className='mb-2'
                  />
                )}
                {lan === 'POR' && (
                  <img
                    src='/images/title-ubicacion-por.svg'
                    className='mb-2'
                  />
                )}
              </div>
            </div>

            <hr className='w-full border-b border-white mb-8 mt-2' />

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

              <button
                className='p-4 text-center bg-primary text-cuatertiary hover:text-white hover:bg-black transition-all uppercase'
                onClick={() => setShowUbicacion(!showUbicacion)}
              >
                {textsUbicacion[lan].image}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`fade-in bg-black text-white fade-in bg-ruta-del-vino bg-cover relative ${
          showUbicacion ? 'hidden' : ''
        }`}
        id='ruta-del-vino'
      >
        <div className='m-auto max-w-7xl px-6 lg:px-12 pb-24 pt-40 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='col fade-in-delay-2'>
            <img
              src='/images/mapa-ruta.svg'
              alt='Mapa de la ruta del vino'
              className='w-full'
            />
          </div>
          <div className='col lg:pl-12 fade-in-delay'>
            <div className='text-center mb-12'>
              <h2 className='font-secondary-semibold text-2xl lg:text-3xl uppercase'>{textsRuta[lan].image}</h2>
              <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsRuta[lan].subtitle}</h2>
              <h1 className='font-special text-8xl leading-8'>{textsRuta[lan].title}</h1>
            </div>
            <p className='text-wrap mb-12 whitespace-pre-wrap'>{!loading && data[4].text}</p>
            <div className='grid grid-cols-2 gap-x-12 font-secondary'>
              <a
                href='https://goo.gl/maps/e5b2XHjqCtSeGzry9'
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 text-center bg-white text-cuatertiary hover:text-white hover:bg-black transition-all'
              >
                {lan === 'ES' && 'UBICACIÓN HACIENDA'}
                {lan === 'EN' && 'LOCATION HACIENDA'}
                {lan === 'FR' && 'EMPLACEMENT HACIENDA'}
                {lan === 'POR' && 'LOCALIZAÇÃO HACIENDA'}
              </a>
            </div>
          </div>
        </div>
        <div className='absolute z-20 top-20 lg:top-1/4 text-vertical left-0 px-6 lg:px-12 font-secondary'>
          / {!loading && data[4].title}
        </div>
      </section>
    </>
  )
}

export default Ubicacion
