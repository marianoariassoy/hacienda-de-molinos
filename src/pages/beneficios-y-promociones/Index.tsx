import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { HeadProvider, Title } from 'react-head'
import WaComponent from '../../components/WaComponent'

const Index = () => {
  const { lan } = useDataContext()

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
          <h1 className='text-4xl lg:text-5xl font-secondary-semibold mb-8 lg:mb-12 text-primary w-1/2'>
            {lan === 'ES' && 'Benficios y Promociones'}
            {lan === 'EN' && 'Benefits and Promotions'}
            {lan === 'FR' && 'Avantages et promotions'}
            {lan === 'POR' && 'Benefícios e promoções'}
          </h1>

          <article className='flex flex-col lg:flex-row gap-y-4 gap-x-12 mb-12'>
            <div className='col lg:w-[33%]'>
              <img
                src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
                className='w-full h-full object-cover aspect-video'
              />
            </div>
            <div className='col lg:w-[66%]'>
              <h2 className='font-secondary-semibold text-tertiary mb-4 text-3xl'>Promo 2x1</h2>
              <p className='text-wrap text-sm'>
                En Molinos podrá volver a disfrutar las recetas y los sabores de siempre, recetas de campo, elaboradas
                con productos de la región, con la personalidad de la cocina de autor y la autenticidad de las cocineras
                de la Hacienda. En la carta de vinos, seleccionamos las mejores etiquetas de los Valles Calchaquíes. La
                propuesta gastronómica incluye comida regional, platos con ingredientes andinos, recetas clásicas, y la
                cocina del mundo. Las empanadas y el pan de la Hacienda de Molinos se elaboran en el horno de barro,
                como solía hacerse en la época colonial.
              </p>
            </div>
          </article>
          <article className='flex flex-col lg:flex-row gap-y-4 gap-x-12 mb-12'>
            <div className='col lg:w-[33%]'>
              <img
                src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
                className='w-full h-full object-cover aspect-video'
              />
            </div>
            <div className='col lg:w-[66%]'>
              <h2 className='font-secondary-semibold text-tertiary mb-4 text-3xl'>Promo 2x1</h2>
              <p className='text-wrap text-sm'>
                En Molinos podrá volver a disfrutar las recetas y los sabores de siempre, recetas de campo, elaboradas
                con productos de la región, con la personalidad de la cocina de autor y la autenticidad de las cocineras
                de la Hacienda. En la carta de vinos, seleccionamos las mejores etiquetas de los Valles Calchaquíes. La
                propuesta gastronómica incluye comida regional, platos con ingredientes andinos, recetas clásicas, y la
                cocina del mundo. Las empanadas y el pan de la Hacienda de Molinos se elaboran en el horno de barro,
                como solía hacerse en la época colonial.
              </p>
            </div>
          </article>
          <article className='flex flex-col lg:flex-row gap-y-4 gap-x-12 mb-12'>
            <div className='col lg:w-[33%]'>
              <img
                src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
                className='w-full h-full object-cover aspect-video'
              />
            </div>
            <div className='col lg:w-[66%]'>
              <h2 className='font-secondary-semibold text-tertiary mb-4 text-3xl'>Promo 2x1</h2>
              <p className='text-wrap text-sm'>
                En Molinos podrá volver a disfrutar las recetas y los sabores de siempre, recetas de campo, elaboradas
                con productos de la región, con la personalidad de la cocina de autor y la autenticidad de las cocineras
                de la Hacienda. En la carta de vinos, seleccionamos las mejores etiquetas de los Valles Calchaquíes. La
                propuesta gastronómica incluye comida regional, platos con ingredientes andinos, recetas clásicas, y la
                cocina del mundo. Las empanadas y el pan de la Hacienda de Molinos se elaboran en el horno de barro,
                como solía hacerse en la época colonial.
              </p>
            </div>
          </article>
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
