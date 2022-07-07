/*-------------------------------------------------------------------
|  React FC Preview
|
|  Purpose: RENDERS PRODUCT'S PREVIEW ON THE CATEGORIES PAGES
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IProduct } from '@models/product'
import Image from 'next/image'
import React from 'react'
import { Button } from '@components/index'
import css from './styles.module.css'
import cn from 'classnames'

interface IProps {
  product: IProduct
  reverse?: boolean
}

export const Preview: React.FC<IProps> = ({ product, reverse }) => {
  return (
    <div className={cn(css.container, reverse && css.reverse)}>
      <div className={css.img}>
        <Image
          src={product.categoryImage.tablet}
          alt={product.name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className={css.body}>
        {product.new && <p className={css.adv}>new product</p>}
        <h2 className={css.title}>{product.name}</h2>
        <p className={css.desc}>{product.description}</p>
        <Button href={`/product/${product.slug}`} maxwidth={120}>
          see product
        </Button>
      </div>
    </div>
  )
}
