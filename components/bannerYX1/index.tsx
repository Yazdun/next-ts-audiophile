import React from 'react'
import { image_earphones_yx1 } from '@assets/home/desktop'
import Image from 'next/image'
import css from './styles.module.css'
import { Button } from '@components/index'

export const BannerYX1: React.FC = () => {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image
          src={image_earphones_yx1}
          alt="earphones yx1"
          placeholder="blur"
        />
      </div>
      <div className={css.body}>
        <h2 className={css.title}>yx1 earphones</h2>
        <Button outline maxwidth={120} href="product">
          see product
        </Button>
      </div>
    </div>
  )
}
