import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import css from './styles.module.css'

export const Cart: React.FC = () => {
  return (
    <div>
      <button className={css.cta}>
        <AiOutlineShoppingCart />
      </button>
    </div>
  )
}
