import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import { Showcase, Features, Includes } from '@components/index'

interface IProps {
  product: IProduct
}

export const Product: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <div className={css.container}>
        <Showcase product={product} />
        <Features text={product.features} />
        <Includes includes={product.includes} />
      </div>
    </>
  )
}
