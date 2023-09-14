import Form from '../../components/Form'
import { useDataContext } from '../../context/useDataContext'

const Contacto = () => {
  const { lan } = useDataContext()

  return (
    <section
      className='text-tertiary'
      id='contacto'
    >
      <div className='m-auto max-w-7xl px-6 lg:px-12 py-40 flex flex-col lg:flex-row gap-12'>
        <div className='col lg:w-[60%] animation-fade-in'>
          <h1 className='text-4xl lg:text-5xl font-secondary-semibold mb-12'>
            {lan === 'ES' && 'CONTACTO'}
            {lan === 'EN' && 'CONTACT'}
            {lan === 'FR' && 'CONTACT'}
            {lan === 'POR' && 'CONTATO'}
          </h1>
          <Form lan={lan} />
        </div>
        <div className='col lg:w-[40%]'>
          <img
            src='/images/contacto.webp'
            alt='Imagen de la fachada del edificio'
            className='animation-scale'
          />
          {lan === 'ES' && (
            <div className='flex flex-col mt-12'>
              <span>Dirección: Abraham Cornejo s/n, Molinos, Salta, Argentina</span>
              <span>Teléfonos: 54 3868 494094 | 54 3868 494944</span>
              <span>Email: info@haciendademolinos.com.ar </span>
            </div>
          )}
          {lan === 'EN' && (
            <div className='flex flex-col mt-12'>
              <span>Address: Abraham Cornejo s/n, Molinos, Salta, Argentina</span>
              <span>Phones: 54 3868 494094 | 54 3868 494944</span>
              <span>Email: info@haciendademolinos.com.ar </span>
            </div>
          )}
          {lan === 'FR' && (
            <div className='flex flex-col mt-12'>
              <span>Adresse: Abraham Cornejo s/n, Molinos, Salta, Argentina</span>
              <span>Téléphones: 54 3868 494094 | 54 3868 494944</span>
              <span>Email: info@haciendademolinos.com.ar </span>
            </div>
          )}
          {lan === 'POR' && (
            <div className='flex flex-col mt-12'>
              <span>Endereço: Abraham Cornejo s/n, Molinos, Salta, Argentina</span>
              <span>Telefones: 54 3868 494094 | 54 3868 494944</span>
              <span>Email: info@haciendademolinos.com.ar </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacto
