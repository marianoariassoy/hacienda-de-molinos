import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Habitaciones from './Habitaciones'
import Home from './Home'
import Nosotros from './Nosotros'
import Restaurant from './Restaurant'
import Servicios from './Servicios'
import Ubicacion from './Ubicacion'
import Contacto from './Contacto'

const Index = () => {
  const [location] = useLocation()

  useEffect(() => {
    const header = document.querySelector('header')
    header?.classList.add('text-home')
  }, [])

  useEffect(() => {
    if (
      location === '/habitaciones' ||
      location === '/servicios' ||
      location === '/restaurant' ||
      location === '/ubicacion' ||
      location === '/contacto'
    ) {
      const target = location.replace('/', '#') as string
      const targetElement = document.querySelector(`${target}`) as HTMLElement
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    } else return
  }, [location])

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
