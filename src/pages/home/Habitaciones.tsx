import { useDataContext } from '../../context/useDataContext'
import { textsHabitaciones } from '../../data/data'

const Habitaciones = () => {
  const { lan } = useDataContext()

  return (
    <section
      className='bg-tertiary text-white'
      id='habitaciones'
    >
      <div className='m-auto max-w-7xl px-6 py-14'>
        <div className='text-center'>
          <h2 className='font-secondary-semibold text-4xl uppercase'>{textsHabitaciones[lan].subtitle}</h2>
          <h1 className='font-special text-8xl text-primary leading-8'>{textsHabitaciones[lan].title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Habitaciones
