/*-------------------------------------------------------------------
|  React FC CartCheckout
|
|  Purpose: SHOWS PRICE AND CHECKOUT LINK ON THE CART `SIDEBAR`
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import Link from 'next/link'
import { TiShoppingCart } from 'react-icons/ti'
import { useCart } from '@context/index'
import { ICartItem } from '@models/cart'
import { products } from '@data/index'
import { AnimatePresence, motion } from 'framer-motion'
import NumberFormat from 'react-number-format'
import { framer_money } from './framer'
import cn from 'classnames'

export const CartCheckout: React.FC = () => {
  const { cart } = useCart()

  const prices = cart?.map((cartItem: ICartItem) => {
    const { id, quantity } = cartItem
    const product: any = products.find(product => product.id === id)
    return product?.price * quantity
  })

  const price = prices?.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0,
  )

  return (
    <div className={css.checkout}>
      <p className={css.price}>
        <span className={css.total}>total</span>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.span key={price} className={css.money} {...framer_money}>
            <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$ '}
            />
          </motion.span>
        </AnimatePresence>
      </p>
      <CheckoutLink />
    </div>
  )
}

const CheckoutLink: React.FC = () => {
  const { cart } = useCart()
  const emptyCart = !cart || cart.length < 1

  return (
    <Link href="/checkout">
      <a className={cn(css.link, emptyCart && css.disabled)}>
        <TiShoppingCart />
        checkout
      </a>
    </Link>
  )
}
