import { useEffect } from 'react'
import Layout from './layout/Layout'

const Error = () => {
  useEffect(() => {
    const header = document.querySelector('header')
    header?.classList.add('text-tertiary')
    header?.classList.add('bg-tertiary')
  }, [])

  return (
    <Layout>
      <section className='flex justify-center items-center h-full mt-64'>
        <div className='font-secondary-bold text-2xl'>Error</div>
      </section>
    </Layout>
  )
}

export default Error
