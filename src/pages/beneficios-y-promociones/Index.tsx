import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { HeadProvider, Title } from 'react-head'
import WaComponent from '../../components/WaComponent'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/beneficios/${lan}`) as {
    data: Array<{ id: number; title: string; text: string; image: string }> | null
    loading: boolean
  }

  useEffect(() => {
    const header = document.querySelector('header')
    header?.classList.add('text-tertiary')
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='text-tertiary fade-in'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 lg:px-12 pt-52 pb-24'>
          <h1 className='text-4xl lg:text-5xl font-secondary-semibold mb-8 lg:mb-12 text-primary w-1/2 fade-in-delay'>
            {lan === 'ES' && 'Benficios y Promociones'}
            {lan === 'EN' && 'Benefits and Promotions'}
            {lan === 'FR' && 'Avantages et promotions'}
            {lan === 'POR' && 'Benefícios e promoções'}
          </h1>

          {loading ? (
            <Loader />
          ) : (
            data.map(({ id, title, text, image }) => (
              <article
                className='flex flex-col lg:flex-row gap-y-4 gap-x-12 mb-12 fade-in-delay-2'
                key={id}
              >
                <div className='col lg:w-[33%]'>
                  <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover aspect-video'
                  />
                </div>
                <div className='col lg:w-[66%]'>
                  <h2 className='font-secondary-semibold text-tertiary mb-4 text-3xl'>{title}</h2>
                  <p className='text-wrap text-sm whitespace-pre-wrap'>{text}</p>
                </div>
              </article>
            ))
          )}
        </div>

        <WaComponent />
      </section>
      <HeadProvider>
        <Title>Hacienda de Molinos Beneficios y Promociones</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
