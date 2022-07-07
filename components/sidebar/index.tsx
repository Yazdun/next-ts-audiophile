/*-------------------------------------------------------------------
|  React FC Sidebar
|
|  Purpose: CART'S SIDEBAR
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React, { useRef } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_background, framer_sidebar } from './framer'
import { useOnClickOutside } from 'usehooks-ts'
import { VscChromeClose } from 'react-icons/vsc'
import { useCart } from '@context/index'
import { ICartItem } from '@models/cart'
import { CartItem, CartCheckout } from '@components/index'

interface IProps {
  fn: any
}

export const Sidebar: React.FC<IProps> = ({ fn }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, fn)
  const { cart } = useCart()
  const cartExists = !cart || cart.length === 0

  return (
    <>
      <BlurredBackground />
      <motion.div className={css.sidebar} {...framer_sidebar} ref={ref}>
        <Header fn={fn} />
        {cartExists ? <EmptyCart /> : <RenderCart />}
        <CartCheckout />
      </motion.div>
    </>
  )
}

const BlurredBackground: React.FC = () => {
  return (
    <motion.div className={css.background} {...framer_background}></motion.div>
  )
}

const Header: React.FC<IProps> = ({ fn }) => {
  return (
    <div className={css.header}>
      <h3>cart</h3>
      <button onClick={fn} className={css.close}>
        <VscChromeClose />
      </button>
    </div>
  )
}

const RenderCart: React.FC = () => {
  const { cart } = useCart()

  return (
    <motion.ul className={css.list} layout>
      {cart.map((item: ICartItem) => (
        <CartItem item={item} key={item.id} />
      ))}
    </motion.ul>
  )
}

const EmptyCart: React.FC = () => {
  return (
    <div className={css.empty}>
      <BiShoppingBag />
      <p>your cart is empty</p>
    </div>
  )
}
