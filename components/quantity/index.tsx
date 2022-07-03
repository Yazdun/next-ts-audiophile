import { useCart } from '@context/index'
import { useIsMounted } from '@hooks/useIsMounted'
import { ICartItem } from '@models/cart'
import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_count } from './framer'

interface IProps {
  maxwidth: number | string
  product: IProduct
}

export const Quantity: React.FC<IProps> = ({ maxwidth = 'auto', product }) => {
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
    <div className={css.quantity} style={{ maxWidth: maxwidth }}>
      <button
        className={css.cta}
        onClick={() => decrease(product.id)}
        disabled={itemExists?.quantity === 0}
      >
        -
      </button>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.span key={count} className={css.num} {...framer_count}>
          {count}
        </motion.span>
      </AnimatePresence>
      <button
        className={css.cta}
        onClick={() => increase(product.id)}
        disabled={itemExists?.quantity >= 3}
      >
        +
      </button>
    </div>
  )
}
