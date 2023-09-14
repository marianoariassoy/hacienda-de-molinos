import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { HeadProvider, Title } from 'react-head'
import WaComponent from '../../components/WaComponent'
import { textsVivi } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/vivi/${lan}`) as {
    data: Array<{ id: number; title: string; text: string; image: string }> | null
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
        className='bg-cuatertiary text-white fade-in'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 lg:px-12 pt-56 lg:pt-64 pb-24 flex flex-col lg:flex-row gap-12 items-center'>
          <div className='col lg:w-[33%]'>
            <div className='text-center'>
              <h2 className='font-secondary-semibold text-primary text-4xl lg:text-5xl uppercase'>
                {textsVivi[lan].subtitle}
              </h2>
              <h1 className='font-special text-8xl leading-8'>{textsVivi[lan].title}</h1>
            </div>
          </div>
          <div className='col lg:w-[66%]'>
            {loading ? (
              <Loader />
            ) : (
              data.map(({ id, title, text, image }) => (
                <article
                  className='flex flex-col lg:flex-row gap-y-4 gap-x-12 mb-12'
                  key={id}
                >
                  <div className='col lg:w-[33%]'>
                    <img
                      src={image}
                      alt={title}
                      className='w-full h-full object-cover aspect-video lg:aspect-square'
                    />
                  </div>
                  <div className='col lg:w-[66%]'>
                    <h2 className='font-secondary-semibold mb-4 text-3xl'>{title}</h2>
                    <p className='text-wrap text-sm whitespace-pre-wrap'>{text}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
        <div className='text-primary'>
          <WaComponent />
        </div>
      </section>
      <HeadProvider>
        <Title>Hacienda de Molinos Viví Molinos</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
