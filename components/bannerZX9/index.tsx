/*-------------------------------------------------------------------
|  React FC BannerZX9
|
|  Purpose: SHOWS ZX9 PRODUCT'S BANNER
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Button } from '@components/index'
import css from './styles.module.css'
import Image from 'next/image'
import { image_speaker_zx9 as zx9_image } from '@assets/home/desktop'

export const BannerZX9: React.FC = () => {
  return (
    <div className={css.banner}>
      <div className={css.img}>
        <Image src={zx9_image} alt="ZX9 Speaker" placeholder="blur"/>
      </div>
      <div className={css.body}>
        <h1 className={css.title}>
          <span>zx9</span> speaker
        </h1>
        <p className={css.desc}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button dark href="/product/zx9-speaker" maxwidth={120}>
          see product
        </Button>
      </div>
    </div>
  )
}
