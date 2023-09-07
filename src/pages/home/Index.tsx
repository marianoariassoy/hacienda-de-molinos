import Layout from '../../layout/Layout'
import Habitaciones from './Habitaciones'
import Home from './Home'
import Nosotros from './Nosotros'
import Restaurant from './Restaurant'
import Servicios from './Servicios'
import Ubicacion from './Ubicacion'
import Contacto from './Contacto'

const Index = () => {
  return (
    <Layout>
      <Home />
      <Nosotros />
      <Habitaciones />
      <Servicios />
      <Restaurant />
      <Ubicacion />
      <Contacto />
    </Layout>
  )
}

export default Index
