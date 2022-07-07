/*-------------------------------------------------------------------
|  React FC Quantity
|
|  Purpose: INCREASE AND DECREASE THE AMOUNT OF A CART'S ITEM
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { useCart } from '@context/index'
import { useIsMounted } from '@hooks/useIsMounted'
import { ICartItem } from '@models/cart'
import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_count } from './framer'
import cn from 'classnames'

interface IProps {
  maxwidth?: number | string
  product: IProduct | any
  transparent?: boolean
}

export const Quantity: React.FC<IProps> = ({
  maxwidth = 'auto',
  product,
  transparent,
}) => {
  const { cart, increase, decrease } = useCart()
  const isMounted = useIsMounted()
  const itemExists: ICartItem = cart?.find(
    (item: ICartItem) => item.id === product.id,
  )
  const count = itemExists ? itemExists.quantity : 0

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={cn(css.quantity, transparent && css.transparent)}
      style={{ maxWidth: maxwidth ? maxwidth : 'auto' }}
    >
      <button
        className={cn(css.cta, css.decrease)}
        onClick={() => decrease(product.id)}
        disabled={count === 0}
      >
        -
      </button>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.span key={count} className={css.num} {...framer_count}>
          {count}
        </motion.span>
      </AnimatePresence>
      <button
        className={cn(css.cta, css.increase)}
        onClick={() => increase(product.id)}
        disabled={count >= 3}
      >
        +
      </button>
    </div>
  )
}
