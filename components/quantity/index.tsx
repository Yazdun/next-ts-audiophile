import { useCart } from '@context/index'
import { useIsMounted } from '@hooks/useIsMounted'
import { ICartItem } from '@models/cart'
import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'

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
      <span className={css.num}>{itemExists ? itemExists.quantity : 0}</span>
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
