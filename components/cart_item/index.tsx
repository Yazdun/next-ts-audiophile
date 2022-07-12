/*-------------------------------------------------------------------
|  React FC CartItem
|
|  Purpose: SHOWS CART PRODUCT'S PREVIEW ON THE CART `SIDEBAR`
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { products } from '@data/index'
import { ICartItem } from '@models/cart'
import Image from 'next/image'
import React from 'react'
import css from './styles.module.css'
import { Quantity } from '@components/index'
import { motion } from 'framer-motion'
import NumberFormat from 'react-number-format'
import Link from 'next/link'

interface IProps {
  item: ICartItem
}

export const CartItem: React.FC<IProps> = ({ item }) => {
  const product = products.find(product => product.id === item.id)

  if (!product) {
    return null
  }

  return (
    <motion.li layout>
      <div className={css.item}>
        <div className={css.info}>
          <div className={css.image}>
            <Image
              src={product.image.mobile}
              alt={product.name}
              placeholder="blur"
              objectFit="cover"
            />
          </div>
          <div className={css.text}>
            <Link href={`/product/${product.slug}`}>
              <a className={css.name}>{product.shortName}</a>
            </Link>
            <p className={css.price}>
              <NumberFormat
                value={product.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$ '}
              />
            </p>
          </div>
        </div>
        <Quantity product={product} transparent maxwidth={100} />
      </div>
    </motion.li>
  )
}
