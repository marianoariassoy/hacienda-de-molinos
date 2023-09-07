import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from '../../components/Loader'

const SliderItem = ({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return (
    <div className='h-screen'>
      {isLoading ? (
        <Loader />
      ) : (
        <img
          src={src}
          className='fade-in h-full w-full object-cover'
        />
      )}
    </div>
  )
}

const Slider = ({ data }: { data: Array<{ id: number; image: string }> | null }) => {
  const properties = {
    autoplay: true,
    transitionDuration: 400,
    autoplayInterval: 5000,
    indicators: true,
    arrows: false,
    infinite: true
  }

  return (
    <Slide {...properties}>
      {data &&
        data.map(image => (
          <SliderItem
            key={image.id}
            src={image.image}
          />
        ))}
    </Slide>
  )
}

export default Slider
