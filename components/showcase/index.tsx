/*-------------------------------------------------------------------
|  React FC Showcase
|
|  Purpose: RENDERS THE PRODUCT'S SHOWCASE IN THE `PRODUCT` COMPONENT
|           WHICH CONTAINS CALL TO ACTIONS AND PRODUCT'S MAIN INFO
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import Image from 'next/image'
import { Button, Quantity } from '@components/index'
import { useCart } from '@context/index'
import { ICartItem } from '@models/cart'

interface IProps {
  product: IProduct
}

export const Showcase: React.FC<IProps> = ({ product }) => {
  const { name, description, image, new: newProduct, id } = product
  const { increase, cart } = useCart()
  const itemExists: ICartItem = cart?.find(
    (item: ICartItem) => item.id === product.id,
  )

  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image
          src={image.desktop}
          alt={name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className={css.body}>
        {newProduct && <p className={css.new}>new product</p>}
        <h1 className={css.title}>{name}</h1>
        <p className={css.desc}>{description}</p>
        <div className={css.cta}>
          <Quantity
            maxwidth={170}
            product={product}
            key={product.name}
            transparent={false}
          />
          <Button
            onClick={() => increase(id)}
            disabled={itemExists?.quantity >= 3 && true}
            maxwidth={170}
          >
            add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}
