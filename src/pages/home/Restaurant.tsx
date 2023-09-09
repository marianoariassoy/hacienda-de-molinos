import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'
import { useDataContext } from '../../context/useDataContext'
import { textsRestaurant } from '../../data/data'

const Restaurant = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/home`) as {
    data: Array<{ id: number; image: string }> | null
    loading: boolean
  }

  return (
    <section
      className='text-white h-screen relative'
      id='restaurant'
    >
      <div className='absolute z-20 bottom-24 right-0 max-w-xl px-6 lg:px-12'>
        <div className='text-center mb-8'>
          <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsRestaurant[lan].subtitle}</h2>
          <h1 className='font-special text-8xl text-primary leading-8'>{textsRestaurant[lan].title}</h1>
        </div>
        <div className='text-wrap'>
          En Molinos podrá volver a disfrutar las recetas y los sabores de siempre, recetas de campo, elaboradas con
          productos de la región, con la personalidad de la cocina de autor y la autenticidad de las cocineras de la
          Hacienda. En la carta de vinos, seleccionamos las mejores etiquetas de los Valles Calchaquíes.
          <br />
          <br />
          La propuesta gastronómica incluye comida regional, platos con ingredientes andinos, recetas clásicas, y la
          cocina del mundo. Las empanadas y el pan de la Hacienda de Molinos se elaboran en el horno de barro, como
          solía hacerse en la época colonial.
        </div>
      </div>
      <div className='absolute z-20 top-1/4 lg:top-auto lg:bottom-24 text-vertical left-0 px-6 lg:px-12 font-secondary'>
        {textsRestaurant[lan].image}
      </div>
      <div className='absolute w-full h-full bg-black bg-opacity-50 z-10'></div>
      <div className='slider-container h-full relative'>{!loading && <Slider data={data} />}</div>
    </section>
  )
}

export default Restaurant
