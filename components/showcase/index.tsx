import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import Image from 'next/image'
import { Button, Quantity } from '@components/index'
import { useCart } from '@context/index'

interface IProps {
  product: IProduct
}

export const Showcase: React.FC<IProps> = ({ product }) => {
  const { name, description, image, new: newProduct, id } = product
  const { increase, decrease } = useCart()

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
          <Quantity maxwidth={163} product={product} />
          <Button onClick={() => increase(id)}>add to cart</Button>
        </div>
      </div>
    </div>
  )
}
