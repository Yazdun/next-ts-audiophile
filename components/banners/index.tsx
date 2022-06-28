import React from 'react'
import { BannerZX7, BannerZX9 } from '@components/index'
import css from './styles.module.css'

export const Banners: React.FC = () => {
  return (
    <div className={css.banners}>
      <BannerZX9 />
      <BannerZX7 />
    </div>
  )
}
