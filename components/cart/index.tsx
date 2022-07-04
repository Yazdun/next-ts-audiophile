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
import { Count } from '@components/index'
import css from './styles.module.css'

export const Cart: React.FC = () => {
  const { cart } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={css.cta} onClick={() => setOpen(prev => !prev)}>
        <AiOutlineShoppingCart />
        <Count />
      </button>
      {open && (
        <div>
          <h1>sidebar</h1>
        </div>
      )}
    </>
  )
}
