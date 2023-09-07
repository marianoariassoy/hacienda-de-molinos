import { useEffect } from 'react'
import Layout from '../../layout/Layout'

const Index = () => {
  useEffect(() => {
    const header = document.querySelector('header')
    header?.classList.add('text-home')
  }, [])

  return (
    <Layout>
      <section
        className='bg-primary text-white'
        id='home'
      >
        <div className='m-auto max-w-7xl px-6 pt-64'>Histo</div>
      </section>
    </Layout>
  )
}

export default Index
