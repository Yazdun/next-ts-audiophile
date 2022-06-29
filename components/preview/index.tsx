import { IProduct } from '@models/product'
import Image from 'next/image'
import React from 'react'
import { Button } from '@components/index'
import css from './styles.module.css'

interface IProps {
  product: IProduct
}

export const Preview: React.FC<IProps> = ({ product }) => {
  return (
    <div className={css.container}>
      <div className={css.img}>
        <Image
          src={product.categoryImage.tablet}
          alt={product.name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className={css.body}>
        {product.new && <p className={css.adv}>new product</p>}
        <h2 className={css.title}>{product.name}</h2>
        <p className={css.desc}>{product.description}</p>
        <Button href={`/product/${product.slug}`} maxwidth={120}>
          see product
        </Button>
      </div>
    </div>
  )
}
