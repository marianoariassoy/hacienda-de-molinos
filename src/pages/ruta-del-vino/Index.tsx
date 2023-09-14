import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { textsRuta } from '../../data/data'
import { HeadProvider, Title } from 'react-head'
import WaComponent from '../../components/WaComponent'
import useFetch from '../../hooks/useFetch'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`) as {
    data: Array<{ id: number; title: string; text: string }> | null
    loading: boolean
  }

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
        <div className='absolute z-20 top-1/4 text-vertical left-0 px-6 lg:px-12 font-secondary'>
          / {!loading && data[4].title}
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
