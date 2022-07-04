/*-------------------------------------------------------------------
|  React FC Cart
|
|  Purpose:  SHOWS USER'S CURRENT CART ITEMS.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { useCart } from '@context/index'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Count } from '@components/index'
import css from './styles.module.css'

export const Cart: React.FC = () => {
  const { cart } = useCart()

  return (
    <div>
      <button className={css.cta}>
        <AiOutlineShoppingCart />
        <Count />
      </button>
    </div>
  )
}
