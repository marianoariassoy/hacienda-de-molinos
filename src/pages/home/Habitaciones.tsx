import { useDataContext } from '../../context/useDataContext'
import { textsHabitaciones } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'
import Loader from '../../components/Loader'

const Habitaciones = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/habitaciones/${lan}`) as {
    data: Array<{ id: number; title: string; text: string }> | null
    loading: boolean
  }
  const { data: dataImages, loading: loadingImages } = useFetch(`/fotos-habitaciones`) as {
    data: Array<{ id: number; image: string }> | null
    loading: boolean
  }

  return (
    <section
      className='bg-tertiary text-white'
      id='habitaciones'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='col'>
            <div className='text-center mb-16'>
              <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>
                {textsHabitaciones[lan].subtitle}
              </h2>
              <h1 className='font-special text-8xl text-primary leading-8'>{textsHabitaciones[lan].title}</h1>
            </div>
            <div className='flex flex-col gap-y-8'>
              {loading ? (
                <Loader />
              ) : (
                data.map(({ id, title, text }) => (
                  <article key={id}>
                    {title && (
                      <h2 className='text-primary font-secondary text-xl mb-4 border-bottom-primary'>{title}</h2>
                    )}
                    <p className='text-wrap whitespace-pre-wrap'>{text}</p>
                  </article>
                ))
              )}
            </div>
          </div>
          <div className='col lg:pl-12'>
            <div className='aspect-square lg:aspect-[4/5] slider-container relative'>
              {loadingImages ? <Loader /> : <Slider data={dataImages} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habitaciones
