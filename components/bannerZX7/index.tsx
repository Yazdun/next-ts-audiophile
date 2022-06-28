import React from 'react'
import css from './styles.module.css'
import { Button } from '@components/index'

export const BannerZX7: React.FC = () => {
  return (
    <div className={css.banner}>
      <h2 className={css.title}>zx7 speaker</h2>
      <Button outline href="product" maxwidth={120}>
        see product
      </Button>
    </div>
  )
}
