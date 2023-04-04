import { FC } from 'react'
import Image from 'next/image'

interface Props {
  imageUrl: string
  altText: string
  width: number
  height: number
}

const OptimizedImage: FC<Props> = ({ imageUrl, altText, width, height }) => (
  <Image
    src={imageUrl}
    alt={altText}
    width={width}
    height={height}
    quality={100}
    loading="lazy"
  />
)

export default OptimizedImage
