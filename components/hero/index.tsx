/*-------------------------------------------------------------------
|  React FC Hero
|
|  Purpose:  LANDING PAGE'S HERO SECTION.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Button } from '@components/index'
import css from './styles.module.css'
import { home_desktop_images } from '@assets/index'
import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.slice}></div>
      <div className={css.container}>
        <div className={css.text}>
          <p className={css.adv}>NEW PRODUCT</p>
          <h1 className={css.title}>
            XX99 Mark II
            <span>HeadphoneS</span>
          </h1>

          <p className={css.desc}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button href="/product/xx99-mark-two-headphones" maxwidth={120}>
            see product
          </Button>
        </div>
        <div className={css.img}>
          <Image src={home_desktop_images.image_headset} alt="headset" />
        </div>
      </div>
    </div>
  )
}
