import WaComponent from '../../components/WaComponent'
import useFetch from '../../hooks/useFetch'
import Slider from './Slider'
import { Down } from '../../icons/icons'
import { useDataContext } from '../../context/useDataContext'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}

const Home = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/home`) as DataProps

  return (
    <section
      className='relative h-screen overflow-hidden'
      id='home'
    >
      <div className='absolute w-full h-full bg-black bg-opacity-40 z-10'></div>
      {!loading && <Slider data={data} />}

      <div className='absolute w-full bottom-8 z-10 flex justify-center'>
        <a
          target='#nosotros'
          className='flex flex-col items-center gap-y-1 scroll hover:text-black transition-all text-white animate-pulse cursor-pointer'
        >
          <hr className='h-6 border-current border-l' />
          <span className='font-secondary'>
            {lan === 'ES' && 'Desliza'}
            {lan === 'EN' && 'Slide'}
            {lan === 'FR' && 'Glisse'}
            {lan === 'POR' && 'Deslizes'}
          </span>
          <Down />
        </a>
      </div>

      <WaComponent />
    </section>
  )
}

export default Home
