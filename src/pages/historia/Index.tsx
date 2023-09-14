import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { textsHistoria } from '../../data/data'
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
    const header = document.querySelector('header') as HTMLElement
    header.classList.add('text-home')
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='bg-primary text-white fade-in'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 lg:px-12 pt-52 pb-32'>
          <div className='text-center mb-12 lg:mb-16'>
            <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsHistoria[lan].subtitle}</h2>
            <h1 className='font-special text-8xl leading-8'>{textsHistoria[lan].title}</h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='col'>
              <p className='text-wrap whitespace-pre-wrap'>{!loading && data[3].text}</p>
            </div>
            <div className='col'>
              <div className='flex justify-end gap-x-4'>
                <img
                  src='/images/historia.webp'
                  alt='Imagen de la fachada del edificio'
                  className='w-full'
                />
                <div className='text-vertical font-secondary'>/ {!loading && data[3].title}</div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-tertiary'>
          <WaComponent />
        </div>
      </section>
      <HeadProvider>
        <Title>Hacienda de Molinos Historia</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
