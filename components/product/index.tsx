import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import { Showcase } from '@components/index'

interface IProps {
  product: IProduct
}

export const Product: React.FC<IProps> = ({ product }) => {
  return (
    <div className={css.container}>
      <Showcase product={product} />
    </div>
  )
}
