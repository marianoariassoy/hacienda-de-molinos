import { useDataContext } from '../../context/useDataContext'
import { textsHabitaciones } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'

const Habitaciones = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/home`) as {
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
              <article>
                <p className='text-wrap'>
                  Las 18 habitaciones de la Hacienda de Molinos están repartidas en las categorías superiores y
                  estándar. Las mismas cuentan con calefacción y baño en suite, equipado con bañera, ducha y secador de
                  pelo.
                  <br />
                  <br />
                  Al igual que los dormitorios del SXVIII, las habitaciones del hotel son amplias, los techos son de
                  caña y los tirantes, apenas canteados, están a la vista.
                </p>
              </article>
              <article>
                <h2 className='text-primary font-secondary text-xl mb-4 border-bottom-primary'>
                  HABITACIONES ESTÁNDAR
                </h2>
                <p className='text-wrap'>
                  Las habitaciones estándar están distribuidas en el patio del molle y en el segundo solar de la
                  Hacienda. Desde la ventana, se puede disfrutar el río Calchaquí y los cerros pardos rojizos que se
                  imponen en el horizonte.
                </p>
              </article>
              <article>
                <h2 className='text-primary font-secondary text-xl mb-4 border-bottom-primary'>
                  HABITACIONES SUPERIORES
                </h2>
                <p className='text-wrap'>
                  En las superiores, la rusticidad de los materiales contrasta con los detalles de diseño. El lujo está
                  dado por el buen gusto de sus muebles, elaborados por artesanos de la región, exclusivamente para el
                  hotel.
                </p>
              </article>
            </div>
          </div>
          <div className='col lg:pl-12'>
            <div className='aspect-square lg:aspect-[4/5] slider-container relative'>
              {!loading && <Slider data={data} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habitaciones
