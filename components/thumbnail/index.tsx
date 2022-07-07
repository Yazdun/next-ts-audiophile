/*-------------------------------------------------------------------
|  React FC Thumbnail
|
|  Purpose: THIS COMPONENT IS ONLY USED IN THE `GALLERY` COMPONENT TO 
|           SHOW CERTAIN GALLERY IMAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import Image from 'next/image'

interface IProps {
  thumbnail: string
  id: string
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
