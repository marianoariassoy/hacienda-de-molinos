import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { textsRuta } from '../../data/data'
import { HeadProvider, Title } from 'react-head'
import WaComponent from '../../components/WaComponent'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    const header = document.querySelector('header')
    header?.classList.add('text-home')
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='bg-black text-white fade-in bg-ruta-del-vino bg-cover relative'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 pb-24 pt-40 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='col'>
            <img
              src='/images/mapa-ruta.svg'
              alt='Mapa de la ruta del vino'
              className='w-full'
            />
          </div>
          <div className='col lg:pl-12'>
            <div className='text-center mb-12'>
              <h2 className='font-secondary-semibold text-2xl lg:text-3xl uppercase'>{textsRuta[lan].image}</h2>
              <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsRuta[lan].subtitle}</h2>
              <h1 className='font-special text-8xl leading-8'>{textsRuta[lan].title}</h1>
            </div>
            <p className='text-wrap mb-12'>
              Unos 200 km recorren la Ruta del vino en la provincia de Salta. Una experiencia con una enorme riqueza
              cultural a través de la cual se puede degustar las cualidades de los famosos “vinos de altura”, viñedos
              que están situados, entre los 1600 metros, sobre el nivel del mar en Cafayate, y hasta más de 2800 msn en
              las cercanías de Molinos, lo que le concede al vino un gran carácter, fuerte personalidad, altisima
              calidad en fragancias, colores y sabores únicos.
              <br />
              <br />
              Hacienda de Molinos ofrece un punto de ubicación núcleo para disfrutar las principales bodegas de esta
              Ruta vitivinicola.
            </p>
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
        <div className='absolute z-20 top-1/4 text-vertical left-0 px-6 lg:px-12 font-secondary'>
          {lan === 'ES' && '/ Vinos de altura'}
          {lan === 'EN' && '/ High altitude wines'}
          {lan === 'FR' && '/ Vins de haute altitude'}
          {lan === 'POR' && '/ Vinhos de altitude'}
        </div>

        <div className='text-tertiary'>
          <WaComponent />
        </div>
      </section>
      <HeadProvider>
        <Title>Hacienda de Molinos Ruta del Vino</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
