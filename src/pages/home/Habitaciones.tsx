import { useDataContext } from '../../context/useDataContext'
import { textsHabitaciones } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'
import Loader from '../../components/Loader'
import { useInView } from 'react-intersection-observer'

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
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <section
      className='bg-tertiary text-white'
      id='habitaciones'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div
            className={`col animation-fade-in ${inView2 ? 'visible' : ''}`}
            ref={ref2}
          >
            <div className='text-center mb-2'>
              <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>
                {textsHabitaciones[lan].subtitle}
              </h2>
              <div className='flex justify-center'>
                {lan === 'FR' ? (
                  <img
                    src='/images/title-habitaciones-fr.svg'
                    className='mb-2'
                  />
                ) : (
                  <h1 className='font-special text-8xl text-primary'>{textsHabitaciones[lan].title}</h1>
                )}
              </div>
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
          <div
            className={`col lg:pl-12 animation-fade-in ${inView ? 'visible' : ''}`}
            ref={ref}
          >
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
