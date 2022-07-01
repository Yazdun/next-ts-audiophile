import React from 'react'
import css from './styles.module.css'
import Image from 'next/image'

interface IProps {
  thumbnail: string
}

export const Thumbnail: React.FC<IProps> = ({ thumbnail }) => {
  return (
    <div className={css.image}>
      <Image
        src={thumbnail}
        alt="product"
        placeholder="blur"
        objectFit="cover"
      />
    </div>
  )
}
