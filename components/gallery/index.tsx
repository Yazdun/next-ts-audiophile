/*-------------------------------------------------------------------
|  React FC Gallery
|
|  Purpose: RENDERS 3 PRODUCT'S IMAGES ON THE PRODUCT'S PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IGallery } from '@models/gallery'
import React from 'react'
import css from './styles.module.css'
import { Thumbnail } from '@components/index'
interface IProps {
  gallery: IGallery
}

export const Gallery: React.FC<IProps> = ({ gallery }) => {
  return (
    <div className={css.gallery}>
      <div className={css.small}>
        <Thumbnail thumbnail={gallery.first.mobile} id="one" />
        <Thumbnail thumbnail={gallery.second.mobile} id="two" />
      </div>
      <Thumbnail thumbnail={gallery.third.desktop} id="three" />
    </div>
  )
}
