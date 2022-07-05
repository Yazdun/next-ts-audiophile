/*-------------------------------------------------------------------
|  React FC Cart
|
|  Purpose:  SHOWS USER'S CURRENT CART ITEMS.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { useCart } from '@context/index'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import css from './styles.module.css'
import { Count } from '@components/index'
import { Sidebar } from '@components/index'
import { AnimatePresence } from 'framer-motion'

export const Cart: React.FC = () => {
  const { cart } = useCart()
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(prev => !prev)
  const closeSidbar = () => setOpen(false)

  return (
    <>
      <button className={css.cta} onClick={toggleOpen}>
        <AiOutlineShoppingCart />
        <Count />
      </button>
      <AnimatePresence exitBeforeEnter initial={false}>
        {open && <Sidebar fn={closeSidbar} />}
      </AnimatePresence>
    </>
  )
}
