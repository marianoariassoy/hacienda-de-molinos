import { useDataContext } from '../../context/useDataContext'
import { textsNosotros } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import { useInView } from 'react-intersection-observer'

const Nosotros = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`) as {
    data: Array<{ id: number; title: string; text: string }> | null
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
      className='bg-primary text-white'
      id='nosotros'
    >
      <div className='relative m-auto max-w-7xl px-6 lg:px-12 py-14 flex flex-col lg:flex-row items-center gap-8'>
        <div className='absolute left-1/4 top-32 font-special text-8xl leading-10 z-40 animation-scale'>
          <div
            className={`animation-fade-in ${inView2 ? 'visible' : ''}`}
            ref={ref2}
          >
            {textsNosotros[lan].title} <span className='block ml-12'> {textsNosotros[lan].subtitle} </span>
          </div>
        </div>
        <div
          className={`col lg:w-[40%] flex items-end gap-x-3 animation-fade-in ${inView ? 'visible' : ''} `}
          ref={ref}
        >
          <div className='text-vertical font-secondary'>/ {!loading && data[0].title}</div>
          <div>
            <img
              src='/images/nosotros.webp'
              alt='Imagen de la puerta de entrada'
              className='aspect-[5/7] lg:aspect-[9/16] object-cover block w-full h-full'
            />
          </div>
        </div>
        <div
          className={`animation-fade-in ${inView ? 'visible' : ''} col lg:w-[60%] lg:pt-24`}
          ref={ref}
        >
          <p className='text-wrap whitespace-pre-wrap'>{!loading && data[0].text}</p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
