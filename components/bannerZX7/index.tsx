/*-------------------------------------------------------------------
|  React FC BannerZX7
|
|  Purpose: SHOWS ZX7 PRODUCT'S BANNER
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import { Button } from '@components/index'

export const BannerZX7: React.FC = () => {
  return (
    <div className={css.banner}>
      <h2 className={css.title}>zx7 speaker</h2>
      <Button outline href="/product/zx7-speaker" maxwidth={120}>
        see product
      </Button>
    </div>
  )
}
