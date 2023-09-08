import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { textsHistoria } from '../../data/data'
import { HeadProvider, Title } from 'react-head'
import WaComponent from '../../components/WaComponent'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement
    header.classList.add('text-home')
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='bg-primary text-white fade-in'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 pt-52 pb-32'>
          <div className='text-center mb-16'>
            <h2 className='font-secondary-semibold text-4xl lg:text-5xl uppercase'>{textsHistoria[lan].subtitle}</h2>
            <h1 className='font-special text-8xl leading-8'>{textsHistoria[lan].title}</h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='col'>
              <p className='text-wrap'>
                Habitaron estas tierras los pueblos de Tiahuanaco, que construyeron sus regadíos y honraron a sus dioses
                con la Puerta del Sol, en Bolivia. En la región, los Incas o quechuas pactaron su señorío con los
                pueblos de los Valles Calchaquíes. El camino del Inca, un camino militar y de transmisión cultural,
                bajaba de la Puna por Potrero de Payogasta, al norte de Calchaquí, y se detenía en Molinos para llegar a
                Chile por Luracatao, a Catamarca por Santa María y a Tucumán por Tafí.
                <br />
                <br />
                El valle de Molinos es de los lugares prehispánicos que guardan, en su silencio y en sus montañas, parte
                de la historia de nuestro país; y se vinculan con los orígenes de la conquista y de la colonización
                española en el territorio argentino.
                <br />
                <br />
                La Hacienda de Molinos fue la encomienda que recibió el Gral. Diego Diez Gómez en la segunda mitad del S
                XVII por los servicios brindados a España. Posteriormente, fue residencia de su hija, Doña Magdalena
                Diez Gómez y su yerno, el Gral. Domingo de Isasi Isasmendi. Al fallecer Isasi Isasmendi, en 1767 hereda
                la hacienda el hijo mayor, Don Nicolás Severo de Isasmendi y Echalar, último gobernador realista de
                Salta.
                <br />
                <br />
                A diferencia de otros pueblos de los Valles Calchaquíes - que tienen un origen religioso; y se fueron
                formando en torno de la parroquia - Molinos se formó, creció y se desarrolló, en torno a la Hacienda
                Calchaquì de San Pedro Nolasco de los Molinos, y dependiendo de ella. Es por ello que el trazado del
                pueblo no es el típico colonial, donde la iglesia está ubicada frente a plaza principal, las manzanas
                son recuadradas y las callecitas angostas.
                <br />
                <br />
                En Molinos, la parte antigua del pueblo se encuentra cercana a la Hacienda de Molinos. La iglesia,
                consagrada Monumento Histórico Nacional, está justo enfrente del hotel.
              </p>
            </div>
            <div className='col'>
              <div className='flex justify-end gap-x-4'>
                <img
                  src='/images/historia.webp'
                  alt='Imagen de la fachada del edificio'
                  className='w-full'
                />
                <div className='text-vertical font-secondary'>{textsHistoria[lan].image}</div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-tertiary'>
          <WaComponent />
        </div>
      </section>
      <HeadProvider>
        <Title>Hacienda de Molinos Historia</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
