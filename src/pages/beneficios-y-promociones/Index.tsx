import { useEffect } from 'react'
import Layout from '../../layout/Layout'

const Index = () => {
  useEffect(() => {
    const header = document.querySelector('header')
    header?.classList.add('text-tertiary')
  }, [])

  return (
    <Layout>
      <section
        className='text-tertiary'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 pt-64'>Beneficios</div>
      </section>
    </Layout>
  )
}

export default Index
