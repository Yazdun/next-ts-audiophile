import React from 'react'
import css from './styles.module.css'

interface IProps {
  maxwidth: number | string
}

export const Quantity: React.FC<IProps> = ({ maxwidth = 'auto' }) => {
  return (
    <div className={css.quantity} style={{ maxWidth: maxwidth }}>
      <button className={css.cta}>-</button>
      <span className={css.num}>1</span>
      <button className={css.cta}>+</button>
    </div>
  )
}
