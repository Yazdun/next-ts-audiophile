import { products } from '@data/index'
import { ICartItem } from '@models/cart'
import Image from 'next/image'
import React from 'react'
import css from './styles.module.css'
import { Quantity } from '@components/index'
import { motion } from 'framer-motion'

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
            />
          </div>
          <div className={css.text}>
            <p className={css.name}>{product.shortName}</p>
            <p className={css.price}>{product.price}</p>
          </div>
        </div>
        <Quantity product={product} transparent maxwidth={100} />
      </div>
    </motion.li>
  )
}
