import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'
import { useDataContext } from '../../context/useDataContext'
import { textsRestaurant } from '../../data/data'
import Loader from '../../components/Loader'
import { useInView } from 'react-intersection-observer'

const Restaurant = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`) as {
    data: Array<{ id: number; title: string; text: string }> | null
    loading: boolean
  }
  const { data: dataImages, loading: loadingImages } = useFetch(`/fotos-restaurant`) as {
    data: Array<{ id: number; image: string }> | null
    loading: boolean
  }
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  return (
    <section
      className='text-white h-screen relative'
      id='restaurant'
    >
      <div
        className={`absolute z-20 bottom-24 right-0 max-w-xl px-6 lg:px-12 animation-fade-in ${
          inView ? 'visible' : ''
        }`}
        ref={ref}
      >
        <div className='text-center mb-2'>
          <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsRestaurant[lan].subtitle}</h2>
          <div className='flex justify-center'>
            {lan === 'ES' && <img src='/images/title2-es.svg' />}
            {lan === 'EN' && <img src='/images/title2-en.svg' />}
            {lan === 'FR' && <img src='/images/title2-fr.svg' />}
            {lan === 'POR' && <img src='/images/title2-por.svg' />}
          </div>
        </div>
        <div className='text-wrap whitespace-pre-wrap'>{!loading && data[1].text}</div>
      </div>
      <div className='absolute z-20 top-20 lg:top-auto lg:bottom-24 text-vertical left-0 px-6 lg:px-12 font-secondary'>
        / {!loading && data[1].title}
      </div>
      <div className='absolute w-full h-full bg-black bg-opacity-50 z-10'></div>
      <div className='slider-container h-full relative'>
        {loadingImages ? <Loader /> : <Slider data={dataImages} />}
      </div>
    </section>
  )
}

export default Restaurant
