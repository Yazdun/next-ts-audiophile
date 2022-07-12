/*-------------------------------------------------------------------
|  React FC CartPreview
|
|  Purpose: SHOWS CART PREVIEW ON THE 'FORM'
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { ICartItem } from '@models/cart'
import { useCart } from '@context/index'
import css from './styles.module.css'
import { products } from '@data/index'
import Image from 'next/image'
import NumberFormat from 'react-number-format'
import cn from 'classnames'

export const CartPreview: React.FC = () => {
  const { cart } = useCart()
  const cartExists = cart && cart.length > 0

  const prices = cart?.map((cartItem: ICartItem) => {
    const { id, quantity } = cartItem
    const product: any = products.find(product => product.id === id)
    return product?.price * quantity
  })

  const totalPrice = prices?.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0,
  )

  if (!cartExists) {
    return null
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>summary</h2>
      <ul className={css.products}>
        {cart?.map((item: any) => {
          const product = products.find(p => p.id === item.id)
          return (
            <li className={css.item} key={item.id}>
              <div className={css.info}>
                {product && (
                  <div className={css.image}>
                    <Image
                      src={product?.image.mobile}
                      alt={product?.name}
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                )}
                <div>
                  <p className={css.name}>{product?.shortName}</p>
                  <p className={css.price}>
                    <NumberFormat
                      value={product?.price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$ '}
                    />
                  </p>
                </div>
              </div>
              <p className={css.quantity}>x {item.quantity}</p>
            </li>
          )
        })}
      </ul>
      <ul className={css.price_list}>
        <Price title="Total" price={totalPrice} />
        <Price title="Shipping" price={50} />
        <Price title="VAT" price={1079} />
        <Price title="Grand Total" price={1079 + 50 + totalPrice} isTotal />
      </ul>
    </div>
  )
}

interface IPrice {
  title: string
  price: number
  isTotal?: boolean
}

const Price: React.FC<IPrice> = ({ title, price, isTotal }) => {
  return (
    <li className={cn(css.price_item, isTotal && css.is_total)}>
      {title}
      <span>
        <NumberFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$ '}
        />
      </span>
    </li>
  )
}
