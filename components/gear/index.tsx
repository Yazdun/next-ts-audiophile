/*-------------------------------------------------------------------
|  React FC Gear
|
|  Purpose:  SHOWS THE BEST GEAR INFO ON ALL PAGES.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import { image_best_gear } from '@assets/shared/tablet'
import Image from 'next/image'

export const Gear: React.FC = () => {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image
          src={image_best_gear}
          alt="best gear"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className={css.body}>
        <h2 className={css.title}>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className={css.desc}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}
