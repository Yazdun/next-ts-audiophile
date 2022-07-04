import React from 'react'
import css from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ICartItem } from '@models/cart'
import { useCart } from '@context/index'
import { framer_count } from './framer'

export const Count = () => {
  const { cart } = useCart()

  const count = cart?.reduce((a: ICartItem, b: ICartItem) => {
    return a.quantity + b.quantity
  })

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {count > 0 && (
        <motion.div key="count" className={css.count} {...framer_count}>
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.span {...framer_count} key={count}>
              {count}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
