import React, { useRef } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import css from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_background, framer_sidebar } from './framer'
import { useOnClickOutside } from 'usehooks-ts'
import { VscChromeClose } from 'react-icons/vsc'
import { TiShoppingCart } from 'react-icons/ti'
import Link from 'next/link'
import { useCart } from '@context/index'
import { ICartItem } from '@models/cart'
import { CartItem } from '..'

interface IProps {
  fn: any
}

export const Sidebar: React.FC<IProps> = ({ fn }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, fn)
  const { cart } = useCart()

  return (
    <>
      <motion.div
        className={css.background}
        {...framer_background}
      ></motion.div>
      <motion.div className={css.sidebar} {...framer_sidebar} ref={ref}>
        <div className={css.header}>
          <h3>cart</h3>
          <button onClick={fn} className={css.close}>
            <VscChromeClose />
          </button>
        </div>
        {!cart ||
          (cart.length === 0 ? (
            <div className={css.empty}>
              <BiShoppingBag />
              <p>your cart is empty</p>
            </div>
          ) : (
            <motion.ul className={css.list} layout>
              {cart.map((item: ICartItem) => {
                return <CartItem item={item} key={item.id} />
              })}
            </motion.ul>
          ))}
        <Link href="/checkout">
          <a className={css.link}>
            <TiShoppingCart />
            checkout
          </a>
        </Link>
      </motion.div>
    </>
  )
}
