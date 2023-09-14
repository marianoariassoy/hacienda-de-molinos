import { useDataContext } from '../../context/useDataContext'
import { textsServicios } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'
import Loader from '../../components/Loader'

const Servicios = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/servicios/${lan}`) as {
    data: Array<{ id: number; title: string }> | null
    loading: boolean
  }
  const { data: dataImages, loading: loadingImages } = useFetch(`/fotos-servicios`) as {
    data: Array<{ id: number; image: string }> | null
    loading: boolean
  }

  return (
    <section
      className='text-cuaternary'
      id='servicios'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40 flex flex-col lg:flex-row gap-12'>
        <div className='col lg:w-[40%] animation-fade-in'>
          <div className='text-center mb-16'>
            <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsServicios[lan].subtitle}</h2>
            <h1 className='font-special text-8xl text-primary leading-8'>{textsServicios[lan].title}</h1>
          </div>
          <div
            className='flex flex-col gap-y-4 text-primary font-secondary-thin text-xl
            [&>article:last-child]:border-0'
          >
            {loading ? (
              <Loader />
            ) : (
              data.map(({ id, title }) => (
                <article
                  className='border-bottom-primary'
                  key={id}
                >
                  {title}
                </article>
              ))
            )}
          </div>
        </div>
        <div className='col lg:w-[60%] relative animation-scale'>
          <div className='absolute z-30 right-0 top-1/3 font-special text-[11rem] text-white'>molle</div>
          <div className='aspect-square slider-container relative '>
            {loadingImages ? <Loader /> : <Slider data={dataImages} />}
          </div>
          <div className='font-secondary text-black mt-4'>{textsServicios[lan].image}</div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
