import { useDataContext } from '../../context/useDataContext'
import { textsServicios } from '../../data/data'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/Slider'

const Servicios = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/home`) as {
    data: Array<{ id: number; image: string }> | null
    loading: boolean
  }

  return (
    <section
      className='text-cuaternary'
      id='servicios'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40 flex flex-col lg:flex-row gap-12'>
        <div className='col lg:w-[40%]'>
          <div className='text-center mb-16'>
            <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsServicios[lan].subtitle}</h2>
            <h1 className='font-special text-8xl text-primary leading-8'>{textsServicios[lan].title}</h1>
          </div>
          <div className='flex flex-col gap-y-4 text-primary font-secondary-thin text-xl'>
            <article className='border-bottom-primary'>Abierto todo el año</article>
            <article className='border-bottom-primary'>Restaurante / Selecta carta de vinos</article>
            <article className='border-bottom-primary'>Habitaciones premium</article>
            <article className='border-bottom-primary'>Asesoramiento turístico</article>
            <article className='border-bottom-primary'>Pileta con solarium</article>
            <article className='border-bottom-primary'>Salón de usos múltiples para eventos</article>
            <article className='border-bottom-primary'>Conexión a Internet</article>
            <article className='border-bottom-primary'>Estacionamiento</article>
            <article className='border-bottom-primary'>Depósito de equipaje</article>
          </div>
        </div>
        <div className='col lg:w-[60%] relative'>
          <div className='absolute z-30 right-0 top-1/3 font-special text-[11rem] text-white'>molle</div>
          <div className='aspect-square slider-container relative'>{!loading && <Slider data={data} />}</div>
          <div className='font-secondary text-black mt-4'>{textsServicios[lan].image}</div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
