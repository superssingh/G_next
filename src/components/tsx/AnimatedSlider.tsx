import { useState } from 'react'
import { motion } from 'framer-motion'
import { founderJPG,founderJPG1 } from '..'
import Layout from '../../pages/layout'
import Image from 'next/image'
const images = [
  { src: founderJPG, alt: 'Image 1' },
  { src: founderJPG1, alt: 'Image 2' },
  { src: founderJPG, alt: 'Image 3' },
]

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const slideLeft = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  const slideRight = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }

  return (
    <div className="gallery">
      <motion.div
        className="image-container"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          width={100}
          height={100}
          priority
          className="object-cover shadow-lg rounded-full "
        />
      </motion.div>

      <div className="buttons">
        <button onClick={slideLeft}>Prev</button>
        <button onClick={slideRight}>Next</button>
      </div>

      <style jsx>{`
        .gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .buttons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        button {
          margin: 0 10px;
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Gallery
