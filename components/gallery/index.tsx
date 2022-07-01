import { IGallery } from '@models/gallery'
import React from 'react'
import css from './styles.module.css'
import { Thumbnail } from '@components/index'
interface IProps {
  gallery: IGallery
}

export const Gallery: React.FC<IProps> = ({ gallery }) => {
  console.log(gallery)

  return (
    <div className={css.gallery}>
      <div className={css.small}>
        <Thumbnail thumbnail={gallery.first.mobile} />
        <Thumbnail thumbnail={gallery.second.mobile} />
      </div>
      <Thumbnail thumbnail={gallery.third.desktop} />
    </div>
  )
}
